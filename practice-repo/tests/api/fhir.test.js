// API tests against the local FHIR sandbox (fhir-sandbox/server.js): Module 12.
//
// `npm run test:api` starts the sandbox for you (see tests/support/fhir-server.js),
// or uses the server at FHIR_BASE_URL. Selenium drives browsers only, so API
// tests use Node's built-in fetch. Every resource here is synthetic, and NHS
// numbers are from the 999 test range.

import { strict as assert } from 'node:assert';
import { FHIR_BASE_URL } from '../support/fhir-server.js';

const PROFILE = 'https://example.org/fhir/StructureDefinition/training-patient';
const NHS_NUMBER_SYSTEM = 'https://fhir.nhs.uk/Id/nhs-number';

/** Call the FHIR server. Returns the status, headers, and parsed JSON body. */
async function fhir(method, path, { body, params } = {}) {
  const url = new URL(`${FHIR_BASE_URL}/${path}`);
  for (const [key, value] of Object.entries(params ?? {})) url.searchParams.set(key, value);
  const response = await fetch(url, {
    method,
    headers: { Accept: 'application/fhir+json', 'Content-Type': 'application/fhir+json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await response.text();
  return {
    status: response.status,
    headers: response.headers,
    body: text ? JSON.parse(text) : undefined,
  };
}

function syntheticPatient(overrides = {}) {
  return {
    resourceType: 'Patient',
    meta: { tag: [{ system: 'https://example.org/fhir/tags', code: 'synthetic' }] },
    identifier: [{ system: NHS_NUMBER_SYSTEM, value: '9990018227' }],
    name: [{ use: 'official', family: 'Apitest', given: ['Robin'] }],
    gender: 'female',
    birthDate: '1990-05-17',
    ...overrides,
  };
}

/** The error and fatal issues in an OperationOutcome. */
function errors(outcome) {
  return outcome.issue.filter((i) => i.severity === 'error' || i.severity === 'fatal');
}

describe('Patient life cycle', function () {
  let id;

  it('create returns 201 and a server-assigned id', async function () {
    const { status, headers, body } = await fhir('POST', 'Patient', { body: syntheticPatient() });
    assert.equal(status, 201);
    assert.match(headers.get('location'), /Patient\/[^/]+\/_history\/1/);
    assert.equal(body.resourceType, 'Patient');
    assert.ok(body.id);
    id = body.id;
  });

  it('read returns the same patient', async function () {
    const { status, headers, body } = await fhir('GET', `Patient/${id}`);
    assert.equal(status, 200);
    assert.match(headers.get('content-type'), /application\/fhir\+json/);
    assert.equal(body.name[0].family, 'Apitest');
    assert.deepEqual(body.identifier[0], { system: NHS_NUMBER_SYSTEM, value: '9990018227' });
  });

  it('search by identifier finds the patient', async function () {
    const { status, body } = await fhir('GET', 'Patient', {
      params: { identifier: `${NHS_NUMBER_SYSTEM}|9990018227` },
    });
    assert.equal(status, 200);
    assert.equal(body.resourceType, 'Bundle');
    assert.equal(body.type, 'searchset');
    assert.ok((body.entry ?? []).map((e) => e.resource.id).includes(id));
  });

  it('update creates version 2', async function () {
    const { status, body } = await fhir('PUT', `Patient/${id}`, {
      body: syntheticPatient({ id, gender: 'other' }),
    });
    assert.equal(status, 200);
    assert.equal(body.gender, 'other');
    assert.equal(body.meta.versionId, '2');
  });
});

describe('Observation', function () {
  let id;

  it('create an observation for a loaded synthetic patient', async function () {
    const { status, body } = await fhir('POST', 'Observation', {
      body: {
        resourceType: 'Observation',
        status: 'final',
        code: { coding: [{ system: 'http://loinc.org', code: '8867-4', display: 'Heart rate' }] },
        subject: { reference: 'Patient/synthetic-adult' },
        effectiveDateTime: '2026-10-07T10:00:00Z',
        valueQuantity: {
          value: 64,
          unit: '/min',
          system: 'http://unitsofmeasure.org',
          code: '{beats}/min',
        },
      },
    });
    assert.equal(status, 201);
    id = body.id;
  });

  it('read and update the observation', async function () {
    const read = await fhir('GET', `Observation/${id}`);
    assert.equal(read.status, 200);
    assert.equal(read.body.valueQuantity.value, 64);

    read.body.valueQuantity.value = 66;
    const update = await fhir('PUT', `Observation/${id}`, { body: read.body });
    assert.equal(update.status, 200);
    assert.equal(update.body.valueQuantity.value, 66);
  });

  it('search by patient and LOINC code', async function () {
    const { status, body } = await fhir('GET', 'Observation', {
      params: { subject: 'Patient/synthetic-adult', code: 'http://loinc.org|8867-4' },
    });
    assert.equal(status, 200);
    assert.ok((body.total ?? body.entry?.length) >= 1);
  });
});

describe('clinical codes', function () {
  // Checks the meaning of the code, not just its presence: a heart rate stored
  // under a body temperature code is a clinical safety defect.
  const expected = {
    'synthetic-obs-1': 'Heart rate',
    'synthetic-obs-2': 'Body temperature',
    'synthetic-obs-4': 'Body weight',
  };
  const loinc = { 'Heart rate': '8867-4', 'Body temperature': '8310-5', 'Body weight': '29463-7' };

  for (const [id, meaning] of Object.entries(expected)) {
    it(`${id} is coded as LOINC ${loinc[meaning]} (${meaning})`, async function () {
      const { status, body } = await fhir('GET', `Observation/${id}`);
      assert.equal(status, 200, 'synthetic data missing: restart the sandbox with `npm run fhir`');
      const coding = body.code.coding.find((c) => c.system === 'http://loinc.org');
      assert.ok(coding, 'no LOINC coding');
      assert.equal(coding.code, loinc[meaning]);
      assert.equal(coding.display, meaning);
    });
  }

  it('body temperature has a UCUM Celsius unit', async function () {
    const { status, body } = await fhir('GET', 'Observation/synthetic-obs-2');
    assert.equal(status, 200, 'synthetic data missing: restart the sandbox with `npm run fhir`');
    const { valueQuantity } = body;
    assert.equal(valueQuantity.system, 'http://unitsofmeasure.org');
    assert.equal(valueQuantity.code, 'Cel');
    assert.ok(
      valueQuantity.value > 30 && valueQuantity.value < 45,
      `implausible temperature ${valueQuantity.value}`,
    );
  });
});

describe('profile validation', function () {
  it('a patient with identifier and birthDate conforms to the training profile', async function () {
    const { body } = await fhir('POST', 'Patient/$validate', {
      params: { profile: PROFILE },
      body: syntheticPatient(),
    });
    assert.equal(body.resourceType, 'OperationOutcome');
    assert.deepEqual(errors(body), [], JSON.stringify(body.issue, null, 2));
  });

  it('a patient without birthDate fails the training profile', async function () {
    const patient = syntheticPatient();
    delete patient.birthDate;
    const { body } = await fhir('POST', 'Patient/$validate', {
      params: { profile: PROFILE },
      body: patient,
    });
    const messages = errors(body).map((i) => i.diagnostics ?? '');
    assert.ok(messages.length > 0, 'expected at least one validation error');
    assert.match(messages.join('\n'), /birthDate/);
  });
});

describe('negative tests', function () {
  it('an invalid gender code is rejected', async function () {
    const { status, body } = await fhir('POST', 'Patient', {
      body: syntheticPatient({ gender: 'banana' }),
    });
    assert.ok([400, 422].includes(status), `expected 400 or 422, got ${status}`);
    assert.equal(body.resourceType, 'OperationOutcome');
    assert.ok(errors(body).length > 0);
  });

  it('reading a patient that does not exist returns 404', async function () {
    const { status } = await fhir('GET', 'Patient/does-not-exist-999');
    assert.equal(status, 404);
  });
});

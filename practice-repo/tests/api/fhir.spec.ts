import { test, expect, type APIRequestContext } from '@playwright/test';

// API tests against the local FHIR sandbox (fhir-sandbox/), module M6.
// Start it with `docker compose up -d` and load it with `scripts/load.sh`.
// Every resource here is synthetic, and NHS numbers are from the 999 test range.

const FHIR_JSON = { 'Content-Type': 'application/fhir+json' };
const PROFILE = 'https://example.org/fhir/StructureDefinition/training-patient';
const NHS_NUMBER_SYSTEM = 'https://fhir.nhs.uk/Id/nhs-number';

type Issue = { severity: string; diagnostics?: string };
type OperationOutcome = { resourceType: 'OperationOutcome'; issue: Issue[] };

let reachable: boolean | undefined;

async function serverIsReachable(request: APIRequestContext): Promise<boolean> {
  if (reachable === undefined) {
    try {
      const response = await request.get('metadata', { timeout: 5_000 });
      reachable = response.ok();
    } catch {
      reachable = false;
    }
  }
  return reachable;
}

test.beforeEach(async ({ request }) => {
  test.skip(
    !(await serverIsReachable(request)),
    'FHIR sandbox not reachable: run `docker compose up -d` and `scripts/load.sh` in fhir-sandbox/',
  );
});

function syntheticPatient(overrides: Record<string, unknown> = {}) {
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

function errors(outcome: OperationOutcome): Issue[] {
  return outcome.issue.filter((i) => i.severity === 'error' || i.severity === 'fatal');
}

test.describe('Patient life cycle', () => {
  test.describe.configure({ mode: 'serial' });
  let id: string;

  test('create returns 201 and a server-assigned id', async ({ request }) => {
    const response = await request.post('Patient', {
      headers: FHIR_JSON,
      data: syntheticPatient(),
    });
    expect(response.status()).toBe(201);
    expect(response.headers()['location']).toMatch(/Patient\/[^/]+\/_history\/1/);
    const body = await response.json();
    expect(body.resourceType).toBe('Patient');
    expect(body.id).toBeTruthy();
    id = body.id;
  });

  test('read returns the same patient', async ({ request }) => {
    const response = await request.get(`Patient/${id}`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/fhir+json');
    const body = await response.json();
    expect(body.name[0].family).toBe('Apitest');
    expect(body.identifier[0]).toEqual({ system: NHS_NUMBER_SYSTEM, value: '9990018227' });
  });

  test('search by identifier finds the patient', async ({ request }) => {
    const response = await request.get('Patient', {
      params: { identifier: `${NHS_NUMBER_SYSTEM}|9990018227` },
    });
    expect(response.status()).toBe(200);
    const bundle = await response.json();
    expect(bundle.resourceType).toBe('Bundle');
    expect(bundle.type).toBe('searchset');
    const ids = (bundle.entry ?? []).map((e: { resource: { id: string } }) => e.resource.id);
    expect(ids).toContain(id);
  });

  test('update creates version 2', async ({ request }) => {
    const response = await request.put(`Patient/${id}`, {
      headers: FHIR_JSON,
      data: syntheticPatient({ id, gender: 'other' }),
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.gender).toBe('other');
    expect(body.meta.versionId).toBe('2');
  });
});

test.describe('Observation', () => {
  test.describe.configure({ mode: 'serial' });
  let id: string;

  test('create an observation for a loaded synthetic patient', async ({ request }) => {
    const response = await request.post('Observation', {
      headers: FHIR_JSON,
      data: {
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
    expect(response.status()).toBe(201);
    id = (await response.json()).id;
  });

  test('read and update the observation', async ({ request }) => {
    const read = await request.get(`Observation/${id}`);
    expect(read.status()).toBe(200);
    const observation = await read.json();
    expect(observation.valueQuantity.value).toBe(64);

    observation.valueQuantity.value = 66;
    const update = await request.put(`Observation/${id}`, {
      headers: FHIR_JSON,
      data: observation,
    });
    expect(update.status()).toBe(200);
    expect((await update.json()).valueQuantity.value).toBe(66);
  });

  test('search by patient and LOINC code', async ({ request }) => {
    const response = await request.get('Observation', {
      params: { subject: 'Patient/synthetic-adult', code: 'http://loinc.org|8867-4' },
    });
    expect(response.status()).toBe(200);
    const bundle = await response.json();
    expect(bundle.total ?? bundle.entry?.length).toBeGreaterThanOrEqual(1);
  });
});

test.describe('clinical codes', () => {
  // Checks the meaning of the code, not just its presence: a heart rate stored
  // under a body temperature code is a clinical safety defect.
  const expected: Record<string, string> = {
    'synthetic-obs-1': 'Heart rate',
    'synthetic-obs-2': 'Body temperature',
    'synthetic-obs-4': 'Body weight',
  };
  const loinc: Record<string, string> = {
    'Heart rate': '8867-4',
    'Body temperature': '8310-5',
    'Body weight': '29463-7',
  };

  for (const [id, meaning] of Object.entries(expected)) {
    test(`${id} is coded as LOINC ${loinc[meaning]} (${meaning})`, async ({ request }) => {
      const response = await request.get(`Observation/${id}`);
      expect(response.status(), 'synthetic data missing: run scripts/load.sh').toBe(200);
      const observation = await response.json();
      const coding = observation.code.coding.find(
        (c: { system: string }) => c.system === 'http://loinc.org',
      );
      expect(coding).toBeDefined();
      expect(coding.code).toBe(loinc[meaning]);
      expect(coding.display).toBe(meaning);
    });
  }

  test('body temperature has a UCUM Celsius unit', async ({ request }) => {
    const response = await request.get('Observation/synthetic-obs-2');
    expect(response.status(), 'synthetic data missing: run scripts/load.sh').toBe(200);
    const { valueQuantity } = await response.json();
    expect(valueQuantity.system).toBe('http://unitsofmeasure.org');
    expect(valueQuantity.code).toBe('Cel');
    expect(valueQuantity.value).toBeGreaterThan(30);
    expect(valueQuantity.value).toBeLessThan(45);
  });
});

test.describe('profile validation', () => {
  test('a patient with identifier and birthDate conforms to the training profile', async ({
    request,
  }) => {
    const response = await request.post('Patient/$validate', {
      headers: FHIR_JSON,
      params: { profile: PROFILE },
      data: syntheticPatient(),
    });
    const outcome: OperationOutcome = await response.json();
    expect(outcome.resourceType).toBe('OperationOutcome');
    expect(errors(outcome), JSON.stringify(outcome.issue, null, 2)).toEqual([]);
  });

  test('a patient without birthDate fails the training profile', async ({ request }) => {
    const patient = syntheticPatient();
    delete (patient as { birthDate?: string }).birthDate;
    const response = await request.post('Patient/$validate', {
      headers: FHIR_JSON,
      params: { profile: PROFILE },
      data: patient,
    });
    const outcome: OperationOutcome = await response.json();
    const messages = errors(outcome).map((i) => i.diagnostics ?? '');
    expect(messages.length, 'expected at least one validation error').toBeGreaterThan(0);
    expect(messages.join('\n')).toMatch(/birthDate/);
  });
});

test.describe('negative tests', () => {
  test('an invalid gender code is rejected', async ({ request }) => {
    const response = await request.post('Patient', {
      headers: FHIR_JSON,
      data: syntheticPatient({ gender: 'banana' }),
    });
    expect([400, 422]).toContain(response.status());
    const outcome: OperationOutcome = await response.json();
    expect(outcome.resourceType).toBe('OperationOutcome');
    expect(errors(outcome).length).toBeGreaterThan(0);
  });

  test('reading a patient that does not exist returns 404', async ({ request }) => {
    const response = await request.get('Patient/does-not-exist-999');
    expect(response.status()).toBe(404);
  });
});

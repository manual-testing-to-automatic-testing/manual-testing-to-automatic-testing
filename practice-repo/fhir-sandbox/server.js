// The FHIR sandbox: a small, local FHIR R4 server for Module 6.
//
// It needs only Node.js, which you already have for the practice repository:
// no Docker, no Java, no install. Run it with `npm run fhir`; the API tests
// start it for you. It listens on http://localhost:8080/fhir.
//
// It implements the part of the FHIR REST API that the course uses, for
// Patient and Observation resources:
//
//   GET    /fhir/metadata                  CapabilityStatement
//   GET    /fhir/{type}/{id}               read
//   POST   /fhir/{type}                    create (201, Location header)
//   PUT    /fhir/{type}/{id}               update, or create with that id
//   DELETE /fhir/{type}/{id}               delete
//   GET    /fhir/{type}?param=value        search, returning a searchset Bundle
//   POST   /fhir/{type}/$validate          validate, optionally against ?profile=
//   POST   /fhir                           transaction or batch Bundle
//
// It is a teaching server, not a real one: data lives in memory and is reset to
// the synthetic data in data/ every time it starts, and validation checks only
// the rules listed in validate() below. Everything in it is synthetic. Never put
// real patient data in it.

import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';

const PORT = Number(process.env.FHIR_PORT ?? 8080);
const HOST = process.env.FHIR_HOST ?? '127.0.0.1';
const BASE_PATH = '/fhir';
const FHIR_JSON = 'application/fhir+json; charset=utf-8';
const SUPPORTED = ['Patient', 'Observation', 'StructureDefinition'];
const store = new Map(SUPPORTED.map((type) => [type, new Map()]));

// ---------------------------------------------------------------------------
// Validation
const GENDERS = ['male', 'female', 'other', 'unknown'];

const OBSERVATION_STATUSES = [
  'registered',
  'preliminary',
  'final',
  'amended',
  'corrected',
  'cancelled',
  'entered-in-error',
  'unknown',
];

const NHS_NUMBER_SYSTEM = 'https://fhir.nhs.uk/Id/nhs-number';
const ID = /^[A-Za-z0-9\-.]{1,64}$/;
const DATE = /^\d{4}(-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?)?$/;
/** The NHS number modulus 11 check (the same rule as kata 07). */

function validNhsNumber(value) {
  if (!/^\d{10}$/.test(value)) return false;
  const total = [...value.slice(0, 9)].reduce((sum, digit, i) => sum + Number(digit) * (10 - i), 0);
  const check = 11 - (total % 11);
  if (check === 10) return false;
  return (check === 11 ? 0 : check) === Number(value[9]);
}

function issue(severity, code, diagnostics, expression) {
  return expression
    ? { severity, code, diagnostics, expression: [expression] }
    : { severity, code, diagnostics };
}
/** Check a resource against the base rules this sandbox knows. */

function validate(resource) {
  const issues = [];
  if (resource.id !== undefined && (typeof resource.id !== 'string' || !ID.test(resource.id))) {
    issues.push(
      issue(
        'error',
        'value',
        `id "${String(resource.id)}" is not a valid FHIR id`,
        `${resource.resourceType}.id`,
      ),
    );
  }
  if (resource.resourceType === 'Patient') {
    if (resource.gender !== undefined && !GENDERS.includes(resource.gender)) {
      issues.push(
        issue(
          'error',
          'code-invalid',
          `gender "${String(resource.gender)}" is not in ${GENDERS.join(', ')}`,
          'Patient.gender',
        ),
      );
    }
    if (resource.birthDate !== undefined && !DATE.test(String(resource.birthDate))) {
      issues.push(
        issue(
          'error',
          'value',
          `birthDate "${String(resource.birthDate)}" is not a FHIR date (YYYY, YYYY-MM, or YYYY-MM-DD)`,
          'Patient.birthDate',
        ),
      );
    }
    const identifiers = resource.identifier;
    if (identifiers !== undefined && !Array.isArray(identifiers)) {
      issues.push(issue('error', 'structure', 'identifier must be an array', 'Patient.identifier'));
    }
    for (const [i, identifier] of (Array.isArray(identifiers) ? identifiers : []).entries()) {
      const { system, value } = identifier;
      if (system === NHS_NUMBER_SYSTEM && !validNhsNumber(String(value ?? ''))) {
        issues.push(
          issue(
            'error',
            'value',
            `NHS number "${String(value)}" fails the modulus 11 check`,
            `Patient.identifier[${i}].value`,
          ),
        );
      } else if (system === NHS_NUMBER_SYSTEM && !String(value).startsWith('999')) {
        issues.push(
          issue(
            'warning',
            'business-rule',
            `NHS number "${String(value)}" is outside the 999 test range: use only synthetic test numbers`,
            `Patient.identifier[${i}].value`,
          ),
        );
      }
    }
  }
  if (resource.resourceType === 'Observation') {
    if (!OBSERVATION_STATUSES.includes(resource.status)) {
      issues.push(
        issue(
          'error',
          resource.status === undefined ? 'required' : 'code-invalid',
          `status "${String(resource.status ?? '')}" is required, and must be one of ${OBSERVATION_STATUSES.join(', ')}`,
          'Observation.status',
        ),
      );
    }
    const code = resource.code;
    if (!code || (!(code.coding && code.coding.length) && !code.text)) {
      issues.push(
        issue(
          'error',
          'required',
          'code is required, with at least one coding or a text',
          'Observation.code',
        ),
      );
    }
    const subject = resource.subject;
    if (
      subject?.reference !== undefined &&
      !/^[A-Z][A-Za-z]+\/[A-Za-z0-9\-.]{1,64}$/.test(subject.reference)
    ) {
      issues.push(
        issue(
          'error',
          'value',
          `subject reference "${subject.reference}" is not of the form Type/id`,
          'Observation.subject',
        ),
      );
    }
  }
  return issues;
}
/** Check a resource against a profile's differential: min and max cardinality of top-level elements. */

function validateProfile(resource, url) {
  const profile = [...(store.get('StructureDefinition')?.values() ?? [])].find(
    (sd) => sd.url === url,
  );
  if (!profile)
    return [issue('error', 'not-found', `profile ${url} is not loaded in this sandbox`)];
  if (profile.type !== resource.resourceType) {
    return [
      issue(
        'error',
        'invalid',
        `profile ${url} is for ${String(profile.type)}, not ${resource.resourceType}`,
      ),
    ];
  }
  const issues = [];
  const elements = profile.differential?.element ?? [];
  for (const element of elements) {
    const parts = element.path.split('.');
    if (parts.length !== 2) continue;
    const value = resource[parts[1]];
    const count = value === undefined ? 0 : Array.isArray(value) ? value.length : 1;
    if (element.min !== undefined && count < element.min) {
      issues.push(
        issue(
          'error',
          'required',
          `${element.path}: minimum required = ${element.min}, but only found ${count} (from ${url})`,
          element.path,
        ),
      );
    }
    if (element.max !== undefined && element.max !== '*' && count > Number(element.max)) {
      issues.push(
        issue(
          'error',
          'structure',
          `${element.path}: maximum allowed = ${element.max}, but found ${count} (from ${url})`,
          element.path,
        ),
      );
    }
  }
  return issues;
}

function outcome(issues) {
  return {
    resourceType: 'OperationOutcome',
    issue: issues.length
      ? issues
      : [issue('information', 'informational', 'No issues detected during validation')],
  };
}

const errorsIn = (issues) => issues.filter((i) => i.severity === 'error' || i.severity === 'fatal');

// ---------------------------------------------------------------------------
// Storage
function save(type, resource, id) {
  const table = store.get(type);
  const previous = table.get(id);
  const version = previous ? Number(previous.meta?.versionId ?? '1') + 1 : 1;
  const saved = {
    ...resource,
    id,
    meta: {
      ...(resource.meta ?? {}),
      versionId: String(version),
      lastUpdated: new Date().toISOString(),
    },
  };
  table.set(id, saved);
  return { resource: saved, created: !previous };
}

function load() {
  const profile = JSON.parse(
    readFileSync(new URL('./profiles/training-patient.json', import.meta.url), 'utf8'),
  );
  save('StructureDefinition', profile, profile.id);
  const bundle = JSON.parse(
    readFileSync(new URL('./data/synthetic-bundle.json', import.meta.url), 'utf8'),
  );
  for (const { resource } of bundle.entry) save(resource.resourceType, resource, resource.id);
}

// ---------------------------------------------------------------------------
// Search
/** Does a token parameter (system|code, |code, system|, or code) match a list of codings or identifiers? */

function tokenMatches(param, items) {
  const [system, code] = param.includes('|') ? param.split('|', 2) : [undefined, param];
  return items.some((item) => {
    const itemCode = item.code ?? item.value;
    if (system !== undefined && system !== '' && item.system !== system) return false;
    return code === '' || code === undefined || itemCode === code;
  });
}

function referenceMatches(param, reference, type) {
  if (!reference) return false;
  return reference === param || reference === `${type}/${param}`;
}

const SEARCH = {
  Patient: {
    _id: (r, v) => r.id === v,
    identifier: (r, v) => tokenMatches(v, r.identifier ?? []),
    family: (r, v) =>
      (r.name ?? []).some((n) => (n.family ?? '').toLowerCase().startsWith(v.toLowerCase())),
    given: (r, v) =>
      (r.name ?? []).some((n) =>
        (n.given ?? []).some((g) => g.toLowerCase().startsWith(v.toLowerCase())),
      ),
    name: (r, v) =>
      JSON.stringify(r.name ?? [])
        .toLowerCase()
        .includes(v.toLowerCase()),
    gender: (r, v) => r.gender === v,
    birthdate: (r, v) => String(r.birthDate ?? '').startsWith(v.replace(/^eq/, '')),
  },
  Observation: {
    _id: (r, v) => r.id === v,
    subject: (r, v) => referenceMatches(v, r.subject?.reference, 'Patient'),
    patient: (r, v) => referenceMatches(v, r.subject?.reference, 'Patient'),
    code: (r, v) => tokenMatches(v, r.code?.coding ?? []),
    status: (r, v) => r.status === v,
  },
  StructureDefinition: {
    _id: (r, v) => r.id === v,
    url: (r, v) => r.url === v,
  },
};

const CONTROL = ['_summary', '_count', '_format'];

function search(type, params, base) {
  const matchers = SEARCH[type] ?? {};
  const unknown = [...params.keys()].filter((key) => !CONTROL.includes(key) && !matchers[key]);
  if (unknown.length) {
    return {
      status: 400,
      body: outcome([
        issue(
          'error',
          'not-supported',
          `unknown search parameter for ${type}: ${unknown.join(', ')}. This sandbox supports: ${Object.keys(matchers).join(', ')}`,
        ),
      ]),
    };
  }
  let results = [...(store.get(type)?.values() ?? [])];
  for (const [key, value] of params) {
    if (CONTROL.includes(key)) continue;
    const alternatives = value.split(',');
    results = results.filter((r) => alternatives.some((alt) => matchers[key](r, alt)));
  }
  const total = results.length;
  if (params.get('_summary') === 'count')
    return { status: 200, body: { resourceType: 'Bundle', type: 'searchset', total } };
  const count = params.has('_count') ? Math.max(0, Number(params.get('_count'))) : results.length;
  return {
    status: 200,
    body: {
      resourceType: 'Bundle',
      id: randomUUID(),
      type: 'searchset',
      total,
      entry: results.slice(0, count).map((resource) => ({
        fullUrl: `${base}/${type}/${resource.id}`,
        resource,
        search: { mode: 'match' },
      })),
    },
  };
}

// ---------------------------------------------------------------------------
// HTTP
function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': FHIR_JSON, ...headers });
  res.end(body === undefined ? undefined : JSON.stringify(body, null, 2));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString('utf8');
  if (!text.trim()) return undefined;
  return JSON.parse(text);
}

function capabilityStatement(base) {
  return {
    resourceType: 'CapabilityStatement',
    status: 'active',
    date: new Date().toISOString().slice(0, 10),
    kind: 'instance',
    software: { name: 'Practice repository FHIR sandbox' },
    implementation: { description: 'Teaching server with synthetic data only', url: base },
    fhirVersion: '4.0.1',
    format: ['application/fhir+json'],
    rest: [
      {
        mode: 'server',
        resource: SUPPORTED.map((type) => ({
          type,
          interaction: ['read', 'create', 'update', 'delete', 'search-type'].map((code) => ({
            code,
          })),
          searchParam: Object.keys(SEARCH[type] ?? {}).map((name) => ({ name })),
        })),
        operation: [
          {
            name: 'validate',
            definition: 'http://hl7.org/fhir/OperationDefinition/Resource-validate',
          },
        ],
        interaction: [{ code: 'transaction' }, { code: 'batch' }],
      },
    ],
  };
}
/** Create or update one resource; shared by POST, PUT, and bundle entries. */

function write(type, resource, id, base) {
  if (resource.resourceType !== type) {
    return {
      status: 400,
      body: outcome([
        issue(
          'error',
          'invalid',
          `resourceType "${resource.resourceType}" does not match the URL type ${type}`,
        ),
      ]),
      headers: {},
    };
  }
  if (id !== undefined && resource.id !== undefined && resource.id !== id) {
    return {
      status: 400,
      body: outcome([
        issue('error', 'invalid', `resource id "${resource.id}" does not match the URL id "${id}"`),
      ]),
      headers: {},
    };
  }
  const issues = validate(resource);
  if (errorsIn(issues).length) return { status: 422, body: outcome(issues), headers: {} };
  const { resource: saved, created } = save(type, resource, id ?? randomUUID());
  const version = saved.meta.versionId;
  return {
    status: created ? 201 : 200,
    body: saved,
    headers: {
      Location: `${base}/${type}/${saved.id}/_history/${version}`,
      ETag: `W/"${version}"`,
    },
  };
}

async function handle(req, res) {
  const url = new URL(req.url ?? '/', `http://${req.headers.host ?? `localhost:${PORT}`}`);
  const base = `${url.origin}${BASE_PATH}`;
  if (url.pathname !== BASE_PATH && !url.pathname.startsWith(`${BASE_PATH}/`)) {
    return send(
      res,
      404,
      outcome([issue('error', 'not-found', `This FHIR sandbox serves ${base}/`)]),
    );
  }
  const parts = url.pathname
    .slice(BASE_PATH.length)
    .split('/')
    .filter(Boolean)
    .map(decodeURIComponent);
  const method = req.method ?? 'GET';
  let body;
  try {
    body = ['POST', 'PUT'].includes(method) ? await readBody(req) : undefined;
  } catch {
    return send(
      res,
      400,
      outcome([issue('error', 'structure', 'The request body is not valid JSON')]),
    );
  }
  // GET /fhir/metadata
  if (parts.length === 1 && parts[0] === 'metadata' && method === 'GET')
    return send(res, 200, capabilityStatement(base));
  // POST /fhir: a transaction or batch Bundle.
  if (parts.length === 0 && method === 'POST') {
    if (body?.resourceType !== 'Bundle' || !['transaction', 'batch'].includes(body.type)) {
      return send(
        res,
        400,
        outcome([
          issue(
            'error',
            'invalid',
            'POST to the base URL takes a Bundle of type transaction or batch',
          ),
        ]),
      );
    }
    const entries = body.entry ?? [];
    const results = entries.map(({ resource, request }) => {
      const [type, id] = request.url.split('/');
      return write(type, resource, request.method === 'PUT' ? id : undefined, base);
    });
    return send(res, 200, {
      resourceType: 'Bundle',
      type: `${body.type}-response`,
      entry: results.map((r) => ({
        response: { status: String(r.status), location: r.headers.Location },
        resource: r.body,
      })),
    });
  }
  const [type, id, operation] = parts;
  if (!type || !SUPPORTED.includes(type)) {
    return send(
      res,
      404,
      outcome([
        issue(
          'error',
          'not-supported',
          `Resource type "${type ?? ''}" is not supported here. Supported: ${SUPPORTED.join(', ')}`,
        ),
      ]),
    );
  }
  // POST /fhir/{type}/$validate
  if (id === '$validate' && method === 'POST') {
    let resource = body;
    if (resource?.resourceType === 'Parameters') {
      resource = (resource.parameter ?? []).find((p) => p.name === 'resource')?.resource;
    }
    if (!resource)
      return send(
        res,
        400,
        outcome([issue('error', 'required', 'Send the resource to validate as the request body')]),
      );
    const profile = url.searchParams.get('profile');
    const issues = [...validate(resource), ...(profile ? validateProfile(resource, profile) : [])];
    if (resource.resourceType !== type)
      issues.unshift(
        issue('error', 'invalid', `resourceType "${resource.resourceType}" does not match ${type}`),
      );
    return send(res, 200, outcome(issues));
  }
  if (operation !== undefined)
    return send(
      res,
      404,
      outcome([issue('error', 'not-supported', `Unknown path ${url.pathname}`)]),
    );
  if (id === undefined) {
    if (method === 'GET') {
      const result = search(type, url.searchParams, base);
      return send(res, result.status, result.body);
    }
    if (method === 'POST') {
      if (!body)
        return send(
          res,
          400,
          outcome([issue('error', 'required', 'Send the resource as the request body')]),
        );
      const { id: _ignored, ...withoutId } = body;
      void _ignored;
      const result = write(type, withoutId, undefined, base);
      return send(res, result.status, result.body, result.headers);
    }
    return send(
      res,
      405,
      outcome([issue('error', 'not-supported', `${method} is not supported on ${type}`)]),
    );
  }
  const table = store.get(type);
  if (method === 'GET') {
    const resource = table.get(id);
    if (!resource)
      return send(res, 404, outcome([issue('error', 'not-found', `${type}/${id} is not known`)]));
    return send(res, 200, resource, { ETag: `W/"${resource.meta.versionId}"` });
  }
  if (method === 'PUT') {
    if (!body)
      return send(
        res,
        400,
        outcome([issue('error', 'required', 'Send the resource as the request body')]),
      );
    const result = write(type, body, id, base);
    return send(res, result.status, result.body, result.headers);
  }
  if (method === 'DELETE') {
    table.delete(id);
    return send(res, 204);
  }
  return send(
    res,
    405,
    outcome([issue('error', 'not-supported', `${method} is not supported on ${type}/${id}`)]),
  );
}

load();

createServer((req, res) => {
  handle(req, res).catch((error) => {
    send(res, 500, outcome([issue('fatal', 'exception', String(error))]));
  });
}).listen(PORT, HOST, () => {
  const counts = SUPPORTED.map((type) => `${store.get(type)?.size ?? 0} ${type}`).join(', ');
  console.log(`FHIR sandbox: http://localhost:${PORT}${BASE_PATH} (${counts}). Stop with Ctrl+C.`);
});

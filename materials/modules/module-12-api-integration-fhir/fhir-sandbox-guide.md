# FHIR sandbox guide

The sandbox is a small, local FHIR R4 server, written in plain JavaScript, loaded with synthetic patients and observations. It lives in `practice-repo/fhir-sandbox/`, and its server is `practice-repo/fhir-sandbox/server.js`. Its README is the source of truth for data and commands. This guide is the learner's walk-through.

It needs only Node.js, which you already have for the practice repository. There is no Docker, no Java, and nothing else to install.

Everything in the sandbox is synthetic. NHS numbers are from the `999` range reserved for testing. Never put real patient data into it, even briefly.

It is a teaching server, not a real one. It supports `Patient`, `Observation`, and `StructureDefinition`, and only the parts of the FHIR REST API the course uses.

## 1. Start and stop

From `practice-repo/`:

```sh
npm run fhir     # start the sandbox at http://localhost:8080/fhir
```

It prints its address and how many resources it loaded. It loads the training profile and the synthetic data every time it starts, and keeps everything in memory, so a restart puts the data back as it was. Stop it with Ctrl+C.

You do not need to start it before running the API tests: if `FHIR_BASE_URL` is not set, the tests start it for you.

## 2. Look around by hand first

Before writing tests, explore the API the way a manual tester would. Start the sandbox, then use a browser or `curl`:

| Request | What you should see |
| --- | --- |
| `GET http://localhost:8080/fhir/metadata` | The server's capability statement, listing what it supports |
| `GET http://localhost:8080/fhir/Patient` | A `searchset` bundle of synthetic patients |
| `GET http://localhost:8080/fhir/Patient/synthetic-adult` | One patient |
| `GET http://localhost:8080/fhir/Patient?identifier=https://fhir.nhs.uk/Id/nhs-number\|9990010005` | Search by NHS number |
| `GET http://localhost:8080/fhir/Observation?patient=synthetic-adult` | The adult's observations |
| `GET http://localhost:8080/fhir/Observation?code=http://loinc.org\|8867-4` | Heart rate observations |
| `GET http://localhost:8080/fhir/Patient?colour=blue` | 400, with an `OperationOutcome` listing the supported search parameters |

Write down what each returns. This is the manual test you are about to automate.

The sandbox supports:

| Interaction | Request |
| --- | --- |
| Read | `GET /fhir/{type}/{id}` |
| Create | `POST /fhir/{type}`: 201 with a `Location` header |
| Update | `PUT /fhir/{type}/{id}`: each update adds 1 to `meta.versionId` |
| Delete | `DELETE /fhir/{type}/{id}` |
| Search | `GET /fhir/{type}?param=value`. `Patient`: `_id`, `identifier`, `family`, `given`, `name`, `gender`, `birthdate`. `Observation`: `_id`, `subject`, `patient`, `code`, `status`. Any other parameter returns 400 |
| Validate | `POST /fhir/{type}/$validate`, optionally with `?profile=` |
| Transaction or batch | `POST /fhir` with a `Bundle` of type `transaction` or `batch` |

## 3. Run the example suite

From `practice-repo/`:

```sh
npm run test:api
```

The suite is `practice-repo/tests/api/fhir.test.js`: Mocha tests that call the sandbox with Node's built-in `fetch`. If the server cannot be reached, every test fails with a connection error. That is an environment problem, not a product defect: read the message, then see Troubleshooting.

The base URL comes from `FHIR_BASE_URL`, defaulting to `http://localhost:8080/fhir`. Set it only to point the tests at a different server, such as a shared team test server with synthetic data (Decision 4).

## 4. What the example suite covers

| Group | Tests |
| --- | --- |
| Patient life cycle | Create returns 201 and an id; read returns the same patient; search by identifier; update creates version 2 |
| Observation | Create for a synthetic patient; read and update; search by patient and LOINC code |
| Clinical codes | Each synthetic observation has the right LOINC code; body temperature has a UCUM Celsius unit |
| Profile validation | A patient with `identifier` and `birthDate` conforms to the training profile; one without `birthDate` fails |
| Negative tests | An invalid gender code is rejected; reading a missing patient returns 404 |

## 5. Write your own

Write your tests in a new file in `practice-repo/tests/api/`, for example `my-fhir.test.js`. Do not edit the example suite. Use the example's helpers as a model: a `syntheticPatient()` data builder with overrides, and checks on `OperationOutcome` issues.

A test looks like this:

```javascript
import { strict as assert } from 'node:assert';

const BASE = process.env.FHIR_BASE_URL ?? 'http://localhost:8080/fhir';

describe('Patient read', () => {
  it('returns the synthetic adult', async () => {
    const response = await fetch(`${BASE}/Patient/synthetic-adult`, {
      headers: { Accept: 'application/fhir+json' },
    });
    assert.equal(response.status, 200);
    const patient = await response.json();
    assert.equal(patient.resourceType, 'Patient');
    assert.equal(patient.identifier[0].value, '9990010005');
  });
});
```

The Evidence 12 requirements, by track:

| Requirement | Band 4 test engineering, Band 5 quality assurance (5 tests, with support) | Band 6 quality assurance, Band 6 test engineering, Band 7 test engineering (full suite) |
| --- | --- | --- |
| Create, read, search, update `Patient` | Pick from these | All |
| Create, read, search, update `Observation` | Pick from these | All |
| Status codes and bodies checked | Yes | Yes |
| Validate against the training profile | At least 1 | At least 1 |
| A clinical code's meaning checked | At least 1 | At least 1 |
| A negative test | At least 1 | At least 1 |
| A partner system simulator | — | Band 7 test engineering only |

Every test must fail when the behaviour is wrong. Show it once, as in Module 11.

## 6. Band 7 test engineering: partner system simulator

Write a small simulator for a partner system that sends observations to your service, for example a stub HTTP server built with Node's `node:http` module that returns a canned FHIR `Bundle`, with one normal case and one malformed case. Use it to test how your code handles both, without depending on the real partner. The sandbox's own `server.js` is a worked example of a small Node.js HTTP server. Record in your suite's spec what the simulator does and does not cover.

## 7. Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Every test fails with a connection error | The sandbox could not start or be reached | Run `npm run fhir` on its own and read its message; check `FHIR_BASE_URL` is not set to another server |
| 404 for `synthetic-adult` | Your own test deleted or changed it, or another server is on port 8080 | Restart the sandbox: its data is reset on every start |
| Connection refused, or "address in use", on port 8080 | Another program is using port 8080 | Stop that program, or ask your mentor; see the sandbox README |
| 400 on a search | A search parameter the sandbox does not support | Read the `OperationOutcome`: it lists the supported parameters |
| `fetch` is not defined | An old Node.js version | Use Node.js 24, as pinned in `practice-repo/.nvmrc` |

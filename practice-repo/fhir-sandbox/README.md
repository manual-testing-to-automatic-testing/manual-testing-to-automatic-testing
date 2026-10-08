# FHIR sandbox

A small, local HL7 FHIR R4 server, loaded with synthetic patients and observations, for module **Module 12 API, integration, and FHIR tests** of the training programme. See [../../spec/index.md](../../spec/index.md).

It is one plain JavaScript file, [`server.js`](server.js), and needs only Node.js: no Docker, no Java, and nothing to install.

Everything here is **synthetic**. No record describes a real person. NHS numbers are from the `999` range that NHS England reserves for testing, and each one passes the modulus 11 check.

## Run

From the practice repository folder:

```sh
npm run fhir        # start at http://localhost:8080/fhir; stop with Ctrl+C
```

Then open <http://localhost:8080/fhir/metadata> or <http://localhost:8080/fhir/Patient> in a browser.

`npm run test:api` starts the sandbox for you, and stops it afterwards. If a sandbox is already running on port 8080, the tests use that one. To test another FHIR server instead, set `FHIR_BASE_URL`, for example `FHIR_BASE_URL=https://fhir.example.org/fhir npm run test:api`.

Data lives in memory. Every start loads the profile and the synthetic data again, so anything you created is gone and the starting data is back. To use another port, set `FHIR_PORT`.

## What it supports

A teaching server, not a real one. It implements the part of the FHIR REST API that the course uses:

| Request                                 | What it does                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------ |
| `GET /fhir/metadata`                    | The CapabilityStatement: what this server supports                             |
| `GET /fhir/{type}/{id}`                 | Read a resource; `404` with an OperationOutcome if it does not exist           |
| `POST /fhir/{type}`                     | Create a resource; `201`, with a `Location` header ending `/_history/1`        |
| `PUT /fhir/{type}/{id}`                 | Update a resource (version goes up by 1), or create it with that id            |
| `DELETE /fhir/{type}/{id}`              | Delete a resource                                                              |
| `GET /fhir/{type}?…`                    | Search; returns a `searchset` Bundle with `total`                              |
| `POST /fhir/{type}/$validate?profile=…` | Validate a resource, optionally against a profile; returns an OperationOutcome |
| `POST /fhir`                            | A `transaction` or `batch` Bundle                                              |

Resource types: `Patient`, `Observation`, and `StructureDefinition`.

Search parameters:

- `Patient`: `_id`, `identifier` (`system|value`), `family`, `given`, `name`, `gender`, `birthdate`
- `Observation`: `_id`, `subject`, `patient`, `code` (`system|code`), `status`
- Any other parameter returns `400` with an OperationOutcome that lists the supported ones. `_count` and `_summary=count` also work.

Validation, on create, update, and `$validate`:

- `Patient.gender` must be `male`, `female`, `other`, or `unknown`.
- `Patient.birthDate` must be a FHIR date.
- An NHS number must pass the modulus 11 check; a valid number outside the `999` test range gets a warning.
- `Observation.status` is required and must be a valid status; `Observation.code` is required; `Observation.subject` must be a `Type/id` reference.
- With `?profile=`, the profile's minimum and maximum cardinality rules for top-level elements.

A create or update that breaks a rule returns `422` with an OperationOutcome listing the errors.

## Contents

| Path                             | What it is                                                                                   |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| `server.js`                      | The server                                                                                   |
| `data/synthetic-bundle.json`     | A transaction Bundle: 6 patients and 6 observations, loaded at start                         |
| `profiles/training-patient.json` | A `StructureDefinition` on `Patient` requiring `identifier` and `birthDate`, loaded at start |

## Synthetic patients

| Id                         | NHS number   | Case                                                      |
| -------------------------- | ------------ | --------------------------------------------------------- |
| `synthetic-adult`          | 999 001 0005 | Typical adult                                             |
| `synthetic-centenarian`    | 999 001 1370 | Edge case: over 100 years old                             |
| `synthetic-newborn`        | 999 001 2741 | Edge case: newborn, days old                              |
| `synthetic-unknown-gender` | 999 001 4116 | Edge case: gender `unknown`                               |
| `synthetic-apostrophe`     | 999 001 5481 | Edge case: apostrophe, hyphen, and diacritics in the name |
| `synthetic-deceased`       | 999 001 6852 | Edge case: deceased                                       |

## Synthetic observations (LOINC)

| Id                | Patient        | LOINC code | Meaning                 |
| ----------------- | -------------- | ---------- | ----------------------- |
| `synthetic-obs-1` | adult          | 8867-4     | Heart rate              |
| `synthetic-obs-2` | adult          | 8310-5     | Body temperature        |
| `synthetic-obs-3` | centenarian    | 8480-6     | Systolic blood pressure |
| `synthetic-obs-4` | newborn        | 29463-7    | Body weight             |
| `synthetic-obs-5` | unknown gender | 8302-2     | Body height             |
| `synthetic-obs-6` | apostrophe     | 2339-0     | Glucose in blood        |

## Rules

- Never load real patient data into this server, even briefly.
- Add new synthetic cases to `data/synthetic-bundle.json`, tag them `synthetic`, and use only `999` range NHS numbers.
- The tests in [../tests/api/](../tests/api/) use this server.

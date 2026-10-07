# FHIR sandbox

A local HL7 FHIR R4 server, loaded with synthetic patients and observations, for module **M6 API, integration, and FHIR tests** of the training programme. See [../spec/index.md](../spec/index.md).

Everything here is **synthetic**. No record describes a real person. NHS numbers are from the `999` range that NHS England reserves for testing, and each one passes the modulus 11 check, so validators accept them.

## Run

Requires Docker with Compose.

```sh
docker compose up -d        # start HAPI FHIR at http://localhost:8080/fhir
scripts/load.sh             # load the profile and the synthetic bundle
docker compose down         # stop; the in-memory database is discarded
```

The server uses an in-memory H2 database, so every restart starts empty. Run `scripts/load.sh` again after each start. The first start takes a minute or two.

## Contents

| Path | What it is |
| --- | --- |
| `docker-compose.yml` | HAPI FHIR `v8.12.0-2`, pinned, on port 8080 |
| `data/synthetic-bundle.json` | A transaction bundle: 6 patients and 6 observations |
| `profiles/training-patient.json` | A `StructureDefinition` on `Patient` requiring `identifier` and `birthDate` |
| `scripts/load.sh` | Waits for the server, then loads the profile and the bundle |

## Synthetic patients

| Id | NHS number | Case |
| --- | --- | --- |
| `synthetic-adult` | 999 001 0005 | Typical adult |
| `synthetic-centenarian` | 999 001 1370 | Edge case: over 100 years old |
| `synthetic-newborn` | 999 001 2741 | Edge case: newborn, days old |
| `synthetic-unknown-gender` | 999 001 4116 | Edge case: gender `unknown` |
| `synthetic-apostrophe` | 999 001 5481 | Edge case: apostrophe, hyphen, and diacritics in the name |
| `synthetic-deceased` | 999 001 6852 | Edge case: deceased |

## Synthetic observations (LOINC)

| Id | Patient | LOINC code | Meaning |
| --- | --- | --- | --- |
| `synthetic-obs-1` | adult | 8867-4 | Heart rate |
| `synthetic-obs-2` | adult | 8310-5 | Body temperature |
| `synthetic-obs-3` | centenarian | 8480-6 | Systolic blood pressure |
| `synthetic-obs-4` | newborn | 29463-7 | Body weight |
| `synthetic-obs-5` | unknown gender | 8302-2 | Body height |
| `synthetic-obs-6` | apostrophe | 2339-0 | Glucose in blood |

## Rules

- Never load real patient data into this server, even briefly.
- Add new synthetic cases to `data/synthetic-bundle.json`, tag them `synthetic`, and use only `999` range NHS numbers.
- The tests in [../practice-repo/tests/api/](../practice-repo/tests/api/) use this server.

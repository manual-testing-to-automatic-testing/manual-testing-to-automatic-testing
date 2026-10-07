# FHIR sandbox guide

The sandbox is a local HAPI FHIR R4 server loaded with synthetic patients and observations. It lives in `practice-repo/fhir-sandbox/`. Its README is the source of truth for versions, data, and commands. This guide is the learner's walk-through.

Everything in the sandbox is synthetic. NHS numbers are from the `999` range reserved for testing. Never load real patient data into it, even briefly.

## 1. Start and load

You need Docker with Compose (Decision D4). From `practice-repo/fhir-sandbox/`:

```sh
docker compose up -d        # start HAPI FHIR at http://localhost:8080/fhir
scripts/load.sh             # load the profile and the synthetic bundle
```

The first start takes a minute or two. The database is in memory, so run `scripts/load.sh` again after every restart.

Stop it with:

```sh
docker compose down
```

## 2. Look around by hand first

Before writing tests, explore the API the way a manual tester would. In a browser or with `curl`:

| Request | What you should see |
| --- | --- |
| `GET http://localhost:8080/fhir/metadata` | The server's capability statement |
| `GET http://localhost:8080/fhir/Patient` | A bundle of synthetic patients |
| `GET http://localhost:8080/fhir/Patient/synthetic-adult` | One patient |
| `GET http://localhost:8080/fhir/Patient?identifier=https://fhir.nhs.uk/Id/nhs-number\|9990010005` | Search by NHS number |
| `GET http://localhost:8080/fhir/Observation?patient=synthetic-adult` | The adult's observations |
| `GET http://localhost:8080/fhir/Observation?code=http://loinc.org\|8867-4` | Heart rate observations |

Write down what each returns. This is the manual test you are about to automate.

## 3. Run the example suite

From `practice-repo/`:

```sh
npm run test:api
```

The suite is `practice-repo/tests/api/fhir.spec.ts`. If the sandbox is not running, every test is **skipped** with a message telling you to start it. A skip is not a pass: always check the report for skipped tests.

The base URL comes from `FHIR_BASE_URL`, defaulting to `http://localhost:8080/fhir`.

## 4. What the example suite covers

| Group | Tests |
| --- | --- |
| Patient life cycle | Create returns 201 and an id; read returns the same patient; search by identifier; update creates version 2 |
| Observation | Create for a synthetic patient; read and update; search by patient and LOINC code |
| Clinical codes | Each synthetic observation has the right LOINC code; body temperature has a UCUM Celsius unit |
| Profile validation | A patient with `identifier` and `birthDate` conforms to the training profile; one without `birthDate` fails |
| Negative tests | An invalid gender code is rejected; reading a missing patient returns 404 |

## 5. Write your own

Write your tests in a new file in `practice-repo/tests/api/`, for example `my-fhir.spec.ts`. Do not edit the example suite. Use the example's helpers as a model: a `syntheticPatient()` data builder with overrides, and checks on `OperationOutcome` issues.

The E6 requirements, by track:

| Requirement | B4-TE, B5-QA (5 tests, with support) | B6-QA, B6-TE, B7-TE (full suite) |
| --- | --- | --- |
| Create, read, search, update `Patient` | Pick from these | All |
| Create, read, search, update `Observation` | Pick from these | All |
| Status codes and bodies checked | Yes | Yes |
| Validate against the training profile | At least 1 | At least 1 |
| A clinical code's meaning checked | At least 1 | At least 1 |
| A negative test | At least 1 | At least 1 |
| A partner system simulator | — | B7-TE only |

Every test must fail when the behaviour is wrong. Show it once, as in M5.

## 6. B7-TE: partner system simulator

Write a small simulator for a partner system that sends observations to your service, for example a stub HTTP server that returns a canned FHIR `Bundle`, with one normal case and one malformed case. Use it to test how your code handles both, without depending on the real partner. Record in your suite's spec what the simulator does and does not cover.

## 7. Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| All tests skipped | Sandbox not running | `docker compose up -d`, then `scripts/load.sh` |
| 404 for `synthetic-adult` | Sandbox restarted, data not loaded | `scripts/load.sh` |
| Connection refused on port 8080 | Another service on 8080, or Docker not started | Check `docker ps`; free the port |
| Validation passes when it should fail | Profile not loaded | `scripts/load.sh` loads the profile first |

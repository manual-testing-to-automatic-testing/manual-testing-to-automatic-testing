# Module 12 API, integration, and FHIR tests

15 hours. Reviewed at Gate 3.

## Purpose

Push tests down the pyramid. Much of what a manual tester checks through screens can be checked faster and more precisely at the API layer. In health care, much of that is HL7 FHIR. Module 12 teaches API and integration testing against a safe, local FHIR server loaded with synthetic data. The server is part of the practice repository and needs only Node.js: no Docker.

## Outcomes

- **Learning outcome 6:** write automated API and integration tests, including HL7 FHIR validation.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 12 API, integration, and FHIR tests | — | Read and discuss | With support | With support | Independent | Independent | Lead or coach | Read and discuss |

Band 3 does not take Module 12. Band 3's Module 12 hours in hours 178–200.5 go to Role foundations and real automation at Band 3 depth.

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 178–185.5: HTTP, REST, JSON, status codes, headers | 1.5 hours | Core | All except Band 3 |
| 2 | Hours 178–185.5: starting the FHIR sandbox with `npm run fhir`; calling it with Node's built-in `fetch` from Mocha tests | 1.5 hours | Core | All except Band 3 |
| 3 | Hours 178–185.5: HL7 FHIR: resources, references, bundles, profiles, terminology | 2 hours | Core | All except Band 3 |
| 4 | Hours 185.5–193: mocks, stubs, and simulators; contract and integration testing | 1 hour | Core | All except Band 3 |
| 5 | Hours 185.5–193: HL7 version 2 awareness | 30 minutes | Core | All except Band 3 |
| 6a | Hours 185.5–193: read an existing suite | 2 hours | Breakout | Band 4 quality assurance, Band 7 test management |
| 6b | Hours 185.5–200.5: write 5 tests, with support | 3.5 hours in each 7.5-hour block | Breakout | Band 4 test engineering, Band 5 quality assurance, with mentor |
| 6c | Hours 185.5–200.5: write the full suite | 3.5 hours in each 7.5-hour block | Breakout | Band 6 quality assurance, Band 6 test engineering |
| 6d | Hours 185.5–193: write the full suite; hours 193–200.5: partner system simulator | 3.5 hours in each 7.5-hour block | Breakout | Band 7 test engineering |
| 7 | Hours 185.5–193: run the suite, break and restore one assertion, and explain the failure to the mentor | 1.5 hours | Breakout | Band 4 quality assurance, Band 7 test management |
| 8 | Hours 193–200.5: write one test with support (Band 4 quality assurance); start planning Leading teams through automation adoption (Band 7 test management) | 3.5 hours | Breakout | Band 4 quality assurance, Band 7 test management |
| 9 | Hours 193–200.5: pair with a developer to move one browser test from Evidence 11 down to the API layer | 1.5 hours | Team | All except Band 3 |

Each person's sessions add up to 15 hours: 5 hours in each of the blocks 90–97.5, 97.5–105, and 105–112.5. Real automation (1.5 hours in every 7.5 hours of learning) and Role foundations (1 hour) fill the rest of each block.


Acceptance test automation for Band 6 quality assurance also starts in hours 178–185.5, within Band 6 quality assurance's breakout time. See `materials/tracks/`.

## Activities

1. Start the sandbox with `npm run fhir`. It loads its synthetic data every time it starts. See [fhir-sandbox-guide.md](fhir-sandbox-guide.md).
2. Use Node's built-in `fetch`, inside Mocha tests, to call the FHIR API. Selenium drives browsers only; it has no API client.
3. Check status codes, headers, and response bodies.
4. Validate a resource against a FHIR profile with `$validate`.
5. Check that a clinical code means what it should, for example LOINC 8867-4 is heart rate.
6. Write at least one negative test: an invalid resource that must be rejected.
7. Discuss when to use mocks, stubs, and simulators for partner systems.
8. With a developer, move one browser test from Evidence 11 down to the API layer, and discuss what was gained and lost.

## Evidence

**Evidence 12:** a Mocha API test suite, using `fetch`, against the practice repository's local FHIR sandbox loaded with synthetic data, which creates, reads, searches, and updates `Patient` and `Observation` resources, checks status codes and bodies, validates against a FHIR profile, checks a clinical code's meaning, and includes a negative test.

| Track | Evidence |
| --- | --- |
| Band 3 | Not taken |
| Band 4 quality assurance, Band 7 test management | Read and explain an existing suite instead. See [read-an-existing-suite.md](read-an-existing-suite.md). |
| Band 4 test engineering, Band 5 quality assurance | 5 tests, with support |
| Band 6 quality assurance, Band 6 test engineering | The full suite |
| Band 7 test engineering | The full suite, plus a simulator for a partner system |

## Assessment

Gate 3 (hour 215.5) reviews Evidence 12 with Evidence 13. The Gate 3 Part D practical is "triage and fix a failing CI run", plus an API test for Band 6 and Band 7 test engineering, and reading and explaining an API test failure for Band 7 test management.

## Resources

- HL7 FHIR R4 specification: <https://hl7.org/fhir/R4/>
- HAPI FHIR, a widely used open source FHIR server, for background on real servers: <https://hapifhir.io/>
- MDN, using the Fetch API: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>
- Mocha: <https://mochajs.org/>
- LOINC: <https://loinc.org/>
- The FHIR sandbox: `practice-repo/fhir-sandbox/README.md`
- The example suite: `practice-repo/tests/api/fhir.test.js`
- The team's interface specifications.

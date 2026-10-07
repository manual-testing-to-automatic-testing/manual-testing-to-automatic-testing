# M6 API, integration, and FHIR tests

Hours 90–112.5, about 15 hours. Reviewed at Gate 3.

## Purpose

Push tests down the pyramid. Much of what a manual tester checks through screens can be checked faster and more precisely at the API layer. In health care, much of that is HL7 FHIR. M6 teaches API and integration testing against a safe, local FHIR server loaded with synthetic data. The server is part of the practice repository and needs only Node.js: no Docker.

## Outcomes

- **LO6:** write automated API and integration tests, including HL7 FHIR validation.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M6 API, integration, and FHIR tests | — | R | S | S | I | I | L | R |

B3 does not take M6. B3's M6 hours in hours 90–112.5 go to R1 role foundations and real automation at B3 depth.

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 90–97.5: HTTP, REST, JSON, status codes, headers | 1.5 hours | Core | All except B3 |
| 2 | Hours 90–97.5: starting the FHIR sandbox with `npm run fhir`; calling it with Node's built-in `fetch` from Mocha tests | 1.5 hours | Core | All except B3 |
| 3 | Hours 90–97.5: HL7 FHIR: resources, references, bundles, profiles, terminology | 2 hours | Core | All except B3 |
| 4 | Hours 97.5–105: mocks, stubs, and simulators; contract and integration testing | 1 hour | Core | All except B3 |
| 5 | Hours 97.5–105: HL7 version 2 awareness | 30 minutes | Core | All except B3 |
| 6a | Hours 97.5–105: read an existing suite | 2 hours | Breakout | B4-QA, B7-TM |
| 6b | Hours 97.5–112.5: write 5 tests, with support | 3.5 hours in each 7.5-hour block | Breakout | B4-TE, B5-QA, with mentor |
| 6c | Hours 97.5–112.5: write the full suite | 3.5 hours in each 7.5-hour block | Breakout | B6-QA, B6-TE |
| 6d | Hours 97.5–105: write the full suite; hours 105–112.5: partner system simulator | 3.5 hours in each 7.5-hour block | Breakout | B7-TE |
| 7 | Hours 97.5–105: run the suite, break and restore one assertion, and explain the failure to the mentor | 1.5 hours | Breakout | B4-QA, B7-TM |
| 8 | Hours 105–112.5: write one test with support (B4-QA); start planning L5 adoption (B7-TM) | 3.5 hours | Breakout | B4-QA, B7-TM |
| 9 | Hours 105–112.5: pair with a developer to move one browser test from E5 down to the API layer | 1.5 hours | Team | All except B3 |

Each person's sessions add up to 15 hours: 5 hours in each of the blocks 90–97.5, 97.5–105, and 105–112.5. Real automation (1.5 hours in every 7.5 hours of learning) and R1 (1 hour) fill the rest of each block.


L4 Acceptance test automation for B6-QA also starts in hours 90–97.5, within B6-QA's breakout time. See `materials/tracks/`.

## Activities

1. Start the sandbox with `npm run fhir`. It loads its synthetic data every time it starts. See [fhir-sandbox-guide.md](fhir-sandbox-guide.md).
2. Use Node's built-in `fetch`, inside Mocha tests, to call the FHIR API. Selenium WebDriver drives browsers only; it has no API client.
3. Check status codes, headers, and response bodies.
4. Validate a resource against a FHIR profile with `$validate`.
5. Check that a clinical code means what it should, for example LOINC 8867-4 is heart rate.
6. Write at least one negative test: an invalid resource that must be rejected.
7. Discuss when to use mocks, stubs, and simulators for partner systems.
8. With a developer, move one browser test from E5 down to the API layer, and discuss what was gained and lost.

## Evidence

**E6:** a Mocha API test suite, using `fetch`, against the practice repository's local FHIR sandbox loaded with synthetic data, which creates, reads, searches, and updates `Patient` and `Observation` resources, checks status codes and bodies, validates against a FHIR profile, checks a clinical code's meaning, and includes a negative test.

| Track | Evidence |
| --- | --- |
| B3 | Not taken |
| B4-QA, B7-TM | Read and explain an existing suite instead. See [read-an-existing-suite.md](read-an-existing-suite.md). |
| B4-TE, B5-QA | 5 tests, with support |
| B6-QA, B6-TE | The full suite |
| B7-TE | The full suite, plus a simulator for a partner system |

## Assessment

Gate 3 (hour 127.5) reviews E6 with E7. The Gate 3 Part D practical is "triage and fix a failing CI run", plus an API test for B6 and B7-TE, and reading and explaining an API test failure for B7-TM.

## Resources

- HL7 FHIR R4 specification: <https://hl7.org/fhir/R4/>
- HAPI FHIR, a widely used open source FHIR server, for background on real servers: <https://hapifhir.io/>
- MDN, using the Fetch API: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>
- Mocha: <https://mochajs.org/>
- LOINC: <https://loinc.org/>
- The FHIR sandbox: `practice-repo/fhir-sandbox/README.md`
- The example suite: `practice-repo/tests/api/fhir.test.js`
- The team's interface specifications.

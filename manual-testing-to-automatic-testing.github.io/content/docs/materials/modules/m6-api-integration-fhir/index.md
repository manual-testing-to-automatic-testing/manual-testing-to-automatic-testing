# M6 API, integration, and FHIR tests

Weeks 13–15. Reviewed at Gate 3.

## Purpose

Push tests down the pyramid. Much of what a manual tester checks through screens can be checked faster and more precisely at the API layer. In health care, much of that is HL7 FHIR. M6 teaches API and integration testing against a safe, local FHIR server loaded with synthetic data.

## Outcomes

- **LO6:** write automated API and integration tests, including HL7 FHIR validation.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M6 API, integration, and FHIR tests | — | R | S | S | I | I | L | R |

B3 does not take M6. B3 time in weeks 13 to 15 goes to R1 role foundations and weekly real automation at B3 depth.

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Week 13: HTTP, REST, JSON, status codes, headers | 2 hours | Core | All except B3 |
| 2 | Week 13: starting the FHIR sandbox; Playwright's `request` fixture | 1.5 hours | Core | All except B3 |
| 3 | Week 13: HL7 FHIR: resources, references, bundles, profiles, terminology | 2 hours | Core | All except B3 |
| 4 | Week 14: mocks, stubs, and simulators; contract and integration testing | 1.5 hours | Core | All except B3 |
| 5 | Week 14: HL7 version 2 awareness | 30 minutes | Core | All except B3 |
| 6 | Week 14: read an existing suite | 2 hours | Breakout | B4-QA, B7-TM |
| 7 | Week 14–15: write 5 tests, with support | 4 hours | Breakout | B4-TE, B5-QA, with mentor |
| 8 | Week 14–15: write the full suite | 6 hours | Breakout | B6-QA, B6-TE, B7-TE |
| 9 | Week 15: partner system simulator | 3 hours | Breakout | B7-TE |
| 10 | Week 15: pair with a developer to move one browser test from E5 down to the API layer | 1.5 hours | Team | All except B3 |

L4 Acceptance test automation for B6-QA also starts in week 13. See `materials/tracks/`.

## Activities

1. Start the sandbox and load it. See [fhir-sandbox-guide.md](fhir-sandbox-guide.md).
2. Use Playwright's `request` fixture to call the FHIR API.
3. Check status codes, headers, and response bodies.
4. Validate a resource against a FHIR profile with `$validate`.
5. Check that a clinical code means what it should, for example LOINC 8867-4 is heart rate.
6. Write at least one negative test: an invalid resource that must be rejected.
7. Discuss when to use mocks, stubs, and simulators for partner systems.
8. With a developer, move one browser test from E5 down to the API layer, and discuss what was gained and lost.

## Evidence

**E6:** an API test suite against a local HAPI FHIR server loaded with synthetic data, which creates, reads, searches, and updates `Patient` and `Observation` resources, checks status codes and bodies, validates against a FHIR profile, checks a clinical code's meaning, and includes a negative test.

| Track | Evidence |
| --- | --- |
| B3 | Not taken |
| B4-QA, B7-TM | Read and explain an existing suite instead. See [read-an-existing-suite.md](read-an-existing-suite.md). |
| B4-TE, B5-QA | 5 tests, with support |
| B6-QA, B6-TE | The full suite |
| B7-TE | The full suite, plus a simulator for a partner system |

## Assessment

Gate 3 (week 18) reviews E6 with E7. The Gate 3 Part D practical is "triage and fix a failing CI run", with an API test as well for B6 and B7.

## Resources

- HL7 FHIR R4 specification: <https://hl7.org/fhir/R4/>
- HAPI FHIR: <https://hapifhir.io/>
- Playwright API testing: <https://playwright.dev/docs/api-testing>
- LOINC: <https://loinc.org/>
- The FHIR sandbox: `practice-repo/fhir-sandbox/README.md`
- The example suite: `practice-repo/tests/api/fhir.spec.ts`
- The team's interface specifications.

# M8 Safe and lawful test automation in health care

Hours 127.5–142.5, about 7 hours. Reviewed at Gate 4.

## Purpose

In health care, test automation is part of keeping patients safe. Automated regression tests protect the safety controls in the hazard log, and their results are evidence for the clinical safety case. Test data must never expose real patients, and secrets must never reach source control. M8 makes these part of test engineering, not an add-on.

R2 Health care foundations (hours 7.5–60) has already brought clinical risk management and information governance up to the expected level by Gate 2. M8 applies them to automation.

## Outcomes

- **LO8:** use synthetic data, and keep secrets and personal data out of tests and pipelines.
- **LO9:** trace automated tests to hazards, and produce test evidence for a clinical safety case.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M8 Safe and lawful test automation | I | I | I | I | L | I | L | L |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 127.5–135: how automated regression tests protect safety controls; the team's hazard log | 1.5 hours | Core | Cohort, clinical safety officer |
| 2 | Hours 127.5–135: information governance for test data and pipelines | 1 hour | Core | Cohort, information governance lead |
| 3 | Hours 127.5–135: synthetic data: generators, data builders, rare and edge clinical cases | 1.5 hours | Core | Cohort |
| 4 | Hours 135–142.5: secrets and personal data: scanning, environment variables, CI secrets | 30 minutes | Core | Cohort |
| 5 | Hours 135–142.5: automated accessibility checks, and what they cannot find | 1 hour | Core | Cohort |
| 6 | Hours 135–142.5: IEC 62304 awareness for software as a medical device | 30 minutes | Core | Cohort |
| 7 | Hours 135–142.5: traceability matrix working session with the clinical safety officer; B6-QA, B7-TE, and B7-TM end with a peer review of another person's matrix | 1 hour | Breakout | Small groups by team |

Each person's sessions add up to 7 hours: 4 hours in hours 127.5–135, after Gate 3, and 3 hours in hours 135–142.5. The M8 work is done on the person's own team's tests, so it is also their real automation for those hours.

## Activities

1. Review the team's hazard log with the clinical safety officer. Find the hazards your automated tests protect.
2. Fill in the [traceability matrix](traceability-matrix.md) for your E5 and E6 tests.
3. Create synthetic data for your tests, including at least three rare or edge clinical cases. Use the [synthetic data and secrets checklist](synthetic-data-and-secrets-checklist.md).
4. Scan your repositories for secrets and personal data. Record the result and the controls that keep it clean.
5. Add automated accessibility checks, for example with `@axe-core/webdriverjs`, to at least two Selenium browser tests. Write a note on what they cannot find.

## Evidence

**E8:** synthetic data for the person's tests, including rare or edge clinical cases; a repository scan showing no secrets or personal data; a traceability matrix from automated tests to hazards and safety controls, agreed with the clinical safety officer; automated accessibility checks on browser tests, with a note on what they cannot find.

| Track | Extra |
| --- | --- |
| B6-QA, B7-TE, B7-TM | Also review one other person's traceability matrix |

Track depth notes:

- **B3, B4-QA (I):** the traceability matrix covers the tests you automated or wrote as scenarios in E5. Synthetic data may be an agreed set of records, not a generator.
- **B4-TE, B5-QA, B6-TE (I):** the matrix covers all your E5 and E6 tests.
- **B6-QA, B7 (L):** as above, plus the peer review. B7-TM also checks that the matrix format works for the team's safety case.

## Assessment

E8 is assessed at **Gate 4** (hour 180), with E9 and E10. Gate 3 takes place at hour 127.5 and does not review E8. The clinical safety officer reviews traceability evidence in writing for the Gate 4 panel.

## Resources

- The organisation's clinical risk management process and hazard log.
- The organisation's information governance policy.
- roles-skills skill definitions for clinical risk management and information governance: <https://roles-skills.github.io>
- Synthea synthetic patient generator: <https://synthetichealth.github.io/synthea/>
- The FHIR sandbox synthetic data: `practice-repo/fhir-sandbox/data/synthetic-bundle.json`
- axe-core for Selenium WebDriver (`@axe-core/webdriverjs`): <https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverjs>
- IEC 62304 overview: <https://www.iso.org/standard/38421.html>

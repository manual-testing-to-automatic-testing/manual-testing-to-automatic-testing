# Module 14 Safe and lawful test automation in health care

8 hours. Reviewed at Gate 4.

## Purpose

In health care, test automation is part of keeping patients safe. Automated regression tests protect the safety controls in the hazard log, and their results are evidence for the clinical safety case. Test data must never expose real patients, and secrets must never reach source control. Module 14 makes these part of test engineering, not an add-on.

Health care foundations (hours 97.5–152.5) has already brought clinical risk management and information governance up to the expected level by Gate 2. Module 14 applies them to automation.

## Outcomes

- **Learning outcome 8:** use synthetic data, and keep secrets and personal data out of tests and pipelines.
- **Learning outcome 9:** trace automated tests to hazards, and produce test evidence for a clinical safety case.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 14 Safe and lawful test automation | Independent | Independent | Independent | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 221.5–229: how automated regression tests protect safety controls; the team's hazard log | 1.5 hours | Core | Cohort, clinical safety officer |
| 2 | Hours 221.5–229: information governance for test data and pipelines | 1 hour | Core | Cohort, information governance lead |
| 3 | Hours 221.5–229: synthetic data: generators, data builders, rare and edge clinical cases | 1.5 hours | Core | Cohort |
| 4 | Hours 229–237.5: secrets and personal data: scanning, environment variables, CI secrets | 1 hour | Core | Cohort |
| 5 | Hours 229–237.5: automated accessibility checks, and what they cannot find | 1 hour | Core | Cohort |
| 6 | Hours 229–237.5: IEC 62304 awareness for software as a medical device | 1 hour | Core | Cohort |
| 7 | Hours 229–237.5: traceability matrix working session with the clinical safety officer; Band 6 quality assurance, Band 7 test engineering, and Band 7 test management end with a peer review of another person's matrix | 1 hour | Breakout | Small groups by team |

Your sessions add up to 8 hours.

## Activities

1. Review the team's hazard log with the clinical safety officer. Find the hazards your automated tests protect.
2. Fill in the [traceability matrix](traceability-matrix.md) for your Evidence 11 and Evidence 12 tests.
3. Create synthetic data for your tests, including at least three rare or edge clinical cases. Use the [synthetic data and secrets checklist](synthetic-data-and-secrets-checklist.md).
4. Scan your repositories for secrets and personal data. Record the result and the controls that keep it clean.
5. Add automated accessibility checks, for example with `@axe-core/webdriverjs`, to at least two Selenium browser tests. Write a note on what they cannot find.

## Evidence

**Evidence 14:** synthetic data for your tests, including rare or edge clinical cases; a repository scan showing no secrets or personal data; a traceability matrix from automated tests to hazards and safety controls, agreed with the clinical safety officer; automated accessibility checks on browser tests, with a note on what they cannot find.

| Track | Extra |
| --- | --- |
| Band 6 quality assurance, Band 7 test engineering, Band 7 test management | Also review one other person's traceability matrix |

Track depth notes:

- **Band 3, Band 4 quality assurance (independently):** the traceability matrix covers the tests you automated or wrote as scenarios in Evidence 11. Synthetic data may be an agreed set of records, not a generator.
- **Band 4 test engineering, Band 5 quality assurance, Band 6 test engineering (independently):** the matrix covers all your Evidence 11 and Evidence 12 tests.
- **Band 6 quality assurance, Band 7 (lead or coach):** as above, plus the peer review. Band 7 test management also checks that the matrix format works for the team's safety case.

## Assessment

Evidence 14 is assessed at **Gate 4** (hour 279.5), with Evidence 15 and Evidence 16. Gate 3 takes place at hour 221.5 and does not review Evidence 14. The clinical safety officer reviews traceability evidence in writing for the Gate 4 panel.

## Resources

- The organisation's clinical risk management process and hazard log.
- The organisation's information governance policy.
- roles-skills skill definitions for clinical risk management and information governance: <https://roles-skills.github.io>
- Synthea synthetic patient generator: <https://synthetichealth.github.io/synthea/>
- The FHIR sandbox synthetic data: `practice-repo/fhir-sandbox/data/synthetic-bundle.json`
- axe-core for Selenium (`@axe-core/webdriverjs`): <https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverjs>
- IEC 62304 overview: <https://www.iso.org/standard/38421.html>

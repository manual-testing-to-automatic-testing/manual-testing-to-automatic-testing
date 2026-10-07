# Track guide: B6-QA

This is the one-page guide for track **B6-QA**. It is copied from [spec/index.md](../../../spec/index.md), which is the single source of truth. If this page and the spec disagree, the spec wins.

Nobody changes band or role because of this programme. Reaching an automation target above the role's expectation is a strength, not a regrade.

## Who it is for

Manual testers at Band 6 who hold the PCF role Quality assurance test analyst, at senior level.

| Band | Assigned PCF role | Reference role level | Reference points | Band points range |
| --- | --- | --- | --- | --- |
| 6 | Quality assurance test analyst | Senior quality assurance test analyst | 404 | 396–465 |

If your band and assigned role have no reference role level, the mapping rule in the spec places you, and your individual learning plan (ILP) records the decision.

## Your capability self-assessment

At every gate you complete the full instrument for this track: `instruments/band-6-senior-quality-assurance-test-analyst.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).

### Part A: band outline (Band 6)

| Dimension | Band expectation |
| --- | --- |
| A1 Knowledge | Specialist knowledge across a range of procedures, built through further training or experience. |
| A2 Autonomy | Works independently; interprets policy for own area; seeks advice on complex issues. |
| A3 Scope | A product, service, or workstream. |
| A4 Leadership | May lead a small team or mentor colleagues. |
| A5 Accountability | Outcomes of own workstream and quality of advice given. |

### Part A: job evaluation factors (reference levels)

| Id | Factor | Reference level |
| --- | --- | --- |
| A6 | Communication and relationship skills | 4 |
| A7 | Knowledge, training, and experience | 6 |
| A8 | Analytical and judgemental skills | 4 |
| A9 | Planning and organisational skills | 3 |
| A10 | Physical skills | 3 |
| A11 | Responsibility for patient and client care | 1 |
| A12 | Responsibility for policy and service development | 2 |
| A13 | Responsibility for financial and physical resources | 1 |
| A14 | Responsibility for people | 2 |
| A15 | Responsibility for information resources | 3 |
| A16 | Responsibility for research and development | 2 |
| A17 | Freedom to act | 4 |
| A18 | Physical effort | 1 |
| A19 | Mental effort | 3 |
| A20 | Emotional effort | 1 |
| A21 | Working conditions | 2 |

A factor meets when the agreed level is at or above the reference level. One level below is Partly. Two or more below is Not yet. A skill in Part C meets when the gap is 0 or less, is Partly when the gap is 1, and is Not yet when the gap is 2 or more.

### Part C: expected skill levels

| Skill | Source | Expected level |
| --- | --- | --- |
| Test analysis | UK GDaD PCF | Practitioner |
| Test and quality planning | UK GDaD PCF | Practitioner |
| Designing and executing tests | UK GDaD PCF | Practitioner |
| Test engineering | UK GDaD PCF | Awareness |
| Managing, reporting and resolving defects | UK GDaD PCF | Practitioner |
| Communicating between the technical and non-technical | UK GDaD PCF | Practitioner |
| Business and user acceptance testing | UK GDaD PCF | Practitioner |
| Understanding health and care services | Health care | Working |
| Clinical risk management | Health care | Working |
| Information governance and data protection | Health care | Working |
| Health data interoperability | Health care | Working |

Not in this role level: Medical device software regulation, People management.

## Automation target

| Test engineering expected by role | Programme automation target | In practice |
| --- | --- | --- |
| Awareness | **Working** | Sets the automation approach for an area, automates acceptance checks, reviews coverage against risk. |

## Time

| Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- |
| 2 days a week | 360 | — |

From week 10 you automate real work on your team's product every week, at this track's depth.

## Learning outcomes, at this track's depth

| Id | Outcome | Depth |
| --- | --- | --- |
| LO1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | Leads or coaches others |
| LO2 | Write, run, debug, and refactor JavaScript code to the team's standards. | Independently |
| LO3 | Change test code through git and pull requests, and give and respond to review. | Independently |
| LO4 | Locate, act, wait explicitly, and assert with Selenium WebDriver, using resilient locators. | Independently |
| LO5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | Independently |
| LO6 | Write automated API and integration tests, including HL7 FHIR validation. | Independently |
| LO7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | Independently |
| LO8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | Independently |
| LO9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | Leads or coaches others |
| LO10 | Diagnose flaky tests and measure suite health with flow metrics. | Independently |
| LO11 | Read and make a small change to an existing Playwright suite. | With support |
| LO12 | Plan, build or lead, and explain an automated regression suite for a real service. | Leads or coaches others |
| LO13 | Fully meet the person's own band and PCF role, measured by the capability self-assessment. | Overall capability index of at least 90% at Gate 4 |

## Module depths

| Module | Depth |
| --- | --- |
| M0 Induction and baseline | Independent |
| M1 Why and what to automate | Lead or coach |
| M2 Programming foundations | Independent |
| M3 Version control and collaboration | Independent |
| M4 Browser automation fundamentals | Independent |
| M5 From walkthrough to real test | Independent |
| M6 API, integration, and FHIR tests | Independent |
| M7 Continuous integration and DevOps | Independent |
| M8 Safe and lawful test automation | Lead or coach |
| M9 Quality engineering practice | Independent |
| M10 Capstone | Lead or coach |
| R1 Role foundations | Set by ILP |
| R2 Health care foundations | Independent |
| L1 Coaching others in automation | Lead or coach |
| L2 Automation strategy and metrics | Lead or coach |
| L4 Acceptance test automation | Lead or coach |

## Track modules

- [R1 Role foundations](../r1-role-foundations/index.md)
- [R2 Health care foundations](../r2-health-care-foundations/index.md)
- [L1 Coaching others in automation](../l1-coaching/index.md)
- [L2 Automation strategy and metrics](../l2-strategy-metrics/index.md)
- [L4 Acceptance test automation](../l4-acceptance-automation/index.md)

## Capstone (M10, weeks 20 to 24)

A risk-based automation approach for the area, automated acceptance checks agreed with clinical users, and coaching a B4 or B5 colleague through their capstone.

You present it to the Gate 4 panel for 20 minutes, aimed at a non-technical audience.

## Gates and practicals

Gates are in weeks 0, 6, 12, 18, 24, and 48. Each Part D practical takes **60 minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#b6-qa). Thresholds and conditions are in the [gates overview](../../gates/index.md).

## Mentor

Your mentor is at least one band above you (Band 7 or higher) and at or above your automation target in test engineering (Working). One mentor supports up to 3 participants.

## Related

- [Gates overview](../../gates/index.md)
- [Calibration guide](../../gates/calibration-guide.md)
- [Individual learning plan template](../../gates/ilp-template.md)
- [Learning agreement template](../../gates/learning-agreement-template.md)
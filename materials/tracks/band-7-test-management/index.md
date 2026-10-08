# Track guide: Band 7 test management

This is the one-page guide for track **Band 7 test management**. It is copied from [spec/index.md](../../../spec/index.md), which is the single source of truth. If this page and the spec disagree, the spec wins.

Nobody changes band or role because of this programme. Reaching an automation target above the role's expectation is a strength, not a regrade.

## Who it is for

Manual testers at Band 7 who have the UK GDaD PCF role Test manager.

| Band | UK GDaD PCF role | Reference role level | Reference points | Band points range |
| --- | --- | --- | --- | --- |
| 7 | Test manager | Test manager | 499 | 466–539 |

If your band and UK GDaD PCF role have no reference role level, the mapping rule in the spec places you, and your individual learning plan records the decision.

## Your capability self-assessment

At every gate you complete the full instrument for this track: `instruments/band-7-test-manager.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (UK GDaD PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).

### Part A: band outline (Band 7)

| Dimension | Band expectation |
| --- | --- |
| A1 Knowledge | Highly developed specialist knowledge, typically to master's level or equivalent experience. |
| A2 Autonomy | Works to organisational policy; decides how results are achieved; is the expert others consult. |
| A3 Scope | Several products or services, or a specialist function. |
| A4 Leadership | Leads a team or a professional practice area. |
| A5 Accountability | Delivery of a service or specialist function, and its budget if held. |

### Part A: job evaluation factors (reference levels)

| Id | Factor | Reference level |
| --- | --- | --- |
| A6 | Communication and relationship skills | 5 |
| A7 | Knowledge, training, and experience | 7 |
| A8 | Analytical and judgemental skills | 4 |
| A9 | Planning and organisational skills | 4 |
| A10 | Physical skills | 2 |
| A11 | Responsibility for patient and client care | 1 |
| A12 | Responsibility for policy and service development | 3 |
| A13 | Responsibility for financial and physical resources | 2 |
| A14 | Responsibility for people | 3 |
| A15 | Responsibility for information resources | 4 |
| A16 | Responsibility for research and development | 2 |
| A17 | Freedom to act | 4 |
| A18 | Physical effort | 1 |
| A19 | Mental effort | 4 |
| A20 | Emotional effort | 1 |
| A21 | Working conditions | 2 |

A factor meets when the agreed level is at or above the reference level. One level below is Partly. Two or more below is Not yet. A skill in Part C meets when the gap is 0 or less, is Partly when the gap is 1, and is Not yet when the gap is 2 or more.

### Part C: expected skill levels

| Skill | Source | Expected level |
| --- | --- | --- |
| Test analysis | UK GDaD PCF | Practitioner |
| Test and quality planning | UK GDaD PCF | Expert |
| Designing and executing tests | UK GDaD PCF | Practitioner |
| Test engineering | UK GDaD PCF | Awareness |
| Managing, reporting and resolving defects | UK GDaD PCF | Expert |
| Communicating between the technical and non-technical | UK GDaD PCF | Expert |
| Understanding health and care services | Health care | Practitioner |
| Clinical risk management | Health care | Practitioner |
| Information governance and data protection | Health care | Working |
| Health data interoperability | Health care | Working |
| Medical device software regulation | Health care | Working |
| People management | Health care | Practitioner |

Not in this role level: Business and user acceptance testing.

## Automation target

| Test engineering expected by role | Programme automation target | In practice |
| --- | --- | --- |
| Awareness | **Working** | Writes enough automation to lead it credibly; owns automation strategy, metrics, and adoption. |

## Time

| Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- |
| 7.5 hours a week, by default | 220 | — |

From hour 67.5, about 1.5 hours in every 7.5 hours of learning is real automation on your team's product, at this track's depth.

## Learning outcomes, at this track's depth

| Id | Outcome | Depth |
| --- | --- | --- |
| Learning outcome 1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | Leads or coaches others |
| Learning outcome 2 | Write, run, debug, and refactor JavaScript code to the team's standards. | With support |
| Learning outcome 3 | Change test code through git and pull requests, and give and respond to review. | Independently |
| Learning outcome 4 | Locate, act, wait explicitly, and assert with Selenium WebDriver, using resilient locators. | With support |
| Learning outcome 5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | With support |
| Learning outcome 6 | Write automated API and integration tests, including HL7 FHIR validation. | Read and explain |
| Learning outcome 7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | Independently |
| Learning outcome 8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | Leads or coaches others |
| Learning outcome 9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | Leads or coaches others |
| Learning outcome 10 | Diagnose flaky tests and measure suite health with flow metrics. | Leads or coaches others |
| Learning outcome 11 | Read, run, and make a small change to an existing Selenium suite that someone else wrote. | With support |
| Learning outcome 12 | Plan, build or lead, and explain an automated regression suite for a real service. | Leads or coaches others |
| Learning outcome 13 | Fully meet the person's own band and UK GDaD PCF role, measured by the capability self-assessment. | Overall capability index of at least 90% at Gate 4 |
| Learning outcome 14 | Apply Lean Six Sigma (DMAIC) to measure and improve a testing process, and hold a Green Belt certification that does not expire. | Leads or coaches others |

## Module depths

| Module | Depth |
| --- | --- |
| Module 0 Induction and baseline | Independent |
| Module 1 Why and what to automate | Lead or coach |
| Module 2 Programming foundations | With support |
| Module 3 Version control and collaboration | Independent |
| Module 4 Browser automation fundamentals | With support |
| Module 5 From walkthrough to real test | With support |
| Module 6 API, integration, and FHIR tests | Read and discuss |
| Module 7 Continuous integration and DevOps | Independent |
| Module 8 Safe and lawful test automation | Lead or coach |
| Module 9 Quality engineering practice | Lead or coach |
| Module 10 Capstone | Lead or coach |
| Module 11 Lean Six Sigma Green Belt | Lead or coach |
| Role foundations | Set by the individual learning plan |
| Health care foundations | Lead or coach |
| Coaching others in automation | Lead or coach |
| Automation strategy and metrics | Lead or coach |
| Leading teams through automation adoption | Lead or coach |

## Track modules

- [Role foundations](../role-foundations/index.md)
- [Health care foundations (leads one session)](../health-care-foundations/index.md)
- [Coaching others in automation](../coaching-others-in-automation/index.md)
- [Automation strategy and metrics](../automation-strategy-and-metrics/index.md)
- [Leading teams through automation adoption](../leading-automation-adoption/index.md)

## Capstone (Module 10, hours 142.5 to 180)

An automation strategy and metrics for a product or programme, a business case, an adoption and team development plan, and a small automated suite of their own at the Working target.

You present it to the Gate 4 panel for 20 minutes, aimed at a non-technical audience.

## Lean Six Sigma Green Belt (Module 11, hours 180 to 220)

After Gate 4, every track takes the same 40-hour Lean Six Sigma Green Belt, with a certification that does not expire. You complete the programme when Gate 4 is met and you hold the certificate with an accepted Green Belt project (Evidence 11).

You lead a Green Belt project for your area, and sponsor the cohort's other projects with the product owners. See the [Module 11 module](../../modules/module-11-lean-six-sigma-green-belt/index.md).

## Gates and practicals

Gates are at programme hours 0, 45, 90, 127.5, and 180, and Gate 5 follows about six months after Gate 4. Each Part D practical takes **60 minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#band-7-test-management). Thresholds and conditions are in the [gates overview](../../gates/index.md).

## Mentor

Your mentor is at least one band above you (Band 8 or higher) and at or above your automation target in test engineering (Working). One mentor supports up to 3 participants. For Band 7 tracks, an external mentor may be used if no internal mentor meets these rules.

## Related

- [Gates overview](../../gates/index.md)
- [Calibration guide](../../gates/calibration-guide.md)
- [Individual learning plan template](../../gates/individual-learning-plan-template.md)
- [Learning agreement template](../../gates/learning-agreement-template.md)
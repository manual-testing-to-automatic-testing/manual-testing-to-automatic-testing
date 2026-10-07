# Track guide: B7-TM

This is the one-page guide for track **B7-TM**. It is copied from [spec/index.md](../../../spec/index.md), which is the single source of truth. If this page and the spec disagree, the spec wins.

Nobody changes band or role because of this programme. Reaching an automation target above the role's expectation is a strength, not a regrade.

## Who it is for

Manual testers at Band 7 who hold the PCF role Test manager.

| Band | Assigned PCF role | Reference role level | Reference points | Band points range |
| --- | --- | --- | --- | --- |
| 7 | Test manager | Test manager | 499 | 466–539 |

If your band and assigned role have no reference role level, the mapping rule in the spec places you, and your individual learning plan (ILP) records the decision.

## Your capability self-assessment

At every gate you complete the full instrument for this track: `instruments/B7-TM.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).

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
| 1.5 days a week | 270 | — |

From week 10 you automate real work on your team's product every week, at this track's depth.

## Learning outcomes, at this track's depth

| Id | Outcome | Depth |
| --- | --- | --- |
| LO1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | Leads or coaches others |
| LO2 | Write, run, debug, and refactor TypeScript code to the team's standards. | With support |
| LO3 | Change test code through git and pull requests, and give and respond to review. | Independently |
| LO4 | Locate, act, wait, and assert with Playwright, using resilient locators. | With support |
| LO5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | With support |
| LO6 | Write automated API and integration tests, including HL7 FHIR validation. | Read and explain |
| LO7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | Independently |
| LO8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | Leads or coaches others |
| LO9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | Leads or coaches others |
| LO10 | Diagnose flaky tests and measure suite health with flow metrics. | Leads or coaches others |
| LO11 | Read and make a small change to an existing Selenium suite. | With support |
| LO12 | Plan, build or lead, and explain an automated regression suite for a real service. | Leads or coaches others |
| LO13 | Fully meet the person's own band and PCF role, measured by the capability self-assessment. | Overall capability index of at least 90% at Gate 4 |

## Module depths

| Module | Depth |
| --- | --- |
| M0 Induction and baseline | Independent |
| M1 Why and what to automate | Lead or coach |
| M2 Programming foundations | With support |
| M3 Version control and collaboration | Independent |
| M4 Browser automation fundamentals | With support |
| M5 From walkthrough to real test | With support |
| M6 API, integration, and FHIR tests | Read and discuss |
| M7 Continuous integration and DevOps | Independent |
| M8 Safe and lawful test automation | Lead or coach |
| M9 Quality engineering practice | Lead or coach |
| M10 Capstone | Lead or coach |
| R1 Role foundations | Set by ILP |
| R2 Health care foundations | Lead or coach |
| L1 Coaching others in automation | Lead or coach |
| L2 Automation strategy and metrics | Lead or coach |
| L5 Leading teams through automation adoption | Lead or coach |

## Track modules

- [R1 Role foundations](../r1-role-foundations/index.md)
- [R2 Health care foundations (leads one session)](../r2-health-care-foundations/index.md)
- [L1 Coaching others in automation](../l1-coaching/index.md)
- [L2 Automation strategy and metrics](../l2-strategy-metrics/index.md)
- [L5 Leading teams through automation adoption](../l5-adoption/index.md)

## Capstone (M10, weeks 20 to 24)

An automation strategy and metrics for a product or programme, a business case, an adoption and team development plan, and a small automated suite of their own at the Working target.

You present it to the Gate 4 panel for 20 minutes, aimed at a non-technical audience.

## Gates and practicals

Gates are in weeks 0, 6, 12, 18, 24, and 48. Each Part D practical takes **60 minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#b7-tm). Thresholds and conditions are in the [gates overview](../../gates/index.md).

## Mentor

Your mentor is at least one band above you (Band 8 or higher) and at or above your automation target in test engineering (Working). One mentor supports up to 3 participants. For B7 tracks, an external mentor may be used if no internal mentor meets these rules.

## Related

- [Gates overview](../../gates/index.md)
- [Calibration guide](../../gates/calibration-guide.md)
- [Individual learning plan template](../../gates/ilp-template.md)
- [Learning agreement template](../../gates/learning-agreement-template.md)
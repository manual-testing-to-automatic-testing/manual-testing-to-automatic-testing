# Track guide: B4-QA

This is the one-page guide for track **B4-QA**. It is copied from [spec/index.md](../../../spec/index.md), which is the single source of truth. If this page and the spec disagree, the spec wins.

Nobody changes band or role because of this programme. Reaching an automation target above the role's expectation is a strength, not a regrade.

## Who it is for

Manual testers at Band 4 who hold the PCF role Quality assurance test analyst, at associate level.

| Band | Assigned PCF role | Reference role level | Reference points | Band points range |
| --- | --- | --- | --- | --- |
| 4 | Quality assurance test analyst | Associate quality assurance test analyst | 275 | 271–325 |

If your band and assigned role have no reference role level, the mapping rule in the spec places you, and your individual learning plan (ILP) records the decision.

## Your capability self-assessment

At every gate you complete the full instrument for this track: `instruments/band-4-associate-quality-assurance-test-analyst.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).

### Part A: band outline (Band 4)

| Dimension | Band expectation |
| --- | --- |
| A1 Knowledge | Detailed knowledge of the work area, typically from a foundation degree, apprenticeship, or equivalent experience. |
| A2 Autonomy | Works within guidelines; resolves most day-to-day problems; manager available for advice. |
| A3 Scope | Own work and a defined service or process. |
| A4 Leadership | May supervise a small team or coordinate others' work. |
| A5 Accountability | Delivery of a defined service or process. |

### Part A: job evaluation factors (reference levels)

| Id | Factor | Reference level |
| --- | --- | --- |
| A6 | Communication and relationship skills | 3 |
| A7 | Knowledge, training, and experience | 4 |
| A8 | Analytical and judgemental skills | 3 |
| A9 | Planning and organisational skills | 2 |
| A10 | Physical skills | 3 |
| A11 | Responsibility for patient and client care | 1 |
| A12 | Responsibility for policy and service development | 2 |
| A13 | Responsibility for financial and physical resources | 1 |
| A14 | Responsibility for people | 1 |
| A15 | Responsibility for information resources | 3 |
| A16 | Responsibility for research and development | 2 |
| A17 | Freedom to act | 2 |
| A18 | Physical effort | 2 |
| A19 | Mental effort | 3 |
| A20 | Emotional effort | 1 |
| A21 | Working conditions | 2 |

A factor meets when the agreed level is at or above the reference level. One level below is Partly. Two or more below is Not yet. A skill in Part C meets when the gap is 0 or less, is Partly when the gap is 1, and is Not yet when the gap is 2 or more.

### Part C: expected skill levels

| Skill | Source | Expected level |
| --- | --- | --- |
| Test analysis | UK GDaD PCF | Awareness |
| Test and quality planning | UK GDaD PCF | Awareness |
| Designing and executing tests | UK GDaD PCF | Awareness |
| Test engineering | UK GDaD PCF | Awareness |
| Managing, reporting and resolving defects | UK GDaD PCF | Awareness |
| Communicating between the technical and non-technical | UK GDaD PCF | Awareness |
| Understanding health and care services | Health care | Awareness |
| Clinical risk management | Health care | Awareness |
| Information governance and data protection | Health care | Awareness |

Not in this role level: Business and user acceptance testing, Health data interoperability, Medical device software regulation, People management.

## Automation target

| Test engineering expected by role | Programme automation target | In practice |
| --- | --- | --- |
| Awareness | Awareness, with simple tests | As B3, plus writes simple browser tests with support. |

## Time

| Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- |
| 1.5 days a week | 270 | To 32 weeks |

From week 10 you automate real work on your team's product every week, at this track's depth.

## Learning outcomes, at this track's depth

| Id | Outcome | Depth |
| --- | --- | --- |
| LO1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | With support |
| LO2 | Write, run, debug, and refactor JavaScript code to the team's standards. | With support |
| LO3 | Change test code through git and pull requests, and give and respond to review. | With support |
| LO4 | Locate, act, wait explicitly, and assert with Selenium WebDriver, using resilient locators. | With support |
| LO5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | With support |
| LO6 | Write automated API and integration tests, including HL7 FHIR validation. | Read and explain |
| LO7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | With support |
| LO8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | Independently |
| LO9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | With support |
| LO10 | Diagnose flaky tests and measure suite health with flow metrics. | Read and explain |
| LO11 | Read and make a small change to an existing Playwright suite. | Read and explain |
| LO12 | Plan, build or lead, and explain an automated regression suite for a real service. | With support |
| LO13 | Fully meet the person's own band and PCF role, measured by the capability self-assessment. | Overall capability index of at least 90% at Gate 4 |

## Module depths

| Module | Depth |
| --- | --- |
| M0 Induction and baseline | Independent |
| M1 Why and what to automate | With support |
| M2 Programming foundations | With support |
| M3 Version control and collaboration | With support |
| M4 Browser automation fundamentals | With support |
| M5 From walkthrough to real test | With support |
| M6 API, integration, and FHIR tests | Read and discuss |
| M7 Continuous integration and DevOps | With support |
| M8 Safe and lawful test automation | Independent |
| M9 Quality engineering practice | Read and discuss |
| M10 Capstone | With support |
| R1 Role foundations | Set by ILP |
| R2 Health care foundations | Independent |

## Track modules

- [R1 Role foundations](../r1-role-foundations/index.md)
- [R2 Health care foundations](../r2-health-care-foundations/index.md)

## Capstone (M10, weeks 20 to 24)

Automate 5 manual cases with support, with a spec, running in CI.

You present it to the Gate 4 panel for 10 minutes, aimed at a non-technical audience.

## Gates and practicals

Gates are in weeks 0, 6, 12, 18, 24, and 48. Each Part D practical takes **30 minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#b4-qa). Thresholds and conditions are in the [gates overview](../../gates/index.md).

With the optional 32-week extension, the gates move to weeks 0, 8, 16, 24, 32, and 56.

## Mentor

Your mentor is at least one band above you (Band 5 or higher) and at or above your automation target in test engineering (Awareness, with simple tests). One mentor supports up to 3 participants.

## Related

- [Gates overview](../../gates/index.md)
- [Calibration guide](../../gates/calibration-guide.md)
- [Individual learning plan template](../../gates/ilp-template.md)
- [Learning agreement template](../../gates/learning-agreement-template.md)
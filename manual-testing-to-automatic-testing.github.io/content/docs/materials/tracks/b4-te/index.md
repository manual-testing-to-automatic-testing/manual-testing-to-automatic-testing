# Track guide: B4-TE

This is the one-page guide for track **B4-TE**. It is copied from [spec/index.md](../../../spec/index.md), which is the single source of truth. If this page and the spec disagree, the spec wins.

Nobody changes band or role because of this programme. Reaching an automation target above the role's expectation is a strength, not a regrade.

## Who it is for

Manual testers at Band 4 who have the UK GDaD PCF role Test engineer, at associate level.

| Band | UK GDaD PCF role | Reference role level | Reference points | Band points range |
| --- | --- | --- | --- | --- |
| 4 | Test engineer | Associate test engineer | 275 | 271–325 |

If your band and assigned role have no reference role level, the mapping rule in the spec places you, and your individual learning plan (ILP) records the decision.

## Your capability self-assessment

At every gate you complete the full instrument for this track: `instruments/band-4-associate-test-engineer.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (UK GDaD PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).

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
| Awareness | Awareness, with maintained tests | Writes and maintains simple automated tests under supervision, as the role requires. |

## Time

| Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- |
| 7.5 hours a week, by default | 220 | To 280 hours |

From hour 67.5, about 1.5 hours in every 7.5 hours of learning is real automation on your team's product, at this track's depth.

## Learning outcomes, at this track's depth

| Id | Outcome | Depth |
| --- | --- | --- |
| LO1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | With support |
| LO2 | Write, run, debug, and refactor JavaScript code to the team's standards. | With support |
| LO3 | Change test code through git and pull requests, and give and respond to review. | With support |
| LO4 | Locate, act, wait explicitly, and assert with Selenium WebDriver, using resilient locators. | Independently |
| LO5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | With support |
| LO6 | Write automated API and integration tests, including HL7 FHIR validation. | With support |
| LO7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | With support |
| LO8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | Independently |
| LO9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | With support |
| LO10 | Diagnose flaky tests and measure suite health with flow metrics. | With support |
| LO11 | Read, run, and make a small change to an existing Selenium suite that someone else wrote. | With support |
| LO12 | Plan, build or lead, and explain an automated regression suite for a real service. | With support |
| LO13 | Fully meet the person's own band and UK GDaD PCF role, measured by the capability self-assessment. | Overall capability index of at least 90% at Gate 4 |
| LO14 | Apply Lean Six Sigma (DMAIC) to measure and improve a testing process, and hold a Green Belt certification that does not expire. | With support |

## Module depths

| Module | Depth |
| --- | --- |
| M0 Induction and baseline | Independent |
| M1 Why and what to automate | With support |
| M2 Programming foundations | With support |
| M3 Version control and collaboration | With support |
| M4 Browser automation fundamentals | Independent |
| M5 From walkthrough to real test | With support |
| M6 API, integration, and FHIR tests | With support |
| M7 Continuous integration and DevOps | With support |
| M8 Safe and lawful test automation | Independent |
| M9 Quality engineering practice | With support |
| M10 Capstone | With support |
| M11 Lean Six Sigma Green Belt | With support |
| R1 Role foundations | Set by ILP |
| R2 Health care foundations | Independent |

## Track modules

- [R1 Role foundations](../r1-role-foundations/index.md)
- [R2 Health care foundations](../r2-health-care-foundations/index.md)

## Capstone (M10, hours 142.5 to 180)

Automate 10 cases, including 2 API tests, and maintain an existing suite over 30 learning hours.

You present it to the Gate 4 panel for 10 minutes, aimed at a non-technical audience.

## Lean Six Sigma Green Belt (M11, hours 180 to 220)

After Gate 4, every track takes the same 40-hour Lean Six Sigma Green Belt, with a certification that does not expire. You complete the programme when Gate 4 is met and you hold the certificate with an accepted Green Belt project (E11).

Your Green Belt project is a named part of a team project, led by your mentor or a B6 or B7 colleague. See the [M11 module](../../modules/m11-lean-six-sigma-green-belt/index.md).

## Gates and practicals

Gates are at programme hours 0, 45, 90, 127.5, and 180, and Gate 5 follows about six months after Gate 4. Each Part D practical takes **30 minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#b4-te). Thresholds and conditions are in the [gates overview](../../gates/index.md).

With the optional extension to 280 hours, the gates move to hours 0, 60, 120, 172.5, and 240, and M11 runs in hours 240 to 280.

## Mentor

Your mentor is at least one band above you (Band 5 or higher) and at or above your automation target in test engineering (Awareness, with maintained tests). One mentor supports up to 3 participants.

## Related

- [Gates overview](../../gates/index.md)
- [Calibration guide](../../gates/calibration-guide.md)
- [Individual learning plan template](../../gates/ilp-template.md)
- [Learning agreement template](../../gates/learning-agreement-template.md)
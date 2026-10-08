# Track for Band 3 associate quality assurance test analyst

This is the one-page guide for track **Band 3**.

## Who it is for

Manual testers at Band 3 who have an associate-level UK GDaD PCF role (Quality assurance test analyst or Test engineer). The reference has no testing role level at Band 3, so this track uses the associate UK GDaD PCF role level for Parts B and C, and the Band 3 outline for Part A.

| Band | UK GDaD PCF role | Reference role level | Reference points | Band points range |
| --- | --- | --- | --- | --- |
| 3 | Quality assurance test analyst or Test engineer, associate level | Associate quality assurance test analyst or Associate test engineer, tuned to Band 3 | Agreed at Gate 0 | 216–270 |

If your band and UK GDaD PCF role have no reference role level, the mapping rule in the spec places you, and your individual learning plan records the decision.

## Your capability self-assessment

At every gate you complete the full instrument for this track: `instruments/band-3-associate-quality-assurance-test-analyst.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (UK GDaD PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).

### Part A: band outline (Band 3)

| Dimension | Band expectation |
| --- | --- |
| A1 Knowledge | Knowledge of a range of procedures, some non-routine; typically a level 3 qualification or equivalent experience. |
| A2 Autonomy | Works within procedures; decides how to organise own work; refers problems upward. |
| A3 Scope | Own work and some tasks for the wider team. |
| A4 Leadership | May allocate routine work or train others in procedures. |
| A5 Accountability | Accuracy of own work and of records kept. |

### Part A: job evaluation factors (reference levels)

| Id | Factor | Reference level |
| --- | --- | --- |
| A6 | Communication and relationship skills | Agreed at Gate 0 |
| A7 | Knowledge, training, and experience | Agreed at Gate 0 |
| A8 | Analytical and judgemental skills | Agreed at Gate 0 |
| A9 | Planning and organisational skills | Agreed at Gate 0 |
| A10 | Physical skills | Agreed at Gate 0 |
| A11 | Responsibility for patient and client care | Agreed at Gate 0 |
| A12 | Responsibility for policy and service development | Agreed at Gate 0 |
| A13 | Responsibility for financial and physical resources | Agreed at Gate 0 |
| A14 | Responsibility for people | Agreed at Gate 0 |
| A15 | Responsibility for information resources | Agreed at Gate 0 |
| A16 | Responsibility for research and development | Agreed at Gate 0 |
| A17 | Freedom to act | Agreed at Gate 0 |
| A18 | Physical effort | Agreed at Gate 0 |
| A19 | Mental effort | Agreed at Gate 0 |
| A20 | Emotional effort | Agreed at Gate 0 |
| A21 | Working conditions | Agreed at Gate 0 |

For Band 3, every factor level is agreed at Gate 0 from your own job description, with a total within 216 to 270 points.

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
| Awareness | Awareness | Runs existing automated suites, reads results, raises defects from failures, writes Given-When-Then scenarios, makes small changes to existing tests with support. |

## Time

| Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- |
| 7.5 hours a week, by default | 220 | To 280 hours |

From hour 67.5, about 1.5 hours in every 7.5 hours of learning is real automation on your team's product, at this track's depth.

## Learning outcomes, at this track's depth

| Id | Outcome | Depth |
| --- | --- | --- |
| Learning outcome 1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | Read and explain |
| Learning outcome 2 | Write, run, debug, and refactor JavaScript code to the team's standards. | Read and explain |
| Learning outcome 3 | Change test code through git and pull requests, and give and respond to review. | With support |
| Learning outcome 4 | Locate, act, wait explicitly, and assert with Selenium, using resilient locators. | With support |
| Learning outcome 5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | With support |
| Learning outcome 6 | Write automated API and integration tests, including HL7 FHIR validation. | Not required |
| Learning outcome 7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | With support |
| Learning outcome 8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | Independently |
| Learning outcome 9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | Read and explain |
| Learning outcome 10 | Diagnose flaky tests and measure suite health with flow metrics. | Read and explain |
| Learning outcome 11 | Read, run, and make a small change to an existing Selenium suite that someone else wrote. | Not required |
| Learning outcome 12 | Plan, build or lead, and explain an automated regression suite for a real service. | With support |
| Learning outcome 13 | Fully meet the person's own band and UK GDaD PCF role, measured by the capability self-assessment. | Overall capability index of at least 90% at Gate 4 |
| Learning outcome 14 | Apply Lean Six Sigma (DMAIC) to measure and improve a testing process, and hold a Green Belt certification that does not expire. | With support |

## Module depths

| Module | Depth |
| --- | --- |
| Module 0 Induction and baseline | Independent |
| Module 1 Why and what to automate | Read and discuss |
| Module 2 Programming foundations | Read and discuss |
| Module 3 Version control and collaboration | With support |
| Module 4 Browser automation fundamentals | With support |
| Module 5 From walkthrough to real test | With support |
| Module 7 Continuous integration and DevOps | With support |
| Module 8 Safe and lawful test automation | Independent |
| Module 9 Quality engineering practice | Read and discuss |
| Module 10 Capstone | With support |
| Module 11 Lean Six Sigma Green Belt | With support |
| Role foundations | Set by the individual learning plan |
| Health care foundations | Independent |

## Track modules

- [Role foundations](../role-foundations/index.md)
- [Health care foundations](../health-care-foundations/index.md)

## Capstone (Module 10, hours 142.5 to 180)

Triage one week of CI results and raise defects; write 5 Given-When-Then scenarios; make 2 reviewed changes to existing tests.

You present it to the Gate 4 panel for 10 minutes, aimed at a non-technical audience.

## Lean Six Sigma Green Belt (40 hours)

After Gate 4, every track takes the same 40-hour Lean Six Sigma Green Belt, with a certification that does not expire. You complete the programme when Gate 4 is met and you hold the certificate with an accepted Green Belt project (Evidence 11).

Your Green Belt project is a named part of a team project, led by your mentor or a Band 6 or Band 7 colleague. See the [Module 11 module](../../modules/module-11-lean-six-sigma-green-belt/index.md).

## Gates and practicals

Gates are at programme hours 0, 45, 90, 127.5, and 180, and Gate 5 follows about six months after Gate 4. Each Part D practical takes **30 minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#band-3). Thresholds and conditions are in the [gates overview](../../gates/index.md).

With the optional extension to 280 hours, the gates move to hours 0, 60, 120, 172.5, and 240, and Module 11 runs in hours 240 to 280.

## Mentor

Your mentor is at least one band above you (Band 4 or higher) and at or above your automation target in test engineering (Awareness). One mentor supports up to 3 participants.

## Related

- [Gates overview](../../gates/index.md)
- [Calibration guide](../../gates/calibration-guide.md)
- [Individual learning plan template](../../gates/individual-learning-plan-template.md)
- [Learning agreement template](../../gates/learning-agreement-template.md)
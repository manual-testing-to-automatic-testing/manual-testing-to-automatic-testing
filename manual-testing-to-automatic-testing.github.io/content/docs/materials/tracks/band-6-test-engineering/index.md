# Track for Band 6 test engineer

This is the one-page guide for track **Band 6 test engineering**.

## Your capability self-assessment

At every gate you complete the full instrument for this track: `instruments/band-6-test-engineer.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (UK GDaD PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).

### Part A: band outline (Band 6)

| Dimension | Band expectation |
| --- | --- |
| Part A item 1: Knowledge | Specialist knowledge across a range of procedures, built through further training or experience. |
| Part A item 2: Autonomy | Works independently; interprets policy for own area; seeks advice on complex issues. |
| Part A item 3: Scope | A product, service, or workstream. |
| Part A item 4: Leadership | May lead a small team or mentor colleagues. |
| Part A item 5: Accountability | Outcomes of own workstream and quality of advice given. |

### Part A: job evaluation factors (reference levels)

| Id | Factor | Reference level |
| --- | --- | --- |
| Part A item 6 | Communication and relationship skills | 4 |
| Part A item 7 | Knowledge, training, and experience | 6 |
| Part A item 8 | Analytical and judgemental skills | 4 |
| Part A item 9 | Planning and organisational skills | 3 |
| Part A item 10 | Physical skills | 3 |
| Part A item 11 | Responsibility for patient and client care | 1 |
| Part A item 12 | Responsibility for policy and service development | 2 |
| Part A item 13 | Responsibility for financial and physical resources | 1 |
| Part A item 14 | Responsibility for people | 1 |
| Part A item 15 | Responsibility for information resources | 4 |
| Part A item 16 | Responsibility for research and development | 2 |
| Part A item 17 | Freedom to act | 4 |
| Part A item 18 | Physical effort | 1 |
| Part A item 19 | Mental effort | 4 |
| Part A item 20 | Emotional effort | 1 |
| Part A item 21 | Working conditions | 2 |

A factor meets when the agreed level is at or above the reference level. One level below is Partly. Two or more below is Not yet. A skill in Part C meets when the gap is 0 or less, is Partly when the gap is 1, and is Not yet when the gap is 2 or more.

### Part C: expected skill levels

| Skill | Source | Expected level |
| --- | --- | --- |
| Test analysis | UK GDaD PCF | Working |
| Test and quality planning | UK GDaD PCF | Working |
| Designing and executing tests | UK GDaD PCF | Working |
| Test engineering | UK GDaD PCF | Working |
| Managing, reporting and resolving defects | UK GDaD PCF | Working |
| Communicating between the technical and non-technical | UK GDaD PCF | Working |
| Understanding health and care services | Health care | Working |
| Clinical risk management | Health care | Working |
| Information governance and data protection | Health care | Working |
| Health data interoperability | Health care | Working |

Not in this role level: Business and user acceptance testing, Medical device software regulation, People management.

## Automation target

| Test engineering expected by role | Programme automation target | In practice |
| --- | --- | --- |
| Working | Working | Designs, builds, and maintains automated suites and adds them to pipelines. |

## Time

| Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- |
| 7.5 hours a week, by default | 280 | — |

From hour 127.5, about 1.5 hours in every 7.5 hours of learning is real automation on your team's product, at this track's depth.

## Learning outcomes, at this track's depth

| Id | Outcome | Depth |
| --- | --- | --- |
| Learning outcome 1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | Independently |
| Learning outcome 2 | Write, run, debug, and refactor JavaScript code to the team's standards. | Independently |
| Learning outcome 3 | Change test code through git and pull requests, and give and respond to review. | Independently |
| Learning outcome 4 | Locate, act, wait explicitly, and assert with Selenium, using resilient locators. | Independently |
| Learning outcome 5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | Independently |
| Learning outcome 6 | Write automated API and integration tests, including HL7 FHIR validation. | Independently |
| Learning outcome 7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | Independently |
| Learning outcome 8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | Independently |
| Learning outcome 9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | Independently |
| Learning outcome 10 | Diagnose flaky tests and measure suite health with flow metrics. | Independently |
| Learning outcome 11 | Read, run, and make a small change to an existing Selenium suite that someone else wrote. | Independently |
| Learning outcome 12 | Plan, build or lead, and explain an automated regression suite for a real service. | Independently |
| Learning outcome 13 | Fully meet the person's own band and UK GDaD PCF role, measured by the capability self-assessment. | Overall capability index of at least 90% at Gate 4 |
| Learning outcome 14 | Apply Lean Six Sigma (DMAIC) to measure and improve a testing process, and hold a Green Belt certification that does not expire. | Independently |
| Learning outcome 15 | Read, run, and explain a simple program with variables, functions, conditionals, and loops, in JavaScript or another language. | Independently |
| Learning outcome 16 | Write, run, and explain a browser automation script that requests a page, waits for it, selects elements by id, verifies text, clicks links, buttons, and select boxes, fills in form fields, and submits. | Independently |
| Learning outcome 17 | Use an AI assistant to get training advice, plan continuing professional development, compare concepts, explain code, and convert between user stories, Given-When-Then scenarios, and Selenium JavaScript, checking every answer. | Independently |

## Module depths

| Module | Depth |
| --- | --- |
| Module 0 Basics of a programming language | Independent |
| Module 1 Basics of a browser automator | Independent |
| Module 2 Basics of an AI assistant | Independent |
| Module 3 Induction and baseline | Independent |
| Module 4 Why and what to automate | Independent |
| Module 5 Programming foundations | Independent |
| Module 6 Version control and collaboration | Independent |
| Module 7 Browser automation fundamentals | Independent |
| Module 8 From walkthrough to real test | Independent |
| Module 9 API, integration, and FHIR tests | Independent |
| Module 10 Continuous integration and DevOps | Independent |
| Module 11 Safe and lawful test automation | Independent |
| Module 12 Quality engineering practice | Independent |
| Module 13 Capstone | Independent |
| Module 14 Lean Six Sigma Green Belt | Independent |
| Role foundations | Set by the individual learning plan |
| Health care foundations | Independent |
| Coaching others in automation | Lead or coach |
| Frameworks and non-functional testing | Read and discuss |

## Track modules

- [Role foundations](../role-foundations/index.md)
- [Health care foundations](../health-care-foundations/index.md)
- [Coaching others in automation](../coaching-others-in-automation/index.md)
- [Frameworks and non-functional testing (read only)](../frameworks-and-non-functional-testing/index.md)

## Capstone (Module 13, hours 202.5 to 240)

An automated regression suite for a product slice of 15–30 manual cases: plan, browser and API tests, spec, synthetic data, CI, traceability, and handover README.

You present it to the Gate 4 panel for 20 minutes, aimed at a non-technical audience.

## Lean Six Sigma Green Belt (40 hours)

Every track has Lean Six Sigma training. You will earn your Lean Six Sigma Green Belt lifetime certification. You will work with your real team on your Lean Six Sigma Green Belt project. Estimate 40 hours for Lean Six Sigma training.

Your Green Belt project is a small project of your own, on your team's testing process. See the [Module 14 module](../../modules/module-14-lean-six-sigma-green-belt/index.md).

## Gates and practicals

Gates are at programme hours 60, 105, 150, 187.5, and 240, and Gate 5 follows about six months after Gate 4. Each Part D practical takes **60 minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#band-6-test-engineering). Thresholds and conditions are in the [gates overview](../../gates/index.md).

## Mentor

Your mentor is at least one band above you (Band 7 or higher) and at or above your automation target in test engineering (Working). One mentor supports up to 3 participants.

## Related

- [Gates overview](../../gates/index.md)
- [Calibration guide](../../gates/calibration-guide.md)
- [Individual learning plan template](../../gates/individual-learning-plan-template.md)
- [Learning agreement template](../../gates/learning-agreement-template.md)
# Specification: formal training programme from manual testing to automatic testing

## Summary

This programme upskills **manual testers at Bands 3 to 7** into **automatic testers**, over **220 hours** of protected learning time, ending with a **Lean Six Sigma Green Belt** lifetime certification, while each person **stays in their current band and their assigned UK GDaD PCF role**. Nobody changes band because of this programme.

Each person has already been given a UK GDaD PCF role (Quality assurance test analyst, Test engineer, or Test manager) at a role level. The programme has two aims, in this order:

1. **Close the capability gap in the role the person already holds**, to at least 90% at Gate 4, measured formally at every gate.
2. **Build automated testing capability** to a target set for each band and role, which for some tracks is above what the role itself requires.

The programme comes in **eight tuned tracks**, one for each band and assigned role combination (B3, B4-QA, B4-TE, B5-QA, B6-QA, B6-TE, B7-TE, B7-TM). All tracks share one schedule, one set of gates, and one set of core modules, so a mixed cohort learns together. The tracks differ in depth, extra modules, gate evidence, and capstone; every track has the same 220 hours, ending with the Lean Six Sigma Green Belt.

**Gates are the backbone of the programme.** At every gate, each person completes the same full **capability self-assessment**, which their manager also rates:

- **Part A, band:** all 21 band dimensions. These are the 5 band outline dimensions and the 16 job evaluation factors.
- **Part B, UK GDaD PCF role aspects:** every UK GDaD PCF role and role level statement, plus the reference responsibilities.
- **Part C, skills:** every UK GDaD PCF skill in the assigned role, plus the health care skills.
- **Part D, automation practical:** a short performance task for the track.

The toolset is **JavaScript** on Node.js, **Selenium WebDriver** for the browser, and **Mocha** with Node's built-in `node:assert/strict` for tests, in Visual Studio Code, with git and the organisation's continuous integration (CI) service.

This document is the **single source of truth** for the programme. [../plan.md](../plan.md) explains why it is shaped this way. [../tasks.md](../tasks.md) lists the work to build and run it. If the three disagree, this document wins, and the disagreement is a defect to fix before doing anything else.

## Scope

In scope:

- Manual testers at Bands 3, 4, 5, 6, and 7 in the quality assurance testing role family, each with a UK GDaD PCF role.
- A cohort of up to 12 people, in any mix of tracks, sharing mentors and core sessions.
- Formal measurement of each person's capability against their **current** band, UK GDaD PCF role level, and skills, at every gate.
- Closing role and skill gaps that are not about automation, because capability is measured across the whole role.
- A Lean Six Sigma Green Belt, with a lifetime certification, for every participant, applied to their own team's testing process.
- Automated testing: browser, API and integration tests, an introduction to unit tests, CI pipelines, test code quality, synthetic test data, and traceability to clinical safety evidence, at a depth set per track.
- For Band 7 senior test engineers: reusable frameworks and performance, load, and resilience testing.
- For Band 7 test managers: automation strategy, metrics, and leading adoption.

Out of scope:

- **Changing band, re-banding, or regrading.** The programme measures people against the band they hold. A person who exceeds their role's expectations has a strength, recorded as a negative gap. That does not change their band.
- Formal capability or performance procedures. The programme supports development. A gate result never starts an HR procedure by itself (see [Principle 14](#principles-and-rules)).
- Staff outside the quality assurance testing role family.
- Choosing an organisation-wide automation tool (see [Decision D1](#decisions)).

## Principles and rules

1. **Same band, full capability.** The first goal is that each person fully meets their current band and UK GDaD PCF role. Automation is how most of the gap gets closed, but it is not the whole of it.
2. **Measure the whole role, every gate.** Every gate repeats the full capability self-assessment (Parts A to D), not just the items the module taught, so progress and regression across the whole role are both visible.
3. **Self-assessment first, then calibration.** The person rates themselves, the manager rates independently, and the two then agree a rating, with evidence. The agreed rating counts.
4. **Evidence for every "meets".** An item rated as meeting expectations must have a short, specific example of regular work. Rate what the person does regularly, not what they did once.
5. **A gap is not a failing.** Gaps are expected. They show where development is most useful, and the programme says so openly.
6. **Backward design.** Every module starts from its outcomes, then its evidence, then its activities.
7. **Tuned, not separate.** All tracks share the core modules and gate dates. Tracks differ in depth, hours, extra modules, and evidence.
8. **Build on the tester's strengths.** Each person's own team's manual regression pack and product are the practice material.
9. **One language, one tool, first.** Do not add a second language or tool before Gate 2.
10. **Wait explicitly, never sleep.** Selenium does not wait for elements by itself. Every wait in assessed code is an explicit wait for a stated condition, with `driver.wait(until...)`. Fixed sleeps, implicit waits, and retries that hide timing are not accepted.
11. **Spiral, not single pass.** The core skills of **locate, act, wait, assert** are taught three times, at rising depth: on the fixture site, on a worked example, and on the person's own product. The capability self-assessment also spirals: the same instrument at every gate.
12. **A walkthrough is not a test.** Assessed test code must make real assertions that fail when the behaviour is wrong, and must have a `spec/index.md` that agrees with the code.
13. **Safety and governance first.** Synthetic data only, no real patient data, and no secrets in source control. Clinical risk management and information governance must meet expectations by Gate 2, whatever else is still open.
14. **Developmental, not disciplinary.** Gate results support development planning. They do not start capability, performance, or conduct procedures. Any such procedure follows the organisation's HR policy, separately.
15. **AI is an aid that is reviewed.** People may use AI assistants and must be able to explain every line they submit.
16. **Protected time is protected.** Learning hours are in calendars and are not reassigned without the training lead's agreement. If more than 7.5 hours are lost in a gate period, that is escalated to the training lead, because it is a whole week of learning at the default pace.
17. **Inclusive by design.** Every module offers more than one way to learn and to show evidence. Reasonable adjustments are agreed at Gate 0.
18. **Read, don't hammer, third-party sites.** Practise on the testingexamples fixture site, local services, and the organisation's own test environments.

## Detail

### Population and starting position

Each participant:

- is a manual tester at Band 3, 4, 5, 6, or 7
- has an assigned UK GDaD PCF role and role level in the quality assurance testing role family
- stays in that band and role during and after the programme

Gate 0 sets a formal, evidenced baseline for each person.

### Tracks

Each person joins the track for their **band** and **UK GDaD PCF role**.

| Track | Band | UK GDaD PCF role | Reference role level | Reference points | Band points range |
| --- | --- | --- | --- | --- | --- |
| B3 | 3 | Quality assurance test analyst or Test engineer, associate level | Associate quality assurance test analyst or Associate test engineer, tuned to Band 3 | Agreed at Gate 0 | 216–270 |
| B4-QA | 4 | Quality assurance test analyst | Associate quality assurance test analyst | 275 | 271–325 |
| B4-TE | 4 | Test engineer | Associate test engineer | 275 | 271–325 |
| B5-QA | 5 | Quality assurance test analyst | Quality assurance test analyst | 327 | 326–395 |
| B6-QA | 6 | Quality assurance test analyst | Senior quality assurance test analyst | 404 | 396–465 |
| B6-TE | 6 | Test engineer | Test engineer | 411 | 396–465 |
| B7-TE | 7 | Test engineer | Senior test engineer | 477 | 466–539 |
| B7-TM | 7 | Test manager | Test manager | 499 | 466–539 |

**Band 3:** the roles-skills reference has no quality assurance testing role level at Band 3. Its associate levels sit at Band 4, at 275 points. The B3 track therefore uses the associate UK GDaD PCF role level for Parts B and C, and the Band 3 outline for Part A. The expected job evaluation factor levels for Part A are agreed at Gate 0 from the person's own job description, with a total within 216 to 270 points.

**Mapping rule for other combinations.** If a person's band and assigned role have no reference role level, for example a Band 5 test engineer or a Band 7 quality assurance test analyst:

1. Part A uses the person's **own band** outline, and factor levels agreed at Gate 0 from their job description.
2. Parts B and C use the assigned role's reference level with the **closest band below** the person's band.
3. The person joins the track for that reference level, at the depth and hours of their own band.
4. The line manager, training lead, and HR record the mapping in the individual learning plan (see [Decision D6](#decisions)).

### Capability self-assessment

This is the gate instrument. Each person completes it in full at every gate. It is generated from the roles-skills reference (`reference.json`, which compiles `data/bands.yaml`, `data/job-evaluation.yaml`, `data/roles/*.yaml`, and the skills catalogue) by `scripts/build_instrument.py`, into one file per track in `instruments/`. `scripts/capability_index.py` calculates the capability index from a completed file.

#### Part A: band (21 dimensions)

**A1 to A5, band outline dimensions.** Rate each against the person's own band:

| Band | Knowledge | Autonomy | Scope | Leadership | Accountability |
| --- | --- | --- | --- | --- | --- |
| 3 | Knowledge of a range of procedures, some non-routine; typically a level 3 qualification or equivalent experience. | Works within procedures; decides how to organise own work; refers problems upward. | Own work and some tasks for the wider team. | May allocate routine work or train others in procedures. | Accuracy of own work and of records kept. |
| 4 | Detailed knowledge of the work area, typically from a foundation degree, apprenticeship, or equivalent experience. | Works within guidelines; resolves most day-to-day problems; manager available for advice. | Own work and a defined service or process. | May supervise a small team or coordinate others' work. | Delivery of a defined service or process. |
| 5 | Professional or technical knowledge, typically from a degree or equivalent experience. | Works to broad objectives within professional standards; plans own work. | Own professional work within a team or product. | May guide and check the work of support staff and apprentices. | Quality of own professional work. |
| 6 | Specialist knowledge across a range of procedures, built through further training or experience. | Works independently; interprets policy for own area; seeks advice on complex issues. | A product, service, or workstream. | May lead a small team or mentor colleagues. | Outcomes of own workstream and quality of advice given. |
| 7 | Highly developed specialist knowledge, typically to master's level or equivalent experience. | Works to organisational policy; decides how results are achieved; is the expert others consult. | Several products or services, or a specialist function. | Leads a team or a professional practice area. | Delivery of a service or specialist function, and its budget if held. |

Rating: **Not yet**, **Partly**, or **Meets**.

**A6 to A21, job evaluation factors.** For each of the 16 factors, the person chooses the factor level whose summary best describes what they do regularly now. That level is compared with the reference level for their track. The level summaries are in `data/job-evaluation.yaml`. As the scheme itself says, a real job evaluation scores the job, not the person. Here the factors are used as a self-assessment of how fully the person is working at the level their job requires. That is not a job evaluation, and it never changes the job's band.

| Id | Factor | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A6 | Communication and relationship skills | G0 | 3 | 3 | 4 | 4 | 4 | 4 | 5 |
| A7 | Knowledge, training, and experience | G0 | 4 | 4 | 5 | 6 | 6 | 7 | 7 |
| A8 | Analytical and judgemental skills | G0 | 3 | 3 | 3 | 4 | 4 | 4 | 4 |
| A9 | Planning and organisational skills | G0 | 2 | 2 | 2 | 3 | 3 | 3 | 4 |
| A10 | Physical skills | G0 | 3 | 3 | 3 | 3 | 3 | 3 | 2 |
| A11 | Responsibility for patient and client care | G0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| A12 | Responsibility for policy and service development | G0 | 2 | 2 | 2 | 2 | 2 | 3 | 3 |
| A13 | Responsibility for financial and physical resources | G0 | 1 | 1 | 1 | 1 | 1 | 1 | 2 |
| A14 | Responsibility for people | G0 | 1 | 1 | 1 | 2 | 1 | 2 | 3 |
| A15 | Responsibility for information resources | G0 | 3 | 3 | 3 | 3 | 4 | 5 | 4 |
| A16 | Responsibility for research and development | G0 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| A17 | Freedom to act | G0 | 2 | 2 | 3 | 4 | 4 | 4 | 4 |
| A18 | Physical effort | G0 | 2 | 2 | 2 | 1 | 1 | 1 | 1 |
| A19 | Mental effort | G0 | 3 | 3 | 3 | 3 | 4 | 4 | 4 |
| A20 | Emotional effort | G0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| A21 | Working conditions | G0 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |

"G0" means agreed at Gate 0 (see [Tracks](#tracks)). A factor **meets** when the agreed level is at or above the reference level. A factor at one level below is **Partly**. Two or more levels below is **Not yet**. Effort and working-conditions factors (A18 to A21) describe the job's demands. They are rated so the picture is complete, are almost always **Meets**, and are reviewed only if the person reports a mismatch, which may need a reasonable adjustment.

#### Part B: UK GDaD PCF role aspects

Part B has one item for each statement in:

- **B1, the UK GDaD PCF role description:** each "In this role, you will" statement for the UK GDaD PCF role (Quality assurance test analyst, Test engineer, or Test manager).
- **B2, the UK GDaD PCF role level description:** each "At this role level, you will" statement for the person's reference role level.
- **B3, the reference responsibilities:** each responsibility listed for the reference role level in `data/roles/<role>.yaml`, which adds the health care context.

Rating: **Not yet**, **Partly**, or **Meets**, each with evidence.

#### Part C: skills

Part C has one item for **every UK GDaD PCF skill in the UK GDaD PCF role**, plus every health care skill in the reference role level. Every skill is rated at every gate, including skills the person's level expects only at Awareness, so progress beyond expectations shows as a strength.

Rating: the self-assessment scale from the roles-skills guide: **0 Not yet, 1 Awareness, 2 Working, 3 Practitioner, 4 Expert**. Gap = expected level minus agreed rating. A skill **meets** when the gap is 0 or less, is **Partly** when the gap is 1, and is **Not yet** when the gap is 2 or more.

Expected levels (A Awareness, W Working, P Practitioner, E Expert, — not in this role level):

| Skill | Source | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Test analysis | UK GDaD PCF | A | A | A | W | P | W | P | P |
| Test and quality planning | UK GDaD PCF | A | A | A | W | P | W | P | E |
| Designing and executing tests | UK GDaD PCF | A | A | A | W | P | W | P | P |
| Test engineering | UK GDaD PCF | A | A | A | A | A | W | P | A |
| Managing, reporting and resolving defects | UK GDaD PCF | A | A | A | W | P | W | P | E |
| Communicating between the technical and non-technical | UK GDaD PCF | A | A | A | W | P | W | P | E |
| Business and user acceptance testing | UK GDaD PCF | — | — | — | — | P | — | — | — |
| Understanding health and care services | Health care | A | A | A | W | W | W | W | P |
| Clinical risk management | Health care | A | A | A | W | W | W | W | P |
| Information governance and data protection | Health care | A | A | A | W | W | W | W | W |
| Health data interoperability | Health care | — | — | — | A | W | W | P | W |
| Medical device software regulation | Health care | — | — | — | — | — | — | A | W |
| People management | Health care | — | — | — | — | — | — | — | P |

#### Automation targets

The programme's automation target for **test engineering** is set per track. For some tracks it is above what the role requires. Reaching it is a programme outcome and a recorded strength. It is not a change of band or role.

| Track | Test engineering expected by role | Programme automation target | In practice |
| --- | --- | --- | --- |
| B3 | Awareness | Awareness | Runs existing automated suites, reads results, raises defects from failures, writes Given-When-Then scenarios, makes small changes to existing tests with support. |
| B4-QA | Awareness | Awareness, with simple tests | As B3, plus writes simple browser tests with support. |
| B4-TE | Awareness | Awareness, with maintained tests | Writes and maintains simple automated tests under supervision, as the role requires. |
| B5-QA | Awareness | **Working, with support** | Chooses what to automate, writes browser and API tests with some support, runs them in CI. |
| B6-QA | Awareness | **Working** | Sets the automation approach for an area, automates acceptance checks, reviews coverage against risk. |
| B6-TE | Working | Working | Designs, builds, and maintains automated suites and adds them to pipelines. |
| B7-TE | Practitioner | Practitioner | Builds reusable frameworks, maintains pipelines, runs performance tests, coaches others. |
| B7-TM | Awareness | **Working** | Writes enough automation to lead it credibly; owns automation strategy, metrics, and adoption. |

#### Part D: automation practical

At each gate from Gate 1, the person completes a short, supervised performance task for their track: 30 minutes for B3 and B4, 60 minutes for B5 to B7. The tasks rise in difficulty from gate to gate (see [Gates](#gates)). Rating: **Not yet**, **Partly**, or **Meets**.

#### Capability index

For each part, the **capability index** is the percentage of items rated **Meets**, using agreed ratings. Partly counts as half. The overall index is the mean of Parts A, B, and C. Part D is reported separately. The informal review suggests overall indexes around 50% at Gate 0.

#### Calibration

1. The person completes the self-assessment, with evidence, before the gate.
2. The line manager rates independently, without seeing the self-ratings.
3. They meet and agree each rating. Where they differ by more than one level, the evidence decides. If they still disagree, the mentor or training lead moderates.
4. The training lead samples 1 in 5 assessments across the cohort for consistency.

### Programme learning outcomes

Each track meets each outcome at a set depth: **R** read and explain, **S** with support, **I** independently, **L** leads or coaches others, **—** not required.

| Id | Outcome | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LO1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | R | S | S | I | L | I | L | L |
| LO2 | Write, run, debug, and refactor JavaScript code to the team's standards. | R | S | S | S | I | I | I | S |
| LO3 | Change test code through git and pull requests, and give and respond to review. | S | S | S | I | I | I | L | I |
| LO4 | Locate, act, wait explicitly, and assert with Selenium WebDriver, using resilient locators. | S | S | I | I | I | I | L | S |
| LO5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | S | S | S | I | I | I | L | S |
| LO6 | Write automated API and integration tests, including HL7 FHIR validation. | — | R | S | S | I | I | L | R |
| LO7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | S | S | S | I | I | I | L | I |
| LO8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | I | I | I | I | I | I | L | L |
| LO9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | R | S | S | I | L | I | L | L |
| LO10 | Diagnose flaky tests and measure suite health with flow metrics. | R | R | S | S | I | I | L | L |
| LO11 | Read, run, and make a small change to an existing Selenium suite that someone else wrote. | — | R | S | S | S | I | I | S |
| LO12 | Plan, build or lead, and explain an automated regression suite for a real service. | S | S | S | I | L | I | L | L |
| LO13 | Fully meet the person's own band and UK GDaD PCF role, measured by the capability self-assessment. | All tracks: overall capability index of at least 90% at Gate 4 |
| LO14 | Apply Lean Six Sigma (DMAIC) to measure and improve a testing process, and hold a Green Belt certification that does not expire. | S | S | S | I | L | I | L | L |

### Schedule and time

The programme is measured in **hours** of protected learning time. Every track has **220 hours** and the same gates, so a mixed cohort can learn together; the tracks differ in depth, not in hours. The default pace is **7.5 hours a week**, 20% of a 37.5-hour working week, so the programme runs over about 30 calendar weeks. The learning agreement may set another pace, such as two sessions of 3.75 hours a week; `scripts/gate_calendar.py` turns a pace into dates.

| Track | Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- | --- |
| B3 | 7.5 hours a week, by default | 220 | To 280 hours |
| B4-QA, B4-TE | 7.5 hours a week, by default | 220 | To 280 hours |
| B5-QA | 7.5 hours a week, by default | 220 | — |
| B6-QA, B6-TE | 7.5 hours a week, by default | 220 | — |
| B7-TE, B7-TM | 7.5 hours a week, by default | 220 | — |

The timeline is in programme hours, counted from 0 to 220: "hours 7.5–45" means after 7.5 and up to 45 hours of learning. The schedule below says in which hours each module runs.

Where the 220 hours go, for every track:

| Item | Programme hours | Hours |
| --- | --- | --- |
| M0 Induction and baseline, including Gate 0 | 0–7.5 | 6.5 |
| M1 Why and what to automate | 0–15 | 4.5 |
| M2 Programming foundations in JavaScript | 7.5–45 | 14.5 |
| M3 Version control and collaboration | 22.5–45 | 7 |
| M4 Browser automation fundamentals | 45–67.5 | 17.5 |
| M5 From walkthrough to real test | 67.5–90 | 12.5 |
| M6 API, integration, and FHIR tests | 90–112.5 | 15 |
| M7 Continuous integration and DevOps | 112.5–127.5 | 10 |
| M8 Safe and lawful test automation in health care | 127.5–142.5 | 7 |
| M9 Quality engineering practice | 135–150 | 6 |
| M10 Capstone | 142.5–180 | 27.5 |
| R1 Role foundations: 1 hour in every 7.5 hours of learning, from hour 7.5 | 7.5–180 | 23 |
| R2 Health care foundations: five sessions | 7.5–60 | 7 |
| Gates 1 to 4: 2.5 hours each | At 45, 90, 127.5, 180 | 10 |
| Real automation on the team's product: 1.5 hours in every 7.5 hours of learning (from hour 127.5, M8 and M10 work on the team's product) | 67.5–127.5 | 12 |
| M11 Lean Six Sigma Green Belt, lifetime certification | 180–220 | 40 |
| **Total** | **0–220** | **220** |

Track modules L1 to L5 take part of B6 and B7 participants' track breakouts and real automation time. B3 uses its M6 time for R1 and real automation. Each module's page in `materials/modules/` shows how its hours split into sessions.

From hour 67.5, about 1.5 hours in every 7.5 hours of learning is real automation on the person's own team's product, at their track's depth.

B3 does not take M6, so in hours 90–112.5 B3 participants spend that time on R1 role foundations and real automation.

Gate 3 takes place at hour 127.5, before M8 begins. It reviews E6 and E7; E8 is reviewed at Gate 4.

| Programme hours | Core modules | Track modules | Gate |
| --- | --- | --- | --- |
| 0–7.5 | M0 Induction and baseline | — | **Gate 0** (hour 0, baseline) |
| 0–15 | M1 Why and what to automate | R1 Role foundations starts (runs all programme) | — |
| 7.5–45 | M2 Programming foundations in JavaScript | R2 Health care foundations (hours 7.5–60) | — |
| 22.5–45 | M3 Version control and collaboration | — | **Gate 1** (hour 45) |
| 45–67.5 | M4 Browser automation fundamentals | — | — |
| 67.5–90 | M5 From walkthrough to real test | L1 Coaching others in automation (B6, B7, hours 67.5–150) | **Gate 2** (hour 90) |
| 90–112.5 | M6 API, integration, and FHIR tests | L4 Acceptance test automation (B6-QA, hours 90–127.5) | — |
| 112.5–127.5 | M7 Continuous integration and DevOps | L3 Frameworks and non-functional testing (B7-TE, hours 112.5–150) | — |
| 127.5–142.5 | M8 Safe and lawful test automation in health care | L2 Automation strategy and metrics (B6-QA, B7, hours 112.5–150) | **Gate 3** (hour 127.5) |
| 135–150 | M9 Quality engineering practice | L5 Leading teams through automation adoption (B7-TM, hours 112.5–150) | — |
| 142.5–180 | M10 Capstone (tuned per track) | — | **Gate 4** (hour 180) |
| 180–220 | M11 Lean Six Sigma Green Belt, lifetime certification | — | **Certification** (by hour 220) |
| After 24 | Consolidation: the six months after Gate 4 | — | **Gate 5** (follow-up, about six months after Gate 4) |

With the optional extension to 280 hours for B3 and B4, the gates move to hours 0, 60, 120, 172.5, and 240, M11 runs in hours 240–280, and Gate 5 follows about six months after Gate 4.

### Module depth by track

**R** read and discuss, **S** apply with support, **I** apply independently, **L** apply and lead or coach others, **—** not taken.

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M0 Induction and baseline | I | I | I | I | I | I | I | I |
| M1 Why and what to automate | R | S | S | I | L | I | L | L |
| M2 Programming foundations | R | S | S | S | I | I | I | S |
| M3 Version control and collaboration | S | S | S | I | I | I | L | I |
| M4 Browser automation fundamentals | S | S | I | I | I | I | L | S |
| M5 From walkthrough to real test | S | S | S | I | I | I | L | S |
| M6 API, integration, and FHIR tests | — | R | S | S | I | I | L | R |
| M7 Continuous integration and DevOps | S | S | S | I | I | I | L | I |
| M8 Safe and lawful test automation | I | I | I | I | L | I | L | L |
| M9 Quality engineering practice | R | R | S | S | I | I | L | L |
| M10 Capstone | S | S | S | I | L | I | L | L |
| M11 Lean Six Sigma Green Belt | S | S | S | I | L | I | L | L |
| R1 Role foundations | ILP | ILP | ILP | ILP | ILP | ILP | ILP | ILP |
| R2 Health care foundations | I | I | I | I | I | I | I | L |
| L1 Coaching others in automation | — | — | — | — | L | L | L | L |
| L2 Automation strategy and metrics | — | — | — | — | L | — | L | L |
| L3 Frameworks and non-functional testing | — | — | — | — | — | R | L | — |
| L4 Acceptance test automation | — | — | — | — | L | — | — | — |
| L5 Leading teams through automation adoption | — | — | — | — | — | — | — | L |

"ILP" means the content is set by the person's individual learning plan from their Gate 0 gaps.

### Core modules

Each module lists its outcomes, evidence, activities, and resources. The evidence ids (E0 to E11) are reviewed at the gates, and E11 also by the certification body. Where the evidence differs by track, the module says so. Otherwise every track produces the evidence at its depth from the table above.

#### M0 Induction and baseline (hours 0–7.5)

- **Outcomes:** each person, their manager, and the training lead agree where the person starts, their track, and their support.
- **Evidence E0:**
  - the full capability self-assessment (Parts A to C), with evidence, and the manager's independent rating, calibrated at Gate 0
  - the person's track, and any mapping decision (see [Tracks](#tracks))
  - an **individual learning plan (ILP)**: the gaps that matter most from Parts A to C, an action, owner, and date for each, the automation target, reasonable adjustments, and preferred learning formats
  - a signed learning agreement: protected time, mentor, and gate dates
  - a working development environment: Node.js 24, Google Chrome, VS Code with the ESLint extension, git, the practice repository with `npm run test:katas` passing, and access to the team's repository and CI. No Docker or other container tools are needed.
- **Activities:** induction with manager, mentor, and training lead; a briefing on how to self-assess honestly (a gap is not a failing); an unscored diagnostic coding exercise to tune M2 pacing; environment set-up with the mentor.
- **Resources:** the roles-skills reference pages for the person's role and band; the roles-skills self-assessment guide; this specification.

#### M1 Why and what to automate (hours 0–15)

- **Outcomes:** LO1.
- **Evidence E1:** an **automation candidate analysis** of the team's manual regression pack. For each case: keep manual, automate (and at which layer), or retire, with a reason based on risk, frequency, stability, and cost.
  - B3, B4: a sample of 10 cases, with the mentor.
  - B5, B6-TE: the person's own area.
  - B6-QA, B7: a whole product or programme, reviewed with the team.
- **Activities:** the testingexamples Learn articles: automatic testing, purpose, pyramid, browser trade-offs, CI; manual repetition as a variation problem (the Six Sigma view); why exploratory and usability testing stay human; a workshop with a developer on existing unit and integration tests.
- **Resources:** testingexamples.github.io articles "What is automatic testing?", "What is the purpose of automatic testing?", "What is the automatic testing pyramid?", "What is browser automatic testing?", "How does Six Sigma lead manual testing into automatic testing?".

#### M2 Programming foundations in JavaScript (hours 7.5–45)

- **Outcomes:** LO2.
- **Evidence E2:** small programming exercises (katas), each with unit tests the person wrote: 5 for B3, 8 for B4 and B7-TM, 10 for B5 and B6, 10 harder ones for B7-TE. At least two check test-shaped data, such as a date of birth or an NHS number check digit.
- **Activities:** variables, values and `typeof`, functions, control flow, arrays and objects, modules with `import` and `export`, errors; Promises, `async`, and `await`, and why every WebDriver call must be awaited; the terminal, npm, ESLint, and the VS Code debugger; a first Mocha unit test with `node:assert/strict`; pairing with the mentor in hours 7.5–22.5 for B3 to B5, then kata review by the mentor; kata review by the mentor throughout for B6 and B7.
- **Resources:** a structured JavaScript course (Decision D3), such as MDN's JavaScript guide; the practice repository's katas; testingexamples "What are related concepts for automatic testing?".

#### M3 Version control and collaboration (hours 22.5–45)

- **Outcomes:** LO3.
- **Evidence E3:** reviewed pull requests to a practice repository, with comments addressed: 2 for B3 and B4, 3 for B5 to B7. Every track also reviews one pull request by someone else. B7-TE reviews three.
- **Activities:** clone, branch, commit, diff, log, revert; pull requests and review etiquette; a simple merge conflict; reading the history of a testingexamples repository.
- **Resources:** testingexamples "What are related concepts for automatic testing?"; the team's contribution guidelines.

#### M4 Browser automation fundamentals (hours 45–67.5), spiral pass 1

- **Outcomes:** LO4, LO11.
- **Evidence E4:**
  - a Selenium WebDriver JavaScript script against <https://testingexamples.github.io> that locates every fixture (by id, name, class name, link text, CSS, and XPath), waits explicitly, and acts on every form input, including the select with Selenium's `Select` helper. B3 and B4-QA may complete this by pairing.
  - a one-page explanation of how Selenium waits, and why `sleep` is never the answer (B5 and above)
  - one small change to the `demo-selenium-javascript` example, an existing suite that someone else wrote, run successfully (B4-TE, B5 and above; B7-TM with support).
- **Activities:** locate, act, wait, assert; locator strategy (ids and agreed test ids first, then CSS and link text, XPath last); explicit waits with `driver.wait(until...)`, and why Selenium does not wait for you; clicking only when an element is in view and on top; always quitting the driver; recording with Selenium IDE, exporting to JavaScript Mocha, then rewriting the recording by hand and explaining every line.
- **Resources:** testingexamples `selenium-javascript-skill` and `demo-selenium-javascript`; the fixture contract `testingexamples.github.io/spec/index.md`; the Selenium WebDriver documentation; Selenium IDE.

#### M5 From walkthrough to real test (hours 67.5–90), spiral pass 2

- **Outcomes:** LO5.
- **Evidence E5:**
  - the M4 walkthrough converted into a Mocha suite with `node:assert/strict` assertions, explicit waits, a driver quit in `after`, and a `spec/index.md` that agrees with the code
  - manual test cases from E1 rewritten as Given-When-Then scenarios, reviewed by the product owner, and automated with a page object: 3 for B3 (scenarios only; automation by pairing), 3 for B4, 5 for B5 and B6, 8 for B7-TE, 3 for B7-TM
  - a demonstration that each test fails when the behaviour is wrong.
- **Activities:** Mocha's `describe`, `it`, and hooks (`before`, `beforeEach`, `afterEach`, `after`); assertions; test isolation; Given-When-Then as a shared language; page objects as JavaScript classes that hold the locators and the waits; diagnosing failures from the message, a screenshot, the page source, and the browser console log; reading the NHS Wales worked example and its spec.
- **Resources:** testingexamples "Given-When-Then Examples"; `demo-selenium-javascript-for-nhs-wales` and its `spec/index.md`; the practice repository's `tests/ui/`.

#### M6 API, integration, and FHIR tests (hours 90–112.5)

- **Outcomes:** LO6.
- **Evidence E6:** an API test suite, in Mocha with Node's built-in `fetch`, against the practice repository's FHIR sandbox (a small local FHIR R4 server in JavaScript, started with `npm run fhir`, loaded with synthetic data), which creates, reads, searches, and updates `Patient` and `Observation` resources, checks status codes and bodies, validates against a FHIR profile, checks a clinical code's meaning, and includes a negative test.
  - B4-QA, B7-TM: read and explain an existing suite instead.
  - B4-TE, B5-QA: 5 tests, with support.
  - B6, B7-TE: the full suite; B7-TE also adds a simulator for a partner system.
- **Activities:** HTTP, REST, JSON; `fetch` and its responses; why Selenium is for browsers only; mocks, stubs, and simulators; HL7 FHIR resources, profiles, and terminology; HL7 version 2 awareness; moving one browser test down to the API layer.
- **Resources:** HL7 FHIR (<https://hl7.org/fhir/>); the FHIR sandbox's README; the team's interface specifications; HAPI FHIR, as an example of a production FHIR server.

#### M7 Continuous integration and DevOps (hours 112.5–127.5)

- **Outcomes:** LO7.
- **Evidence E7:** a CI pipeline that runs the person's suites on every pull request, publishes the JUnit report and, for failed browser tests, screenshots and page source, and blocks merging on failure, plus a written triage of real CI failures (product, test, or environment).
  - B3, B4: triage of 3 failures in an existing pipeline; no pipeline change required.
  - B5, B6, B7-TM: the pipeline on the practice repository, and 3 triaged failures.
  - B7-TE: the pipeline on the team's repository, with parallel jobs and test selection, and a quarantine policy for flaky tests.
- **Activities:** CI configuration, caching, headless Chrome, secrets, environment variables; keeping pipelines fast; quarantining flaky tests with an owner and a deadline; feature flags, canary releases, and monitoring.
- **Resources:** testingexamples "What is continuous integration automatic testing?" and "What is DevOps for automatic testing?"; the organisation's CI documentation.

#### M8 Safe and lawful test automation in health care (hours 127.5–142.5)

- **Outcomes:** LO8, LO9.
- **Evidence E8:** synthetic data for the person's tests, including rare or edge clinical cases; a repository scan showing no secrets or personal data; a traceability matrix from automated tests to hazards and safety controls, agreed with the clinical safety officer; automated accessibility checks on browser tests with `@axe-core/webdriverjs`, with a note on what they cannot find. B6-QA and B7 also review one other person's traceability matrix.
- **Activities:** how automated regression tests protect safety controls; the team's hazard log; IEC 62304 awareness; information governance for test data and pipelines.
- **Resources:** the organisation's clinical risk management process and hazard log; information governance policy.

#### M9 Quality engineering practice (hours 135–150)

- **Outcomes:** LO10.
- **Evidence E9:** a flaky-test investigation with root cause and fix (B4-TE and above; B3 and B4-QA describe one with the mentor); a suite-health report using flow metrics (time from a defect report to a regression test, quarantined tests, run time, failure causes) (B5 and above); an effort estimate for the capstone (all).
- **Activities:** maintainable test code; reviewing test pull requests; using AI assistants critically, including the risk of self-healing locators passing on the wrong element; awareness of performance, load, and security testing.
- **Resources:** testingexamples "What metrics help automatic testing?" and "How does artificial intelligence help automatic testing?".

#### M10 Capstone (hours 142.5–180), spiral pass 3

- **Outcomes:** LO12, with every other outcome applied at track depth.
- **Evidence E10:** a capstone on the person's own team's product, agreed with the product owner and mentor at hour 142.5, and a presentation to the gate panel aimed at a non-technical audience (10 minutes for B3 and B4, 20 minutes for B5 to B7):

| Track | Capstone |
| --- | --- |
| B3 | Triage one week of CI results and raise defects; write 5 Given-When-Then scenarios; make 2 reviewed changes to existing tests. |
| B4-QA | Automate 5 manual cases with support, with a spec, running in CI. |
| B4-TE | Automate 10 cases, including 2 API tests, and maintain an existing suite over 30 learning hours. |
| B5-QA | Automation candidate analysis for the area, and 10 cases automated at browser and API layers, with traceability, with some support. |
| B6-QA | A risk-based automation approach for the area, automated acceptance checks agreed with clinical users, and coaching a B4 or B5 colleague through their capstone. |
| B6-TE | An automated regression suite for a product slice of 15–30 manual cases: plan, browser and API tests, spec, synthetic data, CI, traceability, and handover README. |
| B7-TE | Reusable fixtures or framework for an area, a pipeline with test selection, one performance or load test based on real clinical demand, and coaching two colleagues. |
| B7-TM | An automation strategy and metrics for a product or programme, a business case, an adoption and team development plan, and a small automated suite of their own at the Working target. |

- **Activities:** a review with the mentor in every 7.5 hours of learning; pull requests reviewed by developers on the team (at least two for B5 and above); a mid-capstone show-and-tell to the team; an optional presentation rehearsal with the mentor in hours 165–172.5.

#### M11 Lean Six Sigma Green Belt, lifetime certification (hours 180–220)

- **Outcomes:** LO14.
- **Evidence E11:**
  - a Lean Six Sigma **Green Belt certificate** from a certification body whose Green Belt does not expire (Decision D8)
  - a **Green Belt project** on the person's own team's testing process, using DMAIC: a project charter, a SIPOC and process map, a baseline measure with real data, a root-cause analysis, an improvement, and a control plan. Typical measures: flaky test rate, time from a defect report to a regression test, manual regression hours per release, defects found after release, and CI run time. The project uses synthetic data only, and builds on the E1 analysis and the E9 suite-health report.
    - B3, B4: a part of a team project, led by a mentor or a B6 or B7 colleague, with their own part named in the charter.
    - B5, B6-TE: a small project of their own.
    - B6-QA, B7-TE: lead a project, and coach a lower-band colleague's part.
    - B7-TM: lead a project for their area, and sponsor the cohort's other projects with the product owners.
- **Activities:** 27.5 hours on the Green Belt body of knowledge and exam preparation, 10 hours on the project, and 2.5 hours for the certification exam:
  - Lean: value and flow; the eight wastes (TIMWOODS) in testing; value stream mapping of the test process; kaizen.
  - Define: voice of the customer, critical-to-quality requirements, SIPOC, the project charter.
  - Measure: data collection plans, measurement system analysis, descriptive statistics, variation, process capability, and sigma level.
  - Analyse: Pareto charts, fishbone diagrams, the five whys, hypothesis testing, correlation and regression, FMEA.
  - Improve: generating and piloting solutions; automation as an improvement, measured, not assumed.
  - Control: control charts and statistical process control, control plans, and handing the process to its owner.
- **Assessment:** the certification body's exam, and a project review by the training lead and mentor, with the product owner as sponsor. Certification completes the programme with Gate 4 (see [Completion](#completion)).
- **Resources:** testingexamples "How does Six Sigma lead manual testing into automatic testing?"; the certification body's Green Belt body of knowledge (Decision D8); the flow metrics from M9.

### Track modules

#### R1 Role foundations (hours 0–180, individual)

- **Purpose:** close the role and skill gaps that are not about automation, because each person is measured against their whole role.
- **Content:** set by the ILP from Gate 0 gaps in Parts A to C. Typical items: test analysis, test and quality planning, defect management, communicating with non-technical stakeholders, planning own work (A9), freedom to act (A17), and the role-level statements in Part B.
- **Activities:** 1 hour in every 7.5 hours of learning for role practice with the mentor or manager, stretch tasks on the team, shadowing, and the community of practice.
- **Evidence:** progress on each ILP action, reviewed at every gate.

#### R2 Health care foundations (hours 7.5–60)

- **Purpose:** meet the expected levels in understanding health and care services, clinical risk management, and information governance by Gate 2 (Principle 13).
- **Activities:** sessions with the clinical safety officer and information governance lead; a hazard workshop; a shadowing session with a clinical or care user. B7-TM leads one session for the cohort.
- **Evidence:** reflected in Part C ratings at Gate 2.

#### L1 Coaching others in automation (B6, B7; hours 67.5–150)

- **Outcomes:** guide and coach others, as the Practitioner and Expert level descriptions require.
- **Evidence:** coaching log for one or two cohort members from a lower band, with their feedback.

#### L2 Automation strategy and metrics (B6-QA, B7; hours 112.5–150)

- **Outcomes:** contribute to (B6-QA, B7-TE) or own (B7-TM) the automation strategy for an area; define metrics for monitoring and controlling test activities.
- **Evidence:** a strategy document and a metrics proposal, reviewed by the head of test.

#### L3 Frameworks and non-functional testing (B7-TE; B6-TE read only; hours 112.5–150)

- **Outcomes:** extend, standardise, and build reusable frameworks; plan and run performance, load, and resilience tests based on real clinical demand; maintain and adapt CI/CD pipelines.
- **Evidence:** folded into the B7-TE capstone.

#### L4 Acceptance test automation (B6-QA; hours 90–127.5)

- **Outcomes:** Practitioner in business and user acceptance testing, applied to automation: turn acceptance criteria into automated checks, plan user acceptance testing with clinicians, and report residual risk.
- **Evidence:** folded into the B6-QA capstone.

#### L5 Leading teams through automation adoption (B7-TM; hours 112.5–150)

- **Outcomes:** people management at Practitioner, and medical device software regulation at Working, applied to automation adoption: team development plans, supplier testers, and regulated testing records.
- **Evidence:** folded into the B7-TM capstone.

### Gates

Every gate repeats the full capability self-assessment (Parts A to C) with calibration, adds the Part D practical from Gate 1, and reviews module evidence. The gate updates the ILP.

| Gate | Programme hour | Module evidence | Part D practical | Reviewers |
| --- | --- | --- | --- | --- |
| Gate 0 | 0 | E0 | — (unscored diagnostic only) | Person, line manager, training lead |
| Gate 1 | 45 | E1–E3 | Fix a failing unit test and open a pull request | Line manager, mentor |
| Gate 2 | 90 | E4–E5 | Automate one given manual test case on the fixture site (B3: write it as Given-When-Then and pair) | Line manager, mentor, a developer |
| Gate 3 | 127.5 | E6–E7 | Triage and fix a failing CI run (B6 and B7-TE: plus an API test; B7-TM: plus reading and explaining an API test failure) | Line manager, mentor, training lead |
| Gate 4 | 180 | E8–E10 | Live run and explanation of the capstone | Gate 4 panel |
| Certification | By 220 | E11 | The Green Belt certification exam, set by the certification body (Decision D8) | Certification body; the training lead and mentor review the project |
| Gate 5 | About six months after Gate 4 | Six months of work | Demonstrate a recent automated change | Line manager, training lead |

#### Gate thresholds

Using agreed ratings and the capability index:

| Gate | Parts A, B, C (each) | Part D | Other conditions |
| --- | --- | --- | --- |
| Gate 0 | Baseline, no threshold | — | ILP agreed and signed |
| Gate 1 | At least 60% | Partly or better | No item lower than at Gate 0 without an agreed reason |
| Gate 2 | At least 70% | Partly or better | Clinical risk management and information governance meet expectations |
| Gate 3 | At least 80% | Meets | Test engineering at least one level below the automation target, or at it |
| Gate 4 | At least 90% | Meets | No skill more than one level below expected; test engineering at the automation target; capstone accepted by the product owner |
| Gate 5 | At least 90%, sustained | Meets | Plan agreed for any remaining gaps, aiming for 100% by the next annual appraisal |

#### If a gate is not met

1. The person gets up to 22.5 extra learning hours on the items below threshold, with a written plan and extra mentor time, and the gate is repeated once.
2. If the repeated gate is still not met, the person, line manager, and training lead agree a next step. That may be the extension to 280 hours, a different automation target, more R1 support, or pausing the programme.
3. In line with Principle 14, none of these is a capability or performance procedure.

#### Gate 4 panel

Three people: a lead test engineer or test manager at least one band above the person (chair, not their mentor), a developer from another team, and the training lead. For B7 tracks the chair is the head of test or a lead from outside the person's area. The clinical safety officer reviews traceability evidence in writing.

#### Completion

A person completes the programme when every threshold for Gate 4 is met, and they hold the Lean Six Sigma Green Belt certification with an accepted Green Belt project (E11). Gate 5 confirms that the capability holds in normal work.

### Roles and responsibilities

| Role | Responsibilities | Time commitment |
| --- | --- | --- |
| Participant | Completes the self-assessment honestly at every gate, follows the ILP, produces evidence, keeps a learning log entry for each learning session. | 220 hours, protected; by default 7.5 hours a week |
| Line manager | Protects learning time; rates each gate independently and calibrates; owns the ILP with the participant. | 1 hour per 15 learning hours, plus 2 hours a gate: about 27 hours |
| Mentor | Pairs, reviews code, runs R1 practice, prepares for gates. At least one band above the participant and at or above their automation target; for Band 7 tracks, a Band 8a or higher lead, or an external mentor if none is available. One mentor supports up to 3 participants. | 1.5 hours per 7.5 learning hours in hours 0–45, then 1 hour per 7.5 learning hours, including Green Belt project support in M11: about 32 hours per participant |
| Training lead (programme owner) | Owns this specification and the instrument; runs gates; moderates calibration; evaluates and maintains the programme. | 3.75 hours per 7.5 cohort learning hours to hour 180, plus about 20 hours in M11, for a cohort of up to 12: about 110 hours |
| Head of test (sponsor) | Sponsors the programme; reviews L2 strategies; chairs B7 Gate 4 panels. | 2 hours a month |
| Developers | Review pull requests, pair on M6, join Gate 2 and 3 reviews and Gate 4 panels. | About 1 hour per 7.5 learning hours |
| Product owners | Review Given-When-Then scenarios; agree and accept capstones; sponsor Green Belt projects. | 4 hours per participant |
| Lean Six Sigma trainer and certification body | Teach the Green Belt body of knowledge in M11, set the certification exam, and issue a certificate that does not expire (Decision D8). | 30 hours of teaching per cohort |
| Clinical safety officer | Runs R2 and M8 sessions; reviews traceability evidence. | 6 hours per cohort, plus reviews |
| Information governance lead | Runs R2 and M8 sessions on test and personal data. | 3 hours per cohort |
| HR | Confirms the developmental status of gates (Principle 14); agrees mapping decisions. | As needed |

### Inclusion and reasonable adjustments

Following Universal Design for Instruction:

- Every module offers at least two formats: reading, video, live pairing, or worked examples.
- Evidence can be shown in more than one way where the outcome allows, for example a recorded walkthrough instead of a written explanation.
- The self-assessment can be completed with the mentor's help, in writing or in conversation.
- Tools are checked for accessibility: editor screen reader support, high-contrast themes, captioned videos.
- Pacing is flexible within each gate period, and B3 and B4 can extend to 280 hours.
- The Green Belt exam is booked with the certification body's own reasonable adjustments, such as extra time or a reader.
- Mixed-band pairing, show-and-tells, and coaching build a community of learners, and the learning log gives a private channel for questions.
- Reasonable adjustments are recorded at Gate 0 and reviewed at every gate.

### Programme evaluation

The training lead evaluates the programme with Goodlad's levels of curriculum:

| Level | Question | Evidence |
| --- | --- | --- |
| Formal | Is this specification complete and current? | Annual review |
| Perceived | Do managers and mentors understand and rate the programme the same way? | Calibration differences and moderation notes |
| Operational | Did the programme run as written? | Protected time used, pairing held, gates on time |
| Experiential | What did participants actually learn and experience? | Capability index over time, feedback after each gate, exit interviews |

Impact measures, taken at Gate 0, Gate 4, and Gate 5:

- Capability index per person, per track, and for the cohort, against the Gate 0 baseline.
- Test engineering ratings against the automation targets.
- Manual regression cases automated, and manual regression hours saved per release.
- Time from a defect report to a regression test existing for it.
- Quarantined tests and CI suite run time.
- The improvement each Green Belt project achieved in its testing process measure.
- Retention of participants at 12 months.

### Maintenance

Following PADDIE+M, the training lead:

- reviews this specification after every cohort, and at least once a year
- rebuilds the capability self-assessment whenever the roles-skills reference changes a band, factor, role level, or skill
- checks tool versions (Node.js, Chrome, Selenium WebDriver, Mocha) and links every 6 months
- records every change in the [change log](#change-log).

### Decisions

| Id | Decision | Default | Who decides |
| --- | --- | --- | --- |
| D1 | Primary language and tool | JavaScript with Selenium WebDriver and Mocha; Python with Selenium and pytest if the team's codebase is Python | Training lead, with the head of test |
| D2 | CI service | The organisation's existing CI service; GitHub Actions for the practice repository | Training lead |
| D3 | JavaScript foundations course | A structured, free or already-licensed course with exercises | Training lead |
| D4 | Practice FHIR server | The practice repository's local FHIR sandbox (Node.js, no Docker), with synthetic data; a shared team test server with synthetic data as the alternative | Mentors |
| D5 | Capstone scope per person | As in the M10 table, agreed at hour 142.5 | Product owner, mentor |
| D6 | Mapping for band and role combinations without a reference level, and Band 3 factor levels | The mapping rule in [Tracks](#tracks) | Line manager, training lead, HR |
| D7 | Developmental status of gates | Gates are developmental only (Principle 14) | HR, head of test |
| D8 | Lean Six Sigma Green Belt certification body | An accredited body whose Green Belt certification does not expire, with an exam and a project requirement; the course may be delivered in house or by the body | Training lead, with the head of test |

## Acceptance criteria

This specification is complete and usable when:

- Every track has an expected level for every item in Parts A and C, or a rule for agreeing it at Gate 0.
- Every gate states its evidence, practical, reviewers, and thresholds.
- Every learning outcome has a required depth for every track, and is covered by at least one module and one piece of evidence.
- Every module has a depth for every track.
- Every track has a capstone.
- Nothing in the programme changes a person's band or role.
- [../plan.md](../plan.md) and [../tasks.md](../tasks.md) agree with this document.

Coverage check, outcome to evidence:

| Outcome | Evidence |
| --- | --- |
| LO1 | E1, E10 |
| LO2 | E2, E5 |
| LO3 | E3, E10 |
| LO4 | E4, E5 |
| LO5 | E5, E10 |
| LO6 | E6, E10 |
| LO7 | E7, E10 |
| LO8 | E8, E10 |
| LO9 | E8, E10 |
| LO10 | E9 |
| LO11 | E4 |
| LO12 | E10 |
| LO13 | Capability self-assessment at every gate |
| LO14 | E11 |

## Related topics

- [../plan.md](../plan.md): the reasoning behind this programme.
- [../tasks.md](../tasks.md): the work to build, run, evaluate, and maintain it.

## Sources

- Curriculum models tutorial: `~/git/joelparkerhenderson/curriculum-models/README.md`.
- Digital health care job roles reference (roles-skills), in `~/git/agenda-for-change/`: `data/bands.yaml` (band outlines and points ranges), `data/job-evaluation.yaml` (16 factors), `data/roles/quality-assurance-test-analyst.yaml`, `data/roles/test-engineer.yaml`, `data/roles/test-manager.yaml`, `exports/self-assessment/`, `guides/self-assessment/index.md`, `research/pcf-role-levels.tsv`, and `roles-skills.github.io/content/reference.json`; published at <https://roles-skills.github.io>. The reference profiles are illustrative, not official job descriptions, and its job evaluation scores are not a formal evaluation.
- UK Government Digital and Data Profession Capability Framework: <https://understand-digital-data-roles-skills.service.gov.uk/>. Contains public sector information licensed under the Open Government Licence v3.0. © Crown copyright.
- Testing Examples: `~/git/testingexamples/`, published at <https://testingexamples.github.io>.
- Lean Six Sigma: testingexamples "How does Six Sigma lead manual testing into automatic testing?" (<https://testingexamples.github.io/en-001/what-is-lean-six-sigma-for-automatic-testing/>); the certification body's Green Belt body of knowledge (Decision D8).
- HL7 FHIR: <https://hl7.org/fhir/>. Selenium: <https://www.selenium.dev/>. Mocha: <https://mochajs.org/>.

## Change log

| Date | Change |
| --- | --- |
| 2026-10-07 | First version: one learner moving from Band 5 to Band 6. |
| 2026-10-07 | Rewritten: eight tuned tracks for Bands 3 to 7, no band changes, a full capability self-assessment (21 band dimensions, UK GDaD PCF role aspects, all role skills) at every gate, and capability thresholds per gate. |
| 2026-10-08 | Revised: "UK GDaD PCF" in full everywhere, and "UK GDaD PCF role" for the role a person has; Playwright removed from the training, so LO11 and E4 use an existing Selenium suite that someone else wrote (`demo-selenium-javascript`); the toolset sentence about Docker removed. |
| 2026-10-07 | Added M11 Lean Six Sigma Green Belt, lifetime certification: 40 hours at the end of every track (hours 180–220), with LO14, E11, and Decision D8. The programme is 220 hours (280 with the B3 and B4 extension); completion needs Gate 4 and the certification. |
| 2026-10-07 | Revised: timelines in hours. Every track has 180 hours of protected learning time, by default 7.5 hours a week (20% of a 37.5-hour week), with an hour budget that totals 180; the schedule, gates, and time commitments are in programme hours; B3 and B4 may extend to 240 hours. |
| 2026-10-07 | Revised: JavaScript with Selenium WebDriver and Mocha replaces TypeScript with Playwright (Playwright becomes the reading-only tool for LO11); no Docker anywhere, with a JavaScript FHIR sandbox; Principle 10, wait explicitly; the informal capability estimate removed. |
| 2026-10-07 | Implemented: instruments generated per track; Partly defined for Part C; LO2 (B7-TE) and LO11 (B7-TM) depths aligned with modules; Gate 3 timing, B3 in hours 90–112.5, L4 timing, Band 7 mentors, and the capstone rehearsal made explicit. |

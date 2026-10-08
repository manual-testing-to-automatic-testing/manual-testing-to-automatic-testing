# Specification: formal training programme from manual testing to automatic testing

## Summary

This programme upskills **manual testers at Bands 3 to 7** into **automatic testers**, over **320 hours** of protected learning time, ending with a **Lean Six Sigma Green Belt** lifetime certification, while each person **stays in their current band and their UK GDaD PCF role**. Nobody changes band because of this programme.

Each person has already been given a UK GDaD PCF role (Quality assurance test analyst, Test engineer, or Test manager) at a role level. The programme has two aims, in this order:

1. **Close the capability gap in the role the person already holds**, to at least 90% at Gate 4, measured formally at every gate.
2. **Build automated testing capability** to a target set for each band and role, which for some tracks is above what the role itself requires.

The programme comes in **eight tuned tracks**, one for each band and UK GDaD PCF role combination (Band 3, Band 4 quality assurance, Band 4 test engineering, Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test engineering, Band 7 test management). All tracks share one schedule, one set of gates, and one set of core modules, so a mixed cohort learns together. The tracks differ in depth, extra modules, gate evidence, and capstone.

**Gates are the backbone of the programme.** At every gate, each person completes the same full **capability self-assessment**, which their manager also rates:

- **Part A, band:** all 21 band dimensions. These are the 5 band outline dimensions and the 16 job evaluation factors.
- **Part B, UK GDaD PCF role aspects:** every UK GDaD PCF role and role level statement, plus the reference responsibilities.
- **Part C, skills:** every UK GDaD PCF skill in the person's UK GDaD PCF role, plus the health care skills.
- **Part D, automation practical:** a short performance task for the track.

The programme **starts with three basics modules** of about 20 hours each, before induction: the basics of a programming language, of a browser automator, and of an AI assistant. Each ends with a walkthrough to the person's mentor.

After the basics, every track takes **two ISTQB certifications**: the ISTQB Certified Tester Foundation Level v4.0 (4 hours), then the ISTQB Certified Tester Advanced Level Test Automation Engineer (24 hours).

The toolset is **JavaScript** on Node.js, **Selenium** for the browser, and **Mocha** with Node's built-in `node:assert/strict` for tests, in Visual Studio Code, with git and the organisation's continuous integration (CI) service, and **Google Gemini AI Mode** as the default AI assistant.

This document is the **single source of truth** for the programme. [../curriculum.md](../curriculum.md) brings the curriculum together in one place, generated from this spec by `scripts/build_curriculum.py`. [../plan.md](../plan.md) explains why it is shaped this way. [../tasks.md](../tasks.md) lists the work to build and run it. If the three disagree, this document wins, and the disagreement is a defect to fix before doing anything else.

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
- Choosing an organisation-wide automation tool (see [Decision 1](#decisions)).

## Principles and rules

1. **Same band, full capability.** The first goal is that each person fully meets their current band and UK GDaD PCF role. Automation is how most of the gap gets closed, but it is not the whole of it.
2. **Measure the whole role, every gate.** Every gate repeats the full capability self-assessment (Parts A to D), not just the items the module taught, so progress and regression across the whole role are both visible.
3. **Self-assessment first, then calibration.** The person rates themselves, the manager rates independently, and the two then agree a rating, with evidence. The agreed rating counts.
4. **Evidence for every "meets".** An item rated as meeting expectations must have a short, specific example of regular work. Rate what the person does regularly, not what they did once.
5. **A gap is not a failing.** Gaps are expected. They show where development is most useful, and the programme says so openly.
6. **Backward design.** Every module starts from its outcomes, then its evidence, then its activities.
7. **Tuned, not separate.** All tracks share the core modules and gate dates. Tracks differ in depth, hours, extra modules, and evidence.
8. **Build on the tester's strengths.** Each person's own team's manual regression pack and product are the practice material.
9. **One language, one tool, first.** The basics modules use JavaScript, Selenium, and Google Gemini AI Mode by default; a person may choose another language, browser automator, or AI assistant for them, with their mentor's agreement. From Module 6, everyone uses JavaScript and Selenium, and nobody adds a second language or tool before Gate 2.
10. **Wait explicitly, never sleep.** Selenium does not wait for elements by itself. Every wait in assessed code is an explicit wait for a stated condition, with `driver.wait(until...)`. Fixed sleeps, implicit waits, and retries that hide timing are not accepted.
11. **Spiral, not single pass.** The core skills of **locate, act, wait, assert** are taught three times, at rising depth: on the fixture site, on a worked example, and on the person's own product. The capability self-assessment also spirals: the same instrument at every gate.
12. **A walkthrough is not a test.** Assessed test code must make real assertions that fail when the behaviour is wrong, and must have a `spec/index.md` that agrees with the code.
13. **Safety and governance first.** Synthetic data only, no real patient data, and no secrets in source control. Clinical risk management and information governance must meet expectations by Gate 2, whatever else is still open.
14. **Developmental, not disciplinary.** Gate results support development planning. They do not start capability, performance, or conduct procedures. Any such procedure follows the organisation's HR policy, separately.
15. **AI is an aid that is reviewed.** People may use AI assistants and must be able to explain every line they submit. Module 3 teaches how. Never put real patient data, personal data, credentials, or confidential code into an AI assistant.
16. **Protected time is protected.** Learning hours are in calendars and are not reassigned without the training lead's agreement. If more than 7.5 hours are lost in a gate period, that is escalated to the training lead, because it is a whole week of learning at the default pace.
17. **Inclusive by design.** Every module offers more than one way to learn and to show evidence. Reasonable adjustments are agreed at Gate 0.
18. **Read, don't hammer, third-party sites.** Practise on the testingexamples fixture site, local services, and the organisation's own test environments.
19. **Full words, not abbreviations.** All coursework, materials, file names, and website URLs use full words for the programme's own names, never short codes. For example: "Module 1", not "M1"; "Part A item 1", not "A1"; "Part B item 1.2", not "B1.2"; "Learning outcome 4", not "LO4"; "Evidence 5", not "E5"; "Decision 3", not "D3"; "Band 5 quality assurance", not "B5-QA"; "With support", not "S"; "Working", not "W"; "individual learning plan", not "ILP"; "UK GDaD PCF role", not "PCF role". Recognised names of standards, tools, and organisations, such as HL7 FHIR, CI, and NHS, keep their usual form.

## Detail

### Population and starting position

Each participant:

- is a manual tester at Band 3, 4, 5, 6, or 7
- has a UK GDaD PCF role and role level in the quality assurance testing role family
- stays in that band and role during and after the programme

Gate 0 sets a formal, evidenced baseline for each person.

### Tracks

Each person joins the track for their **band** and **UK GDaD PCF role**.

| Track | Band | UK GDaD PCF role | Reference role level | Reference points | Band points range |
| --- | --- | --- | --- | --- | --- |
| Band 3 | 3 | Quality assurance test analyst or Test engineer, associate level | Associate quality assurance test analyst or Associate test engineer, tuned to Band 3 | Agreed at Gate 0 | 216–270 |
| Band 4 quality assurance | 4 | Quality assurance test analyst | Associate quality assurance test analyst | 275 | 271–325 |
| Band 4 test engineering | 4 | Test engineer | Associate test engineer | 275 | 271–325 |
| Band 5 quality assurance | 5 | Quality assurance test analyst | Quality assurance test analyst | 327 | 326–395 |
| Band 6 quality assurance | 6 | Quality assurance test analyst | Senior quality assurance test analyst | 404 | 396–465 |
| Band 6 test engineering | 6 | Test engineer | Test engineer | 411 | 396–465 |
| Band 7 test engineering | 7 | Test engineer | Senior test engineer | 477 | 466–539 |
| Band 7 test management | 7 | Test manager | Test manager | 499 | 466–539 |

**Band 3:** the roles-skills reference has no quality assurance testing role level at Band 3. Its associate levels sit at Band 4, at 275 points. The Band 3 track therefore uses the associate UK GDaD PCF role level for Parts B and C, and the Band 3 outline for Part A. The expected job evaluation factor levels for Part A are agreed at Gate 0 from the person's own job description, with a total within 216 to 270 points.

**Mapping rule for other combinations.** If a person's band and UK GDaD PCF role have no reference role level, for example a Band 5 test engineer or a Band 7 quality assurance test analyst:

1. Part A uses the person's **own band** outline, and factor levels agreed at Gate 0 from their job description.
2. Parts B and C use the UK GDaD PCF role's reference level with the **closest band below** the person's band.
3. The person joins the track for that reference level, at the depth and hours of their own band.
4. The line manager, training lead, and HR record the mapping in the individual learning plan (see [Decision 6](#decisions)).

### Capability self-assessment

This is the gate instrument. Each person completes it in full at every gate. It is generated from the roles-skills reference (`reference.json`, which compiles `data/bands.yaml`, `data/job-evaluation.yaml`, `data/roles/*.yaml`, and the skills catalogue) by `scripts/build_instrument.py`, into one file per track in `instruments/`. `scripts/capability_index.py` calculates the capability index from a completed file.

#### Part A: band (21 dimensions)

**Part A items 1 to 5, band outline dimensions.** Rate each against the person's own band:

| Band | Knowledge | Autonomy | Scope | Leadership | Accountability |
| --- | --- | --- | --- | --- | --- |
| 3 | Knowledge of a range of procedures, some non-routine; typically a level 3 qualification or equivalent experience. | Works within procedures; decides how to organise own work; refers problems upward. | Own work and some tasks for the wider team. | May allocate routine work or train others in procedures. | Accuracy of own work and of records kept. |
| 4 | Detailed knowledge of the work area, typically from a foundation degree, apprenticeship, or equivalent experience. | Works within guidelines; resolves most day-to-day problems; manager available for advice. | Own work and a defined service or process. | May supervise a small team or coordinate others' work. | Delivery of a defined service or process. |
| 5 | Professional or technical knowledge, typically from a degree or equivalent experience. | Works to broad objectives within professional standards; plans own work. | Own professional work within a team or product. | May guide and check the work of support staff and apprentices. | Quality of own professional work. |
| 6 | Specialist knowledge across a range of procedures, built through further training or experience. | Works independently; interprets policy for own area; seeks advice on complex issues. | A product, service, or workstream. | May lead a small team or mentor colleagues. | Outcomes of own workstream and quality of advice given. |
| 7 | Highly developed specialist knowledge, typically to master's level or equivalent experience. | Works to organisational policy; decides how results are achieved; is the expert others consult. | Several products or services, or a specialist function. | Leads a team or a professional practice area. | Delivery of a service or specialist function, and its budget if held. |

Rating: **Not yet**, **Partly**, or **Meets**.

**Part A items 6 to 21, job evaluation factors.** For each of the 16 factors, the person chooses the factor level whose summary best describes what they do regularly now. That level is compared with the reference level for their track. The level summaries are in `data/job-evaluation.yaml`. As the scheme itself says, a real job evaluation scores the job, not the person. Here the factors are used as a self-assessment of how fully the person is working at the level their job requires. That is not a job evaluation, and it never changes the job's band.

| Id | Factor | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Part A item 6 | Communication and relationship skills | Agreed at Gate 0 | 3 | 3 | 4 | 4 | 4 | 4 | 5 |
| Part A item 7 | Knowledge, training, and experience | Agreed at Gate 0 | 4 | 4 | 5 | 6 | 6 | 7 | 7 |
| Part A item 8 | Analytical and judgemental skills | Agreed at Gate 0 | 3 | 3 | 3 | 4 | 4 | 4 | 4 |
| Part A item 9 | Planning and organisational skills | Agreed at Gate 0 | 2 | 2 | 2 | 3 | 3 | 3 | 4 |
| Part A item 10 | Physical skills | Agreed at Gate 0 | 3 | 3 | 3 | 3 | 3 | 3 | 2 |
| Part A item 11 | Responsibility for patient and client care | Agreed at Gate 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| Part A item 12 | Responsibility for policy and service development | Agreed at Gate 0 | 2 | 2 | 2 | 2 | 2 | 3 | 3 |
| Part A item 13 | Responsibility for financial and physical resources | Agreed at Gate 0 | 1 | 1 | 1 | 1 | 1 | 1 | 2 |
| Part A item 14 | Responsibility for people | Agreed at Gate 0 | 1 | 1 | 1 | 2 | 1 | 2 | 3 |
| Part A item 15 | Responsibility for information resources | Agreed at Gate 0 | 3 | 3 | 3 | 3 | 4 | 5 | 4 |
| Part A item 16 | Responsibility for research and development | Agreed at Gate 0 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| Part A item 17 | Freedom to act | Agreed at Gate 0 | 2 | 2 | 3 | 4 | 4 | 4 | 4 |
| Part A item 18 | Physical effort | Agreed at Gate 0 | 2 | 2 | 2 | 1 | 1 | 1 | 1 |
| Part A item 19 | Mental effort | Agreed at Gate 0 | 3 | 3 | 3 | 3 | 4 | 4 | 4 |
| Part A item 20 | Emotional effort | Agreed at Gate 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| Part A item 21 | Working conditions | Agreed at Gate 0 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |

"Agreed at Gate 0" means the level is agreed at Gate 0, from the person's own job description (see [Tracks](#tracks)). A factor **meets** when the agreed level is at or above the reference level. A factor at one level below is **Partly**. Two or more levels below is **Not yet**. Effort and working-conditions factors (Part A items 18 to 21) describe the job's demands. They are rated so the picture is complete, are almost always **Meets**, and are reviewed only if the person reports a mismatch, which may need a reasonable adjustment.

#### Part B: UK GDaD PCF role aspects

Part B has one item for each statement in:

- **Part B group 1, the UK GDaD PCF role description:** each "In this role, you will" statement for the UK GDaD PCF role (Quality assurance test analyst, Test engineer, or Test manager).
- **Part B group 2, the UK GDaD PCF role level description:** each "At this role level, you will" statement for the person's reference role level.
- **Part B group 3, the reference responsibilities:** each responsibility listed for the reference role level in `data/roles/<role>.yaml`, which adds the health care context.

Rating: **Not yet**, **Partly**, or **Meets**, each with evidence.

#### Part C: skills

Part C has one item for **every UK GDaD PCF skill in the UK GDaD PCF role**, plus every health care skill in the reference role level. Every skill is rated at every gate, including skills the person's level expects only at Awareness, so progress beyond expectations shows as a strength.

Rating: the self-assessment scale from the roles-skills guide: **0 Not yet, 1 Awareness, 2 Working, 3 Practitioner, 4 Expert**. Gap = expected level minus agreed rating. A skill **meets** when the gap is 0 or less, is **Partly** when the gap is 1, and is **Not yet** when the gap is 2 or more.

Expected levels (a dash means the skill is not in this role level):

| Skill | Source | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Test analysis | UK GDaD PCF | Awareness | Awareness | Awareness | Working | Practitioner | Working | Practitioner | Practitioner |
| Test and quality planning | UK GDaD PCF | Awareness | Awareness | Awareness | Working | Practitioner | Working | Practitioner | Expert |
| Designing and executing tests | UK GDaD PCF | Awareness | Awareness | Awareness | Working | Practitioner | Working | Practitioner | Practitioner |
| Test engineering | UK GDaD PCF | Awareness | Awareness | Awareness | Awareness | Awareness | Working | Practitioner | Awareness |
| Managing, reporting and resolving defects | UK GDaD PCF | Awareness | Awareness | Awareness | Working | Practitioner | Working | Practitioner | Expert |
| Communicating between the technical and non-technical | UK GDaD PCF | Awareness | Awareness | Awareness | Working | Practitioner | Working | Practitioner | Expert |
| Business and user acceptance testing | UK GDaD PCF | — | — | — | — | Practitioner | — | — | — |
| Understanding health and care services | Health care | Awareness | Awareness | Awareness | Working | Working | Working | Working | Practitioner |
| Clinical risk management | Health care | Awareness | Awareness | Awareness | Working | Working | Working | Working | Practitioner |
| Information governance and data protection | Health care | Awareness | Awareness | Awareness | Working | Working | Working | Working | Working |
| Health data interoperability | Health care | — | — | — | Awareness | Working | Working | Practitioner | Working |
| Medical device software regulation | Health care | — | — | — | — | — | — | Awareness | Working |
| People management | Health care | — | — | — | — | — | — | — | Practitioner |

#### Automation targets

The programme's automation target for **test engineering** is set per track. For some tracks it is above what the role requires. Reaching it is a programme outcome and a recorded strength. It is not a change of band or role.

| Track | Test engineering expected by role | Programme automation target | In practice |
| --- | --- | --- | --- |
| Band 3 | Awareness | Awareness | Runs existing automated suites, reads results, raises defects from failures, writes Given-When-Then scenarios, makes small changes to existing tests with support. |
| Band 4 quality assurance | Awareness | Awareness, with simple tests | As Band 3, plus writes simple browser tests with support. |
| Band 4 test engineering | Awareness | Awareness, with maintained tests | Writes and maintains simple automated tests under supervision, as the role requires. |
| Band 5 quality assurance | Awareness | **Working, with support** | Chooses what to automate, writes browser and API tests with some support, runs them in CI. |
| Band 6 quality assurance | Awareness | **Working** | Sets the automation approach for an area, automates acceptance checks, reviews coverage against risk. |
| Band 6 test engineering | Working | Working | Designs, builds, and maintains automated suites and adds them to pipelines. |
| Band 7 test engineering | Practitioner | Practitioner | Builds reusable frameworks, maintains pipelines, runs performance tests, coaches others. |
| Band 7 test management | Awareness | **Working** | Writes enough automation to lead it credibly; owns automation strategy, metrics, and adoption. |

#### Part D: automation practical

At each gate from Gate 1, the person completes a short, supervised performance task for their track: 60 minutes for every track. The tasks rise in difficulty from gate to gate (see [Gates](#gates)). Rating: **Not yet**, **Partly**, or **Meets**.

#### Capability index

For each part, the **capability index** is the percentage of items rated **Meets**, using agreed ratings. Partly counts as half. The overall index is the mean of Parts A, B, and C. Part D is reported separately. The informal review suggests overall indexes around 50% at Gate 0.

#### Calibration

1. The person completes the self-assessment, with evidence, before the gate.
2. The line manager rates independently, without seeing the self-ratings.
3. They meet and agree each rating. Where they differ by more than one level, the evidence decides. If they still disagree, the mentor or training lead moderates.
4. The training lead samples 1 in 5 assessments across the cohort for consistency.

### Programme learning outcomes

Each track meets each outcome at a set depth: **Read and explain**, **With support**, **Independently**, or **Leads or coaches others**. A dash means not required.

| Id | Outcome | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Learning outcome 1 | Decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost. | Read and explain | With support | With support | Independently | Leads or coaches others | Independently | Leads or coaches others | Leads or coaches others |
| Learning outcome 2 | Write, run, debug, and refactor JavaScript code to the team's standards. | Read and explain | With support | With support | With support | Independently | Independently | Independently | With support |
| Learning outcome 3 | Change test code through git and pull requests, and give and respond to review. | With support | With support | With support | Independently | Independently | Independently | Leads or coaches others | Independently |
| Learning outcome 4 | Locate, act, wait explicitly, and assert with Selenium, using resilient locators. | With support | With support | Independently | Independently | Independently | Independently | Leads or coaches others | With support |
| Learning outcome 5 | Turn a manual test or Given-When-Then scenario into a maintainable automated test. | With support | With support | With support | Independently | Independently | Independently | Leads or coaches others | With support |
| Learning outcome 6 | Write automated API and integration tests, including HL7 FHIR validation. | — | Read and explain | With support | With support | Independently | Independently | Leads or coaches others | Read and explain |
| Learning outcome 7 | Run suites in CI on every change, triage failures, and keep the suite fast and reliable. | With support | With support | With support | Independently | Independently | Independently | Leads or coaches others | Independently |
| Learning outcome 8 | Use synthetic data and keep secrets and personal data out of tests and pipelines. | Independently | Independently | Independently | Independently | Independently | Independently | Leads or coaches others | Leads or coaches others |
| Learning outcome 9 | Trace automated tests to hazards and produce test evidence for a clinical safety case. | Read and explain | With support | With support | Independently | Leads or coaches others | Independently | Leads or coaches others | Leads or coaches others |
| Learning outcome 10 | Diagnose flaky tests and measure suite health with flow metrics. | Read and explain | Read and explain | With support | With support | Independently | Independently | Leads or coaches others | Leads or coaches others |
| Learning outcome 11 | Read, run, and make a small change to an existing Selenium suite that someone else wrote. | — | Read and explain | With support | With support | With support | Independently | Independently | With support |
| Learning outcome 12 | Plan, build or lead, and explain an automated regression suite for a real service. | With support | With support | With support | Independently | Leads or coaches others | Independently | Leads or coaches others | Leads or coaches others |
| Learning outcome 13 | Fully meet the person's own band and UK GDaD PCF role, measured by the capability self-assessment. | All tracks: overall capability index of at least 90% at Gate 4 |
| Learning outcome 14 | Apply Lean Six Sigma (DMAIC) to measure and improve a testing process, and hold a Green Belt certification that does not expire. | With support | With support | With support | Independently | Leads or coaches others | Independently | Leads or coaches others | Leads or coaches others |
| Learning outcome 15 | Read, run, and explain a simple program with variables, functions, conditionals, and loops, in JavaScript or another language. | Independently | Independently | Independently | Independently | Independently | Independently | Independently | Independently |
| Learning outcome 16 | Write, run, and explain a browser automation script that requests a page, waits for it, selects elements by id, verifies text, clicks links, buttons, and select boxes, fills in form fields, and submits. | Independently | Independently | Independently | Independently | Independently | Independently | Independently | Independently |
| Learning outcome 17 | Use an AI assistant to get training advice, plan continuing professional development, compare concepts, explain code, and convert between user stories, Given-When-Then scenarios, and Selenium JavaScript, checking every answer. | Independently | Independently | Independently | Independently | Independently | Independently | Independently | Independently |
| Learning outcome 18 | Use the standard ISTQB testing vocabulary and principles, and hold the ISTQB Certified Tester Foundation Level v4.0 certificate. | Independently | Independently | Independently | Independently | Independently | Independently | Independently | Independently |
| Learning outcome 19 | Explain test automation architecture, design, and deployment as the ISTQB Advanced Level Test Automation Engineer syllabus describes them, and hold that certificate. | Independently | Independently | Independently | Independently | Independently | Independently | Independently | Independently |

### Schedule and time

The programme is measured in **hours** of protected learning time. Every track has **320 hours** and the same gates, so a mixed cohort can learn together; the tracks differ in depth, not in hours. The default pace is **7.5 hours a week**, 20% of a 37.5-hour working week, so the programme runs over about 43 calendar weeks. The learning agreement may set another pace, such as two sessions of 3.75 hours a week; `scripts/gate_calendar.py` turns a pace into dates.

| Track | Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- | --- |
| Band 3 | 7.5 hours a week, by default | 320 | To 380 hours |
| Band 4 quality assurance, Band 4 test engineering | 7.5 hours a week, by default | 320 | To 380 hours |
| Band 5 quality assurance | 7.5 hours a week, by default | 320 | — |
| Band 6 quality assurance, Band 6 test engineering | 7.5 hours a week, by default | 320 | — |
| Band 7 test engineering, Band 7 test management | 7.5 hours a week, by default | 320 | — |

The timeline is in programme hours, counted from 0 to 320: "hours 97.5–136.5" means after 97.5 and up to 136.5 hours of learning. The schedule below says in which hours each module runs.

Where the 320 hours go, for every track:

| Item | Programme hours | Hours |
| --- | --- | --- |
| Module 1 Basics of a programming language | 0–20 | 20 |
| Module 2 Basics of a browser automator | 20–40.5 | 20.5 |
| Module 3 Basics of an AI assistant | 40.5–60.5 | 20 |
| Module 4 ISTQB Certified Tester Foundation Level v4.0 | 60.5–64.5 | 4 |
| Module 5 ISTQB Certified Tester Advanced Level Test Automation Engineer | 64.5–88.5 | 24 |
| Module 6 Induction and baseline, including Gate 0 | 88.5–97.5 | 8 |
| Module 7 Why and what to automate | 88.5–106 | 5.5 |
| Module 8 Programming foundations in JavaScript | 97.5–136.5 | 14.5 |
| Module 9 Version control and collaboration | 113.5–136.5 | 7.5 |
| Module 10 Browser automation fundamentals | 136.5–160.5 | 18 |
| Module 11 From walkthrough to real test | 160.5–183 | 12.5 |
| Module 12 API, integration, and FHIR tests | 183–206 | 15.5 |
| Module 13 Continuous integration and DevOps | 206–221.5 | 10.5 |
| Module 14 Safe and lawful test automation in health care | 221.5–237.5 | 8 |
| Module 15 Quality engineering practice | 229–247 | 8 |
| Module 16 Capstone | 237.5–279.5 | 30 |
| Role foundations: 1 hour in every 7.5 hours of learning, from hour 97.5 | 97.5–279.5 | 23 |
| Health care foundations: five sessions | 97.5–152.5 | 8 |
| Gates 1 to 4: 2.5 hours each | At 136.5, 183, 221.5, 279.5 | 10 |
| Real automation on the team's product: 1.5 hours in every 7.5 hours of learning (from hour 221.5, Module 14 and Module 16 work on the team's product) | 160.5–221.5 | 12 |
| Module 17 Lean Six Sigma Green Belt, lifetime certification | 279.5–320 | 40 |
| Buffer, before the Green Belt exam | 319.5–320 | 0.5 |
| **Total** | **0–320** | **320** |

The track modules take part of Band 6 and Band 7 participants' track breakouts and real automation time. Band 3 uses its Module 12 time for Role foundations and real automation. Each module's page in `materials/modules/` shows how its hours split into sessions.

From hour 160.5, about 1.5 hours in every 7.5 hours of learning is real automation on the person's own team's product, at their track's depth.

Band 3 does not take Module 12, so in hours 183–206 Band 3 participants spend that time on Role foundations and real automation.

Gate 3 takes place at hour 221.5, before Module 14 begins. It reviews Evidence 12 and Evidence 13; Evidence 14 is reviewed at Gate 4.

| Programme hours | Core modules | Track modules | Gate |
| --- | --- | --- | --- |
| 0–20 | Module 1 Basics of a programming language | — | — |
| 20–40.5 | Module 2 Basics of a browser automator | — | — |
| 40.5–60.5 | Module 3 Basics of an AI assistant | — | Walkthroughs signed off (Evidence 1 to 3) |
| 60.5–64.5 | Module 4 ISTQB Certified Tester Foundation Level v4.0 | — | Certification test |
| 64.5–88.5 | Module 5 ISTQB Certified Tester Advanced Level Test Automation Engineer | — | Certification exam |
| 88.5–97.5 | Module 6 Induction and baseline | — | **Gate 0** (hour 88.5, baseline) |
| 88.5–106 | Module 7 Why and what to automate | Role foundations starts (runs all programme) | — |
| 97.5–136.5 | Module 8 Programming foundations in JavaScript | Health care foundations (hours 97.5–152.5) | — |
| 113.5–136.5 | Module 9 Version control and collaboration | — | **Gate 1** (hour 136.5) |
| 136.5–160.5 | Module 10 Browser automation fundamentals | — | — |
| 160.5–183 | Module 11 From walkthrough to real test | Coaching others in automation (Band 6, Band 7, hours 160.5–247) | **Gate 2** (hour 183) |
| 183–206 | Module 12 API, integration, and FHIR tests | Acceptance test automation (Band 6 quality assurance, hours 183–221.5) | — |
| 206–221.5 | Module 13 Continuous integration and DevOps | Frameworks and non-functional testing (Band 7 test engineering, hours 206–247) | — |
| 221.5–237.5 | Module 14 Safe and lawful test automation in health care | Automation strategy and metrics (Band 6 quality assurance, Band 7, hours 206–247) | **Gate 3** (hour 221.5) |
| 229–247 | Module 15 Quality engineering practice | Leading teams through automation adoption (Band 7 test management, hours 206–247) | — |
| 237.5–279.5 | Module 16 Capstone (tuned per track) | — | **Gate 4** (hour 279.5) |
| 279.5–320 | Module 17 Lean Six Sigma Green Belt, lifetime certification | — | **Certification** (by hour 320) |
| After Gate 4 | Consolidation: the six months after Gate 4 | — | **Gate 5** (follow-up, about six months after Gate 4) |

With the optional extension to 380 hours for Band 3 and Band 4, the gates move to hours 88.5, 152.5, 213.5, 269.5, and 340, Module 17 runs in hours 340–380, and Gate 5 follows about six months after Gate 4.

### Module depth by track

Each track takes each module at a set depth: **Read and discuss**, **With support** (apply with support), **Independent** (apply independently), or **Lead or coach** (apply and lead or coach others). A dash means the track does not take the module.

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 1 Basics of a programming language | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |
| Module 2 Basics of a browser automator | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |
| Module 3 Basics of an AI assistant | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |
| Module 4 ISTQB Certified Tester Foundation Level | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |
| Module 5 ISTQB Advanced Level Test Automation Engineer | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |
| Module 6 Induction and baseline | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |
| Module 7 Why and what to automate | Read and discuss | With support | With support | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |
| Module 8 Programming foundations | Read and discuss | With support | With support | With support | Independent | Independent | Independent | With support |
| Module 9 Version control and collaboration | With support | With support | With support | Independent | Independent | Independent | Lead or coach | Independent |
| Module 10 Browser automation fundamentals | With support | With support | Independent | Independent | Independent | Independent | Lead or coach | With support |
| Module 11 From walkthrough to real test | With support | With support | With support | Independent | Independent | Independent | Lead or coach | With support |
| Module 12 API, integration, and FHIR tests | — | Read and discuss | With support | With support | Independent | Independent | Lead or coach | Read and discuss |
| Module 13 Continuous integration and DevOps | With support | With support | With support | Independent | Independent | Independent | Lead or coach | Independent |
| Module 14 Safe and lawful test automation | Independent | Independent | Independent | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |
| Module 15 Quality engineering practice | Read and discuss | Read and discuss | With support | With support | Independent | Independent | Lead or coach | Lead or coach |
| Module 16 Capstone | With support | With support | With support | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |
| Module 17 Lean Six Sigma Green Belt | With support | With support | With support | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |
| Role foundations | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan |
| Health care foundations | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Lead or coach |
| Coaching others in automation | — | — | — | — | Lead or coach | Lead or coach | Lead or coach | Lead or coach |
| Automation strategy and metrics | — | — | — | — | Lead or coach | — | Lead or coach | Lead or coach |
| Frameworks and non-functional testing | — | — | — | — | — | Read and discuss | Lead or coach | — |
| Acceptance test automation | — | — | — | — | Lead or coach | — | — | — |
| Leading teams through automation adoption | — | — | — | — | — | — | — | Lead or coach |

"individual learning plan" means the content is set by the person's individual learning plan from their Gate 0 gaps.

### Core modules

Each module lists its outcomes, evidence, activities, and resources. The evidence ids (Evidence 1 to 17) are reviewed at the gates, and Evidence 17 also by the certification body. Where the evidence differs by track, the module says so. Otherwise every track produces the evidence at its depth from the table above.

#### Module 1 Basics of a programming language (hours 0–20)

- **Outcomes:** Learning outcome 15.
- **Evidence 1:** a walkthrough to the mentor of a simple JavaScript function (or one in another language the mentor agreed) that uses variables, functions, conditionals, and loops. The person runs it on their own system and explains it line by line. The mentor signs it off.
- **Activities:** a 1-hour start with the mentor; setting up Node.js and Visual Studio Code on the person's own system; reading and writing JavaScript: values and variables, functions, conditionals, loops, arrays and objects, and printing results; running code with `node`; reading other people's short functions aloud.
- **Resources:** MDN's JavaScript guide; the Node.js "Introduction to Node.js" guide; the practice repository's first katas, for reading only.

#### Module 2 Basics of a browser automator (hours 20–40.5)

- **Outcomes:** Learning outcome 16.
- **Evidence 2:** a walkthrough to the mentor of a browser automation script, in Selenium with JavaScript (or another browser automator and language the mentor agreed), against the testingexamples fixture site, that:
  - makes a web request for a page, and waits for the response
  - selects page elements by id, and verifies page text
  - clicks a link, a button, and an option in a select box
  - fills in form fields, and submits the form.

  The person runs it on their own system and explains it step by step. The mentor signs it off.
- **Activities:** installing `selenium-webdriver`, with Selenium Manager providing the Chrome driver; `driver.get`; waiting with `driver.wait` and `until`; `By.id`; `getText`; `click`; `Select`; `sendKeys`; submitting; `driver.quit`.
- **Resources:** the Selenium documentation, "Getting started"; testingexamples `selenium-javascript-skill` and `demo-selenium-javascript`; the fixture site <https://testingexamples.github.io/en-001/practice/>.

#### Module 3 Basics of an AI assistant (hours 40.5–60.5)

- **Outcomes:** Learning outcome 17.
- **Evidence 3:** a walkthrough to the mentor of the person's own sessions with Google Gemini AI Mode (or another AI assistant the mentor agreed), on their own system, showing:
  - clear prompts, and follow-up prompts that improve an answer
  - asking for training advice
  - a draft plan for the person's own continuing professional development, which feeds their individual learning plan at Gate 0
  - comparing and contrasting two concepts, such as manual and automated regression testing
  - explaining a piece of source code, checked against the code itself
  - converting a user story into Given-When-Then (Gherkin) scenarios, those into Selenium JavaScript, and back, with every output checked and corrected by the person.

  The mentor signs it off.
- **Activities:** prompting: context, goal, format, and examples; checking answers against sources and code; spotting confident but wrong answers; the organisation's AI use policy; never entering real patient data, personal data, credentials, or confidential code (Principle 13 and Principle 15).
- **Resources:** Google Gemini AI Mode; the organisation's AI use policy; the Module 2 script and the practice repository's code, to explain.

#### Module 4 ISTQB Certified Tester Foundation Level v4.0 (hours 60.5–64.5)

- **Outcomes:** Learning outcome 18.
- **Evidence 4:** the ISTQB Certified Tester Foundation Level v4.0 (CTFL) certificate.
- **Activities:** processing: registering, booking the certification test, and getting access to the training (1 hour); video training on the CTFL v4.0 syllabus (2 hours); the certification test (1 hour).
- **Resources:** the ISTQB CTFL v4.0 syllabus and sample exams; the chosen video training; the exam provider. See [the module page](../materials/modules/module-4-istqb-certified-tester-foundation-level/index.md), which also gives a view on how relevant the certificate is.

#### Module 5 ISTQB Certified Tester Advanced Level Test Automation Engineer (hours 64.5–88.5)

- **Outcomes:** Learning outcome 19.
- **Evidence 5:** the ISTQB Certified Tester Advanced Level Test Automation Engineer (CTAL-TAE) certificate.
- **Prerequisite:** the ISTQB Certified Tester Foundation Level certificate, from Module 4.
- **Activities:** a 3-day course, virtual or classroom, on the CTAL-TAE syllabus; the certification exam (40 multiple-choice questions); about 24 hours in all.
- **Resources:** the ISTQB CTAL-TAE syllabus and sample exams; the training provider's course and learning platform. See [the module page](../materials/modules/module-5-istqb-certified-tester-advanced-level-test-automation-engineer/index.md) for cost and booking.

#### Module 6 Induction and baseline (hours 88.5–97.5)

- **Outcomes:** each person, their manager, and the training lead agree where the person starts, their track, and their support.
- **Evidence 6:**
  - the full capability self-assessment (Parts A to C), with evidence, and the manager's independent rating, calibrated at Gate 0
  - the person's track, and any mapping decision (see [Tracks](#tracks))
  - an **individual learning plan**: the gaps that matter most from Parts A to C, an action, owner, and date for each, the automation target, reasonable adjustments, and preferred learning formats
  - a signed learning agreement: protected time, mentor, and gate dates
  - a working development environment: Node.js 24, Google Chrome, VS Code with the ESLint extension, git, the practice repository with `npm run test:katas` passing, and access to the team's repository and CI. No Docker or other container tools are needed.
- **Activities:** induction with manager, mentor, and training lead; a briefing on how to self-assess honestly (a gap is not a failing); an unscored diagnostic coding exercise to tune Module 8 pacing; environment set-up with the mentor.
- **Resources:** the roles-skills reference pages for the person's role and band; the roles-skills self-assessment guide; this specification.

#### Module 7 Why and what to automate (hours 88.5–106)

- **Outcomes:** Learning outcome 1.
- **Evidence 7:** an **automation candidate analysis** of the team's manual regression pack. For each case: keep manual, automate (and at which layer), or retire, with a reason based on risk, frequency, stability, and cost.
  - Band 3, Band 4: a sample of 10 cases, with the mentor.
  - Band 5, Band 6 test engineering: the person's own area.
  - Band 6 quality assurance, Band 7: a whole product or programme, reviewed with the team.
- **Activities:** the testingexamples Learn articles: automatic testing, purpose, pyramid, browser trade-offs, CI; manual repetition as a variation problem (the Six Sigma view); why exploratory and usability testing stay human; a workshop with a developer on existing unit and integration tests.
- **Resources:** testingexamples.github.io articles "What is automatic testing?", "What is the purpose of automatic testing?", "What is the automatic testing pyramid?", "What is browser automatic testing?", "How does Six Sigma lead manual testing into automatic testing?".

#### Module 8 Programming foundations in JavaScript (hours 97.5–136.5)

- **Outcomes:** Learning outcome 2.
- **Evidence 8:** small programming exercises (katas), each with unit tests the person wrote: 5 for Band 3, 8 for Band 4 and Band 7 test management, 10 for Band 5 and Band 6, 10 harder ones for Band 7 test engineering. At least two check test-shaped data, such as a date of birth or an NHS number check digit.
- **Builds on:** Module 1. A person who learned the basics in another language moves to JavaScript here.
- **Activities:** a short review of Module 1 (variables, functions, conditionals, loops, arrays and objects), then `typeof`, modules with `import` and `export`, errors; Promises, `async`, and `await`, and why every WebDriver call must be awaited; the terminal, npm, ESLint, and the VS Code debugger; a first Mocha unit test with `node:assert/strict`; pairing with the mentor in hours 97.5–113.5 for Band 3 to Band 5, then kata review by the mentor; kata review by the mentor throughout for Band 6 and Band 7.
- **Resources:** a structured JavaScript course (Decision 3), such as MDN's JavaScript guide; the practice repository's katas; testingexamples "What are related concepts for automatic testing?".

#### Module 9 Version control and collaboration (hours 113.5–136.5)

- **Outcomes:** Learning outcome 3.
- **Evidence 9:** reviewed pull requests to a practice repository, with comments addressed: 2 for Band 3 and Band 4, 3 for Band 5 to Band 7. Every track also reviews one pull request by someone else. Band 7 test engineering reviews three.
- **Activities:** clone, branch, commit, diff, log, revert; pull requests and review etiquette; a simple merge conflict; reading the history of a testingexamples repository.
- **Resources:** testingexamples "What are related concepts for automatic testing?"; the team's contribution guidelines.

#### Module 10 Browser automation fundamentals (hours 136.5–160.5), spiral pass 1

- **Outcomes:** Learning outcome 4, Learning outcome 11.
- **Evidence 10:**
  - a Selenium JavaScript script against <https://testingexamples.github.io> that locates every fixture (by id, name, class name, link text, CSS, and XPath), waits explicitly, and acts on every form input, including the select with Selenium's `Select` helper. Band 3 and Band 4 quality assurance may complete this by pairing.
  - a one-page explanation of how Selenium waits, and why `sleep` is never the answer (Band 5 and above)
  - one small change to the `demo-selenium-javascript` example, an existing suite that someone else wrote, run successfully (Band 4 test engineering, Band 5 and above; Band 7 test management with support).
- **Builds on:** the Module 2 script. Module 10 adds resilient locator strategy, every locator kind, explicit waits for stated conditions, and assertions, in place of printing.
- **Activities:** locate, act, wait, assert; locator strategy (ids and agreed test ids first, then CSS and link text, XPath last); explicit waits with `driver.wait(until...)`, and why Selenium does not wait for you; clicking only when an element is in view and on top; always quitting the driver; recording with Selenium IDE, exporting to JavaScript Mocha, then rewriting the recording by hand and explaining every line.
- **Resources:** testingexamples `selenium-javascript-skill` and `demo-selenium-javascript`; the fixture contract `testingexamples.github.io/spec/index.md`; the Selenium documentation; Selenium IDE.

#### Module 11 From walkthrough to real test (hours 160.5–183), spiral pass 2

- **Outcomes:** Learning outcome 5.
- **Evidence 11:**
  - the Module 10 walkthrough converted into a Mocha suite with `node:assert/strict` assertions, explicit waits, a driver quit in `after`, and a `spec/index.md` that agrees with the code
  - manual test cases from Evidence 7 rewritten as Given-When-Then scenarios, reviewed by the product owner, and automated with a page object: 3 for Band 3 (scenarios only; automation by pairing), 3 for Band 4, 5 for Band 5 and Band 6, 8 for Band 7 test engineering, 3 for Band 7 test management
  - a demonstration that each test fails when the behaviour is wrong.
- **Activities:** Mocha's `describe`, `it`, and hooks (`before`, `beforeEach`, `afterEach`, `after`); assertions; test isolation; Given-When-Then as a shared language; page objects as JavaScript classes that hold the locators and the waits; diagnosing failures from the message, a screenshot, the page source, and the browser console log; reading the NHS Wales worked example and its spec.
- **Resources:** testingexamples "Given-When-Then Examples"; `demo-selenium-javascript-for-nhs-wales` and its `spec/index.md`; the practice repository's `tests/ui/`.

#### Module 12 API, integration, and FHIR tests (hours 183–206)

- **Outcomes:** Learning outcome 6.
- **Evidence 12:** an API test suite, in Mocha with Node's built-in `fetch`, against the practice repository's FHIR sandbox (a small local FHIR R4 server in JavaScript, started with `npm run fhir`, loaded with synthetic data), which creates, reads, searches, and updates `Patient` and `Observation` resources, checks status codes and bodies, validates against a FHIR profile, checks a clinical code's meaning, and includes a negative test.
  - Band 4 quality assurance, Band 7 test management: read and explain an existing suite instead.
  - Band 4 test engineering, Band 5 quality assurance: 5 tests, with support.
  - Band 6, Band 7 test engineering: the full suite; Band 7 test engineering also adds a simulator for a partner system.
- **Activities:** HTTP, REST, JSON; `fetch` and its responses; why Selenium is for browsers only; mocks, stubs, and simulators; HL7 FHIR resources, profiles, and terminology; HL7 version 2 awareness; moving one browser test down to the API layer.
- **Resources:** HL7 FHIR (<https://hl7.org/fhir/>); the FHIR sandbox's README; the team's interface specifications; HAPI FHIR, as an example of a production FHIR server.

#### Module 13 Continuous integration and DevOps (hours 206–221.5)

- **Outcomes:** Learning outcome 7.
- **Evidence 13:** a CI pipeline that runs the person's suites on every pull request, publishes the JUnit report and, for failed browser tests, screenshots and page source, and blocks merging on failure, plus a written triage of real CI failures (product, test, or environment).
  - Band 3, Band 4: triage of 3 failures in an existing pipeline; no pipeline change required.
  - Band 5, Band 6, Band 7 test management: the pipeline on the practice repository, and 3 triaged failures.
  - Band 7 test engineering: the pipeline on the team's repository, with parallel jobs and test selection, and a quarantine policy for flaky tests.
- **Activities:** CI configuration, caching, headless Chrome, secrets, environment variables; keeping pipelines fast; quarantining flaky tests with an owner and a deadline; feature flags, canary releases, and monitoring.
- **Resources:** testingexamples "What is continuous integration automatic testing?" and "What is DevOps for automatic testing?"; the organisation's CI documentation.

#### Module 14 Safe and lawful test automation in health care (hours 221.5–237.5)

- **Outcomes:** Learning outcome 8, Learning outcome 9.
- **Evidence 14:** synthetic data for the person's tests, including rare or edge clinical cases; a repository scan showing no secrets or personal data; a traceability matrix from automated tests to hazards and safety controls, agreed with the clinical safety officer; automated accessibility checks on browser tests with `@axe-core/webdriverjs`, with a note on what they cannot find. Band 6 quality assurance and Band 7 also review one other person's traceability matrix.
- **Activities:** how automated regression tests protect safety controls; the team's hazard log; IEC 62304 awareness; information governance for test data and pipelines.
- **Resources:** the organisation's clinical risk management process and hazard log; information governance policy.

#### Module 15 Quality engineering practice (hours 229–247)

- **Outcomes:** Learning outcome 10.
- **Evidence 15:** a flaky-test investigation with root cause and fix (Band 4 test engineering and above; Band 3 and Band 4 quality assurance describe one with the mentor); a suite-health report using flow metrics (time from a defect report to a regression test, quarantined tests, run time, failure causes) (Band 5 and above); an effort estimate for the capstone (all).
- **Activities:** maintainable test code; reviewing test pull requests; using AI assistants critically, including the risk of self-healing locators passing on the wrong element; awareness of performance, load, and security testing.
- **Resources:** testingexamples "What metrics help automatic testing?" and "How does artificial intelligence help automatic testing?".

#### Module 16 Capstone (hours 237.5–279.5), spiral pass 3

- **Outcomes:** Learning outcome 12, with every other outcome applied at track depth.
- **Evidence 16:** a capstone on the person's own team's product, agreed with the product owner and mentor at hour 237.5, and a presentation to the gate panel aimed at a non-technical audience (10 minutes for Band 3 and Band 4, 20 minutes for Band 5 to Band 7):

| Track | Capstone |
| --- | --- |
| Band 3 | Triage one week of CI results and raise defects; write 5 Given-When-Then scenarios; make 2 reviewed changes to existing tests. |
| Band 4 quality assurance | Automate 5 manual cases with support, with a spec, running in CI. |
| Band 4 test engineering | Automate 10 cases, including 2 API tests, and maintain an existing suite over 30 learning hours. |
| Band 5 quality assurance | Automation candidate analysis for the area, and 10 cases automated at browser and API layers, with traceability, with some support. |
| Band 6 quality assurance | A risk-based automation approach for the area, automated acceptance checks agreed with clinical users, and coaching a Band 4 or Band 5 colleague through their capstone. |
| Band 6 test engineering | An automated regression suite for a product slice of 15–30 manual cases: plan, browser and API tests, spec, synthetic data, CI, traceability, and handover README. |
| Band 7 test engineering | Reusable fixtures or framework for an area, a pipeline with test selection, one performance or load test based on real clinical demand, and coaching two colleagues. |
| Band 7 test management | An automation strategy and metrics for a product or programme, a business case, an adoption and team development plan, and a small automated suite of their own at the Working target. |

- **Activities:** a review with the mentor in every 7.5 hours of learning; pull requests reviewed by developers on the team (at least two for Band 5 and above); a mid-capstone show-and-tell to the team; an optional presentation rehearsal with the mentor in hours 262–269.5.

#### Module 17 Lean Six Sigma Green Belt, lifetime certification (hours 279.5–320)

- **Outcomes:** Learning outcome 14.
- **Evidence 17:**
  - a Lean Six Sigma **Green Belt certificate** from a certification body whose Green Belt does not expire (Decision 8)
  - a **Green Belt project** on the person's own team's testing process, using DMAIC: a project charter, a SIPOC and process map, a baseline measure with real data, a root-cause analysis, an improvement, and a control plan. Typical measures: flaky test rate, time from a defect report to a regression test, manual regression hours per release, defects found after release, and CI run time. The project uses synthetic data only, and builds on the Evidence 7 analysis and the Evidence 15 suite-health report.
    - Band 3, Band 4: a part of a team project, led by a mentor or a Band 6 or Band 7 colleague, with their own part named in the charter.
    - Band 5, Band 6 test engineering: a small project of their own.
    - Band 6 quality assurance, Band 7 test engineering: lead a project, and coach a lower-band colleague's part.
    - Band 7 test management: lead a project for their area, and sponsor the cohort's other projects with the product owners.
- **Activities:** 27.5 hours on the Green Belt body of knowledge and exam preparation, 10 hours on the project, and 2.5 hours for the certification exam:
  - Lean: value and flow; the eight wastes (TIMWOODS) in testing; value stream mapping of the test process; kaizen.
  - Define: voice of the customer, critical-to-quality requirements, SIPOC, the project charter.
  - Measure: data collection plans, measurement system analysis, descriptive statistics, variation, process capability, and sigma level.
  - Analyse: Pareto charts, fishbone diagrams, the five whys, hypothesis testing, correlation and regression, FMEA.
  - Improve: generating and piloting solutions; automation as an improvement, measured, not assumed.
  - Control: control charts and statistical process control, control plans, and handing the process to its owner.
- **Assessment:** the certification body's exam, and a project review by the training lead and mentor, with the product owner as sponsor. Certification completes the programme with Gate 4 (see [Completion](#completion)).
- **Resources:** testingexamples "How does Six Sigma lead manual testing into automatic testing?"; the certification body's Green Belt body of knowledge (Decision 8); the flow metrics from Module 15.

### Track modules

#### Role foundations (hours 88.5–279.5, individual)

- **Purpose:** close the role and skill gaps that are not about automation, because each person is measured against their whole role.
- **Content:** set by the individual learning plan from Gate 0 gaps in Parts A to C. Typical items: test analysis, test and quality planning, defect management, communicating with non-technical stakeholders, planning own work (Part A item 9), freedom to act (Part A item 17), and the role-level statements in Part B.
- **Activities:** 1 hour in every 7.5 hours of learning for role practice with the mentor or manager, stretch tasks on the team, shadowing, and the community of practice.
- **Evidence:** progress on each individual learning plan action, reviewed at every gate.

#### Health care foundations (hours 97.5–152.5)

- **Purpose:** meet the expected levels in understanding health and care services, clinical risk management, and information governance by Gate 2 (Principle 13).
- **Activities:** sessions with the clinical safety officer and information governance lead; a hazard workshop; a shadowing session with a clinical or care user. Band 7 test management leads one session for the cohort.
- **Evidence:** reflected in Part C ratings at Gate 2.

#### Coaching others in automation (Band 6, Band 7; hours 160.5–247)

- **Outcomes:** guide and coach others, as the Practitioner and Expert level descriptions require.
- **Evidence:** coaching log for one or two cohort members from a lower band, with their feedback.

#### Automation strategy and metrics (Band 6 quality assurance, Band 7; hours 206–247)

- **Outcomes:** contribute to (Band 6 quality assurance, Band 7 test engineering) or own (Band 7 test management) the automation strategy for an area; define metrics for monitoring and controlling test activities.
- **Evidence:** a strategy document and a metrics proposal, reviewed by the head of test.

#### Frameworks and non-functional testing (Band 7 test engineering; Band 6 test engineering read only; hours 206–247)

- **Outcomes:** extend, standardise, and build reusable frameworks; plan and run performance, load, and resilience tests based on real clinical demand; maintain and adapt CI/CD pipelines.
- **Evidence:** folded into the Band 7 test engineering capstone.

#### Acceptance test automation (Band 6 quality assurance; hours 183–221.5)

- **Outcomes:** Practitioner in business and user acceptance testing, applied to automation: turn acceptance criteria into automated checks, plan user acceptance testing with clinicians, and report residual risk.
- **Evidence:** folded into the Band 6 quality assurance capstone.

#### Leading teams through automation adoption (Band 7 test management; hours 206–247)

- **Outcomes:** people management at Practitioner, and medical device software regulation at Working, applied to automation adoption: team development plans, supplier testers, and regulated testing records.
- **Evidence:** folded into the Band 7 test management capstone.

### Gates

Every gate repeats the full capability self-assessment (Parts A to C) with calibration, adds the Part D practical from Gate 1, and reviews module evidence. The gate updates the individual learning plan.

| Gate | Programme hour | Module evidence | Part D practical | Reviewers |
| --- | --- | --- | --- | --- |
| Gate 0 | 88.5 | Evidence 1–6 | — (unscored diagnostic only) | Person, line manager, mentor, training lead |
| Gate 1 | 136.5 | Evidence 7–9 | Fix a failing unit test and open a pull request | Line manager, mentor |
| Gate 2 | 183 | Evidence 10–11 | Automate one given manual test case on the fixture site (Band 3: write it as Given-When-Then and pair) | Line manager, mentor, a developer |
| Gate 3 | 221.5 | Evidence 12–13 | Triage and fix a failing CI run (Band 6 and Band 7 test engineering: plus an API test; Band 7 test management: plus reading and explaining an API test failure) | Line manager, mentor, training lead |
| Gate 4 | 279.5 | Evidence 14–16 | Live run and explanation of the capstone | Gate 4 panel |
| Certification | By 320 | Evidence 17 | The Green Belt certification exam, set by the certification body (Decision 8) | Certification body; the training lead and mentor review the project |
| Gate 5 | About six months after Gate 4 | Six months of work | Demonstrate a recent automated change | Line manager, training lead |

#### Gate thresholds

Using agreed ratings and the capability index:

| Gate | Parts A, B, C (each) | Part D | Other conditions |
| --- | --- | --- | --- |
| Gate 0 | Baseline, no threshold | — | Individual learning plan agreed and signed |
| Gate 1 | At least 60% | Partly or better | No item lower than at Gate 0 without an agreed reason |
| Gate 2 | At least 70% | Partly or better | Clinical risk management and information governance meet expectations |
| Gate 3 | At least 80% | Meets | Test engineering at least one level below the automation target, or at it |
| Gate 4 | At least 90% | Meets | No skill more than one level below expected; test engineering at the automation target; capstone accepted by the product owner |
| Gate 5 | At least 90%, sustained | Meets | Plan agreed for any remaining gaps, aiming for 100% by the next annual appraisal |

#### If a gate is not met

1. The person gets up to 22.5 extra learning hours on the items below threshold, with a written plan and extra mentor time, and the gate is repeated once.
2. If the repeated gate is still not met, the person, line manager, and training lead agree a next step. That may be the extension to 380 hours, a different automation target, more Role foundations support, or pausing the programme.
3. In line with Principle 14, none of these is a capability or performance procedure.

#### Gate 4 panel

Three people: a lead test engineer or test manager at least one band above the person (chair, not their mentor), a developer from another team, and the training lead. For Band 7 tracks the chair is the head of test or a lead from outside the person's area. The clinical safety officer reviews traceability evidence in writing.

#### Completion

A person completes the programme when every threshold for Gate 4 is met, and they hold the Lean Six Sigma Green Belt certification with an accepted Green Belt project (Evidence 17). Gate 5 confirms that the capability holds in normal work.

### Roles and responsibilities

| Role | Responsibilities | Time commitment |
| --- | --- | --- |
| Participant | Completes the self-assessment honestly at every gate, follows the individual learning plan, produces evidence, keeps a learning log entry for each learning session. | 320 hours, protected; by default 7.5 hours a week |
| Line manager | Protects learning time; rates each gate independently and calibrates; owns the individual learning plan with the participant. | 1 hour per 15 learning hours, plus 2 hours a gate: about 33 hours |
| Mentor | Pairs, reviews code, runs Role foundations practice, prepares for gates. At least one band above the participant and at or above their automation target; for Band 7 tracks, a Band 8a or higher lead, or an external mentor if none is available. One mentor supports up to 3 participants. | A 1-hour start, a 1-hour check-in, and a 1-hour walkthrough in each of Modules 1 to 3; 1.5 hours per 7.5 learning hours in hours 88.5–136.5, then 1 hour per 7.5 learning hours, including Green Belt project support in Module 17: about 41.5 hours per participant |
| Training lead (programme owner) | Owns this specification and the instrument; runs gates; moderates calibration; evaluates and maintains the programme. | 1 hour per 7.5 cohort learning hours in hours 0–60.5, 3.75 hours per 7.5 cohort learning hours in hours 88.5–279.5, plus about 20 hours in Module 17, for a cohort of up to 12: about 118 hours |
| Head of test (sponsor) | Sponsors the programme; reviews Automation strategy and metrics strategies; chairs Band 7 Gate 4 panels. | 2 hours a month |
| Developers | Review pull requests, pair on Module 12, join Gate 2 and 3 reviews and Gate 4 panels. | About 1 hour per 7.5 learning hours |
| Product owners | Review Given-When-Then scenarios; agree and accept capstones; sponsor Green Belt projects. | 4 hours per participant |
| Lean Six Sigma trainer and certification body | Teach the Green Belt body of knowledge in Module 17, set the certification exam, and issue a certificate that does not expire (Decision 8). | 30 hours of teaching per cohort |
| Clinical safety officer | Runs Health care foundations and Module 14 sessions; reviews traceability evidence. | 6 hours per cohort, plus reviews |
| Information governance lead | Runs Health care foundations and Module 14 sessions on test and personal data. | 3 hours per cohort |
| HR | Confirms the developmental status of gates (Principle 14); agrees mapping decisions. | As needed |

### Inclusion and reasonable adjustments

Following Universal Design for Instruction:

- Every module offers at least two formats: reading, video, live pairing, or worked examples.
- Evidence can be shown in more than one way where the outcome allows, for example a recorded walkthrough instead of a written explanation.
- The self-assessment can be completed with the mentor's help, in writing or in conversation.
- Tools are checked for accessibility: editor screen reader support, high-contrast themes, captioned videos.
- Pacing is flexible within each gate period, and Band 3 and Band 4 can extend to 380 hours.
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
- checks tool versions (Node.js, Chrome, Selenium, Mocha) and links every 6 months
- records every change in the [change log](#change-log).

### Decisions

| Id | Decision | Default | Who decides |
| --- | --- | --- | --- |
| Decision 1 | Primary language and tool | JavaScript with Selenium and Mocha; Python with Selenium and pytest if the team's codebase is Python | Training lead, with the head of test |
| Decision 2 | CI service | The organisation's existing CI service; GitHub Actions for the practice repository | Training lead |
| Decision 3 | JavaScript foundations course | A structured, free or already-licensed course with exercises | Training lead |
| Decision 4 | Practice FHIR server | The practice repository's local FHIR sandbox (Node.js, no Docker), with synthetic data; a shared team test server with synthetic data as the alternative | Mentors |
| Decision 5 | Capstone scope per person | As in the Module 16 table, agreed at hour 237.5 | Product owner, mentor |
| Decision 6 | Mapping for band and role combinations without a reference level, and Band 3 factor levels | The mapping rule in [Tracks](#tracks) | Line manager, training lead, HR |
| Decision 7 | Developmental status of gates | Gates are developmental only (Principle 14) | HR, head of test |
| Decision 8 | Lean Six Sigma Green Belt certification body | An accredited body whose Green Belt certification does not expire, with an exam and a project requirement; the course may be delivered in house or by the body | Training lead, with the head of test |

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
| Learning outcome 1 | Evidence 7, Evidence 16 |
| Learning outcome 2 | Evidence 8, Evidence 11 |
| Learning outcome 3 | Evidence 9, Evidence 16 |
| Learning outcome 4 | Evidence 10, Evidence 11 |
| Learning outcome 5 | Evidence 11, Evidence 16 |
| Learning outcome 6 | Evidence 12, Evidence 16 |
| Learning outcome 7 | Evidence 13, Evidence 16 |
| Learning outcome 8 | Evidence 14, Evidence 16 |
| Learning outcome 9 | Evidence 14, Evidence 16 |
| Learning outcome 10 | Evidence 15 |
| Learning outcome 11 | Evidence 10 |
| Learning outcome 12 | Evidence 16 |
| Learning outcome 13 | Capability self-assessment at every gate |
| Learning outcome 14 | Evidence 17 |

## Related topics

- [../plan.md](../plan.md): the reasoning behind this programme.
- [../tasks.md](../tasks.md): the work to build, run, evaluate, and maintain it.

## Sources

- Curriculum models tutorial: `~/git/joelparkerhenderson/curriculum-models/README.md`.
- Digital health care job roles reference (roles-skills), in `~/git/agenda-for-change/`: `data/bands.yaml` (band outlines and points ranges), `data/job-evaluation.yaml` (16 factors), `data/roles/quality-assurance-test-analyst.yaml`, `data/roles/test-engineer.yaml`, `data/roles/test-manager.yaml`, `exports/self-assessment/`, `guides/self-assessment/index.md`, `research/pcf-role-levels.tsv`, and `roles-skills.github.io/content/reference.json`; published at <https://roles-skills.github.io>. The reference profiles are illustrative, not official job descriptions, and its job evaluation scores are not a formal evaluation.
- UK Government Digital and Data Profession Capability Framework: <https://understand-digital-data-roles-skills.service.gov.uk/>. Contains public sector information licensed under the Open Government Licence v3.0. © Crown copyright.
- Testing Examples: `~/git/testingexamples/`, published at <https://testingexamples.github.io>.
- Lean Six Sigma: testingexamples "How does Six Sigma lead manual testing into automatic testing?" (<https://testingexamples.github.io/en-001/what-is-lean-six-sigma-for-automatic-testing/>); the certification body's Green Belt body of knowledge (Decision 8).
- HL7 FHIR: <https://hl7.org/fhir/>. Selenium: <https://www.selenium.dev/>. Mocha: <https://mochajs.org/>.

## Change log

| Date | Change |
| --- | --- |
| 2026-10-07 | First version: one learner moving from Band 5 to Band 6. |
| 2026-10-07 | Rewritten: eight tuned tracks for Bands 3 to 7, no band changes, a full capability self-assessment (21 band dimensions, UK GDaD PCF role aspects, all role skills) at every gate, and capability thresholds per gate. |
| 2026-10-08 | Revised: every 30-minute session or task becomes 1 hour, including the mentor's start (absorbed in Module 1), Part D practicals for Band 3 and Band 4, and the capstone reviews; Modules 2, 6, 7, 9, 10, 12, 13, 14, 15, and 16 and Health care foundations grow by 11.5 hours in all; with a 0.5-hour buffer the programme becomes 320 hours (380 with the extension), about 43 weeks, and every later hour moves: Gate 0 is at hour 88.5 and Gate 4 at hour 279.5. |
| 2026-10-08 | Revised: two ISTQB modules added after the basics, for every track: Module 4 ISTQB Certified Tester Foundation Level v4.0 (4 hours) and Module 5 ISTQB Certified Tester Advanced Level Test Automation Engineer (24 hours), with Learning outcomes 18 and 19 and certificate evidence (Evidence 4 and 5) recorded at Gate 0. Induction and every later module move up two numbers, with their evidence. The programme becomes 320 hours (380 with the extension), and every hour from hour 60 moves 28 hours later: Gate 0 is at hour 88. |
| 2026-10-08 | Revised: modules numbered from 1, not 0: Module 1 to Module 15, with Evidence 1 to 15 renumbered to match, so Evidence N is still Module N's evidence. Gate numbers and hours are unchanged. |
| 2026-10-08 | Revised: three basics modules added at the start, 20 hours each, before induction: Module 0 Basics of a programming language, Module 1 Basics of a browser automator, and Module 2 Basics of an AI assistant, with Learning outcomes 15 to 17 and walkthrough evidence (Evidence 0 to 2) reviewed at Gate 0. The earlier Modules 0 to 11 become Modules 3 to 14, and Evidence 0 to 11 becomes Evidence 3 to 14. The programme becomes 320 hours (380 with the extension), and every later hour, including each gate, moves 60 hours later. |
| 2026-10-08 | Revised: Principle 19, full words not abbreviations; instrument item ids in full words ("Part A item 1", "Part B item 1.2", "Part C item 5"), and depths and skill levels in full words in every table ("With support", "Working", "Agreed at Gate 0"). |
| 2026-10-08 | Revised: abbreviations written in full words (Module 0, Learning outcome 1, Evidence 0, Decision 1, Band 5 quality assurance, Role foundations, individual learning plan), including file names and website URLs; added `curriculum.md`, generated from this spec. |
| 2026-10-08 | Revised: "UK GDaD PCF" in full everywhere, and "UK GDaD PCF role" for the role a person has; Playwright removed from the training, so Learning outcome 11 and Evidence 4 use an existing Selenium suite that someone else wrote (`demo-selenium-javascript`); the toolset sentence about Docker removed. |
| 2026-10-07 | Added Module 11 Lean Six Sigma Green Belt, lifetime certification: 40 hours at the end of every track (hours 180–220), with Learning outcome 14, Evidence 11, and Decision 8. The programme is 320 hours (380 with the Band 3 and Band 4 extension); completion needs Gate 4 and the certification. |
| 2026-10-07 | Revised: timelines in hours. Every track has 180 hours of protected learning time, by default 7.5 hours a week (20% of a 37.5-hour week), with an hour budget that totals 180; the schedule, gates, and time commitments are in programme hours; Band 3 and Band 4 may extend to 240 hours. |
| 2026-10-07 | Revised: JavaScript with Selenium and Mocha replaces TypeScript with Playwright (Playwright becomes the reading-only tool for Learning outcome 11); no Docker anywhere, with a JavaScript FHIR sandbox; Principle 10, wait explicitly; the informal capability estimate removed. |
| 2026-10-07 | Implemented: instruments generated per track; Partly defined for Part C; Learning outcome 2 (Band 7 test engineering) and Learning outcome 11 (Band 7 test management) depths aligned with modules; Gate 3 timing, Band 3 in hours 90–112.5, Acceptance test automation timing, Band 7 mentors, and the capstone rehearsal made explicit. |

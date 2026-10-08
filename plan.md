# Plan: formal training programme from manual testing to automatic testing

## Goal

Create a comprehensive, formal training programme that upskills manual testers at **Bands 3 to 7** into automatic testers, with a **tuned version for each band** and assigned role, while every person **stays in their current band and role**.

Each person already has a UK GDaD PCF role. The programme must:

1. **Measure capability formally**, at every gate, against the person's own band (all 21 dimensions), their UK GDaD PCF role aspects, and all of their role's skills.
2. **Close the gap in the role they hold**, to at least 90% by Gate 4.
3. **Build automated testing capability** to a target suited to each band and role.

[spec/index.md](spec/index.md) is the single source of truth for the programme. This plan explains why it is shaped this way. [tasks.md](tasks.md) lists the work.

## Context

- **The people** are manual testers in the quality assurance testing role family, at Bands 3 to 7. Each has a UK GDaD PCF role (Quality assurance test analyst, Test engineer, or Test manager) at a role level. They are not changing band.
- **The starting point** is measured at Gate 0. The gap is not only automation: it can cover test analysis, planning, defects, communication, health care skills, and working at the band's level of autonomy and scope.
- **The organisation** is the generic digital health care organisation in the roles-skills reference. It builds clinical and patient-facing services, exchanges data using HL7 FHIR, runs clinical risk management with hazard logs and safety cases, and never allows real patient data in test environments.
- **The reference data** comes from roles-skills, which aligns with the UK GDaD PCF and ESCO:
  - each **band** has a 5-dimension outline (knowledge, autonomy, scope, leadership, accountability) and a points range
  - a **16-factor job evaluation scheme** scores each role level
  - each **role level** has UK GDaD PCF role and level statements, health care responsibilities, and skills with expected UK GDaD PCF levels
  - **self-assessment exports** and a self-assessment guide already exist for every role level.
- **The reference has gaps** that matter here: there is no testing role level at Band 3, no test engineer at Band 5, and no quality assurance test analyst at Band 7.
- **The UK GDaD PCF expects little automation from some roles.** Quality assurance test analysts at every level, and test managers, need test engineering only at Awareness. Only test engineers need Working (Band 6) or Practitioner (Band 7).
- **The materials** come largely from Testing Examples: a stable fixture site, the Learn articles, Selenium skills, and demo repositories with specs that must agree with their code.

## The four core areas

| Area | This programme |
| --- | --- |
| **Context:** why this, why now | People hold roles whose skills they do not yet fully use, and testing is still manual: slow, variable, and unable to run on every change. Growing the people already in post keeps their product and clinical knowledge, and needs no regrading. |
| **Intent:** what to teach | Each person's own role, band, and skills, in full (Learning outcome 13), plus automated testing to a per-track target (Learning outcomes 1 to 12). |
| **Implementation:** how to teach | Eight tuned tracks sharing one schedule of 308 hours (by default 7.5 hours a week, 20% time), core modules, and gate dates, ending with a Lean Six Sigma Green Belt for everyone, with individual role foundations (Role foundations) and track modules for Bands 6 and 7. |
| **Impact:** how to assess | The full capability self-assessment at six gates, calibrated with the manager, with rising thresholds, plus automation practicals and module evidence. |

## Key design choices

### Tune by band and UK GDaD PCF role, not band alone

Two people at the same band can hold very different roles. A Band 7 test manager and a Band 7 senior test engineer have different skills and very different automation expectations. So there are eight tracks: Band 3, Band 4 quality assurance, Band 4 test engineering, Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test engineering, and Band 7 test management. A mapping rule covers any other combination, so every person is placed by their **assigned** role.

### No band changes

The programme measures people against the band they hold. Where the automation target is above what the role requires (Band 5 quality assurance, Band 6 quality assurance, Band 7 test management), reaching it is a strength, shown as a negative gap. It is not grounds for regrading. This keeps the programme fair across the cohort and separate from pay.

### Gates built on a full self-assessment

The requirement to measure the whole role puts gates at the centre. Each gate repeats the **same full instrument**:

- **Part A, band, 21 dimensions:** the 5 band outline dimensions and all 16 job evaluation factors, so the whole band is seen, not just skills.
- **Part B, UK GDaD PCF role aspects:** every role and role-level statement, plus the health care responsibilities.
- **Part C, skills:** every UK GDaD PCF skill in the person's UK GDaD PCF role and every health care skill, including skills only expected at Awareness.
- **Part D:** a short automation practical.

Repeating the whole instrument is deliberate. It shows progress on the whole role, catches regression, and makes the self-assessment a habit. That habit is the spiral applied to self-knowledge.

The job evaluation factors are used as a self-assessment of how fully the person works at their job's level. The scheme scores jobs, not people, so the spec says plainly that this is not a job evaluation.

### Self-rating, then calibration

People rate themselves first, managers rate independently, and evidence settles differences. This follows the roles-skills self-assessment guide, and reduces both over- and under-rating, which are both likely when people know they have gaps.

### Rising thresholds

A single pass/fail at the end would be demoralising and too late to act on. The thresholds rise by about 10 points a gate (60, 70, 80, 90%), so each step is achievable and problems show early. Clinical risk management and information governance must meet expectations by Gate 2, because they protect patients and data whatever else is open.

### Developmental, not disciplinary

Rating people against their whole role is sensitive. The gates only work if self-assessment is honest. So the spec states that gate results never start capability or performance procedures by themselves, and HR confirms this (Decision 7).

### Shared core, tuned depth

A shared schedule and gate dates let one mixed cohort learn together, let Band 6 and 7 people coach lower bands (Coaching others in automation), and keep the programme manageable for one training lead. Tracks differ in depth (read, with support, independent, lead), hours, evidence, and capstone.

### Role foundations alongside automation

Because the gap covers the whole role, Role foundations gives every person an hour of role practice in every 7.5 hours of learning, driven by their own Gate 0 gaps, and Health care foundations brings health care skills up early.

### Hours

The programme is counted in hours of protected learning time, not weeks or days. Every track has the same 308 hours; tracks differ in depth, not in hours, which keeps the cost the same for every band and makes protected time simple to plan and defend. The default pace is 7.5 hours a week, 20% of a 37.5-hour week, so a person keeps 30 hours a week for their delivery work and the programme runs over about 41 weeks. The learning agreement may set another pace, such as two sessions of 3.75 hours a week. Band 3 and Band 4 may extend to 368 hours.

### Basics to start

Every track starts with three basics modules of 20 hours each, before induction: Module 1 Basics of a programming language, Module 2 Basics of a browser automator, and Module 3 Basics of an AI assistant. A manual tester who has never written code meets it first in a short, low-stakes pass, ending with a walkthrough to their mentor rather than a scored test, so the Gate 0 baseline measures someone who has already run their own code, their own browser script, and their own AI-assisted plan. The later modules then go deeper, rather than starting from nothing.

### Lean Six Sigma Green Belt to finish

Every track ends with Module 17, a Lean Six Sigma Green Belt with a lifetime certification: 40 hours, after the capstone and Gate 4. Manual testing is itself the variation problem Six Sigma targets (testingexamples "How does Six Sigma lead manual testing into automatic testing?"), so the Green Belt gives every tester the method to measure a testing process, find root causes, and prove that automation improved it, rather than assume so. Each person's Green Belt project improves a real measure in their own team's testing, such as flaky tests or the time from a defect report to a regression test, and builds on the flow metrics from Module 15. A certificate that does not expire stays with the person, whatever their role later. It comes last because a Green Belt project needs the automation skills and the real data that the earlier modules produce.

### Toolset

JavaScript with Selenium and Mocha is the primary toolset. Selenium is the longest-established browser automation project, built on the W3C WebDriver standard, and is what many organisations' existing suites and job adverts use. Because it does not wait for elements by itself, it makes people learn waiting properly: every wait is an explicit wait for a stated condition, which is the habit that prevents flaky tests in any tool. JavaScript runs everywhere with Node.js, with no build step, and Testing Examples has a skill and demos for exactly this pair.

### No Docker

Participants do not have Docker, so nothing in the programme needs it. Every tool runs with Node.js and Chrome alone. The FHIR sandbox for Module 12 is a small FHIR R4 server written in plain JavaScript inside the practice repository, started with `npm run fhir`, or automatically by the API tests. Selenium Manager downloads the Chrome driver, so there is nothing else to install.

## Choice of curriculum model

| Model | Used for | Why |
| --- | --- | --- |
| **PADDIE+M** | The programme life cycle, and the structure of [tasks.md](tasks.md). | A formal, multi-track programme in a regulated organisation needs planning and HR agreement up front, and maintenance as the reference data and tools change. |
| **Understanding by Design** | Each module: outcomes, then evidence, then activities. | Makes the evidence the assessment, and keeps every activity tied to an outcome. |
| **Bruner's spiral** | Locate, act, wait, assert taught three times; the same capability instrument repeated at every gate. | Durable skill and accurate self-knowledge both need revisiting at rising depth. |
| **Taba's grassroots** | Practice material from each person's own regression pack and product; individual learning plans from each person's own gaps. | Starting from each person's own measured gaps makes the programme fit them. |
| **SAM** | Revising the programme after every gate for the first cohort. | Fast feedback, which a first multi-track run needs. |
| **Universal Design for Instruction** | Inclusion, flexible pacing, the option of 368 hours, assisted self-assessment. | A cohort across five bands has a wide range of starting points and needs. |
| **Goodlad's levels** | Evaluation, including calibration differences as the "perceived" level. | Shows the gap between what the spec says and what people experienced. |

## Phases

The programme follows PADDIE+M. Tasks for each phase are in [tasks.md](tasks.md).

1. **Planning:** sponsor, HR agreement on developmental gates and no band changes, cohort, mentors, Decisions 1 to 7.
2. **Analysis:** build and run the capability self-assessment at Gate 0, place each person in a track, and inventory the regression packs.
3. **Design:** confirm tracks, thresholds, depths, and capstones in the spec.
4. **Development:** build the instrument, practice repository, FHIR sandbox, CI template, practicals, and track materials.
5. **Implementation:** run the core modules, track modules, and Gates 0 to 4.
6. **Evaluation:** capability index over time, calibration analysis, Goodlad evaluation, Gate 5 follow-up.
7. **Maintenance:** rebuild the instrument when the reference changes, and revise the spec after each cohort.

## Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| People inflate self-ratings, or feel threatened by the baseline | High | High | Developmental-only gates (Decision 7); briefing at Module 6; independent manager ratings; evidence for every "Meets". |
| Managers rate inconsistently across teams | High | Medium | Calibration with evidence; training lead moderates a 1 in 5 sample; calibration differences tracked in evaluation. |
| Mixed-band cohort is too wide to teach together | Medium | Medium | Shared core sessions, track breakouts, depth table, coaching by Bands 6 and 7. |
| The Green Belt exam is failed, or the certification body is unsuitable | Low | Medium | Choose an accredited body with a lifetime certificate and a resit policy (Decision 8); exam preparation within Module 17; one resit within three months. |
| Protected time is eroded by delivery pressure | High | High | Signed learning agreement; time in calendars; escalation by the training lead if more than 7.5 hours are lost in a gate period. |
| Band 3 and Band 4 learners are overwhelmed by programming | Medium | High | Lower automation targets, mentor pairing in the first Module 8 sessions (hours 95.5–110.5), the option of 368 hours. |
| Too few mentors at the right band and automation level | High | High | 3 participants per mentor at most; Band 7 test engineering participants mentor lower tracks under Coaching others in automation; external mentors for Band 7 test engineering if needed. |
| The automation target is read as a claim for regrading | Medium | Medium | Scope and Principle 1 in the spec; HR briefing; targets above role recorded as strengths only. |
| Reference gaps (Band 3, and other unmapped combinations) cause disputes | Medium | Medium | Mapping rule and Decision 6, recorded in the individual learning plan at Gate 0. |
| Real patient data or secrets leak into tests | Low | High | Health care foundations and Module 14, repository scanning, and the Gate 2 condition on information governance. |
| Over-reliance on AI-generated tests | Medium | Medium | Every line must be explained at gates; Part D practicals are supervised. |
| The reference data changes mid-programme | Low | Medium | Pin the reference version for the cohort; rebuild the instrument between cohorts. |

## Success measures

- The cohort's mean capability index rises from its Gate 0 baseline to at least 90% at Gate 4, and holds at Gate 5.
- Every participant reaches their track's automation target.
- No participant changes band as a result of the programme, and no gate result is used in an HR procedure.
- Manual regression hours per release fall, and the time from a defect report to a regression test falls.
- Capstone suites run in team CI and are maintained by the teams after the programme.
- Every participant holds a Lean Six Sigma Green Belt certification, and each Green Belt project improves its measure.
- Participants are retained at 12 months.

## Open questions

These need answers from the sponsor and HR before Implementation. Defaults are in [spec/index.md](spec/index.md#decisions).

1. Does HR agree that gates are developmental only, and that no band changes follow (Decision 7)?
2. How should Band 3 job evaluation factor levels, and any unmapped band and role combinations, be agreed (Decision 6)?
3. Has the organisation standardised on an automation tool or language (Decision 1)?
4. Which CI service will teams use, and can participants change pipelines (Decision 2)?
5. Is there budget for a paid JavaScript course (Decision 3)?
6. Can participants install Node.js 24 and Chrome, and run a local server on port 8080 (Decision 4)?
7. How many people are in the first cohort, in which tracks, and who are the mentors?
8. Which Lean Six Sigma body certifies the Green Belt, with a certificate that does not expire, and what is the budget for its course and exam (Decision 8)?

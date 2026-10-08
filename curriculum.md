# Curriculum

The curriculum of the training programme from manual testing to automatic testing, in one place: what every person learns, in which hours, to what depth for each track, with what evidence, and how it is assessed.

This page is generated from [spec/index.md](spec/index.md), the single source of truth, by `scripts/build_curriculum.py`. Edit the spec, never this page. The materials for each module are linked from its section.

- **Length:** 220 hours of protected learning time, by default 7.5 hours a week (20% of a 37.5-hour week), so about 30 weeks.
- **Core modules:** Module 0 to Module 11, the same for every track, taught at each track's depth.
- **Track modules:** Role foundations and Health care foundations for every track, and leadership modules for Band 6 and Band 7.
- **Tracks:** eight, one for each band and UK GDaD PCF role, from Band 3 to Band 7. See the [track guides](materials/tracks/index.md).
- **Gates:** at hours 0, 45, 90, 127.5, and 180, then a follow-up about six months later, each with the full capability self-assessment.
- **Ends with:** the Lean Six Sigma Green Belt, a lifetime certification, in hours 180 to 220.

## Learning outcomes

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

## Schedule

The programme is measured in **hours** of protected learning time. Every track has **220 hours** and the same gates, so a mixed cohort can learn together; the tracks differ in depth, not in hours. The default pace is **7.5 hours a week**, 20% of a 37.5-hour working week, so the programme runs over about 30 calendar weeks. The learning agreement may set another pace, such as two sessions of 3.75 hours a week; `scripts/gate_calendar.py` turns a pace into dates.

| Track | Protected time | Approximate guided hours | Optional extension |
| --- | --- | --- | --- |
| Band 3 | 7.5 hours a week, by default | 220 | To 280 hours |
| Band 4 quality assurance, Band 4 test engineering | 7.5 hours a week, by default | 220 | To 280 hours |
| Band 5 quality assurance | 7.5 hours a week, by default | 220 | — |
| Band 6 quality assurance, Band 6 test engineering | 7.5 hours a week, by default | 220 | — |
| Band 7 test engineering, Band 7 test management | 7.5 hours a week, by default | 220 | — |

The timeline is in programme hours, counted from 0 to 220: "hours 7.5–45" means after 7.5 and up to 45 hours of learning. The schedule below says in which hours each module runs.

Where the 220 hours go, for every track:

| Item | Programme hours | Hours |
| --- | --- | --- |
| Module 0 Induction and baseline, including Gate 0 | 0–7.5 | 6.5 |
| Module 1 Why and what to automate | 0–15 | 4.5 |
| Module 2 Programming foundations in JavaScript | 7.5–45 | 14.5 |
| Module 3 Version control and collaboration | 22.5–45 | 7 |
| Module 4 Browser automation fundamentals | 45–67.5 | 17.5 |
| Module 5 From walkthrough to real test | 67.5–90 | 12.5 |
| Module 6 API, integration, and FHIR tests | 90–112.5 | 15 |
| Module 7 Continuous integration and DevOps | 112.5–127.5 | 10 |
| Module 8 Safe and lawful test automation in health care | 127.5–142.5 | 7 |
| Module 9 Quality engineering practice | 135–150 | 6 |
| Module 10 Capstone | 142.5–180 | 27.5 |
| Role foundations: 1 hour in every 7.5 hours of learning, from hour 7.5 | 7.5–180 | 23 |
| Health care foundations: five sessions | 7.5–60 | 7 |
| Gates 1 to 4: 2.5 hours each | At 45, 90, 127.5, 180 | 10 |
| Real automation on the team's product: 1.5 hours in every 7.5 hours of learning (from hour 127.5, Module 8 and Module 10 work on the team's product) | 67.5–127.5 | 12 |
| Module 11 Lean Six Sigma Green Belt, lifetime certification | 180–220 | 40 |
| **Total** | **0–220** | **220** |

The track modules take part of Band 6 and Band 7 participants' track breakouts and real automation time. Band 3 uses its Module 6 time for Role foundations and real automation. Each module's page in `materials/modules/` shows how its hours split into sessions.

From hour 67.5, about 1.5 hours in every 7.5 hours of learning is real automation on the person's own team's product, at their track's depth.

Band 3 does not take Module 6, so in hours 90–112.5 Band 3 participants spend that time on Role foundations and real automation.

Gate 3 takes place at hour 127.5, before Module 8 begins. It reviews Evidence 6 and Evidence 7; Evidence 8 is reviewed at Gate 4.

| Programme hours | Core modules | Track modules | Gate |
| --- | --- | --- | --- |
| 0–7.5 | Module 0 Induction and baseline | — | **Gate 0** (hour 0, baseline) |
| 0–15 | Module 1 Why and what to automate | Role foundations starts (runs all programme) | — |
| 7.5–45 | Module 2 Programming foundations in JavaScript | Health care foundations (hours 7.5–60) | — |
| 22.5–45 | Module 3 Version control and collaboration | — | **Gate 1** (hour 45) |
| 45–67.5 | Module 4 Browser automation fundamentals | — | — |
| 67.5–90 | Module 5 From walkthrough to real test | Coaching others in automation (Band 6, Band 7, hours 67.5–150) | **Gate 2** (hour 90) |
| 90–112.5 | Module 6 API, integration, and FHIR tests | Acceptance test automation (Band 6 quality assurance, hours 90–127.5) | — |
| 112.5–127.5 | Module 7 Continuous integration and DevOps | Frameworks and non-functional testing (Band 7 test engineering, hours 112.5–150) | — |
| 127.5–142.5 | Module 8 Safe and lawful test automation in health care | Automation strategy and metrics (Band 6 quality assurance, Band 7, hours 112.5–150) | **Gate 3** (hour 127.5) |
| 135–150 | Module 9 Quality engineering practice | Leading teams through automation adoption (Band 7 test management, hours 112.5–150) | — |
| 142.5–180 | Module 10 Capstone (tuned per track) | — | **Gate 4** (hour 180) |
| 180–220 | Module 11 Lean Six Sigma Green Belt, lifetime certification | — | **Certification** (by hour 220) |
| After 24 | Consolidation: the six months after Gate 4 | — | **Gate 5** (follow-up, about six months after Gate 4) |

With the optional extension to 280 hours for Band 3 and Band 4, the gates move to hours 0, 60, 120, 172.5, and 240, Module 11 runs in hours 240–280, and Gate 5 follows about six months after Gate 4.

## Module depth by track

Each track takes each module at a set depth: **Read and discuss**, **With support** (apply with support), **Independent** (apply independently), or **Lead or coach** (apply and lead or coach others). A dash means the track does not take the module.

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 0 Induction and baseline | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |
| Module 1 Why and what to automate | Read and discuss | With support | With support | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |
| Module 2 Programming foundations | Read and discuss | With support | With support | With support | Independent | Independent | Independent | With support |
| Module 3 Version control and collaboration | With support | With support | With support | Independent | Independent | Independent | Lead or coach | Independent |
| Module 4 Browser automation fundamentals | With support | With support | Independent | Independent | Independent | Independent | Lead or coach | With support |
| Module 5 From walkthrough to real test | With support | With support | With support | Independent | Independent | Independent | Lead or coach | With support |
| Module 6 API, integration, and FHIR tests | — | Read and discuss | With support | With support | Independent | Independent | Lead or coach | Read and discuss |
| Module 7 Continuous integration and DevOps | With support | With support | With support | Independent | Independent | Independent | Lead or coach | Independent |
| Module 8 Safe and lawful test automation | Independent | Independent | Independent | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |
| Module 9 Quality engineering practice | Read and discuss | Read and discuss | With support | With support | Independent | Independent | Lead or coach | Lead or coach |
| Module 10 Capstone | With support | With support | With support | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |
| Module 11 Lean Six Sigma Green Belt | With support | With support | With support | Independent | Lead or coach | Independent | Lead or coach | Lead or coach |
| Role foundations | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan | Individual learning plan |
| Health care foundations | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Lead or coach |
| Coaching others in automation | — | — | — | — | Lead or coach | Lead or coach | Lead or coach | Lead or coach |
| Automation strategy and metrics | — | — | — | — | Lead or coach | — | Lead or coach | Lead or coach |
| Frameworks and non-functional testing | — | — | — | — | — | Read and discuss | Lead or coach | — |
| Acceptance test automation | — | — | — | — | Lead or coach | — | — | — |
| Leading teams through automation adoption | — | — | — | — | — | — | — | Lead or coach |

"individual learning plan" means the content is set by the person's individual learning plan from their Gate 0 gaps.

## Core modules

Each module lists its outcomes, evidence, activities, and resources. The evidence ids (Evidence 0 to 11) are reviewed at the gates, and Evidence 11 also by the certification body. Where the evidence differs by track, the module says so. Otherwise every track produces the evidence at its depth from the table above.

### Module 0 Induction and baseline (hours 0–7.5)

- **Outcomes:** each person, their manager, and the training lead agree where the person starts, their track, and their support.
- **Evidence 0:**
  - the full capability self-assessment (Parts A to C), with evidence, and the manager's independent rating, calibrated at Gate 0
  - the person's track, and any mapping decision (see [Tracks](spec/index.md#tracks))
  - an **individual learning plan**: the gaps that matter most from Parts A to C, an action, owner, and date for each, the automation target, reasonable adjustments, and preferred learning formats
  - a signed learning agreement: protected time, mentor, and gate dates
  - a working development environment: Node.js 24, Google Chrome, VS Code with the ESLint extension, git, the practice repository with `npm run test:katas` passing, and access to the team's repository and CI. No Docker or other container tools are needed.
- **Activities:** induction with manager, mentor, and training lead; a briefing on how to self-assess honestly (a gap is not a failing); an unscored diagnostic coding exercise to tune Module 2 pacing; environment set-up with the mentor.
- **Resources:** the roles-skills reference pages for the person's role and band; the roles-skills self-assessment guide; this specification.
- **Materials:** [materials/modules/module-0-induction/](materials/modules/module-0-induction/index.md)

### Module 1 Why and what to automate (hours 0–15)

- **Outcomes:** Learning outcome 1.
- **Evidence 1:** an **automation candidate analysis** of the team's manual regression pack. For each case: keep manual, automate (and at which layer), or retire, with a reason based on risk, frequency, stability, and cost.
  - Band 3, Band 4: a sample of 10 cases, with the mentor.
  - Band 5, Band 6 test engineering: the person's own area.
  - Band 6 quality assurance, Band 7: a whole product or programme, reviewed with the team.
- **Activities:** the testingexamples Learn articles: automatic testing, purpose, pyramid, browser trade-offs, CI; manual repetition as a variation problem (the Six Sigma view); why exploratory and usability testing stay human; a workshop with a developer on existing unit and integration tests.
- **Resources:** testingexamples.github.io articles "What is automatic testing?", "What is the purpose of automatic testing?", "What is the automatic testing pyramid?", "What is browser automatic testing?", "How does Six Sigma lead manual testing into automatic testing?".
- **Materials:** [materials/modules/module-1-why-and-what-to-automate/](materials/modules/module-1-why-and-what-to-automate/index.md)

### Module 2 Programming foundations in JavaScript (hours 7.5–45)

- **Outcomes:** Learning outcome 2.
- **Evidence 2:** small programming exercises (katas), each with unit tests the person wrote: 5 for Band 3, 8 for Band 4 and Band 7 test management, 10 for Band 5 and Band 6, 10 harder ones for Band 7 test engineering. At least two check test-shaped data, such as a date of birth or an NHS number check digit.
- **Activities:** variables, values and `typeof`, functions, control flow, arrays and objects, modules with `import` and `export`, errors; Promises, `async`, and `await`, and why every WebDriver call must be awaited; the terminal, npm, ESLint, and the VS Code debugger; a first Mocha unit test with `node:assert/strict`; pairing with the mentor in hours 7.5–22.5 for Band 3 to Band 5, then kata review by the mentor; kata review by the mentor throughout for Band 6 and Band 7.
- **Resources:** a structured JavaScript course (Decision 3), such as MDN's JavaScript guide; the practice repository's katas; testingexamples "What are related concepts for automatic testing?".
- **Materials:** [materials/modules/module-2-programming-foundations/](materials/modules/module-2-programming-foundations/index.md)

### Module 3 Version control and collaboration (hours 22.5–45)

- **Outcomes:** Learning outcome 3.
- **Evidence 3:** reviewed pull requests to a practice repository, with comments addressed: 2 for Band 3 and Band 4, 3 for Band 5 to Band 7. Every track also reviews one pull request by someone else. Band 7 test engineering reviews three.
- **Activities:** clone, branch, commit, diff, log, revert; pull requests and review etiquette; a simple merge conflict; reading the history of a testingexamples repository.
- **Resources:** testingexamples "What are related concepts for automatic testing?"; the team's contribution guidelines.
- **Materials:** [materials/modules/module-3-version-control/](materials/modules/module-3-version-control/index.md)

### Module 4 Browser automation fundamentals (hours 45–67.5), spiral pass 1

- **Outcomes:** Learning outcome 4, Learning outcome 11.
- **Evidence 4:**
  - a Selenium JavaScript script against <https://testingexamples.github.io> that locates every fixture (by id, name, class name, link text, CSS, and XPath), waits explicitly, and acts on every form input, including the select with Selenium's `Select` helper. Band 3 and Band 4 quality assurance may complete this by pairing.
  - a one-page explanation of how Selenium waits, and why `sleep` is never the answer (Band 5 and above)
  - one small change to the `demo-selenium-javascript` example, an existing suite that someone else wrote, run successfully (Band 4 test engineering, Band 5 and above; Band 7 test management with support).
- **Activities:** locate, act, wait, assert; locator strategy (ids and agreed test ids first, then CSS and link text, XPath last); explicit waits with `driver.wait(until...)`, and why Selenium does not wait for you; clicking only when an element is in view and on top; always quitting the driver; recording with Selenium IDE, exporting to JavaScript Mocha, then rewriting the recording by hand and explaining every line.
- **Resources:** testingexamples `selenium-javascript-skill` and `demo-selenium-javascript`; the fixture contract `testingexamples.github.io/spec/index.md`; the Selenium documentation; Selenium IDE.
- **Materials:** [materials/modules/module-4-browser-automation-fundamentals/](materials/modules/module-4-browser-automation-fundamentals/index.md)

### Module 5 From walkthrough to real test (hours 67.5–90), spiral pass 2

- **Outcomes:** Learning outcome 5.
- **Evidence 5:**
  - the Module 4 walkthrough converted into a Mocha suite with `node:assert/strict` assertions, explicit waits, a driver quit in `after`, and a `spec/index.md` that agrees with the code
  - manual test cases from Evidence 1 rewritten as Given-When-Then scenarios, reviewed by the product owner, and automated with a page object: 3 for Band 3 (scenarios only; automation by pairing), 3 for Band 4, 5 for Band 5 and Band 6, 8 for Band 7 test engineering, 3 for Band 7 test management
  - a demonstration that each test fails when the behaviour is wrong.
- **Activities:** Mocha's `describe`, `it`, and hooks (`before`, `beforeEach`, `afterEach`, `after`); assertions; test isolation; Given-When-Then as a shared language; page objects as JavaScript classes that hold the locators and the waits; diagnosing failures from the message, a screenshot, the page source, and the browser console log; reading the NHS Wales worked example and its spec.
- **Resources:** testingexamples "Given-When-Then Examples"; `demo-selenium-javascript-for-nhs-wales` and its `spec/index.md`; the practice repository's `tests/ui/`.
- **Materials:** [materials/modules/module-5-walkthrough-to-real-test/](materials/modules/module-5-walkthrough-to-real-test/index.md)

### Module 6 API, integration, and FHIR tests (hours 90–112.5)

- **Outcomes:** Learning outcome 6.
- **Evidence 6:** an API test suite, in Mocha with Node's built-in `fetch`, against the practice repository's FHIR sandbox (a small local FHIR R4 server in JavaScript, started with `npm run fhir`, loaded with synthetic data), which creates, reads, searches, and updates `Patient` and `Observation` resources, checks status codes and bodies, validates against a FHIR profile, checks a clinical code's meaning, and includes a negative test.
  - Band 4 quality assurance, Band 7 test management: read and explain an existing suite instead.
  - Band 4 test engineering, Band 5 quality assurance: 5 tests, with support.
  - Band 6, Band 7 test engineering: the full suite; Band 7 test engineering also adds a simulator for a partner system.
- **Activities:** HTTP, REST, JSON; `fetch` and its responses; why Selenium is for browsers only; mocks, stubs, and simulators; HL7 FHIR resources, profiles, and terminology; HL7 version 2 awareness; moving one browser test down to the API layer.
- **Resources:** HL7 FHIR (<https://hl7.org/fhir/>); the FHIR sandbox's README; the team's interface specifications; HAPI FHIR, as an example of a production FHIR server.
- **Materials:** [materials/modules/module-6-api-integration-fhir/](materials/modules/module-6-api-integration-fhir/index.md)

### Module 7 Continuous integration and DevOps (hours 112.5–127.5)

- **Outcomes:** Learning outcome 7.
- **Evidence 7:** a CI pipeline that runs the person's suites on every pull request, publishes the JUnit report and, for failed browser tests, screenshots and page source, and blocks merging on failure, plus a written triage of real CI failures (product, test, or environment).
  - Band 3, Band 4: triage of 3 failures in an existing pipeline; no pipeline change required.
  - Band 5, Band 6, Band 7 test management: the pipeline on the practice repository, and 3 triaged failures.
  - Band 7 test engineering: the pipeline on the team's repository, with parallel jobs and test selection, and a quarantine policy for flaky tests.
- **Activities:** CI configuration, caching, headless Chrome, secrets, environment variables; keeping pipelines fast; quarantining flaky tests with an owner and a deadline; feature flags, canary releases, and monitoring.
- **Resources:** testingexamples "What is continuous integration automatic testing?" and "What is DevOps for automatic testing?"; the organisation's CI documentation.
- **Materials:** [materials/modules/module-7-continuous-integration/](materials/modules/module-7-continuous-integration/index.md)

### Module 8 Safe and lawful test automation in health care (hours 127.5–142.5)

- **Outcomes:** Learning outcome 8, Learning outcome 9.
- **Evidence 8:** synthetic data for the person's tests, including rare or edge clinical cases; a repository scan showing no secrets or personal data; a traceability matrix from automated tests to hazards and safety controls, agreed with the clinical safety officer; automated accessibility checks on browser tests with `@axe-core/webdriverjs`, with a note on what they cannot find. Band 6 quality assurance and Band 7 also review one other person's traceability matrix.
- **Activities:** how automated regression tests protect safety controls; the team's hazard log; IEC 62304 awareness; information governance for test data and pipelines.
- **Resources:** the organisation's clinical risk management process and hazard log; information governance policy.
- **Materials:** [materials/modules/module-8-safe-and-lawful-automation/](materials/modules/module-8-safe-and-lawful-automation/index.md)

### Module 9 Quality engineering practice (hours 135–150)

- **Outcomes:** Learning outcome 10.
- **Evidence 9:** a flaky-test investigation with root cause and fix (Band 4 test engineering and above; Band 3 and Band 4 quality assurance describe one with the mentor); a suite-health report using flow metrics (time from a defect report to a regression test, quarantined tests, run time, failure causes) (Band 5 and above); an effort estimate for the capstone (all).
- **Activities:** maintainable test code; reviewing test pull requests; using AI assistants critically, including the risk of self-healing locators passing on the wrong element; awareness of performance, load, and security testing.
- **Resources:** testingexamples "What metrics help automatic testing?" and "How does artificial intelligence help automatic testing?".
- **Materials:** [materials/modules/module-9-quality-engineering/](materials/modules/module-9-quality-engineering/index.md)

### Module 10 Capstone (hours 142.5–180), spiral pass 3

- **Outcomes:** Learning outcome 12, with every other outcome applied at track depth.
- **Evidence 10:** a capstone on the person's own team's product, agreed with the product owner and mentor at hour 142.5, and a presentation to the gate panel aimed at a non-technical audience (10 minutes for Band 3 and Band 4, 20 minutes for Band 5 to Band 7):

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

- **Activities:** a review with the mentor in every 7.5 hours of learning; pull requests reviewed by developers on the team (at least two for Band 5 and above); a mid-capstone show-and-tell to the team; an optional presentation rehearsal with the mentor in hours 165–172.5.
- **Materials:** [materials/modules/module-10-capstone/](materials/modules/module-10-capstone/index.md)

### Module 11 Lean Six Sigma Green Belt, lifetime certification (hours 180–220)

- **Outcomes:** Learning outcome 14.
- **Evidence 11:**
  - a Lean Six Sigma **Green Belt certificate** from a certification body whose Green Belt does not expire (Decision 8)
  - a **Green Belt project** on the person's own team's testing process, using DMAIC: a project charter, a SIPOC and process map, a baseline measure with real data, a root-cause analysis, an improvement, and a control plan. Typical measures: flaky test rate, time from a defect report to a regression test, manual regression hours per release, defects found after release, and CI run time. The project uses synthetic data only, and builds on the Evidence 1 analysis and the Evidence 9 suite-health report.
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
- **Assessment:** the certification body's exam, and a project review by the training lead and mentor, with the product owner as sponsor. Certification completes the programme with Gate 4 (see [Completion](spec/index.md#completion)).
- **Resources:** testingexamples "How does Six Sigma lead manual testing into automatic testing?"; the certification body's Green Belt body of knowledge (Decision 8); the flow metrics from Module 9.
- **Materials:** [materials/modules/module-11-lean-six-sigma-green-belt/](materials/modules/module-11-lean-six-sigma-green-belt/index.md)

## Track modules

### Role foundations (hours 0–180, individual)

- **Purpose:** close the role and skill gaps that are not about automation, because each person is measured against their whole role.
- **Content:** set by the individual learning plan from Gate 0 gaps in Parts A to C. Typical items: test analysis, test and quality planning, defect management, communicating with non-technical stakeholders, planning own work (Part A item 9), freedom to act (Part A item 17), and the role-level statements in Part B.
- **Activities:** 1 hour in every 7.5 hours of learning for role practice with the mentor or manager, stretch tasks on the team, shadowing, and the community of practice.
- **Evidence:** progress on each individual learning plan action, reviewed at every gate.
- **Materials:** [materials/tracks/role-foundations/](materials/tracks/role-foundations/index.md)

### Health care foundations (hours 7.5–60)

- **Purpose:** meet the expected levels in understanding health and care services, clinical risk management, and information governance by Gate 2 (Principle 13).
- **Activities:** sessions with the clinical safety officer and information governance lead; a hazard workshop; a shadowing session with a clinical or care user. Band 7 test management leads one session for the cohort.
- **Evidence:** reflected in Part C ratings at Gate 2.
- **Materials:** [materials/tracks/health-care-foundations/](materials/tracks/health-care-foundations/index.md)

### Coaching others in automation (Band 6, Band 7; hours 67.5–150)

- **Outcomes:** guide and coach others, as the Practitioner and Expert level descriptions require.
- **Evidence:** coaching log for one or two cohort members from a lower band, with their feedback.
- **Materials:** [materials/tracks/coaching-others-in-automation/](materials/tracks/coaching-others-in-automation/index.md)

### Automation strategy and metrics (Band 6 quality assurance, Band 7; hours 112.5–150)

- **Outcomes:** contribute to (Band 6 quality assurance, Band 7 test engineering) or own (Band 7 test management) the automation strategy for an area; define metrics for monitoring and controlling test activities.
- **Evidence:** a strategy document and a metrics proposal, reviewed by the head of test.
- **Materials:** [materials/tracks/automation-strategy-and-metrics/](materials/tracks/automation-strategy-and-metrics/index.md)

### Frameworks and non-functional testing (Band 7 test engineering; Band 6 test engineering read only; hours 112.5–150)

- **Outcomes:** extend, standardise, and build reusable frameworks; plan and run performance, load, and resilience tests based on real clinical demand; maintain and adapt CI/CD pipelines.
- **Evidence:** folded into the Band 7 test engineering capstone.
- **Materials:** [materials/tracks/frameworks-and-non-functional-testing/](materials/tracks/frameworks-and-non-functional-testing/index.md)

### Acceptance test automation (Band 6 quality assurance; hours 90–127.5)

- **Outcomes:** Practitioner in business and user acceptance testing, applied to automation: turn acceptance criteria into automated checks, plan user acceptance testing with clinicians, and report residual risk.
- **Evidence:** folded into the Band 6 quality assurance capstone.
- **Materials:** [materials/tracks/acceptance-test-automation/](materials/tracks/acceptance-test-automation/index.md)

### Leading teams through automation adoption (Band 7 test management; hours 112.5–150)

- **Outcomes:** people management at Practitioner, and medical device software regulation at Working, applied to automation adoption: team development plans, supplier testers, and regulated testing records.
- **Evidence:** folded into the Band 7 test management capstone.
- **Materials:** [materials/tracks/leading-automation-adoption/](materials/tracks/leading-automation-adoption/index.md)

## Gates

Every gate repeats the full capability self-assessment (Parts A to C) with calibration, adds the Part D practical from Gate 1, and reviews module evidence. The gate updates the individual learning plan.

| Gate | Programme hour | Module evidence | Part D practical | Reviewers |
| --- | --- | --- | --- | --- |
| Gate 0 | 0 | Evidence 0 | — (unscored diagnostic only) | Person, line manager, training lead |
| Gate 1 | 45 | Evidence 1–3 | Fix a failing unit test and open a pull request | Line manager, mentor |
| Gate 2 | 90 | Evidence 4–5 | Automate one given manual test case on the fixture site (Band 3: write it as Given-When-Then and pair) | Line manager, mentor, a developer |
| Gate 3 | 127.5 | Evidence 6–7 | Triage and fix a failing CI run (Band 6 and Band 7 test engineering: plus an API test; Band 7 test management: plus reading and explaining an API test failure) | Line manager, mentor, training lead |
| Gate 4 | 180 | Evidence 8–10 | Live run and explanation of the capstone | Gate 4 panel |
| Certification | By 220 | Evidence 11 | The Green Belt certification exam, set by the certification body (Decision 8) | Certification body; the training lead and mentor review the project |
| Gate 5 | About six months after Gate 4 | Six months of work | Demonstrate a recent automated change | Line manager, training lead |

### Gate thresholds

Using agreed ratings and the capability index:

| Gate | Parts A, B, C (each) | Part D | Other conditions |
| --- | --- | --- | --- |
| Gate 0 | Baseline, no threshold | — | Individual learning plan agreed and signed |
| Gate 1 | At least 60% | Partly or better | No item lower than at Gate 0 without an agreed reason |
| Gate 2 | At least 70% | Partly or better | Clinical risk management and information governance meet expectations |
| Gate 3 | At least 80% | Meets | Test engineering at least one level below the automation target, or at it |
| Gate 4 | At least 90% | Meets | No skill more than one level below expected; test engineering at the automation target; capstone accepted by the product owner |
| Gate 5 | At least 90%, sustained | Meets | Plan agreed for any remaining gaps, aiming for 100% by the next annual appraisal |

### If a gate is not met

1. The person gets up to 22.5 extra learning hours on the items below threshold, with a written plan and extra mentor time, and the gate is repeated once.
2. If the repeated gate is still not met, the person, line manager, and training lead agree a next step. That may be the extension to 280 hours, a different automation target, more Role foundations support, or pausing the programme.
3. In line with Principle 14, none of these is a capability or performance procedure.

### Gate 4 panel

Three people: a lead test engineer or test manager at least one band above the person (chair, not their mentor), a developer from another team, and the training lead. For Band 7 tracks the chair is the head of test or a lead from outside the person's area. The clinical safety officer reviews traceability evidence in writing.

### Completion

A person completes the programme when every threshold for Gate 4 is met, and they hold the Lean Six Sigma Green Belt certification with an accepted Green Belt project (Evidence 11). Gate 5 confirms that the capability holds in normal work.

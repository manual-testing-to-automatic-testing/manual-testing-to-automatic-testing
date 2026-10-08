# Tasks

See [plan.md](plan.md) for the context and reasoning, and [spec/index.md](spec/index.md) for the programme itself. Tasks follow the PADDIE+M phases.

## 0. Setup

- [x] Research the curriculum models tutorial and choose models
- [x] Research the roles-skills reference: bands, job evaluation factors, the QA test analyst, test engineer, and test manager roles, and their skills
- [x] Research Testing Examples for practice material, skills, and worked examples
- [x] Write `plan.md`, `spec/index.md`, and `tasks.md`
- [x] Revise all three for tuned tracks at Bands 3 to 7, no band changes, and gates built on a full capability self-assessment
- [x] Initialise the git repository and commit these files

## Development verification

- [x] Practice repository: typecheck, lint, and format checks clean; 50 kata tests and 11 fixture-site browser tests pass
- [x] FHIR sandbox: a JavaScript FHIR R4 server (`npm run fhir`, no Docker) loads 6 synthetic patients and the profile; 15 API tests pass
- [x] Run the CI job steps locally: typecheck, lint, format, katas, browser, and API tests (76 passed) with the sandbox loaded; gitleaks scan clean, and its NHS number rule catches planted non-test numbers
- [ ] Run the practice repository's CI workflow on the organisation's CI service (Decision 2)
- [x] Move the FHIR sandbox into the practice repository (`practice-repo/fhir-sandbox/`), so the CI API job can load it

## Website

- [x] Create the GitHub Pages subproject `manual-testing-to-automatic-testing.github.io/`: SvelteKit 3, adapter-static, Lily Design System headless components and PickerBar, following testingexamples.github.io
- [x] Vendor the documents, instruments, and themes with `bin/sync`, and check them with `bin/sync --check`
- [x] Render every document at `/en-001/<slug>/`, with GitHub heading anchors and rewritten links
- [x] Build the interactive capability self-assessment for each track, with the same scoring as `scripts/capability_index.py`, local storage, and TSV export and import
- [x] Add search, sitemap, llms.txt, and the deploy workflow
- [x] Test: svelte-check clean, strict build, Playwright and axe tests passing
- [x] Add `make check`, `make github-pages`, and `spec/monorepo-github-pages/`
- [ ] Create the `manual-testing-to-automatic-testing` GitHub owner and the site repository, set Pages to GitHub Actions, add the `github-pages` remote, and run `make github-pages`
- [ ] Translate the interface into more locales (see the site's `spec/locales/index.md`)

## 1. Planning

- [ ] Name the programme sponsor (head of test) and the training lead (draft: `materials/planning/sponsor-brief.md`)
- [ ] Get HR agreement that gates are developmental only and that no band changes follow (Decision 7) (draft: `materials/planning/hr-briefing.md`)
- [ ] Agree with HR the rule for Band 3 factor levels and unmapped band and role combinations (Decision 6)
- [ ] Get answers to the other open questions in plan.md, and record Decisions 1 to 5 in the spec (log: `materials/planning/decision-log.md`)
- [ ] Choose the first cohort (up to 12 people) and list each person's band and UK GDaD PCF role (template: `materials/planning/cohort-roster.tsv`)
- [ ] Name mentors: at least one band above each participant, at or above their automation target, and at most 3 participants each
- [ ] Agree budget: course licences, mentor time, panel time (estimate: `materials/planning/resource-estimate.md`)
- [ ] Book Gates 0 to 5 and the Gate 4 panels in calendars (dates: `python3 scripts/gate_calendar.py <start Monday>`)
- [ ] Brief line managers on self-assessment, independent rating, and calibration (draft: `materials/planning/manager-briefing.md`)
- [ ] Brief product owners, the clinical safety officer, and the information governance lead (draft: `materials/planning/stakeholder-briefing.md`)
- [x] Pin the roles-skills reference version (recorded in `instruments/README.md`; re-check before the cohort)

## 2. Analysis

### Build the capability self-assessment

- [x] Part A: 5 band outline dimensions for Bands 3 to 7, from `data/bands.yaml`
- [x] Part A: 16 job evaluation factors with all level summaries, from `data/job-evaluation.yaml`, and the reference level for each track
- [x] Part B: UK GDaD PCF role statements, role-level statements, and reference responsibilities for each reference role level, from `reference.json` and `data/roles/*.yaml`
- [x] Part C: every UK GDaD PCF skill and health care skill for each reference role level, with level descriptions, from `exports/self-assessment/`
- [x] Add self-rating, manager rating, agreed rating, gap, evidence, and individual learning plan action columns
- [x] Add capability index formulas for Parts A, B, C, and overall
- [x] Generate the instrument with a script from the reference data, not by hand, so it can be rebuilt when the reference changes
- [ ] Test the instrument with one manager and one tester before Gate 0 (the calculator is tested on a fictional example in `instruments/examples/`)

### Gate 0 baseline

- [ ] Each participant completes the self-assessment with evidence
- [ ] Each line manager rates independently
- [ ] Calibrate each assessment; the training lead moderates a 1 in 5 sample
- [ ] Place each participant in a track, and record any mapping decision (Decision 6)
- [ ] Agree Band 3 factor levels from job descriptions (Decision 6)
- [ ] Record each participant's capability index as their baseline
- [ ] Write and sign each participant's individual learning plan and learning agreement
- [ ] Run the Module 0 diagnostic coding exercise, and decide who takes the option of 280 hours
- [ ] Inventory each team's manual regression pack, and its existing automated tests at each layer
- [ ] Check every participant's tools, repository access, test environments, and CI access

## 3. Design

- [ ] Review the eight tracks, automation targets, and module depths with mentors and the head of test
- [ ] Confirm gate thresholds and conditions with the training lead and HR
- [x] Confirm every learning outcome has a depth for every track, and maps to evidence (checked by script: 12 outcomes with 8 depths each, Learning outcome 13 for all tracks, 13 coverage rows)
- [ ] Choose the JavaScript foundations course (Decision 3)
- [ ] Choose the Lean Six Sigma Green Belt certification body, with a certificate that does not expire, and agree the course and exam budget (Decision 8)
- [ ] Agree capstone areas for each participant with product owners (Decision 5)
- [ ] Review the design against Universal Design for Instruction
- [ ] Sign off the spec for this cohort

## 4. Development

### Practice environment

- [x] Create the practice repository: JavaScript, Selenium, Mocha, linting, formatting, pinned versions
- [x] Add a `spec/index.md` template for participant test suites
- [x] Add a CI pipeline template that runs headless Chrome and publishes JUnit results, screenshots, and page source
- [x] Add a secrets scan to the CI template (gitleaks; not yet run)
- [x] Add a pull request template and contribution guide
- [x] Build the FHIR sandbox: a JavaScript FHIR R4 server with no Docker, synthetic `Patient` and `Observation` data, one FHIR profile (Decision 4)

### Core module materials

- [x] Module 1 automation candidate analysis template, with Band 3 and Band 4, Band 5, and Band 6 and Band 7 variants
- [x] Module 2 kata sets for each track (5, 8, 10, and 10 harder)
- [x] Module 4 exercise sheet for every fixture on testingexamples.github.io
- [x] Curriculum in one place: `curriculum.md`, generated from the spec by `scripts/build_curriculum.py`, checked by `make check`
- [x] Module 4 existing suite exercise, from `demo-selenium-javascript`
- [x] Module 5 Given-When-Then template
- [x] Module 6 existing FHIR test suite for Band 4 quality assurance and Band 7 test management to read
- [x] Module 7 existing pipeline with real failures for Band 3 and Band 4 triage (exercise written in `materials/modules/module-7-continuous-integration/`; the failing runs must be created once the practice repository is on the organisation's CI)
- [x] Module 8 traceability matrix template (drafted; review with the clinical safety officer)
- [x] Module 9 flaky-test exercise and suite-health report template
- [x] Module 10 capstone briefs for each of the eight tracks, and a presentation template
- [x] Module 11 Lean Six Sigma Green Belt module page and Green Belt project charter template
- [ ] Module 11 course materials and exam booking, from the certification body (Decision 8)
- [x] Reading list for each module, from the spec's resources
- [ ] Accessibility check of every resource (checklist and resource table in `materials/accessibility-check.md`, all "not yet checked")

### Track module materials

- [x] Role foundations practice guide: how to turn individual learning plan gaps into practice in every 7.5 hours of learning
- [x] Health care foundations session plans (drafted; agree with the clinical safety officer and information governance lead)
- [x] Coaching others in automation log template and coaching guide
- [x] Automation strategy and metrics: automation strategy and metrics templates
- [x] Frameworks and non-functional testing framework and performance testing exercises
- [x] Acceptance test automation exercise
- [x] Leading teams through automation adoption team development plan and adoption plan templates

### Gate materials

- [x] Part D practicals for Gates 1 to 5, for each track, with marking notes
- [x] Gate review form: capability index by part, thresholds, conditions, evidence links, individual learning plan update
- [x] Calibration guide for participants and managers
- [x] Gate 4 panel guide
- [x] Participant feedback form for after each gate
- [x] Learning log template

## 5. Implementation

### Induction and foundations

- [ ] Gate 0 (hour 0): baseline, tracks, individual learning plans, learning agreements
- [ ] Module 0 Induction and baseline: Evidence 0 complete for every participant
- [ ] Module 1 Why and what to automate (hours 0–15): Evidence 1 complete
- [ ] Role foundations: an hour of role practice in every 7.5 hours of learning, for every participant (hours 0–180)
- [ ] Module 2 Programming foundations (hours 7.5–45): Evidence 2 complete
- [ ] Health care foundations (hours 7.5–60)
- [ ] Module 3 Version control and collaboration (hours 22.5–45): Evidence 3 complete
- [ ] Gate 1 (hour 45): full self-assessment, calibration, Part D, individual learning plan update

### Browser automation

- [ ] Module 4 Browser automation fundamentals (hours 45–67.5): Evidence 4 complete
- [ ] Module 5 From walkthrough to real test (hours 67.5–90): Evidence 5 complete
- [ ] Real automation on each team's product in every 7.5 hours of learning (from hour 67.5)
- [ ] Coaching others in automation starts for Band 6 and Band 7 (hours 67.5–150)
- [ ] Gate 2 (hour 90): full self-assessment, calibration, Part D, clinical risk and information governance condition, individual learning plan update

### Below the UI and pipelines

- [ ] Module 6 API, integration, and FHIR tests (hours 90–112.5): Evidence 6 complete
- [ ] Acceptance test automation for Band 6 quality assurance (hours 90–127.5)
- [ ] Module 7 Continuous integration and DevOps (hours 112.5–127.5): Evidence 7 complete
- [ ] Automation strategy and metrics, Frameworks and non-functional testing, and Leading teams through automation adoption for Band 6 quality assurance and Band 7 (hours 112.5–150)
- [ ] Gate 3 (hour 127.5): full self-assessment, calibration, Part D, individual learning plan update

### Health care practice and quality engineering

- [ ] Module 8 Safe and lawful test automation (hours 127.5–142.5): Evidence 8 complete
- [ ] Module 9 Quality engineering practice (hours 135–150): Evidence 9 complete

### Capstone

- [ ] Agree each capstone scope (hour 142.5)
- [ ] Mid-capstone show-and-tell to each team
- [ ] Module 10 Capstone (hours 142.5–180): Evidence 10 complete
- [ ] Gate 4 (hour 180): full self-assessment, calibration, panel, capstone acceptance

### Lean Six Sigma Green Belt

- [ ] Module 11 Lean Six Sigma Green Belt (hours 180–220): Green Belt projects chartered with product owners as sponsors
- [ ] Green Belt exams booked with the certification body, with reasonable adjustments
- [ ] Evidence 11 complete: certificates issued and projects accepted; record programme completion

### Consolidation and follow-up

- [ ] Monthly mentor check-ins (the six months after Gate 4)
- [ ] Run the extension to 280 hours for Band 3 and Band 4 participants who chose it
- [ ] Gate 5 (about six months after Gate 4): full self-assessment, calibration, Part D, plan for remaining gaps

## 6. Evaluation

- [ ] Collect participant feedback after each gate
- [ ] Track capability index by part, person, track, and cohort at every gate
- [ ] Analyse calibration: self-rating versus manager rating differences, by track and by manager
- [ ] Record operational data: protected time used, pairing held, gates on time
- [ ] Run the Goodlad evaluation after Gate 4
- [ ] Measure impact at Gates 0, 4, and 5: automated cases, hours saved, defect-to-regression-test time, quarantined tests, suite run time
- [ ] Confirm no band changes and no HR procedures resulted from gate results
- [ ] Write an evaluation report with recommended changes
- [ ] Check retention at 12 months

## 7. Maintenance

- [ ] Revise the spec from the evaluation report, and record the change in its change log
- [ ] Update plan.md and tasks.md so they agree with the revised spec
- [ ] Rebuild the capability self-assessment when the roles-skills reference changes
- [ ] Review tool versions and links every 6 months
- [ ] Decide on the next cohort, and restart at Planning

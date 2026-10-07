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
- [ ] Run the practice repository's CI workflow on the organisation's CI service (D2)
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
- [ ] Get HR agreement that gates are developmental only and that no band changes follow (D7) (draft: `materials/planning/hr-briefing.md`)
- [ ] Agree with HR the rule for Band 3 factor levels and unmapped band and role combinations (D6)
- [ ] Get answers to the other open questions in plan.md, and record decisions D1 to D5 in the spec (log: `materials/planning/decision-log.md`)
- [ ] Choose the first cohort (up to 12 people) and list each person's band and assigned PCF role (template: `materials/planning/cohort-roster.tsv`)
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
- [x] Part B: PCF role statements, role-level statements, and reference responsibilities for each reference role level, from `reference.json` and `data/roles/*.yaml`
- [x] Part C: every PCF skill and health care skill for each reference role level, with level descriptions, from `exports/self-assessment/`
- [x] Add self-rating, manager rating, agreed rating, gap, evidence, and ILP action columns
- [x] Add capability index formulas for Parts A, B, C, and overall
- [x] Generate the instrument with a script from the reference data, not by hand, so it can be rebuilt when the reference changes
- [ ] Test the instrument with one manager and one tester before Gate 0 (the calculator is tested on a fictional example in `instruments/examples/`)

### Gate 0 baseline

- [ ] Each participant completes the self-assessment with evidence
- [ ] Each line manager rates independently
- [ ] Calibrate each assessment; the training lead moderates a 1 in 5 sample
- [ ] Place each participant in a track, and record any mapping decision (D6)
- [ ] Agree Band 3 factor levels from job descriptions (D6)
- [ ] Record each participant's capability index as their baseline
- [ ] Write and sign each participant's ILP and learning agreement
- [ ] Run the M0 diagnostic coding exercise, and decide who takes the 32-week option
- [ ] Inventory each team's manual regression pack, and its existing automated tests at each layer
- [ ] Check every participant's tools, repository access, test environments, and CI access

## 3. Design

- [ ] Review the eight tracks, automation targets, and module depths with mentors and the head of test
- [ ] Confirm gate thresholds and conditions with the training lead and HR
- [x] Confirm every learning outcome has a depth for every track, and maps to evidence (checked by script: 12 outcomes with 8 depths each, LO13 for all tracks, 13 coverage rows)
- [ ] Choose the JavaScript foundations course (D3)
- [ ] Agree capstone areas for each participant with product owners (D5)
- [ ] Review the design against Universal Design for Instruction
- [ ] Sign off the spec for this cohort

## 4. Development

### Practice environment

- [x] Create the practice repository: JavaScript, Selenium WebDriver, Mocha, linting, formatting, pinned versions
- [x] Add a `spec/index.md` template for participant test suites
- [x] Add a CI pipeline template that runs headless Chrome and publishes JUnit results, screenshots, and page source
- [x] Add a secrets scan to the CI template (gitleaks; not yet run)
- [x] Add a pull request template and contribution guide
- [x] Build the FHIR sandbox: a JavaScript FHIR R4 server with no Docker, synthetic `Patient` and `Observation` data, one FHIR profile (D4)

### Core module materials

- [x] M1 automation candidate analysis template, with B3 and B4, B5, and B6 and B7 variants
- [x] M2 kata sets for each track (5, 8, 10, and 10 harder)
- [x] M4 exercise sheet for every fixture on testingexamples.github.io
- [x] M4 Playwright reading exercise, from `demo-playwright-javascript`
- [x] M5 Given-When-Then template
- [x] M6 existing FHIR test suite for B4-QA and B7-TM to read
- [x] M7 existing pipeline with real failures for B3 and B4 triage (exercise written in `materials/modules/m7-continuous-integration/`; the failing runs must be created once the practice repository is on the organisation's CI)
- [x] M8 traceability matrix template (drafted; review with the clinical safety officer)
- [x] M9 flaky-test exercise and suite-health report template
- [x] M10 capstone briefs for each of the eight tracks, and a presentation template
- [x] Reading list for each module, from the spec's resources
- [ ] Accessibility check of every resource (checklist and resource table in `materials/accessibility-check.md`, all "not yet checked")

### Track module materials

- [x] R1 role practice guide: how to turn ILP gaps into weekly practice
- [x] R2 health care foundations session plans (drafted; agree with the clinical safety officer and information governance lead)
- [x] L1 coaching log template and coaching guide
- [x] L2 automation strategy and metrics templates
- [x] L3 framework and performance testing exercises
- [x] L4 acceptance test automation exercise
- [x] L5 team development plan and adoption plan templates

### Gate materials

- [x] Part D practicals for Gates 1 to 5, for each track, with marking notes
- [x] Gate review form: capability index by part, thresholds, conditions, evidence links, ILP update
- [x] Calibration guide for participants and managers
- [x] Gate 4 panel guide
- [x] Participant feedback form for after each gate
- [x] Learning log template

## 5. Implementation

### Induction and foundations

- [ ] Gate 0 (weeks 0–1): baseline, tracks, ILPs, learning agreements
- [ ] M0 Induction and baseline: E0 complete for every participant
- [ ] M1 Why and what to automate (weeks 1–2): E1 complete
- [ ] R1 Role foundations: weekly practice slot running for every participant (weeks 1–24)
- [ ] M2 Programming foundations (weeks 2–6): E2 complete
- [ ] R2 Health care foundations (weeks 2–8)
- [ ] M3 Version control and collaboration (weeks 4–6): E3 complete
- [ ] Gate 1 (week 6): full self-assessment, calibration, Part D, ILP update

### Browser automation

- [ ] M4 Browser automation fundamentals (weeks 7–9): E4 complete
- [ ] M5 From walkthrough to real test (weeks 10–12): E5 complete
- [ ] Weekly real automation on each team's product (from week 10)
- [ ] L1 Coaching others in automation starts for B6 and B7 (weeks 10–20)
- [ ] Gate 2 (week 12): full self-assessment, calibration, Part D, clinical risk and information governance condition, ILP update

### Below the UI and pipelines

- [ ] M6 API, integration, and FHIR tests (weeks 13–15): E6 complete
- [ ] L4 Acceptance test automation for B6-QA (weeks 13–17)
- [ ] M7 Continuous integration and DevOps (weeks 16–17): E7 complete
- [ ] L2, L3, and L5 for B6-QA and B7 (weeks 16–20)
- [ ] Gate 3 (week 18): full self-assessment, calibration, Part D, ILP update

### Health care practice and quality engineering

- [ ] M8 Safe and lawful test automation (weeks 18–19): E8 complete
- [ ] M9 Quality engineering practice (weeks 19–20): E9 complete

### Capstone

- [ ] Agree each capstone scope (start of week 20)
- [ ] Mid-capstone show-and-tell to each team
- [ ] M10 Capstone (weeks 20–24): E10 complete
- [ ] Gate 4 (week 24): full self-assessment, calibration, panel, capstone acceptance

### Consolidation and follow-up

- [ ] Monthly mentor check-ins (weeks 25–48)
- [ ] Run the 32-week extension for B3 and B4 participants who chose it
- [ ] Gate 5 (week 48): full self-assessment, calibration, Part D, plan for remaining gaps

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

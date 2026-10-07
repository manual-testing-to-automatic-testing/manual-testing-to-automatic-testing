# Formal training programme: manual testing to automatic testing

A formal, gated training programme of 180 hours that upskills manual testers at Bands 3 to 7 into automatic testers, while each person stays in their current band and assigned UK GDaD PCF role. There are eight tuned tracks. Every gate repeats a full capability self-assessment: the band (21 dimensions), the PCF role aspects, and every skill in the role.

The programme is 180 hours of protected learning time, by default 7.5 hours a week (20% of a 37.5-hour week). The stack is JavaScript with Selenium WebDriver and Mocha. Participants need only Node.js 24, Google Chrome, VS Code, and git: nothing needs Docker.

## Start here

- [spec/index.md](spec/index.md): the single source of truth for the programme
- [plan.md](plan.md): why the programme is shaped this way
- [tasks.md](tasks.md): the work to build, run, evaluate, and maintain it

## What to do

Find your role, and work down its checklist. The roles are listed in the order the work happens.

### Everyone

- [ ] Read the [summary of the programme](spec/index.md#summary) and its [principles and rules](spec/index.md#principles-and-rules).
- [ ] Know that gates are developmental only: a gate result never starts an HR procedure, and nobody changes band (Principle 14).
- [ ] Keep personal records out of this repository (see [Privacy](#privacy)).

### Sponsor (head of test)

- [ ] Read the [sponsor brief](materials/planning/sponsor-brief.md) and the [resource estimate](materials/planning/resource-estimate.md).
- [ ] Agree to sponsor the programme, and name a training lead.
- [ ] Release mentors: at least one band above each participant, at most 3 participants each.
- [ ] Decide D1 (tool) and D2 (CI service) with the training lead, in the [decision log](materials/planning/decision-log.md).
- [ ] Chair the Gate 4 panels for Band 7 participants.

### Training lead

- [ ] Work through the Planning, Analysis, and Design sections of [tasks.md](tasks.md).
- [ ] Get answers to the [open questions](plan.md#open-questions), and record decisions D1 to D7 in the [decision log](materials/planning/decision-log.md) and the [spec](spec/index.md#decisions).
- [ ] Send the [HR briefing](materials/planning/hr-briefing.md), and get HR's agreement to D6 and D7 before Gate 0.
- [ ] Brief line managers with the [manager briefing](materials/planning/manager-briefing.md), and stakeholders with the [stakeholder briefing](materials/planning/stakeholder-briefing.md).
- [ ] Fill in the [cohort roster](materials/planning/cohort-roster.tsv) in the organisation's HR or learning system, and place each person in a [track](materials/tracks/index.md).
- [ ] Print the cohort's dates with `python3 scripts/gate_calendar.py <start Monday>`, and book every gate.
- [ ] Set up the [practice repository](practice-repo/README.md) for the cohort, and run its CI once on the organisation's CI service.
- [ ] Re-run the [accessibility scan](materials/accessibility-check.md), and complete the manual checks.
- [ ] Run each gate with the [gate materials](materials/gates/index.md), and moderate 1 in 5 assessments.
- [ ] After Gate 4, run the evaluation in [tasks.md](tasks.md), and revise the spec.

### HR

- [ ] Read the [HR briefing](materials/planning/hr-briefing.md).
- [ ] Agree that gates are developmental only, and that no band changes follow (D7).
- [ ] Agree the Band 3 rule and the mapping rule for unusual band and role combinations (D6), and who signs off each mapping.
- [ ] Agree how assessment records are kept, and for how long.

### Line manager

- [ ] Read the [manager briefing](materials/planning/manager-briefing.md) and the [calibration guide](materials/gates/calibration-guide.md).
- [ ] Sign the [learning agreement](materials/gates/learning-agreement-template.md), and protect the learning time in both calendars.
- [ ] At every gate, rate your person independently in their track's [self-assessment](instruments/README.md), then agree each rating with them using evidence.
- [ ] Agree the [individual learning plan](materials/gates/ilp-template.md) after each gate, and check in every 15 learning hours.

### Mentor

- [ ] Read your participants' [track guides](materials/tracks/index.md) and the [modules](materials/modules/index.md).
- [ ] Get the [practice repository](practice-repo/README.md) working on your own machine: `npm ci`, then `npm test`.
- [ ] Pair with each participant, review their pull requests, and run the [role foundations](materials/tracks/r1-role-foundations/index.md) practice in every 7.5 hours of learning.
- [ ] Prepare participants for each gate, including the [Part D practicals](materials/gates/part-d-practicals.md).

### Participant

- [ ] Find your [track](materials/tracks/index.md) from your band and assigned PCF role, and read its guide.
- [ ] Install Node.js 24, Google Chrome, VS Code with the ESLint extension, and git, using the [environment checklist](materials/modules/m0-induction/environment-checklist.md).
- [ ] Set up the [practice repository](practice-repo/README.md): `npm ci`, then `npm run test:katas`.
- [ ] Before Gate 0, complete your track's [self-assessment](instruments/README.md), with evidence, following the [calibration guide](materials/gates/calibration-guide.md). The website has an interactive version of each.
- [ ] Agree your [individual learning plan](materials/gates/ilp-template.md) and sign your [learning agreement](materials/gates/learning-agreement-template.md).
- [ ] Work through the [modules](materials/modules/index.md) for your track, and keep a [learning log](materials/gates/learning-log-template.md).
- [ ] Repeat the self-assessment before every gate, and give [feedback](materials/gates/participant-feedback-form.md) after each one.

### Product owner, clinical safety officer, information governance lead, and developers

- [ ] Read the [stakeholder briefing](materials/planning/stakeholder-briefing.md): what the programme asks of you, and when.
- [ ] Clinical safety officer: review the [traceability matrix template](materials/modules/m8-safe-and-lawful-automation/traceability-matrix.md) before the cohort starts.

### Maintainer of this repository

- [ ] After changing any document or instrument, run `manual-testing-to-automatic-testing.github.io/bin/sync`, then `make check`.
- [ ] After changing the spec's tables, rebuild the track guides with `python3 scripts/build_track_guides.py .`.
- [ ] When the roles-skills reference changes, rebuild the instruments with `python3 scripts/build_instrument.py`, and update the pinned version in [instruments/README.md](instruments/README.md).
- [ ] Publish the website with `make github-pages` (see [publishing](spec/monorepo-github-pages/index.md)).

## Contents

| Folder | What it holds |
| --- | --- |
| [instruments/](instruments/) | The capability self-assessment for each track, generated from the roles-skills reference |
| [scripts/](scripts/) | `build_instrument.py` builds the instruments; `capability_index.py` scores a completed one; `build_track_guides.py` rebuilds the track guides from the spec; `gate_calendar.py` prints a cohort's dates; `accessibility-scan/` scans the reading list's web resources |
| [materials/modules/](materials/modules/) | Core modules M0 to M10: session plans, exercises, templates, capstone briefs |
| [materials/tracks/](materials/tracks/) | Track guides (B3 to B7-TM) and track modules R1, R2, L1 to L5 |
| [materials/planning/](materials/planning/) | Planning pack: sponsor brief, HR briefing, manager and stakeholder briefings, decision log, resource estimate, cohort roster template |
| [materials/gates/](materials/gates/) | Gate overview, Part D practicals, review form, calibration guide, panel guide, ILP and other templates |
| [practice-repo/](practice-repo/) | The participants' practice repository in JavaScript, with Selenium WebDriver and Mocha: katas, browser and API tests, CI, and the FHIR sandbox (`practice-repo/fhir-sandbox/`): a small local FHIR server in JavaScript, with no Docker, with synthetic data and a profile, for module M6 |

## Website

[manual-testing-to-automatic-testing.github.io/](manual-testing-to-automatic-testing.github.io/) is the programme's website: SvelteKit 3 with the Lily Design System and its PickerBar, published to GitHub Pages by `git subtree`. It renders every document here and adds an interactive capability self-assessment for each track. See [spec/monorepo-github-pages/index.md](spec/monorepo-github-pages/index.md).

```sh
manual-testing-to-automatic-testing.github.io/bin/sync   # after changing any document or instrument
make check                                               # check, build, and test the website
make github-pages                                        # publish (needs the github-pages remote)
```

## Privacy

Completed self-assessments, ILPs, learning logs, and gate forms are personal records. Keep them in the organisation's HR or learning system, never in this repository. The `.gitignore` blocks the usual file names as a safety net.

## Sources

See [spec/index.md](spec/index.md#sources).

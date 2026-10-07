# Formal training programme: manual testing to automatic testing

A formal, gated training programme that upskills manual testers at Bands 3 to 7 into automatic testers, while each person stays in their current band and assigned UK GDaD PCF role. There are eight tuned tracks. Every gate repeats a full capability self-assessment: the band (21 dimensions), the PCF role aspects, and every skill in the role.

## Start here

- [spec/index.md](spec/index.md): the single source of truth for the programme
- [plan.md](plan.md): why the programme is shaped this way
- [tasks.md](tasks.md): the work to build, run, evaluate, and maintain it

## Contents

| Folder | What it holds |
| --- | --- |
| [instruments/](instruments/) | The capability self-assessment for each track, generated from the roles-skills reference |
| [scripts/](scripts/) | `build_instrument.py` builds the instruments; `capability_index.py` scores a completed one |
| [materials/modules/](materials/modules/) | Core modules M0 to M10: session plans, exercises, templates, capstone briefs |
| [materials/tracks/](materials/tracks/) | Track guides (B3 to B7-TM) and track modules R1, R2, L1 to L5 |
| [materials/gates/](materials/gates/) | Gate overview, Part D practicals, review form, calibration guide, panel guide, ILP and other templates |
| [practice-repo/](practice-repo/) | The participants' Playwright TypeScript practice repository, with katas, UI and API tests, and CI |
| [fhir-sandbox/](fhir-sandbox/) | A local HAPI FHIR server with synthetic data and a profile, for module M6 |

## Privacy

Completed self-assessments, ILPs, learning logs, and gate forms are personal records. Keep them in the organisation's HR or learning system, never in this repository. The `.gitignore` blocks the usual file names as a safety net.

## Sources

See [spec/index.md](spec/index.md#sources).

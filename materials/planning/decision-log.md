# Decision log

The decisions in [spec/index.md](../../spec/index.md#decisions). Record each decision here when it is made, then update the spec's Decisions table and change log to match. Until a decision is made, the default applies.

| Id | Decision | Default | Options considered | Owner | Status | Decided on | Record |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D1 | Primary language and tool | JavaScript with Selenium WebDriver and Mocha | Python with Selenium and pytest if the team's codebase is Python; Playwright only for reading existing suites | Training lead, with the head of test | Open | | |
| D2 | CI service | The organisation's existing CI service; GitHub Actions for the practice repository | GitHub Actions, GitLab CI, Azure Pipelines, Jenkins | Training lead | Open | | |
| D3 | JavaScript foundations course | A structured, free or already-licensed course with exercises | The practice repository katas with free JavaScript material, such as MDN's JavaScript guide; a licensed course | Training lead | Open | | |
| D4 | Practice FHIR server | The practice repository's local FHIR sandbox (`practice-repo/fhir-sandbox/server.js`, run with `npm run fhir`): Node.js, no Docker, synthetic data only | A shared team test server with synthetic data | Mentors | Open | | |
| D5 | Capstone scope per person | As in the spec's M10 table, agreed at week 20 | — | Product owner, mentor | Open (decided per person in week 20) | | |
| D6 | Mapping for band and role combinations without a reference level, and Band 3 factor levels | The spec's mapping rule; Band 3 factor levels agreed at Gate 0 from the job description, total within 216 to 270 points | — | Line manager, training lead, HR | Open | | See [hr-briefing.md](hr-briefing.md) |
| D7 | Developmental status of gates | Gates are developmental only (spec Principle 14) | — | HR, head of test | Open | | See [hr-briefing.md](hr-briefing.md) |

## Open questions from the plan

From [plan.md](../../plan.md#open-questions):

| # | Question | Linked decision | Answer | Answered by | Date |
| --- | --- | --- | --- | --- | --- |
| 1 | Does HR agree that gates are developmental only, and that no band changes follow? | D7 | | | |
| 2 | How should Band 3 factor levels, and any unmapped band and role combinations, be agreed? | D6 | | | |
| 3 | Has the organisation standardised on an automation tool or language? | D1 | | | |
| 4 | Which CI service will teams use, and can participants change pipelines? | D2 | | | |
| 5 | Is there budget for a paid JavaScript course? | D3 | | | |
| 6 | Can participants install Node.js 24 and Chrome, and run a local server on port 8080? | D4 | | | |
| 7 | How many people are in the first cohort, in which tracks, and who are the mentors? | — | | | |

# Automation candidate analysis

Evidence 7 for Module 7. Use the spreadsheet [automation-candidate-analysis.tsv](automation-candidate-analysis.tsv). It opens in Excel, LibreOffice, Numbers, and Google Sheets.

## What you decide for each manual test case

| Decision | Meaning |
| --- | --- |
| **Automate: unit** | The check is about one function's logic. Ask a developer to cover it with a unit test. |
| **Automate: API or integration** | The check is about data, rules, or messages that can be tested without a browser, for example a FHIR resource. |
| **Automate: browser** | The check is a critical user journey that only a real browser can prove, such as signing in, searching, or recording a result. |
| **Keep manual** | The check needs human judgement: exploratory, usability, visual, or clinical workflow judgement, or it runs too rarely to repay automation. |
| **Retire** | The check is duplicated, obsolete, or covered elsewhere. |

Push tests down the pyramid. Choose the lowest layer that can prove the behaviour.

## How to score each case

Score each from 1 (low) to 3 (high):

| Column | Question |
| --- | --- |
| `risk` | How much harm if this behaviour breaks, especially to patients or their data? |
| `frequency` | How often is this case run by hand? (1: yearly or less; 2: each release; 3: each change or weekly) |
| `stability` | How stable is the feature and its screens? (1: changing often; 3: stable) |
| `cost_to_automate` | How hard is it to automate? (1: easy; 3: hard, for example needs external systems) |

A useful rule of thumb: **automate when risk + frequency + stability is 7 or more, and cost is 1 or 2.** It is a starting point, not a rule. Your reason matters more than the score.

## Columns

| Column | What to write |
| --- | --- |
| `case_id` | The manual test case id |
| `title` | The case title |
| `area` | Product area |
| `hazard_id` | Hazard log id, if the case protects a safety control |
| `runs_per_release` | How often it is run |
| `minutes_per_run` | How long one manual run takes |
| `risk`, `frequency`, `stability`, `cost_to_automate` | Scores, 1 to 3 |
| `decision` | One of: `automate-unit`, `automate-api`, `automate-browser`, `keep-manual`, `retire` |
| `reason` | One line: why |
| `existing_coverage` | Any unit or integration test that already covers it (from the developer workshop) |
| `reviewed_by` | Mentor, or team member, who reviewed the decision |

## Track variants

### Band 3 and Band 4 (sample of 10 cases, with your mentor)

- The mentor chooses 10 cases with a mix of likely answers.
- Fill in `case_id`, `title`, `risk`, `frequency`, `stability`, `decision`, and `reason`. Leave the other columns blank if you are unsure.
- Band 3: explain each decision to the mentor out loud. The mentor may write it down.
- Goal: show you can explain why some tests should be automated and some should not.

### Band 5 quality assurance and Band 6 test engineering (own area)

- Every manual regression case in your area.
- Fill in every column.
- Add a total at the bottom: manual minutes per release for cases marked `automate-*`. This is the time automation could save.
- Goal: an analysis you can use as the backlog for Module 11 and your capstone.

### Band 6 quality assurance, Band 7 test engineering, and Band 7 test management (whole product or programme)

- Every manual regression case for the product or programme.
- Fill in every column, and review the result with the team, including a developer and the product owner.
- Add a summary: counts by decision, total manual minutes per release that automation could save, and the top three risks that stay manual.
- Band 7 test management: add a one-page note on what this means for team capacity and skills.
- Band 6 quality assurance and Band 7: use the share-and-challenge session to coach lower-band colleagues through their own decisions.
- Goal: an analysis that can feed the automation strategy written in Automation strategy and metrics.

## Worked example

| case_id | title | risk | frequency | stability | cost | decision | reason |
| --- | --- | --- | --- | --- | --- | --- | --- |
| REG-014 | Patient search by NHS number returns the right patient | 3 | 3 | 3 | 1 | automate-browser | Critical journey; wrong patient is a hazard; stable screen. |
| REG-022 | NHS number check digit rejects invalid numbers | 3 | 3 | 3 | 1 | automate-unit | Pure logic: a unit test proves it faster than a browser. |
| REG-031 | Observation saved via API has the right LOINC code | 3 | 2 | 3 | 2 | automate-api | Data check; no screen needed. |
| REG-040 | New appointment screen is easy to use for clinicians | 2 | 1 | 1 | 3 | keep-manual | Usability judgement; screen still changing. |
| REG-052 | Old fax export works | 1 | 1 | 3 | 2 | retire | Fax export switched off last year. |

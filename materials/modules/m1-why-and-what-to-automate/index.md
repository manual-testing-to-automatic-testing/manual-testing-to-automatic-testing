# M1 Why and what to automate

Weeks 1–2. Reviewed at Gate 1.

## Purpose

Testers already know how to find risk. M1 turns that skill into automation decisions: which manual tests to automate, at which layer of the testing pyramid, and which to keep manual or retire.

## Outcomes

- **LO1:** decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M1 Why and what to automate | R | S | S | I | L | I | L | L |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | What automatic testing is, and what it is for | 1.5 hours | Core | Cohort |
| 2 | The testing pyramid and browser test trade-offs | 1.5 hours | Core | Cohort |
| 3 | Manual repetition as variation: the Six Sigma view; why exploratory and usability testing stay human | 1 hour | Core | Cohort |
| 4 | Workshop with a developer: what the team's unit and integration tests already cover | 1.5 hours | Team | Each person, a developer from their team |
| 5a | Candidate analysis, sample of 10 cases | 2 hours | Breakout | B3, B4-QA, B4-TE, with mentor |
| 5b | Candidate analysis, own area | 3 hours | Breakout | B5-QA, B6-TE |
| 5c | Candidate analysis, whole product or programme, with the team | 4 hours | Breakout | B6-QA, B7-TE, B7-TM |
| 6 | Share and challenge: each person presents three decisions | 1 hour | Core | Cohort; B6-QA and B7 facilitate |

## Activities

1. Read the testingexamples Learn articles: automatic testing, purpose, pyramid, browser trade-offs, and CI. Discuss in session 1 and 2.
2. Discuss why a person running the same check by hand does not reliably get the same result, and why turning that check into an automated test reduces variation.
3. Discuss what stays human: exploratory testing, usability testing, judgement about clinical workflows.
4. With a developer, list what the existing unit and integration tests already check, so automation is not duplicated at the browser layer.
5. Complete the automation candidate analysis for your track's scope.

## Evidence

**E1:** an automation candidate analysis of the team's manual regression pack. For each case: keep manual, automate (and at which layer), or retire, with a reason based on risk, frequency, stability, and cost.

| Track | Scope |
| --- | --- |
| B3, B4-QA, B4-TE | A sample of 10 cases, with the mentor |
| B5-QA, B6-TE | The person's own area |
| B6-QA, B7-TE, B7-TM | A whole product or programme, reviewed with the team |

Use [automation-candidate-analysis.md](automation-candidate-analysis.md) and [automation-candidate-analysis.tsv](automation-candidate-analysis.tsv).

## Assessment

Gate 1 (week 6) reviews E1 with E2 and E3. E1 is reused in M5, M10, and the capstone.

## Resources

- [What is automatic testing?](https://testingexamples.github.io/locales/en-001/what-is-automatic-testing/)
- [What is the purpose of automatic testing?](https://testingexamples.github.io/locales/en-001/what-is-the-purpose-of-automatic-testing/)
- [What is the automatic testing pyramid?](https://testingexamples.github.io/locales/en-001/what-is-the-testing-pyramid/)
- [What is browser automatic testing?](https://testingexamples.github.io/locales/en-001/what-is-browser-automation-testing/)
- [What is continuous integration automatic testing?](https://testingexamples.github.io/locales/en-001/what-is-continuous-integration-testing/)
- [How does Six Sigma lead manual testing into automatic testing?](https://testingexamples.github.io/locales/en-001/what-is-lean-six-sigma-for-automatic-testing/)

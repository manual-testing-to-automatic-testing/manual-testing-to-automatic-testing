# Module 1 Why and what to automate

Hours 0–15, about 4.5 hours. Reviewed at Gate 1.

## Purpose

Testers already know how to find risk. Module 1 turns that skill into automation decisions: which manual tests to automate, at which layer of the testing pyramid, and which to keep manual or retire.

## Outcomes

- **Learning outcome 1:** decide which manual tests to automate, at which layer, and which to keep manual, by risk and cost.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 1 Why and what to automate | R | S | S | I | L | I | L | L |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 0–7.5: what automatic testing is and what it is for; the testing pyramid and browser test trade-offs | 1 hour | Core | Cohort |
| 2 | Hours 7.5–15: manual repetition as variation, the Six Sigma view; why exploratory and usability testing stay human | 30 minutes | Core | Cohort |
| 3 | Hours 7.5–15: workshop with a developer: what the team's unit and integration tests already cover | 1 hour | Team | Each person, a developer from their team |
| 4a | Hours 7.5–15: candidate analysis, sample of 10 cases | 1.5 hours | Breakout | Band 3, Band 4 quality assurance, Band 4 test engineering, with mentor |
| 4b | Hours 7.5–15: candidate analysis, own area | 1.5 hours | Breakout | Band 5 quality assurance, Band 6 test engineering |
| 4c | Hours 7.5–15: candidate analysis, whole product or programme: the person leads the decisions, and the team helps with the counting | 1.5 hours | Breakout | Band 6 quality assurance, Band 7 test engineering, Band 7 test management |
| 5 | Hours 7.5–15: share and challenge: each person presents three decisions | 30 minutes | Core | Cohort; Band 6 quality assurance and Band 7 facilitate |

Each person's sessions add up to 4.5 hours: 1 hour in hours 0–7.5 and 3.5 hours in hours 7.5–15.

## Activities

1. Read the testingexamples Learn articles: automatic testing, purpose, pyramid, browser trade-offs, and CI. Discuss in session 1 and 2.
2. Discuss why a person running the same check by hand does not reliably get the same result, and why turning that check into an automated test reduces variation.
3. Discuss what stays human: exploratory testing, usability testing, judgement about clinical workflows.
4. With a developer, list what the existing unit and integration tests already check, so automation is not duplicated at the browser layer.
5. Complete the automation candidate analysis for your track's scope.

## Evidence

**Evidence 1:** an automation candidate analysis of the team's manual regression pack. For each case: keep manual, automate (and at which layer), or retire, with a reason based on risk, frequency, stability, and cost.

| Track | Scope |
| --- | --- |
| Band 3, Band 4 quality assurance, Band 4 test engineering | A sample of 10 cases, with the mentor |
| Band 5 quality assurance, Band 6 test engineering | The person's own area |
| Band 6 quality assurance, Band 7 test engineering, Band 7 test management | A whole product or programme, reviewed with the team |

Use [automation-candidate-analysis.md](automation-candidate-analysis.md) and [automation-candidate-analysis.tsv](automation-candidate-analysis.tsv).

## Assessment

Gate 1 (hour 45) reviews Evidence 1 with Evidence 2 and Evidence 3. Evidence 1 is reused in Module 5, Module 10, and the capstone.

## Resources

- [What is automatic testing?](https://testingexamples.github.io/en-001/what-is-automatic-testing/)
- [What is the purpose of automatic testing?](https://testingexamples.github.io/en-001/what-is-the-purpose-of-automatic-testing/)
- [What is the automatic testing pyramid?](https://testingexamples.github.io/en-001/what-is-the-testing-pyramid/)
- [What is browser automatic testing?](https://testingexamples.github.io/en-001/what-is-browser-automation-testing/)
- [What is continuous integration automatic testing?](https://testingexamples.github.io/en-001/what-is-continuous-integration-testing/)
- [How does Six Sigma lead manual testing into automatic testing?](https://testingexamples.github.io/en-001/what-is-lean-six-sigma-for-automatic-testing/)

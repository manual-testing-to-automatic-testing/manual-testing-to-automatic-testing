# M3 Version control and collaboration

Hours 22.5–45, about 7 hours. Reviewed at Gate 1.

## Purpose

Test code is code. It lives in git, changes through pull requests, and is reviewed by others. M3 gives each person the everyday git and review habits that every later module depends on.

## Outcomes

- **LO3:** change test code through git and pull requests, and give and respond to review.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M3 Version control and collaboration | S | S | S | I | I | I | L | I |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 22.5–30: clone, status, add, commit, log, diff | 1.5 hours | Core | Cohort |
| 2 | Hours 22.5–30: branches and pull requests | 1 hour | Core | Cohort |
| 3 | Hours 30–37.5: code review etiquette: how to give and receive review | 1 hour | Core | Cohort |
| 4 | Hours 30–37.5: revert, and a simple merge conflict | 1 hour | Core | Cohort |
| 5 | Hours 30–37.5: reading the history of a testingexamples repository | 1 hour | Core | Cohort |
| 6a | Hours 37.5–45: review clinic: B7-TE reviews and coaches others' pull requests | 1 hour | Breakout | B7-TE with B3, B4 |
| 6b | Hours 37.5–45: open and review pull requests for E3 | 1 hour | Breakout | B5-QA, B6-QA, B6-TE, B7-TM |
| 7 | Hours 37.5–45: team contribution guidelines | 30 minutes | Team | Each person, their team |

Each person's sessions add up to 7 hours: 2.5 in hours 22.5–30, 3 in hours 30–37.5, and 1.5 in hours 37.5–45.

## Activities

1. Clone the practice repository, make a branch, and commit a kata from M2.
2. Open a pull request with a clear description. Address the mentor's comments.
3. Review someone else's pull request. Be specific and kind. Ask questions rather than give orders.
4. Revert a bad commit. Resolve a simple merge conflict the mentor sets up.
5. Clone a testingexamples demo repository and use `git log` to read how its tests came to look the way they do.

### Good commit messages

- A short summary line, in the present tense: "Add NHS number check digit kata".
- A blank line, then why the change was made, if it is not obvious.

### Good review comments

- Say what you see and why it matters: "This test passes even when the function returns nothing, because it has no assertion."
- Ask, do not order: "Could this name say what it checks?"
- Say what is good, too.

## Evidence

**E3:** reviewed pull requests to a practice repository, with comments addressed.

| Track | Own pull requests | Reviews given |
| --- | --- | --- |
| B3, B4-QA, B4-TE | 2 | 1 |
| B5-QA, B6-QA, B6-TE, B7-TM | 3 | 1 |
| B7-TE | 3 | 3 |

## Assessment

Gate 1 (hour 45) reviews E3 with E1 and E2. The Gate 1 Part D practical is "fix a failing unit test and open a pull request".

## Resources

- [What are related concepts for automatic testing?](https://testingexamples.github.io/en-001/what-are-related-concepts-for-automatic-testing/) (version control, GitHub, pull requests).
- Any testingexamples demo repository, for example <https://github.com/testingexamples/demo-selenium-javascript>.
- The team's contribution guidelines.
- Pro Git book: <https://git-scm.com/book/en/v2>

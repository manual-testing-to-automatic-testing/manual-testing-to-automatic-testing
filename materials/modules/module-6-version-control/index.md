# Module 6 Version control and collaboration

Hours 82.5–105, about 7 hours. Reviewed at Gate 1.

## Purpose

Test code is code. It lives in git, changes through pull requests, and is reviewed by others. Module 6 gives each person the everyday git and review habits that every later module depends on.

## Outcomes

- **Learning outcome 3:** change test code through git and pull requests, and give and respond to review.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 6 Version control and collaboration | With support | With support | With support | Independent | Independent | Independent | Lead or coach | Independent |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 82.5–90: clone, status, add, commit, log, diff | 1.5 hours | Core | Cohort |
| 2 | Hours 82.5–90: branches and pull requests | 1 hour | Core | Cohort |
| 3 | Hours 90–97.5: code review etiquette: how to give and receive review | 1 hour | Core | Cohort |
| 4 | Hours 90–97.5: revert, and a simple merge conflict | 1 hour | Core | Cohort |
| 5 | Hours 90–97.5: reading the history of a testingexamples repository | 1 hour | Core | Cohort |
| 6a | Hours 97.5–105: review clinic: Band 7 test engineering reviews and coaches others' pull requests | 1 hour | Breakout | Band 7 test engineering with Band 3, Band 4 |
| 6b | Hours 97.5–105: open and review pull requests for Evidence 6 | 1 hour | Breakout | Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test management |
| 7 | Hours 97.5–105: team contribution guidelines | 30 minutes | Team | Each person, their team |

Each person's sessions add up to 7 hours: 2.5 in hours 82.5–90, 3 in hours 90–97.5, and 1.5 in hours 97.5–105.

## Activities

1. Clone the practice repository, make a branch, and commit a kata from Module 5.
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

**Evidence 6:** reviewed pull requests to a practice repository, with comments addressed.

| Track | Own pull requests | Reviews given |
| --- | --- | --- |
| Band 3, Band 4 quality assurance, Band 4 test engineering | 2 | 1 |
| Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test management | 3 | 1 |
| Band 7 test engineering | 3 | 3 |

## Assessment

Gate 1 (hour 105) reviews Evidence 6 with Evidence 4 and Evidence 5. The Gate 1 Part D practical is "fix a failing unit test and open a pull request".

## Resources

- [What are related concepts for automatic testing?](https://testingexamples.github.io/en-001/what-are-related-concepts-for-automatic-testing/) (version control, GitHub, pull requests).
- Any testingexamples demo repository, for example <https://github.com/testingexamples/demo-selenium-javascript>.
- The team's contribution guidelines.
- Pro Git book: <https://git-scm.com/book/en/v2>

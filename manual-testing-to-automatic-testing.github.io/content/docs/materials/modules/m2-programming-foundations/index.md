# M2 Programming foundations in JavaScript

Training days 2 to 6, about 14.5 hours. Reviewed at Gate 1.

## Purpose

A browser automation tool is a library you call from a programming language. M2 gives each person enough JavaScript to write, run, debug, and test small programs. The practice repository uses plain JavaScript with ES modules on Node.js 24: no TypeScript, and no build step. It also meets the base of the testing pyramid early: every kata has unit tests the person wrote.

## Outcomes

- **LO2:** write, run, debug, and refactor JavaScript code to the team's standards.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M2 Programming foundations | R | S | S | S | I | I | I | S |

## Session plan

M2 shares training days 2 to 6 with M1, M3, R1, R2, and Gate 1. Its sessions add up to 14.5 hours. The structured course (Decision D3) is the reference for the sessions, and for anyone who wants more practice in their own time.

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Training day 2: terminal, npm, VS Code, running a file with `node`, the debugger, ESLint | 1 hour | Core | Cohort |
| 2 | Training day 2: variables (`const`, `let`), types and `typeof`, functions | 1 hour | Core | Cohort |
| 3 | Training day 3: control flow, arrays, objects | 1.5 hours | Core | Cohort |
| 4 | Training day 3: a first unit test with Mocha and `node:assert/strict`, and reading test output | 1 hour | Core | Cohort |
| 5 | Training day 3: kata practice | 3 hours | Practice | All; the mentor pairs with B3, B4-QA, B4-TE, and B5-QA |
| 6 | Training day 4: modules (`import` and `export`), errors (`throw`, `try`, `catch`) | 1 hour | Core | Cohort |
| 7 | Training day 4: kata practice; B7-TE starts the harder katas | 2 hours | Practice | All, with mentor review |
| 8 | Training day 5: Promises, `async` and `await`, and why every WebDriver call must be awaited | 1.5 hours | Core | Cohort |
| 9 | Training day 5: kata practice | 1 hour | Practice | All, with mentor review |
| 10 | Training day 6: refactoring and code style; kata review, including B7-TE's harder katas | 1.5 hours | Core | Cohort |

Mentor pairing: on training days 2 and 3, the mentor pairs with B3, B4-QA, B4-TE, and B5-QA during the sessions and practice. From training day 4, and for B6 and B7 throughout, the mentor reviews katas instead.

## Activities

1. Variables, types and `typeof`, functions, control flow, arrays and objects, modules with `import` and `export`, and errors.
2. Promises, `async`, and `await`. Every Selenium WebDriver call returns a Promise: a missing `await` gives you a Promise instead of a result, and a confusing failure later.
3. The terminal, npm, the VS Code debugger, autocomplete, syntax highlighting, and ESLint, which catches many mistakes before you run the code.
4. A first unit test with Mocha (`describe`, `it`) and `node:assert/strict`, then a unit test for every kata.

A first test looks like this:

```javascript
import { strict as assert } from 'node:assert';
import { isAdult } from '../../src/katas/example.js';

describe('isAdult', () => {
  it('is false at 17', () => {
    assert.equal(isAdult(17), false);
  });
});
```
5. The kata set for your track. See [kata-guide.md](kata-guide.md).

## Evidence

**E2:** small programming exercises (katas), each with unit tests the person wrote:

| Track | Katas |
| --- | --- |
| B3 | 5 |
| B4-QA, B4-TE, B7-TM | 8 |
| B5-QA, B6-QA, B6-TE | 10 |
| B7-TE | 10 harder ones |

At least two katas check test-shaped data, such as a date of birth or an NHS number check digit.

## Assessment

Gate 1 (training day 6) reviews E2 with E1 and E3. The Gate 1 Part D practical is "fix a failing unit test and open a pull request", so M2 and M3 together prepare for it.

## Resources

- A structured JavaScript course chosen by the training lead (Decision D3).
- [What are related concepts for automatic testing?](https://testingexamples.github.io/en-001/what-are-related-concepts-for-automatic-testing/) (code editors).
- MDN JavaScript Guide: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- MDN, using Promises: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises>
- Mocha: <https://mochajs.org/>
- Node.js `assert`: <https://nodejs.org/docs/latest-v24.x/api/assert.html>
- The kata files: `practice-repo/src/katas/` and `practice-repo/tests/katas/`.

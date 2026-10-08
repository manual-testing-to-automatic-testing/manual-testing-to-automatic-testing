# Module 2 Programming foundations in JavaScript

Hours 7.5–45, about 14.5 hours. Reviewed at Gate 1.

## Purpose

A browser automation tool is a library you call from a programming language. Module 2 gives each person enough JavaScript to write, run, debug, and test small programs. The practice repository uses plain JavaScript with ES modules on Node.js 24: no TypeScript, and no build step. It also meets the base of the testing pyramid early: every kata has unit tests the person wrote.

## Outcomes

- **Learning outcome 2:** write, run, debug, and refactor JavaScript code to the team's standards.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 2 Programming foundations | R | S | S | S | I | I | I | S |

## Session plan

Module 2 shares hours 7.5–45 with Module 1, Module 3, Role foundations, Health care foundations, and Gate 1. Its sessions add up to 14.5 hours. The structured course (Decision 3) is the reference for the sessions, and for anyone who wants more practice in their own time.

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 7.5–15: terminal, npm, VS Code, running a file with `node`, the debugger, ESLint | 1 hour | Core | Cohort |
| 2 | Hours 7.5–15: variables (`const`, `let`), types and `typeof`, functions | 1 hour | Core | Cohort |
| 3 | Hours 15–22.5: control flow, arrays, objects | 1.5 hours | Core | Cohort |
| 4 | Hours 15–22.5: a first unit test with Mocha and `node:assert/strict`, and reading test output | 1 hour | Core | Cohort |
| 5 | Hours 15–22.5: kata practice | 3 hours | Practice | All; the mentor pairs with Band 3, Band 4 quality assurance, Band 4 test engineering, and Band 5 quality assurance |
| 6 | Hours 22.5–30: modules (`import` and `export`), errors (`throw`, `try`, `catch`) | 1 hour | Core | Cohort |
| 7 | Hours 22.5–30: kata practice; Band 7 test engineering starts the harder katas | 2 hours | Practice | All, with mentor review |
| 8 | Hours 30–37.5: Promises, `async` and `await`, and why every WebDriver call must be awaited | 1.5 hours | Core | Cohort |
| 9 | Hours 30–37.5: kata practice | 1 hour | Practice | All, with mentor review |
| 10 | Hours 37.5–45: refactoring and code style; kata review, including Band 7 test engineering's harder katas | 1.5 hours | Core | Cohort |

Mentor pairing: in hours 7.5–22.5, the mentor pairs with Band 3, Band 4 quality assurance, Band 4 test engineering, and Band 5 quality assurance during the sessions and practice. From hour 22.5, and for Band 6 and Band 7 throughout, the mentor reviews katas instead.

## Activities

1. Variables, types and `typeof`, functions, control flow, arrays and objects, modules with `import` and `export`, and errors.
2. Promises, `async`, and `await`. Every Selenium call returns a Promise: a missing `await` gives you a Promise instead of a result, and a confusing failure later.
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

**Evidence 2:** small programming exercises (katas), each with unit tests the person wrote:

| Track | Katas |
| --- | --- |
| Band 3 | 5 |
| Band 4 quality assurance, Band 4 test engineering, Band 7 test management | 8 |
| Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering | 10 |
| Band 7 test engineering | 10 harder ones |

At least two katas check test-shaped data, such as a date of birth or an NHS number check digit.

## Assessment

Gate 1 (hour 45) reviews Evidence 2 with Evidence 1 and Evidence 3. The Gate 1 Part D practical is "fix a failing unit test and open a pull request", so Module 2 and Module 3 together prepare for it.

## Resources

- A structured JavaScript course chosen by the training lead (Decision 3).
- [What are related concepts for automatic testing?](https://testingexamples.github.io/en-001/what-are-related-concepts-for-automatic-testing/) (code editors).
- MDN JavaScript Guide: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- MDN, using Promises: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises>
- Mocha: <https://mochajs.org/>
- Node.js `assert`: <https://nodejs.org/docs/latest-v24.x/api/assert.html>
- The kata files: `practice-repo/src/katas/` and `practice-repo/tests/katas/`.

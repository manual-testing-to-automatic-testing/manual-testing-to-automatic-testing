# M5 From walkthrough to real test

Training days 10 to 12, about 12.5 hours. Spiral pass 2: a worked example. Reviewed at Gate 2.

## Purpose

A walkthrough acts on a page and prints what it finds. It "passes" even when the page is wrong. A real test makes assertions that fail when the behaviour is wrong. M5 turns the M4 walkthrough into a real test suite, then automates the person's own manual test cases.

From training day 10, part of every training day is real automation on the person's team's product, at their track's depth: 1.5 hours of each of training days 10 to 17, then the M8 work and the capstone, which use the team's product directly.

## Outcomes

- **LO5:** turn a manual test or Given-When-Then scenario into a maintainable automated test.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M5 From walkthrough to real test | S | S | S | I | I | I | L | S |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Training day 10: walkthrough versus test; Mocha's `describe` and `it`, and `node:assert/strict`; explicit waits before every assertion on changing content | 1.5 hours | Core | Cohort |
| 2 | Training day 10: hooks (`before`, `after`, `beforeEach`, `afterEach`), one driver per suite, `driver.quit()` in `after`, test isolation | 1.5 hours | Core | Cohort |
| 3 | Training day 10: writing a `spec/index.md` that agrees with the code | 1 hour | Core | Cohort |
| 4 | Training day 10: convert the M4 walkthrough into a suite | 1 hour | Practice | All |
| 5 | Training day 11: Given-When-Then as a shared language; workshop with product owners | 1.5 hours | Core | Cohort, product owners |
| 6 | Training day 11: page objects; keeping test data out of test logic | 1 hour | Core | Cohort |
| 7 | Training day 11: diagnosing failures: the Mocha spec reporter, screenshots and page source saved on failure into `test-results/`, and browser console logs | 1 hour | Core | Cohort |
| 8a | Training day 11: scenario writing and pairing on automation | 1.5 hours | Breakout | B3, B4-QA, B4-TE, B7-TM, with mentor |
| 8b | Training day 11: automating own cases | 1.5 hours | Breakout | B5-QA, B6-QA, B6-TE |
| 8c | Training day 11: page object and shared driver set-up review, led by B7-TE | 1.5 hours | Breakout | B7-TE with others |
| 9 | Training day 12: reading the NHS Wales worked example and its spec | 1 hour | Core | Cohort |
| 10 | Training day 12: breakouts 8a to 8c, continued | 1.5 hours | Breakout | As 8a to 8c |
| 11 | From training day 10: real automation on the team's product, under mentor review | 1.5 hours of each training day, days 10 to 17 | Team | Everyone |
| 12 | From training day 10: L1 coaching starts, within breakout and real automation time | As agreed | Pairing | B6 and B7 coach lower bands |

M5's own sessions add up to 12.5 hours: 5 on training day 10, 5 on training day 11, and 2.5 on training day 12, which also holds Gate 2. Real automation (row 11) is counted separately.

## Activities

1. Convert the M4 walkthrough into a Mocha suite with Selenium WebDriver. Replace every `console.log` with an assertion from `node:assert/strict`, such as `assert.equal(await element.getText(), 'Id Example 1')`. Before asserting on anything that appears or changes after an action, wait for it explicitly with `driver.wait` and an `until` condition, such as `until.elementTextIs`. Selenium does not retry assertions for you.
2. Write a `spec/index.md` for the suite, in the shape of the testingexamples demo specs: Summary, Scope, Principles and rules, Detail, Acceptance criteria, Sources.
3. Choose manual cases from E1 marked `automate-browser`. Write each as Given-When-Then using [given-when-then-template.md](given-when-then-template.md). Ask the product owner to review.
4. Automate them on the team's test environment, with a page object: a plain JavaScript class in `tests/ui/pages/` that holds the locators and the actions.
5. Show that each test fails when the behaviour is wrong: change an expected value, run, see red, put it back.
6. Read `demo-selenium-javascript-for-nhs-wales` and its `spec/index.md` as a model of a real-world, assertion-based test. Read it; do not run it repeatedly against the live site.

See the [worked example](worked-example.md).

## Evidence

**E5:**

- the M4 walkthrough converted into a Mocha suite with Selenium WebDriver, real assertions from `node:assert/strict`, explicit waits, and a `spec/index.md` that agrees with the code
- manual test cases from E1 rewritten as Given-When-Then scenarios, reviewed by the product owner, and automated with a page object:

  | Track | Cases |
  | --- | --- |
  | B3 | 3, scenarios only; automation by pairing |
  | B4-QA, B4-TE | 3 |
  | B5-QA, B6-QA, B6-TE | 5 |
  | B7-TE | 8 |
  | B7-TM | 3 |

- a demonstration that each test fails when the behaviour is wrong.

## Assessment

Gate 2 (training day 12) reviews E5 with E4. The Gate 2 Part D practical is "automate one given manual test case on the fixture site". B3 writes it as Given-When-Then and pairs.

## Resources

- [Given-When-Then Examples](https://testingexamples.github.io/en-001/given-when-then/)
- `selenium-javascript-skill`, section "From walkthrough to real test": <https://github.com/testingexamples/selenium-javascript-skill>
- NHS Wales worked example: <https://github.com/testingexamples/demo-selenium-javascript-for-nhs-wales>
- Mocha: <https://mochajs.org/>
- Node.js `assert`: <https://nodejs.org/docs/latest-v24.x/api/assert.html>
- Selenium documentation, waits: <https://www.selenium.dev/documentation/webdriver/waits/>
- Selenium documentation, page object models: <https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/>

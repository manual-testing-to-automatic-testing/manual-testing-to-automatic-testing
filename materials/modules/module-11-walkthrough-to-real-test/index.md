# Module 11 From walkthrough to real test

12.5 hours. Spiral pass 2: a worked example. Reviewed at Gate 2.

## Purpose

A walkthrough acts on a page and prints what it finds. It "passes" even when the page is wrong. A real test makes assertions that fail when the behaviour is wrong. Module 11 turns the Module 10 walkthrough into a real test suite, then automates your own manual test cases.

From hour 160.5, about 1.5 hours in every 7.5 hours of learning is real automation on your team's product, at your track's depth, until hour 221.5, then the Module 14 work and the capstone, which use the team's product directly.

## Outcomes

- **Learning outcome 5:** turn a manual test or Given-When-Then scenario into a maintainable automated test.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 11 From walkthrough to real test | With support | With support | With support | Independent | Independent | Independent | Lead or coach | With support |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 160.5–168: walkthrough versus test; Mocha's `describe` and `it`, and `node:assert/strict`; explicit waits before every assertion on changing content | 1.5 hours | Core | Cohort |
| 2 | Hours 160.5–168: hooks (`before`, `after`, `beforeEach`, `afterEach`), one driver per suite, `driver.quit()` in `after`, test isolation | 1.5 hours | Core | Cohort |
| 3 | Hours 160.5–168: writing a `spec/index.md` that agrees with the code | 1 hour | Core | Cohort |
| 4 | Hours 160.5–168: convert the Module 10 walkthrough into a suite | 1 hour | Practice | All |
| 5 | Hours 168–175.5: Given-When-Then as a shared language; workshop with product owners | 1.5 hours | Core | Cohort, product owners |
| 6 | Hours 168–175.5: page objects; keeping test data out of test logic | 1 hour | Core | Cohort |
| 7 | Hours 168–175.5: diagnosing failures: the Mocha spec reporter, screenshots and page source saved on failure into `test-results/`, and browser console logs | 1 hour | Core | Cohort |
| 8a | Hours 168–175.5: scenario writing and pairing on automation | 1.5 hours | Breakout | Band 3, Band 4 quality assurance, Band 4 test engineering, Band 7 test management, with mentor |
| 8b | Hours 168–175.5: automating own cases | 1.5 hours | Breakout | Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering |
| 8c | Hours 168–175.5: page object and shared driver set-up review, led by Band 7 test engineering | 1.5 hours | Breakout | Band 7 test engineering with others |
| 9 | Hours 175.5–183: reading the NHS Wales worked example and its spec | 1 hour | Core | Cohort |
| 10 | Hours 175.5–183: breakouts 8a to 8c, continued | 1.5 hours | Breakout | As 8a to 8c |
| 11 | From hour 160.5: real automation on the team's product, under mentor review | 1.5 hours in every 7.5 hours of learning, in hours 160.5–221.5 | Team | Everyone |
| 12 | From hour 160.5: Coaching others in automation starts, within breakout and real automation time | As agreed | Pairing | Band 6 and Band 7 coach lower bands |

Module 11's own sessions add up to 12.5 hours: 5 in hours 160.5–168, 5 in hours 168–175.5, and 2.5 in hours 175.5–183, which also holds Gate 2. Real automation (row 11) is counted separately.

## Activities

1. Convert the Module 10 walkthrough into a Mocha suite with Selenium. Replace every `console.log` with an assertion from `node:assert/strict`, such as `assert.equal(await element.getText(), 'Id Example 1')`. Before asserting on anything that appears or changes after an action, wait for it explicitly with `driver.wait` and an `until` condition, such as `until.elementTextIs`. Selenium does not retry assertions for you.
2. Write a `spec/index.md` for the suite, in the shape of the testingexamples demo specs: Summary, Scope, Principles and rules, Detail, Acceptance criteria, Sources.
3. Choose manual cases from Evidence 7 marked `automate-browser`. Write each as Given-When-Then using [given-when-then-template.md](given-when-then-template.md). Ask the product owner to review.
4. Automate them on the team's test environment, with a page object: a plain JavaScript class in `tests/ui/pages/` that holds the locators and the actions.
5. Show that each test fails when the behaviour is wrong: change an expected value, run, see red, put it back.
6. Read `demo-selenium-javascript-for-nhs-wales` and its `spec/index.md` as a model of a real-world, assertion-based test. Read it; do not run it repeatedly against the live site.

See the [worked example](worked-example.md).

## Evidence

**Evidence 11:**

- the Module 10 walkthrough converted into a Mocha suite with Selenium, real assertions from `node:assert/strict`, explicit waits, and a `spec/index.md` that agrees with the code
- manual test cases from Evidence 7 rewritten as Given-When-Then scenarios, reviewed by the product owner, and automated with a page object:

  | Track | Cases |
  | --- | --- |
  | Band 3 | 3, scenarios only; automation by pairing |
  | Band 4 quality assurance, Band 4 test engineering | 3 |
  | Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering | 5 |
  | Band 7 test engineering | 8 |
  | Band 7 test management | 3 |

- a demonstration that each test fails when the behaviour is wrong.

## Assessment

Gate 2 (hour 183) reviews Evidence 11 with Evidence 10. The Gate 2 Part D practical is "automate one given manual test case on the fixture site". Band 3 writes it as Given-When-Then and pairs.

## Resources

- [Given-When-Then Examples](https://testingexamples.github.io/en-001/given-when-then/)
- `selenium-javascript-skill`, section "From walkthrough to real test": <https://github.com/testingexamples/selenium-javascript-skill>
- NHS Wales worked example: <https://github.com/testingexamples/demo-selenium-javascript-for-nhs-wales>
- Mocha: <https://mochajs.org/>
- Node.js `assert`: <https://nodejs.org/docs/latest-v24.x/api/assert.html>
- Selenium documentation, waits: <https://www.selenium.dev/documentation/webdriver/waits/>
- Selenium documentation, page object models: <https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/>

# M4 Browser automation fundamentals

Weeks 7–9. Spiral pass 1: the fixture site. Reviewed at Gate 2.

## Purpose

All browser automation comes down to four things: **locate** an element, **act** on it, **wait** for it to be ready, and **assert** on it. M4 teaches the four with Selenium WebDriver on a stable page built for practice, <https://testingexamples.github.io>, so any failure is the learner's own and not a moving target.

## Outcomes

- **LO4:** locate, act, wait, and assert with Selenium WebDriver, using resilient locators.
- **LO11:** read and make a small change to an existing Playwright suite.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M4 Browser automation fundamentals | S | S | I | I | I | I | L | S |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Week 7: the four core concepts; tour of the fixture site and its contract; `selenium-webdriver`, Chrome, and Selenium Manager | 2 hours | Core | Cohort |
| 2 | Week 7: locating with `By`: id, name, class name, link text, CSS, XPath | 2 hours | Core | Cohort |
| 3 | Week 8: acting: `sendKeys`, `click`, `clear`, and the `Select` helper | 1.5 hours | Core | Cohort |
| 4 | Week 8: waiting: Selenium does not auto-wait; explicit waits with `driver.wait` and `until`; why `sleep` is never the answer; Playwright's auto-waiting, for comparison | 1.5 hours | Core | Cohort |
| 5 | Week 8: Selenium IDE: record, export to JavaScript Mocha, then rewrite by hand and explain every line | 1.5 hours | Core | Cohort |
| 6 | Week 9: pair-through of the exercise sheet | 3 hours | Breakout | B3, B4-QA, with mentor |
| 7 | Week 9: Playwright reading and change exercise | 2 hours | Breakout | B4-TE, B5-QA, B6-QA, B6-TE, B7-TE, B7-TM |
| 8 | Week 9: locator strategy clinic, led by B7-TE | 1 hour | Breakout | B7-TE with others |

## Activities

1. The four core concepts: locate, act, wait, assert.
2. Locator strategy: prefer ids and agreed test ids, then CSS, and XPath last. Brittle locators make brittle tests. `By.className` takes exactly one class name; for several classes, use `By.css('.a.b')`.
3. Waiting. Selenium does **not** wait for you. Before you act on anything that appears after a page load, a click, or an update, wait for it explicitly:

   ```javascript
   import { By, until } from 'selenium-webdriver';

   const element = await driver.wait(until.elementLocated(By.id('id-example-1')), 10_000);
   await driver.wait(until.elementIsVisible(element), 10_000);
   ```

   Keep the implicit wait at 0, and never use `sleep`: it is either too short, so the test is flaky, or too long, so the suite is slow.
4. Always end the browser session with `driver.quit()` in a `finally` block or an `after` hook, or browser processes leak.
5. Record with the Selenium IDE browser extension, export the recording as JavaScript Mocha, then rewrite it by hand and explain every line.
6. Work through [exercise-sheet.md](exercise-sheet.md).
7. Work through [playwright-reading-exercise.md](playwright-reading-exercise.md).

## Evidence

**E4:**

| Part | Tracks |
| --- | --- |
| A Selenium WebDriver JavaScript script against <https://testingexamples.github.io> that locates every fixture (by id, name, class name, link text, CSS, and XPath) and acts on every form input | All tracks. B3 and B4-QA may complete this by pairing. |
| A one-page comparison of how Selenium and Playwright wait | B5-QA, B6-QA, B6-TE, B7-TE, B7-TM |
| A small change to `demo-playwright-javascript`, run successfully | B4-TE, B5-QA, B6-QA, B6-TE, B7-TE, B7-TM (B7-TM with support) |

## Assessment

Gate 2 (week 12) reviews E4 with E5. The Gate 2 Part D practical is "automate one given manual test case on the fixture site".

## Resources

- testingexamples fixture site: <https://testingexamples.github.io>
- Fixture contract: <https://github.com/testingexamples/testingexamples.github.io/blob/main/spec/index.md>
- Selenium JavaScript skill: <https://github.com/testingexamples/selenium-javascript-skill>
- Selenium JavaScript demo: <https://github.com/testingexamples/demo-selenium-javascript>
- Playwright JavaScript demo, for the reading exercise: <https://github.com/joelparkerhenderson/demo-playwright-javascript>
- Selenium documentation, WebDriver: <https://www.selenium.dev/documentation/webdriver/>
- Selenium documentation, locators: <https://www.selenium.dev/documentation/webdriver/elements/locators/>
- Selenium documentation, waits: <https://www.selenium.dev/documentation/webdriver/waits/>
- Selenium documentation, select lists: <https://www.selenium.dev/documentation/webdriver/support_features/select_lists/>
- Selenium IDE: <https://www.selenium.dev/selenium-ide/>

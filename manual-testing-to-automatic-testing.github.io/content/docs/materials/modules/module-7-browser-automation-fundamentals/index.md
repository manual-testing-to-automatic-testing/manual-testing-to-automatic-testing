# Module 7 Browser automation fundamentals

Hours 105–127.5, about 17.5 hours. Spiral pass 1: the fixture site. Reviewed at Gate 2.

## Purpose

All browser automation comes down to four things: **locate** an element, **act** on it, **wait** for it to be ready, and **assert** on it. Module 7 teaches the four with Selenium on a stable page built for practice, <https://testingexamples.github.io>, so any failure is the learner's own and not a moving target.

Module 7 builds on the script from Module 1, the basics of a browser automator: it adds a locator strategy, every kind of locator, explicit waits for stated conditions, and real assertions in place of printing.

## Outcomes

- **Learning outcome 4:** locate, act, wait, and assert with Selenium, using resilient locators.
- **Learning outcome 11:** read, run, and make a small change to an existing Selenium suite that someone else wrote.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 7 Browser automation fundamentals | With support | With support | Independent | Independent | Independent | Independent | Lead or coach | With support |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 105–112.5: the four core concepts; tour of the fixture site and its contract; `selenium-webdriver`, Chrome, and Selenium Manager | 2 hours | Core | Cohort |
| 2 | Hours 105–112.5: locating with `By`: id, name, class name, link text, CSS, XPath | 2 hours | Core | Cohort |
| 3 | Hours 105–112.5: locating practice on the fixture site | 1.5 hours | Practice | All; Band 3 and Band 4 quality assurance pair with the mentor |
| 4 | Hours 112.5–120: acting: `sendKeys`, `click`, `clear`, and the `Select` helper | 1.5 hours | Core | Cohort |
| 5 | Hours 112.5–120: waiting: Selenium does not auto-wait; explicit waits with `driver.wait` and `until`; why `sleep` is never the answer | 1.5 hours | Core | Cohort |
| 6 | Hours 112.5–120: Selenium IDE: record, export to JavaScript Mocha, then rewrite by hand and explain every line | 1.5 hours | Core | Cohort |
| 7 | Hours 112.5–120: start the Evidence 7 script | 1 hour | Practice | All |
| 8 | Hours 120–127.5: finish the Evidence 7 script, using the exercise sheet | 3 hours | Practice | All; Band 3 and Band 4 quality assurance pair with the mentor |
| 9a | Hours 120–127.5: existing suite exercise: read, run, and change `demo-selenium-javascript` | 2 hours | Breakout | Band 4 test engineering, Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test engineering, Band 7 test management |
| 9b | Hours 120–127.5: pair-through of the exercise sheet, continued | 2 hours | Breakout | Band 3, Band 4 quality assurance, with mentor |
| 10a | Hours 120–127.5: write the one-page explanation of how Selenium waits | 1 hour | Breakout | Band 5 quality assurance and above |
| 10b | Hours 120–127.5: exercise sheet review with the mentor | 1 hour | Breakout | Band 3, Band 4 quality assurance, Band 4 test engineering |
| 11 | Hours 120–127.5: locator strategy clinic, led by Band 7 test engineering | 30 minutes | Core | Cohort, led by Band 7 test engineering |

Each person's sessions add up to 17.5 hours: 5.5 in hours 105–112.5, 5.5 in hours 112.5–120, and 6.5 in hours 120–127.5.

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
7. Work through the [existing suite exercise](existing-suite-exercise.md).

## Evidence

**Evidence 7:**

| Part | Tracks |
| --- | --- |
| A Selenium JavaScript script against <https://testingexamples.github.io> that locates every fixture (by id, name, class name, link text, CSS, and XPath) and acts on every form input | All tracks. Band 3 and Band 4 quality assurance may complete this by pairing. |
| A one-page explanation of how Selenium waits | Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test engineering, Band 7 test management |
| A small change to `demo-selenium-javascript`, an existing suite someone else wrote, run successfully | Band 4 test engineering, Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test engineering, Band 7 test management (Band 7 test management with support) |

## Assessment

Gate 2 (hour 150) reviews Evidence 7 with Evidence 8. The Gate 2 Part D practical is "automate one given manual test case on the fixture site".

## Resources

- testingexamples fixture site: <https://testingexamples.github.io>
- Fixture contract: <https://github.com/testingexamples/testingexamples.github.io/blob/main/spec/index.md>
- Selenium JavaScript skill: <https://github.com/testingexamples/selenium-javascript-skill>
- Selenium JavaScript demo: <https://github.com/testingexamples/demo-selenium-javascript>
- Selenium JavaScript demo, for the existing suite exercise: <https://github.com/testingexamples/demo-selenium-javascript>
- Selenium documentation, WebDriver: <https://www.selenium.dev/documentation/webdriver/>
- Selenium documentation, locators: <https://www.selenium.dev/documentation/webdriver/elements/locators/>
- Selenium documentation, waits: <https://www.selenium.dev/documentation/webdriver/waits/>
- Selenium documentation, select lists: <https://www.selenium.dev/documentation/webdriver/support_features/select_lists/>
- Selenium IDE: <https://www.selenium.dev/selenium-ide/>

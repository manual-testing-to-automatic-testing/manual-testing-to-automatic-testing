# M4 Browser automation fundamentals

Weeks 7–9. Spiral pass 1: the fixture site. Reviewed at Gate 2.

## Purpose

All browser automation comes down to four things: **locate** an element, **act** on it, **wait** for it to be ready, and **assert** on it. M4 teaches the four on a stable page built for practice, <https://testingexamples.github.io>, so any failure is the learner's own and not a moving target.

## Outcomes

- **LO4:** locate, act, wait, and assert with Playwright, using resilient locators.
- **LO11:** read and make a small change to an existing Selenium suite.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M4 Browser automation fundamentals | S | S | I | I | I | I | L | S |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Week 7: the four core concepts; tour of the fixture site and its contract | 2 hours | Core | Cohort |
| 2 | Week 7: locating: id, name, class, link text, XPath, role, label | 2 hours | Core | Cohort |
| 3 | Week 8: acting: fill, check, select, click | 1.5 hours | Core | Cohort |
| 4 | Week 8: waiting: Playwright auto-waiting and actionability; Selenium explicit waits; why `sleep` is never the answer | 1.5 hours | Core | Cohort |
| 5 | Week 8: codegen: record, then rewrite by hand and explain every line | 1.5 hours | Core | Cohort |
| 6 | Week 9: pair-through of the exercise sheet | 3 hours | Breakout | B3, B4-QA, with mentor |
| 7 | Week 9: Selenium reading and change exercise | 2 hours | Breakout | B4-TE, B5-QA, B6-QA, B6-TE, B7-TE, B7-TM |
| 8 | Week 9: locator strategy clinic, led by B7-TE | 1 hour | Breakout | B7-TE with others |

## Activities

1. The four core concepts: locate, act, wait, assert.
2. Locator strategy: prefer user-facing locators (role, label, text) and agreed test ids, then CSS, and XPath last. Brittle locators make brittle tests.
3. Playwright auto-waiting and actionability checks. Selenium explicit waits with `WebDriverWait`.
4. Record with Playwright codegen, then rewrite the recording by hand and explain every line.
5. Work through [exercise-sheet.md](exercise-sheet.md).
6. Work through [selenium-change-exercise.md](selenium-change-exercise.md).

## Evidence

**E4:**

| Part | Tracks |
| --- | --- |
| A Playwright TypeScript script against <https://testingexamples.github.io> that locates every fixture (by id, name, class, link text, XPath, and role) and acts on every form input | All tracks. B3 and B4-QA may complete this by pairing. |
| A one-page comparison of how Playwright and Selenium wait | B5-QA, B6-QA, B6-TE, B7-TE, B7-TM |
| One new locator added to `demo-selenium-typescript` | B4-TE, B5-QA, B6-QA, B6-TE, B7-TE, B7-TM |

## Assessment

Gate 2 (week 12) reviews E4 with E5. The Gate 2 Part D practical is "automate one given manual test case on the fixture site".

## Resources

- testingexamples fixture site: <https://testingexamples.github.io>
- Fixture contract: <https://github.com/testingexamples/testingexamples.github.io/blob/main/spec/index.md>
- Playwright TypeScript skill: <https://github.com/testingexamples/playwright-typescript-skill>
- Playwright TypeScript demo: <https://github.com/testingexamples/demo-playwright-typescript>
- Selenium TypeScript skill: <https://github.com/testingexamples/selenium-typescript-skill>
- Selenium TypeScript demo: <https://github.com/testingexamples/demo-selenium-typescript>
- Playwright documentation, locators: <https://playwright.dev/docs/locators>
- Playwright documentation, auto-waiting: <https://playwright.dev/docs/actionability>

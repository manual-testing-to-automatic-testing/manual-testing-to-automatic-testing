# M5 From walkthrough to real test

Weeks 10–12. Spiral pass 2: a worked example. Reviewed at Gate 2.

## Purpose

A walkthrough acts on a page and prints what it finds. It "passes" even when the page is wrong. A real test makes assertions that fail when the behaviour is wrong. M5 turns the M4 walkthrough into a real test suite, then automates the person's own manual test cases.

From week 10, every person automates real work on their team's product every week, at their track's depth.

## Outcomes

- **LO5:** turn a manual test or Given-When-Then scenario into a maintainable automated test.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M5 From walkthrough to real test | S | S | S | I | I | I | L | S |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Week 10: walkthrough versus test; `test`, `expect`, and web-first assertions | 2 hours | Core | Cohort |
| 2 | Week 10: hooks, fixtures, test isolation, parallel runs | 1.5 hours | Core | Cohort |
| 3 | Week 10: writing a `spec/index.md` that agrees with the code | 1 hour | Core | Cohort |
| 4 | Week 11: Given-When-Then as a shared language; workshop with product owners | 2 hours | Core | Cohort, product owners |
| 5 | Week 11: page objects; keeping test data out of test logic | 1.5 hours | Core | Cohort |
| 6 | Week 11: reports, screenshots, videos, and the trace viewer | 1.5 hours | Core | Cohort |
| 7 | Week 12: reading the NHS Wales worked example and its spec | 1 hour | Core | Cohort |
| 8 | Week 12: scenario writing and pairing on automation | 3 hours | Breakout | B3, B4-QA, B4-TE, B7-TM, with mentor |
| 9 | Week 12: automating own cases | 3 hours | Breakout | B5-QA, B6-QA, B6-TE |
| 10 | Week 12: page object and fixture design review, led by B7-TE | 1.5 hours | Breakout | B7-TE with others |
| 11 | From week 10: weekly real automation on the team's product | 2 hours a week | Team | Everyone, under mentor review |
| 12 | From week 10: L1 coaching starts | As agreed | Pairing | B6 and B7 coach lower bands |

## Activities

1. Convert the M4 walkthrough into a `@playwright/test` suite. Use web-first assertions: `toHaveText`, `toBeVisible`, `toHaveValue`, `toHaveCount`, `toBeChecked`.
2. Write a `spec/index.md` for the suite, in the shape of the testingexamples demo specs: Summary, Scope, Principles and rules, Detail, Acceptance criteria, Sources.
3. Choose manual cases from E1 marked `automate-browser`. Write each as Given-When-Then using [given-when-then-template.md](given-when-then-template.md). Ask the product owner to review.
4. Automate them on the team's test environment, with a page object.
5. Show that each test fails when the behaviour is wrong: change an expected value, run, see red, put it back.
6. Read `demo-playwright-typescript-for-nhs-wales` and its `spec/index.md` as a model of a real-world, assertion-based test. Read it; do not run it repeatedly against the live site.

See the [worked example](worked-example.md).

## Evidence

**E5:**

- the M4 walkthrough converted into a `@playwright/test` suite with web-first assertions and a `spec/index.md` that agrees with the code
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

Gate 2 (week 12) reviews E5 with E4. The Gate 2 Part D practical is "automate one given manual test case on the fixture site". B3 writes it as Given-When-Then and pairs.

## Resources

- [Given-When-Then Examples](https://testingexamples.github.io/locales/en-001/given-when-then/)
- `playwright-typescript-skill`, section "From walkthrough to real test": <https://github.com/testingexamples/playwright-typescript-skill>
- NHS Wales worked example: <https://github.com/testingexamples/demo-playwright-typescript-for-nhs-wales>
- Playwright test assertions: <https://playwright.dev/docs/test-assertions>
- Playwright page object models: <https://playwright.dev/docs/pom>
- Playwright trace viewer: <https://playwright.dev/docs/trace-viewer>

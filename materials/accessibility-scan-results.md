# Accessibility scan results

Automated axe-core scan of every web resource in the [reading list](reading-list.md), run on 2026-10-07 with `scripts/accessibility-scan/` (axe-core rules for WCAG 2.0, 2.1, and 2.2, levels A and AA, in Chromium).

An automated scan finds only some problems. It supports checks 3 (contrast) and 8 (images and diagrams) in the [accessibility check](accessibility-check.md). Every resource still needs the manual checks there before it is marked **passed**.

Pages change. Re-run the scan before each cohort.

| Resource | Result | Rules failed | Details (rule: impact, elements) |
| --- | --- | --- | --- |
| <https://code.visualstudio.com/docs> | No automated issues | 0 | — |
| <https://git-scm.com/book/en/v2> | Issues found | 4 | `image-alt`: critical, 4; `color-contrast`: serious, 119; `link-in-text-block`: serious, 4; `link-name`: serious, 2 |
| <https://github.com/testingexamples> | No automated issues | 0 | — |
| <https://github.com/testingexamples/demo-playwright-typescript> | Issues found | 2 | `target-size`: serious, 3; `valid-lang`: serious, 2 |
| <https://github.com/testingexamples/demo-playwright-typescript-for-nhs-wales> | Issues found | 2 | `target-size`: serious, 3; `valid-lang`: serious, 2 |
| <https://github.com/testingexamples/demo-selenium-typescript> | Issues found | 2 | `target-size`: serious, 3; `valid-lang`: serious, 2 |
| <https://github.com/testingexamples/playwright-typescript-skill> | No automated issues | 0 | — |
| <https://github.com/testingexamples/selenium-typescript-skill> | Issues found | 1 | `target-size`: serious, 3 |
| <https://github.com/testingexamples/testingexamples.github.io/blob/main/spec/index.md> | Issues found | 1 | `scrollable-region-focusable`: serious, 1 |
| <https://hapifhir.io/> | Issues found | 3 | `image-alt`: critical, 2; `select-name`: critical, 1; `color-contrast`: serious, 30 |
| <https://hl7.org/fhir/R4/> | Issues found | 3 | `image-alt`: critical, 15; `color-contrast`: serious, 106; `target-size`: serious, 11 |
| <https://loinc.org/> | Could not scan | — | HTTP 403: the site may block automated browsers; check by hand |
| <https://playwright.dev/docs/accessibility-testing> | No automated issues | 0 | — |
| <https://playwright.dev/docs/actionability> | No automated issues | 0 | — |
| <https://playwright.dev/docs/api-testing> | No automated issues | 0 | — |
| <https://playwright.dev/docs/ci> | Issues found | 1 | `color-contrast`: serious, 8 |
| <https://playwright.dev/docs/codegen> | No automated issues | 0 | — |
| <https://playwright.dev/docs/locators> | No automated issues | 0 | — |
| <https://playwright.dev/docs/pom> | No automated issues | 0 | — |
| <https://playwright.dev/docs/test-assertions> | No automated issues | 0 | — |
| <https://playwright.dev/docs/test-retries> | No automated issues | 0 | — |
| <https://playwright.dev/docs/test-sharding> | No automated issues | 0 | — |
| <https://playwright.dev/docs/trace-viewer> | No automated issues | 0 | — |
| <https://roles-skills.github.io> | Issues found | 1 | `color-contrast`: serious, 14 |
| <https://synthetichealth.github.io/synthea/> | Issues found | 1 | `color-contrast`: serious, 1 |
| <https://testingexamples.github.io> | Issues found | 2 | `label`: critical, 3; `select-name`: critical, 1 |
| <https://testingexamples.github.io/en-001/given-when-then/> | Issues found | 1 | `scrollable-region-focusable`: serious, 1 |
| <https://testingexamples.github.io/en-001/how-does-artificial-intelligence-help-automatic-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/how-to-start-learning-automatic-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/learn/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-are-flow-metrics-for-automatic-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-are-related-concepts-for-automatic-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-is-automatic-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-is-browser-automation-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-is-continuous-integration-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-is-devops-for-automatic-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-is-lean-six-sigma-for-automatic-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-is-the-purpose-of-automatic-testing/> | No automated issues | 0 | — |
| <https://testingexamples.github.io/en-001/what-is-the-testing-pyramid/> | No automated issues | 0 | — |
| <https://understand-digital-data-roles-skills.service.gov.uk/> | No automated issues | 0 | — |
| <https://www.iso.org/standard/38421.html> | Could not scan | — | HTTP 403: the site may block automated browsers; check by hand |
| <https://www.selenium.dev/documentation/webdriver/waits/> | Issues found | 4 | `aria-allowed-attr`: critical, 1; `aria-valid-attr`: critical, 3; `color-contrast`: serious, 64; `list`: serious, 1 |
| <https://www.typescriptlang.org/docs/handbook/intro.html> | Issues found | 1 | `target-size`: serious, 4 |

Summary: 43 pages; 41 scanned; 26 with no automated issues; 15 with issues; 2 could not be scanned.

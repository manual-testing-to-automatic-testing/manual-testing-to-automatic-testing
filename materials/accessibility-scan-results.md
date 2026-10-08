# Accessibility scan results

Automated axe-core scan of every web resource in the [reading list](reading-list.md), run on 2026-10-08 with `scripts/accessibility-scan/` (axe-core rules for WCAG 2.0, 2.1, and 2.2, levels A and AA, in Chromium).

An automated scan finds only some problems. It supports checks 3 (contrast) and 8 (images and diagrams) in the [accessibility check](accessibility-check.md). Every resource still needs the manual checks there before it is marked **passed**.

Pages change. Re-run the scan before each cohort.

| Resource | Result | Rules failed | Details (rule: impact, elements) |
| --- | --- | --- | --- |
| <https://code.visualstudio.com/docs> | No automated issues | 0 | — |
| <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch> | Issues found | 1 | `link-in-text-block`: serious, 1 |
| <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide> | Issues found | 2 | `nested-interactive`: serious, 8; `target-size`: serious, 1 |
| <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises> | Issues found | 3 | `link-in-text-block`: serious, 2; `nested-interactive`: serious, 8; `target-size`: serious, 1 |
| <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations> | Issues found | 1 | `target-size`: serious, 4 |
| <https://git-scm.com/book/en/v2> | Issues found | 4 | `image-alt`: critical, 4; `color-contrast`: serious, 119; `link-in-text-block`: serious, 4; `link-name`: serious, 2 |
| <https://github.com/dequelabs/axe-core-npm/tree/develop/packages/webdriverjs> | Issues found | 1 | `target-size`: serious, 18 |
| <https://github.com/testingexamples> | No automated issues | 0 | — |
| <https://github.com/testingexamples/demo-selenium-javascript> | Issues found | 2 | `target-size`: serious, 3; `valid-lang`: serious, 2 |
| <https://github.com/testingexamples/demo-selenium-javascript-for-nhs-wales> | Issues found | 2 | `target-size`: serious, 3; `valid-lang`: serious, 2 |
| <https://github.com/testingexamples/selenium-javascript-skill> | Issues found | 1 | `target-size`: serious, 3 |
| <https://github.com/testingexamples/testingexamples.github.io/blob/main/spec/index.md> | Issues found | 1 | `scrollable-region-focusable`: serious, 1 |
| <https://hapifhir.io/> | Issues found | 3 | `image-alt`: critical, 2; `select-name`: critical, 1; `color-contrast`: serious, 30 |
| <https://hl7.org/fhir/R4/> | Issues found | 3 | `image-alt`: critical, 15; `color-contrast`: serious, 106; `target-size`: serious, 11 |
| <https://loinc.org/> | Could not scan | — | HTTP 403: the site may block automated browsers; check by hand |
| <https://mochajs.org/> | No automated issues | 0 | — |
| <https://mochajs.org/#reporters> | No automated issues | 0 | — |
| <https://nodejs.org/docs/latest-v24.x/api/assert.html> | No automated issues | 0 | — |
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
| <https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/> | Issues found | 3 | `aria-allowed-attr`: critical, 1; `color-contrast`: serious, 363; `list`: serious, 1 |
| <https://www.selenium.dev/documentation/webdriver/> | Issues found | 3 | `aria-allowed-attr`: critical, 1; `color-contrast`: serious, 22; `list`: serious, 1 |
| <https://www.selenium.dev/documentation/webdriver/browsers/chrome/> | Issues found | 4 | `aria-allowed-attr`: critical, 1; `aria-valid-attr`: critical, 15; `color-contrast`: serious, 213; `list`: serious, 1 |
| <https://www.selenium.dev/documentation/webdriver/elements/locators/> | Issues found | 4 | `aria-allowed-attr`: critical, 1; `aria-valid-attr`: critical, 17; `color-contrast`: serious, 291; `list`: serious, 1 |
| <https://www.selenium.dev/documentation/webdriver/support_features/select_lists/> | Issues found | 4 | `aria-allowed-attr`: critical, 1; `aria-valid-attr`: critical, 8; `color-contrast`: serious, 116; `list`: serious, 1 |
| <https://www.selenium.dev/documentation/webdriver/waits/> | Issues found | 4 | `aria-allowed-attr`: critical, 1; `aria-valid-attr`: critical, 3; `color-contrast`: serious, 64; `list`: serious, 1 |
| <https://www.selenium.dev/selenium-ide/> | Issues found | 3 | `color-contrast`: serious, 1; `html-has-lang`: serious, 1; `link-in-text-block`: serious, 4 |

Summary: 43 pages; 41 scanned; 18 with no automated issues; 23 with issues; 2 could not be scanned.

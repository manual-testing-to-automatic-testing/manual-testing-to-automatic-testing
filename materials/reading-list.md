# Reading list

Every resource named in the spec's core modules, with links. Track module resources (R1, R2, L1 to L5) are in `materials/tracks/`.

testingexamples.github.io articles use the English canonical address `/locales/en-001/<slug>/`. The site is also available in Welsh, Chinese, Arabic, Korean, French, and other English variants. Choose a locale from the site's picker.

Practice on the fixture site, local services, and your own test environments. Read, but do not repeatedly run, worked examples that target live third-party sites (Google Search, Google Maps, NHS Wales).

## M0 Induction and baseline

| Resource | Link | Format |
| --- | --- | --- |
| Digital health care job roles reference (roles-skills) | <https://roles-skills.github.io> | Web |
| roles-skills self-assessment guide | `~/git/agenda-for-change/guides/self-assessment/index.md` | Markdown |
| UK GDaD PCF | <https://understand-digital-data-roles-skills.service.gov.uk/> | Web |
| Programme specification | [../spec/index.md](../spec/index.md) | Markdown |

## M1 Why and what to automate

| Resource | Link | Format |
| --- | --- | --- |
| What is automatic testing? | <https://testingexamples.github.io/locales/en-001/what-is-automatic-testing/> | Article |
| What is the purpose of automatic testing? | <https://testingexamples.github.io/locales/en-001/what-is-the-purpose-of-automatic-testing/> | Article |
| What is the automatic testing pyramid? | <https://testingexamples.github.io/locales/en-001/what-is-the-testing-pyramid/> | Article |
| What is browser automatic testing? | <https://testingexamples.github.io/locales/en-001/what-is-browser-automation-testing/> | Article |
| What is continuous integration automatic testing? | <https://testingexamples.github.io/locales/en-001/what-is-continuous-integration-testing/> | Article |
| How does Six Sigma lead manual testing into automatic testing? | <https://testingexamples.github.io/locales/en-001/what-is-lean-six-sigma-for-automatic-testing/> | Article |
| Learn hub | <https://testingexamples.github.io/locales/en-001/learn/> | Web |

## M2 Programming foundations in TypeScript

| Resource | Link | Format |
| --- | --- | --- |
| Structured TypeScript course | Chosen by the training lead (Decision D3) | Course |
| TypeScript handbook | <https://www.typescriptlang.org/docs/handbook/intro.html> | Web |
| What are related concepts for automatic testing? (code editors) | <https://testingexamples.github.io/locales/en-001/what-are-related-concepts-for-automatic-testing/> | Article |
| How to start learning automatic testing? | <https://testingexamples.github.io/locales/en-001/how-to-start-learning-automatic-testing/> | Article |
| Visual Studio Code documentation | <https://code.visualstudio.com/docs> | Web, video |
| Kata files | `practice-repo/tests/katas/` | Code |

## M3 Version control and collaboration

| Resource | Link | Format |
| --- | --- | --- |
| What are related concepts for automatic testing? (version control, pull requests) | <https://testingexamples.github.io/locales/en-001/what-are-related-concepts-for-automatic-testing/> | Article |
| Pro Git book | <https://git-scm.com/book/en/v2> | Book, web |
| A testingexamples repository to read the history of | <https://github.com/testingexamples/demo-playwright-typescript> | Code |
| The team's contribution guidelines | Team repository | Markdown |

## M4 Browser automation fundamentals

| Resource | Link | Format |
| --- | --- | --- |
| Fixture site | <https://testingexamples.github.io> | Web |
| Fixture contract | <https://github.com/testingexamples/testingexamples.github.io/blob/main/spec/index.md> | Markdown |
| Playwright TypeScript skill | <https://github.com/testingexamples/playwright-typescript-skill> | Markdown |
| Playwright TypeScript demo | <https://github.com/testingexamples/demo-playwright-typescript> | Code |
| Selenium TypeScript skill | <https://github.com/testingexamples/selenium-typescript-skill> | Markdown |
| Selenium TypeScript demo | <https://github.com/testingexamples/demo-selenium-typescript> | Code |
| Playwright: locators | <https://playwright.dev/docs/locators> | Web |
| Playwright: auto-waiting | <https://playwright.dev/docs/actionability> | Web |
| Playwright: codegen | <https://playwright.dev/docs/codegen> | Web, video |
| Selenium: waits | <https://www.selenium.dev/documentation/webdriver/waits/> | Web |

## M5 From walkthrough to real test

| Resource | Link | Format |
| --- | --- | --- |
| Given-When-Then Examples | <https://testingexamples.github.io/locales/en-001/given-when-then/> | Article |
| Playwright TypeScript skill, "From walkthrough to real test" | <https://github.com/testingexamples/playwright-typescript-skill> | Markdown |
| NHS Wales worked example and spec (read, do not repeatedly run) | <https://github.com/testingexamples/demo-playwright-typescript-for-nhs-wales> | Code |
| Playwright: assertions | <https://playwright.dev/docs/test-assertions> | Web |
| Playwright: page object models | <https://playwright.dev/docs/pom> | Web |
| Playwright: trace viewer | <https://playwright.dev/docs/trace-viewer> | Web, video |

## M6 API, integration, and FHIR tests

| Resource | Link | Format |
| --- | --- | --- |
| HL7 FHIR R4 specification | <https://hl7.org/fhir/R4/> | Web |
| HAPI FHIR | <https://hapifhir.io/> | Web |
| Playwright: API testing | <https://playwright.dev/docs/api-testing> | Web |
| LOINC | <https://loinc.org/> | Web |
| FHIR sandbox | `fhir-sandbox/README.md` | Markdown |
| Example FHIR suite | `practice-repo/tests/api/fhir.spec.ts` | Code |
| The team's interface specifications | Team documentation | Various |

## M7 Continuous integration and DevOps

| Resource | Link | Format |
| --- | --- | --- |
| What is continuous integration automatic testing? | <https://testingexamples.github.io/locales/en-001/what-is-continuous-integration-testing/> | Article |
| What is DevOps for automatic testing? | <https://testingexamples.github.io/locales/en-001/what-is-devops-for-automatic-testing/> | Article |
| Playwright: continuous integration | <https://playwright.dev/docs/ci> | Web |
| Playwright: sharding | <https://playwright.dev/docs/test-sharding> | Web |
| Practice pipeline | `practice-repo/.github/workflows/ci.yml` | Code |
| The organisation's CI documentation | Decision D2 | Various |

## M8 Safe and lawful test automation in health care

| Resource | Link | Format |
| --- | --- | --- |
| The organisation's clinical risk management process and hazard log | Internal | Document |
| The organisation's information governance policy | Internal | Document |
| roles-skills: clinical risk management and information governance skills | <https://roles-skills.github.io> | Web |
| Synthea synthetic patient generator | <https://synthetichealth.github.io/synthea/> | Web, code |
| FHIR sandbox synthetic data | `fhir-sandbox/data/synthetic-bundle.json` | Data |
| Playwright: accessibility testing with axe | <https://playwright.dev/docs/accessibility-testing> | Web |
| IEC 62304 | <https://www.iso.org/standard/38421.html> | Standard (summary page) |

## M9 Quality engineering practice

| Resource | Link | Format |
| --- | --- | --- |
| What metrics help automatic testing? | <https://testingexamples.github.io/locales/en-001/what-are-flow-metrics-for-automatic-testing/> | Article |
| How does Six Sigma lead manual testing into automatic testing? | <https://testingexamples.github.io/locales/en-001/what-is-lean-six-sigma-for-automatic-testing/> | Article |
| How does artificial intelligence help automatic testing? | <https://testingexamples.github.io/locales/en-001/how-does-artificial-intelligence-help-automatic-testing/> | Article |
| Flaky-test exercise | `practice-repo/tests/flaky/README.md` | Code |
| Playwright: retries | <https://playwright.dev/docs/test-retries> | Web |

## M10 Capstone

Everything above, plus:

| Resource | Link | Format |
| --- | --- | --- |
| Capstone briefs, scope agreement, and presentation outline | [modules/m10-capstone/](modules/m10-capstone/index.md) | Markdown |

## Other languages and tools (after Gate 2)

Principle 9 says one language and one tool first. After Gate 2, people who want to compare can read the sibling skills and demos for Python, JavaScript, Java, C#, and Rust, for both Playwright and Selenium, at <https://github.com/testingexamples>.

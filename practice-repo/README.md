# Practice repository

The practice repository for the training programme from manual testing to automatic testing. Every participant works here from Modules 2 to 9, then applies the same habits to their own team's product in the capstone (Module 10).

The stack is **JavaScript** (Node.js, ES modules), **Selenium** for the browser, and **Mocha** with Node's built-in `node:assert/strict` for tests. There is no build step, and nothing needs Docker.

The programme specification is [../spec/index.md](../spec/index.md). This repository is the practice environment it describes.

## Set up (Module 0)

Requires Node.js 24 (see `.nvmrc`), Google Chrome, git, and Visual Studio Code with the ESLint extension.

```sh
npm ci                  # install pinned dependencies
npm run test:katas      # check everything works
```

Selenium Manager, which comes with `selenium-webdriver`, finds Chrome and downloads a matching driver the first time a browser test runs. There is nothing else to install.

## Commands

| Command              | What it runs                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `npm test`           | Katas, browser tests, and API tests                                                      |
| `npm run test:katas` | Katas: plain JavaScript unit tests, no browser (Module 2)                                |
| `npm run test:ui`    | Browser tests against <https://testingexamples.github.io> (Module 4, Module 5, Module 8) |
| `npm run test:api`   | API tests against the local FHIR sandbox, which they start for you (Module 6)            |
| `npm run test:flaky` | The flaky-test exercise (Module 9); not part of `npm test` or CI                         |
| `npm run fhir`       | Run the FHIR sandbox yourself, at <http://localhost:8080/fhir>                           |
| `npm run lint`       | ESLint, including a rule that blocks `it.only` and `describe.only`                       |
| `npm run format`     | Prettier formatting                                                                      |

Useful options:

- `HEADLESS=1 npm run test:ui` runs Chrome without a window. CI always does.
- `npx mocha tests/ui/fixtures.test.js --grep checkbox` runs only the tests whose names match.
- When a browser test fails, `test-results/` holds a screenshot, the page source, the URL, and the browser console log, named after the test.

## Where each module's work lives

| Module                              | Folder                                                                                                                                             | What you do                                                                                                                                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Module 2 Programming foundations    | [`src/katas/`](src/katas/), [`tests/katas/`](tests/katas/)                                                                                         | Solve the katas for your track. See [tests/katas/README.md](tests/katas/README.md).                                                                                                                            |
| Module 3 Version control            | the whole repository                                                                                                                               | Branch, commit, open pull requests, review. See [CONTRIBUTING.md](CONTRIBUTING.md).                                                                                                                            |
| Module 4 Browser automation         | [`tests/ui/`](tests/ui/)                                                                                                                           | Write a walkthrough that locates and acts on every fixture on the testingexamples home page.                                                                                                                   |
| Module 5 Walkthrough to real test   | [`tests/ui/`](tests/ui/), [`tests/ui/pages/`](tests/ui/pages/), [`spec/`](spec/)                                                                   | Turn the walkthrough into a Mocha suite with assertions, explicit waits, a page object, and a spec. [`tests/ui/fixtures.test.js`](tests/ui/fixtures.test.js) is a worked answer: try yours first.              |
| Module 6 API and FHIR tests         | [`tests/api/`](tests/api/), [`fhir-sandbox/`](fhir-sandbox/)                                                                                       | Write API tests with `fetch` against the FHIR sandbox. [`tests/api/fhir.test.js`](tests/api/fhir.test.js) is the worked suite that Band 4 quality assurance and Band 7 test management read and others extend. |
| Module 7 Continuous integration     | [`.github/workflows/ci.yml`](.github/workflows/ci.yml)                                                                                             | Read, run, and change the pipeline; triage failures from the JUnit report, screenshots, and page source.                                                                                                       |
| Module 8 Safe and lawful automation | [`.gitleaks.toml`](.gitleaks.toml), [`fhir-sandbox/data/`](fhir-sandbox/data/), [`tests/ui/accessibility.test.js`](tests/ui/accessibility.test.js) | Keep secrets and real data out; build synthetic data; trace tests to hazards; automate accessibility checks with axe-core.                                                                                     |
| Module 9 Quality engineering        | [`tests/flaky/`](tests/flaky/)                                                                                                                     | Find and fix the root cause of a flaky test.                                                                                                                                                                   |

Shared helpers are in [`tests/support/`](tests/support/): the driver factory (`driver.js`), the hook that saves failure evidence (`hooks.js`), and the fixture that starts the FHIR sandbox for the API tests (`fhir-server.js`).

## Writing a new suite

1. Copy [`spec/index.md`](spec/index.md) into `spec/<suite-name>/index.md` and fill it in **before** writing code. [`spec/example/index.md`](spec/example/index.md) shows a filled-in spec.
2. Write the tests. Every test must make real assertions, and every wait must be explicit: `driver.wait(until...)`, never a sleep.
3. Show each test fails when the behaviour is wrong: change an expected value, run it, see it fail, then change it back.
4. Check the spec and the code agree. If they disagree, that is a defect.
5. Open a pull request using the template.

## The FHIR sandbox

[`fhir-sandbox/`](fhir-sandbox/) is a small FHIR R4 server written in plain JavaScript. It needs only Node.js. `npm run test:api` starts it for you; to explore it yourself, run `npm run fhir` and open <http://localhost:8080/fhir/metadata>. See [fhir-sandbox/README.md](fhir-sandbox/README.md).

## CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every pull request:

- **secrets-scan:** gitleaks, with the extra NHS number rule in `.gitleaks.toml`. Repositories owned by a GitHub organisation need a free `GITLEAKS_LICENSE` secret.
- **static:** lint and format check.
- **katas:** unit tests.
- **ui:** browser tests in headless Chrome; JUnit results and failure evidence are uploaded as artifacts.
- **api:** API tests against the FHIR sandbox, which the tests start; JUnit results are uploaded.

Turn on branch protection for `main` and require these checks, so a failing test blocks the merge.

## Quarantine

A test that fails intermittently, and cannot be fixed straight away, may be quarantined: add `@quarantine` to its name, with an owner and a date in a comment, and raise a defect. CI skips quarantined tests with `--grep @quarantine --invert`. Never quarantine silently, and never fix flakiness with retries or sleeps.

## Rules

- Synthetic data only. NHS numbers from the 999 test range only.
- No secrets in source control.
- No `it.only`, and no fixed sleeps: wait explicitly for the condition you need.
- Always `driver.quit()` in an `after` hook, or the browser keeps running.
- Read, don't hammer, third-party sites: the browser tests use the testingexamples fixture site, which exists for this purpose.

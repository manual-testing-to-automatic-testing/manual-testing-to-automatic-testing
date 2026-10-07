# Practice repository

The practice repository for the training programme from manual testing to automatic testing. Every participant works here from module M2 to M9, then applies the same habits to their own team's product in the capstone (M10).

The programme specification is [../spec/index.md](../spec/index.md). This repository is the practice environment it describes.

## Set up (module M0)

Requires Node.js 24 (see `.nvmrc`), git, and Visual Studio Code with the Playwright extension. For module M6 you also need Docker.

```sh
npm ci                                # install pinned dependencies
npx playwright install chromium       # install the test browser
npm run test:katas                    # check everything works
```

## Commands

| Command                      | What it runs                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| `npm test`                   | Katas, browser tests, and API tests                                                  |
| `npm run test:katas`         | Katas: plain TypeScript unit tests, no browser (M2)                                  |
| `npm run test:ui`            | Browser tests against <https://testingexamples.github.io> (M4, M5)                   |
| `npm run test:api`           | API tests against the local FHIR sandbox (M6); skipped if the sandbox is not running |
| `npm run test:flaky`         | The flaky-test exercise (M9); not part of `npm test` or CI                           |
| `npm run typecheck`          | TypeScript type checking                                                             |
| `npm run lint`               | ESLint, including a rule that blocks `test.only`                                     |
| `npm run format`             | Prettier formatting                                                                  |
| `npx playwright show-report` | The HTML report of the last run                                                      |

## Where each module's work lives

| Module                        | Folder                                                                               | What you do                                                                                                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| M2 Programming foundations    | [`src/katas/`](src/katas/), [`tests/katas/`](tests/katas/)                           | Solve the katas for your track. See [tests/katas/README.md](tests/katas/README.md).                                                                                                        |
| M3 Version control            | the whole repository                                                                 | Branch, commit, open pull requests, review. See [CONTRIBUTING.md](CONTRIBUTING.md).                                                                                                        |
| M4 Browser automation         | [`tests/ui/`](tests/ui/)                                                             | Write a walkthrough that locates and acts on every fixture on the testingexamples home page.                                                                                               |
| M5 Walkthrough to real test   | [`tests/ui/`](tests/ui/), [`tests/ui/pages/`](tests/ui/pages/), [`spec/`](spec/)     | Turn the walkthrough into a real suite with web-first assertions, a page object, and a spec. [`tests/ui/fixtures.spec.ts`](tests/ui/fixtures.spec.ts) is a worked answer: try yours first. |
| M6 API and FHIR tests         | [`tests/api/`](tests/api/)                                                           | Write API tests against the FHIR sandbox. [`tests/api/fhir.spec.ts`](tests/api/fhir.spec.ts) is the worked suite that B4-QA and B7-TM read and others extend.                              |
| M7 Continuous integration     | [`.github/workflows/ci.yml`](.github/workflows/ci.yml)                               | Read, run, and change the pipeline; triage failures.                                                                                                                                       |
| M8 Safe and lawful automation | [`.gitleaks.toml`](.gitleaks.toml), [`../fhir-sandbox/data/`](../fhir-sandbox/data/) | Keep secrets and real data out; build synthetic data; trace tests to hazards.                                                                                                              |
| M9 Quality engineering        | [`tests/flaky/`](tests/flaky/)                                                       | Find and fix the root cause of a flaky test.                                                                                                                                               |

## Writing a new suite

1. Copy [`spec/index.md`](spec/index.md) into `spec/<suite-name>/index.md` and fill it in **before** writing code. [`spec/example/index.md`](spec/example/index.md) shows a filled-in spec.
2. Write the tests. Every test must make real assertions.
3. Show each test fails when the behaviour is wrong: change an expected value, run it, see it fail, then change it back.
4. Check the spec and the code agree. If they disagree, that is a defect.
5. Open a pull request using the template.

## The FHIR sandbox

The API tests need the local FHIR server in [`../fhir-sandbox/`](../fhir-sandbox/):

```sh
cd ../fhir-sandbox
docker compose up -d
scripts/load.sh
cd ../practice-repo
npm run test:api
```

When you set up a practice repository for a cohort as its own git repository, copy `fhir-sandbox/` into it, so the CI `api` job can load the same data.

## CI

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every pull request:

- **secrets-scan:** gitleaks, with the extra NHS number rule in `.gitleaks.toml`. Repositories owned by a GitHub organisation need a free `GITLEAKS_LICENSE` secret.
- **static:** typecheck, lint, format check.
- **katas:** unit tests.
- **ui:** browser tests, headless, with retries; the report and traces are uploaded as artifacts.
- **api:** API tests against a HAPI FHIR service container loaded with the synthetic data; the report is uploaded as an artifact.

Turn on branch protection for `main` and require these checks, so a failing test blocks the merge.

## Rules

- Synthetic data only. NHS numbers from the 999 test range only.
- No secrets in source control.
- No `test.only`, and no fixed sleeps.
- Read, don't hammer, third-party sites: the browser tests use the testingexamples fixture site, which exists for this purpose.

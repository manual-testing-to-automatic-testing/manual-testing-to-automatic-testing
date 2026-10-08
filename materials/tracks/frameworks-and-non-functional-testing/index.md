# Frameworks and non-functional testing

**Tracks:** Band 7 test engineering (apply and lead). Band 6 test engineering reads the material and joins the discussions only. **Programme hours:** 112.5 to 150.

**Outcomes:** extend, standardise, and build reusable frameworks; plan and run performance, load, and resilience tests based on real clinical demand; maintain and adapt CI/CD pipelines.

**Evidence:** folded into the Band 7 test engineering capstone (Module 10).

The exercises are written to be tool-neutral where possible. The defaults are JavaScript with Selenium and Mocha for shared helpers, and **k6** for load tests, because k6 scripts are JavaScript, run headless in CI, and keep load generation separate from browser tests. Install k6 as its standalone binary from <https://grafana.com/docs/k6/latest/set-up/install-k6/>, not as a container: participants have no Docker. Another load tool is fine if the organisation already uses one (spec Decision 1).

## Exercise 1: Reusable helpers and hooks (hours 112.5–127.5)

**Goal:** turn repeated set-up code across the cohort's suites into shared helpers and Mocha hooks.

1. Read three participants' Module 5 and Module 6 suites. List repeated code: logging in, creating a synthetic patient, opening a page, calling the FHIR server.
2. Design shared helpers in `tests/support/`, for example:
   - a driver factory that builds one configured Chrome driver (headless in CI, window size, timeouts), with Mocha root hooks that start it before a suite and always quit it after
   - an `afterEach` hook that saves a screenshot and the page source to `test-results/` when a test fails
   - `syntheticPatient()`: creates a synthetic `Patient` in the FHIR sandbox with `fetch` before a test, and deletes it after
   - `fhir`: a small API client over the built-in `fetch`, with the base URL from `FHIR_BASE_URL`
   - page objects, as JavaScript classes, for the most used pages, with their explicit waits inside them.
3. Put them in a shared package or folder with its own tests and a `spec/index.md`.
4. Migrate one participant's suite to use them, by pull request, with that participant reviewing.
5. Write a short guide: when to add a helper or hook, naming, and how to avoid hidden shared state between tests, such as one driver or one patient reused by tests that change it.

**Done when:** at least two suites use the helpers, all tests still pass in CI, and test isolation is unchanged (each test can run alone, with `mocha --grep`, and the suite can run with `--parallel`).

## Exercise 2: Pipeline maintenance (hours 120–127.5)

**Goal:** keep the pipeline fast and reliable as suites grow.

1. Measure the current pull request pipeline time and failure causes.
2. Add caching of npm dependencies, split the UI suite across parallel CI jobs, and run Mocha with `--parallel` where tests are isolated.
3. Add test selection: a fast smoke stage on every pull request, the full suite on merge or nightly.
4. Write the quarantine rule: a flaky test is tagged (for example `@quarantine` in its title, excluded with `--grep @quarantine --invert`), gets an owner and a deadline, and is reported, never silently skipped.
5. Document the pipeline in the repository.

**Done when:** the pull request pipeline is faster than before with no loss of the checks that block merging, and the quarantine rule is in use.

## Exercise 3: Performance and load test based on clinical demand (hours 127.5–150)

**Goal:** plan and run a load test that models real clinical demand, not an arbitrary number of users.

### Step 1: Model demand

With the product owner and an operations colleague, find out:

- when the service peaks, for example morning ward rounds, clinic start times, or the start of a GP surgery's day
- the peak rate of the key transactions, for example searches or record views per minute
- how demand grows, for example during winter pressures
- what "too slow" means for a clinical user, as a response-time target.

Write the model as a table:

| Transaction | Normal rate | Peak rate | Target response time (95th percentile) | Source of the numbers |
| --- | --- | --- | --- | --- |
| | | | | |

### Step 2: Choose the environment

Run only against the FHIR sandbox or an agreed performance environment. **Never** load test production or a shared test environment without written agreement, and never against third-party sites.

### Step 3: Write the test

Default with k6, for example:

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    morning_peak: {
      executor: 'ramping-arrival-rate',
      startRate: 5, timeUnit: '1m', preAllocatedVUs: 20,
      stages: [
        { target: 60, duration: '5m' },   // ramp to modelled peak
        { target: 60, duration: '10m' },  // hold peak
        { target: 0, duration: '2m' },
      ],
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<800'],     // target from the demand model
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get(`${__ENV.FHIR_BASE}/Patient?family=Example`);
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
```

Replace the rates and thresholds with the numbers from your demand model. Use synthetic data only.

### Step 4: Run, read, and report

1. Run a baseline at normal rate, then the peak, then a stress run above peak until it fails or reaches an agreed limit.
2. For resilience: during the peak run, stop the FHIR sandbox process (Ctrl+C in its terminal) and start it again with `npm run fhir`, then watch error rates and recovery time. Remember that it reloads only its synthetic data on restart.
3. Report in plain language: does the service meet the target at peak? Where does it break? How does it recover? What is the clinical impact?

**Done when:** the report is reviewed by the product owner and an operations colleague, and the k6 script runs on demand from CI, not on every pull request.

## Discussion topics for Band 6 test engineering readers

- When is a browser-based performance measure (for example Selenium reading the browser's `performance.timing` with `executeScript`) more useful than a protocol-level load test, and when is it misleading?
- How do shared helpers and hooks help, and when do they create hidden coupling?
- Who owns performance testing in the team, and how does it link to the clinical safety case?

# Flaky-test investigation

Evidence E9, part 1. A flaky test passes sometimes and fails sometimes, with no change to the code. It is variation, and variation has a cause. Find the cause. Do not re-run until it goes green, and do not add retries or a longer sleep: that hides the variation instead of removing it.

Use the deliberately flaky test in `practice-repo/tests/flaky/flaky.spec.ts`, or a real flaky test from your team.

## Record

| Field | Value |
| --- | --- |
| Test | |
| Real or exercise | |
| How it was found | CI failure / quarantine list / repeated runs |

### 1. Measure

Run it many times and count:

```sh
npx playwright test --project=flaky tests/flaky/flaky.spec.ts --repeat-each=20
```

| Runs | Failures | Failure rate |
| --- | --- | --- |
| 20 | | % |

### 2. Look

Open a failing run in the trace viewer (`npx playwright show-trace <trace.zip>`) or the HTML report (`npx playwright show-report`).

- Which step failed?
- What was on the page at that moment?
- What was different in a passing run?

### 3. Root cause

Tick one, and explain.

- [ ] **Timing:** the test acted or asserted before the page was ready, or used a fixed wait.
- [ ] **Shared state:** tests depend on each other, or share data, cookies, or storage.
- [ ] **Test data:** data changes between runs, or depends on the date or time.
- [ ] **Environment:** a slow or unreliable service, network, or machine.

Explanation: ______

### 4. Fix

Describe the fix. Write it yourself before you read `fixed.spec.ts`. Then compare.

| | Your fix | `fixed.spec.ts` |
| --- | --- | --- |
| What changed | | |
| Why it removes the cause | | |

### 5. Prove

Run the fixed test 50 times:

```sh
npx playwright test --project=flaky <your fixed test file> --repeat-each=50
```

| Runs | Failures |
| --- | --- |
| 50 | |

### 6. Prevent

One sentence: what would stop this kind of flakiness coming back? For example: a review checklist item, a lint rule against `waitForTimeout`, or giving every test its own data.

## B3 and B4-QA: describe one with the mentor

The mentor runs steps 1 and 2 with you. You:

- say in your own words what "flaky" means and why it matters
- choose the root cause with the mentor, and explain why
- say why re-running until green is not a fix.

Write a short paragraph instead of the full record.

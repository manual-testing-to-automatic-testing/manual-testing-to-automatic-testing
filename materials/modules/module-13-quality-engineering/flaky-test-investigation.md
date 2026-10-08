# Flaky-test investigation

Evidence 13, part 1. A flaky test passes sometimes and fails sometimes, with no change to the code. It is variation, and variation has a cause. Find the cause. Do not re-run until it goes green, and do not add retries or a longer sleep: that hides the variation instead of removing it.

Use the deliberately flaky Selenium test in `practice-repo/tests/flaky/flaky.test.js`, or a real flaky test from your team. It is not part of `npm test` or CI; run it with `npm run test:flaky`.

## Record

| Field | Value |
| --- | --- |
| Test | |
| Real or exercise | |
| How it was found | CI failure / quarantine list / repeated runs |

### 1. Measure

Run it many times and count. Mocha has no repeat option, so use a loop in the terminal, from `practice-repo/`:

```sh
for i in $(seq 1 20); do npx mocha tests/flaky/flaky.test.js > /dev/null 2>&1 && echo pass || echo fail; done | sort | uniq -c
```

| Runs | Failures | Failure rate |
| --- | --- | --- |
| 20 | | % |

### 2. Look

Open the evidence the practice repository saves for a failing browser test: the screenshot, the page source, and the browser console log in `test-results/`. Read the Mocha error message too.

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

Describe the fix. Write it yourself before you read `fixed.test.js`. Then compare.

| | Your fix | `fixed.test.js` |
| --- | --- | --- |
| What changed | | |
| Why it removes the cause | | |

### 5. Prove

Run the fixed test 50 times:

```sh
for i in $(seq 1 50); do npx mocha <your fixed test file> > /dev/null 2>&1 && echo pass || echo fail; done | sort | uniq -c
```

| Runs | Failures |
| --- | --- |
| 50 | |

### 6. Prevent

One sentence: what would stop this kind of flakiness coming back? For example: a review checklist item that every `findElement` after an action has an explicit wait, a lint rule against `driver.sleep`, or giving every test its own data.

## Band 3 and Band 4 quality assurance: describe one with the mentor

The mentor runs steps 1 and 2 with you. You:

- say in your own words what "flaky" means and why it matters
- choose the root cause with the mentor, and explain why
- say why re-running until green is not a fix.

Write a short paragraph instead of the full record.

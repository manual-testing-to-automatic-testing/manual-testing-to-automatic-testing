# Flaky-test exercise (module M9)

`flaky.test.js` is deliberately flaky: it passes sometimes and fails sometimes, with no change to the code or the page. `fixed.test.js` is the same test, fixed. Neither runs in `npm test` or CI.

Both open [`slow-status.html`](slow-status.html), a tiny local page, so the exercise needs no network.

1. Run the flaky test 20 times and count the failures. Mocha has no repeat option, so use a loop:

   ```sh
   for i in $(seq 1 20); do npx mocha tests/flaky/flaky.test.js > /dev/null 2>&1 && echo pass || echo FAIL; done
   ```

2. Look at a failure: the message, and the screenshot, page source, and console log that the failure hook saves in `test-results/`.
3. Write down the root cause: timing, shared state, test data, or environment.
4. Fix it without reading `fixed.test.js`, then compare.
5. Run your fix 50 times with the same loop (`seq 1 50`) to show it is reliable.

The evidence for E9 is your written root cause, your fix, and the two runs.

Never "fix" a flaky test by adding retries or a longer sleep. That hides the variation instead of removing it. Wait explicitly for the condition the test needs.

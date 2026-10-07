# Flaky-test exercise (module M9)

`flaky.spec.ts` is deliberately flaky. `fixed.spec.ts` is the same test, fixed.
Neither runs in `npm test` or CI: they are in the separate `flaky` project.

1. Run the flaky test 20 times and count the failures:

   ```sh
   npx playwright test --project=flaky tests/flaky/flaky.spec.ts --repeat-each=20
   ```

2. Open a failure in the trace viewer (`npx playwright show-trace <trace.zip>`)
   or the HTML report (`npx playwright show-report`).
3. Write down the root cause: timing, shared state, test data, or environment.
4. Fix it without reading `fixed.spec.ts`, then compare.
5. Run your fix 50 times with `--repeat-each=50` to show it is reliable.

The evidence for E9 is your written root cause, your fix, and the two runs.

Never "fix" a flaky test by adding retries or a longer sleep. That hides the
variation instead of removing it.

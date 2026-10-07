/**
 * Kata 12 (harder): retry an async operation with exponential backoff.
 *
 * This is for polling slow systems in test set-up, not for hiding flaky
 * tests: a test that needs retries to pass has a cause worth finding.
 *
 * options: { attempts, initialDelayMs, factor = 2, sleep }, where sleep(ms)
 * returns a Promise (tests pass a fake one, so they run instantly).
 */
export async function retry(operation, options) {
  const { attempts, initialDelayMs, factor = 2 } = options;
  const sleep = options.sleep ?? ((ms) => new Promise((r) => setTimeout(r, ms)));
  if (attempts < 1) throw new RangeError('attempts must be at least 1');
  let delay = initialDelayMs;
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await sleep(delay);
        delay *= factor;
      }
    }
  }
  throw lastError;
}

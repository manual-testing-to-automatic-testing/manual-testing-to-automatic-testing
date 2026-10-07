/**
 * Kata 10: summarise a list of test results into counts and a pass rate.
 *
 * Each result is { title, status }, where status is 'passed', 'failed',
 * 'skipped', or 'flaky'. The summary is { total, counts, passRate }, where
 * passRate is passed (including flaky) as a percentage of tests that ran,
 * to 1 decimal place.
 */
export function summarise(results) {
  const counts = { passed: 0, failed: 0, skipped: 0, flaky: 0 };
  for (const r of results) counts[r.status] += 1;
  const ran = results.length - counts.skipped;
  const passRate = ran === 0 ? 0 : Math.round(((counts.passed + counts.flaky) / ran) * 1000) / 10;
  return { total: results.length, counts, passRate };
}

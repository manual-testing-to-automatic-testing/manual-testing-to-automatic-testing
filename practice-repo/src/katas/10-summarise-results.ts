/** Kata 10: summarise a list of test results into counts and a pass rate. */
export type Status = 'passed' | 'failed' | 'skipped' | 'flaky';
export interface Result {
  title: string;
  status: Status;
}
export interface Summary {
  total: number;
  counts: Record<Status, number>;
  /** Passed (including flaky) as a percentage of tests that ran, to 1 decimal place. */
  passRate: number;
}

export function summarise(results: Result[]): Summary {
  const counts: Record<Status, number> = { passed: 0, failed: 0, skipped: 0, flaky: 0 };
  for (const r of results) counts[r.status] += 1;
  const ran = results.length - counts.skipped;
  const passRate = ran === 0 ? 0 : Math.round(((counts.passed + counts.flaky) / ran) * 1000) / 10;
  return { total: results.length, counts, passRate };
}

import { strict as assert } from 'node:assert';
import { summarise } from '../../src/katas/10-summarise-results.js';

it('counts each status and works out the pass rate', () => {
  const summary = summarise([
    { title: 'a', status: 'passed' },
    { title: 'b', status: 'passed' },
    { title: 'c', status: 'failed' },
    { title: 'd', status: 'skipped' },
    { title: 'e', status: 'flaky' },
  ]);
  assert.equal(summary.total, 5);
  assert.deepEqual(summary.counts, { passed: 2, failed: 1, skipped: 1, flaky: 1 });
  assert.equal(summary.passRate, 75);
});

it('an empty run has a pass rate of 0', () => {
  assert.equal(summarise([]).passRate, 0);
});

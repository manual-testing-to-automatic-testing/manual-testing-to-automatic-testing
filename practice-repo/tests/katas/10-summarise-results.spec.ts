import { test, expect } from '@playwright/test';
import { summarise } from '../../src/katas/10-summarise-results';

test('counts each status and works out the pass rate', () => {
  const summary = summarise([
    { title: 'a', status: 'passed' },
    { title: 'b', status: 'passed' },
    { title: 'c', status: 'failed' },
    { title: 'd', status: 'skipped' },
    { title: 'e', status: 'flaky' },
  ]);
  expect(summary.total).toBe(5);
  expect(summary.counts).toEqual({ passed: 2, failed: 1, skipped: 1, flaky: 1 });
  expect(summary.passRate).toBe(75);
});

test('an empty run has a pass rate of 0', () => {
  expect(summarise([]).passRate).toBe(0);
});

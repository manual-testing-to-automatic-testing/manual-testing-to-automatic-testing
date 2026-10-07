import { test, expect } from '@playwright/test';
import { slowStatusPage } from './page';

// M9 flaky-test exercise. This test is deliberately flaky.
// It is tagged @flaky-exercise and lives in the "flaky" project, so it never
// runs in `npm test` or CI. Run it on its own, several times:
//
//   npx playwright test --project=flaky tests/flaky/flaky.spec.ts --repeat-each=20
//
// Your task: find the root cause (timing, shared state, test data, or
// environment), write it down, and compare your fix with fixed.spec.ts.

test('shows Saved after clicking Save', { tag: '@flaky-exercise' }, async ({ page }) => {
  await page.setContent(slowStatusPage);
  await page.locator('#save').click();

  // A fixed sleep "usually" waits long enough...
  await page.waitForTimeout(600);

  // ...and a one-shot read does not retry, so a slow response fails the test.
  const text = await page.locator('#status').textContent();
  expect(text).toBe('Saved');
});

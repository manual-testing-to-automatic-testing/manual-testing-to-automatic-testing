import { test, expect } from '@playwright/test';
import { slowStatusPage } from './page';

// M9 flaky-test exercise: the fixed version.
//
// Root cause: timing. The original test slept for a fixed 600 ms, then read
// the text once. The page takes up to 1200 ms, so the test failed whenever
// the response was slower than the sleep.
//
// Fix: remove the sleep and use a web-first assertion, which retries until
// the text appears or the timeout (5 s by default) passes. The test is now
// faster when the page is fast, and reliable when it is slow.

test('shows Saved after clicking Save', { tag: '@flaky-exercise-fixed' }, async ({ page }) => {
  await page.setContent(slowStatusPage);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('status')).toHaveText('Saved');
});

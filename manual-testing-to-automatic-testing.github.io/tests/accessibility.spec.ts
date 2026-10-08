import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

const PAGES = [
  '/en-001/',
  '/en-001/spec/',
  '/en-001/track-for-band-5-quality-assurance-test-analyst/',
  '/en-001/self-assessment/',
  '/en-001/self-assessment/band-6-senior-quality-assurance-test-analyst/',
  '/en-001/search/?gate'
];

for (const path of PAGES) {
  test(`no automated accessibility violations on ${path}`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    const summary = results.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.length} ${v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(", ")}`);
    expect(summary, summary.join('\n')).toEqual([]);
  });
}

test('no automated accessibility violations on a rated self-assessment', async ({ page }) => {
  await page.goto('/en-001/self-assessment/band-6-senior-quality-assurance-test-analyst/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  // One of each status, a calibration flag, and a gate result.
  await page.locator('select[id="A1-agreed"]').selectOption('Meets');
  await page.locator('select[id="A2-agreed"]').selectOption('Partly');
  await page.locator('select[id="A3-agreed"]').selectOption('Not yet');
  await page.locator('select[id="C1-self"]').selectOption('4');
  await page.locator('select[id="C1-manager"]').selectOption('0');
  await page.getByRole('combobox', { name: 'Gate' }).selectOption('2');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();
  const summary = results.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.length} ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(', ')}`);
  expect(summary, summary.join('\n')).toEqual([]);
});

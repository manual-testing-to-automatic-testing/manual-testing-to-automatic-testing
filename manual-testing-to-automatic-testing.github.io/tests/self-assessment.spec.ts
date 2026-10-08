import { test, expect, type Page } from '@playwright/test';

const TRACK = '/en-001/self-assessment/band-5-quality-assurance-test-analyst/';

/** Choose the best option (the last one) in every select whose id ends with the suffix. */
async function rateAll(page: Page, suffix: string, pick: 'best' | 'first' = 'best') {
  const selects = page.locator(`select[id$="-${suffix}"]`);
  const count = await selects.count();
  for (let i = 0; i < count; i++) {
    const select = selects.nth(i);
    const values = await select.locator('option').evaluateAll((os) => os.map((o) => (o as HTMLOptionElement).value));
    const choice = pick === 'best' ? values[values.length - 1] : values[1];
    await select.selectOption(choice);
  }
  return count;
}

test.beforeEach(async ({ page }) => {
  await page.goto(TRACK);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('the instrument has every item for the track', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Band 5 quality assurance self-assessment');
  // Band 5 quality assurance: 21 + 18 + 10 = 49 items, three ratings each.
  await expect(page.locator('select[id$="-agreed"]')).toHaveCount(49);
  await expect(page.locator('select[id$="-self"]')).toHaveCount(49);
  await expect(page.getByRole('group', { name: /^A1 Band outline: Knowledge/ })).toBeVisible();
  await expect(page.getByRole('group', { name: /^C\d+ Skill: Test engineering/ })).toBeVisible();
});

test('agreed ratings at the top of every scale give 100% and meet Gate 4', async ({ page }) => {
  expect(await rateAll(page, 'agreed')).toBe(49);
  const agreed = page.getByRole('row', { name: /Agreed/ });
  await expect(agreed.getByRole('cell').last()).toHaveText('100%');
  await page.getByRole('combobox', { name: 'Gate' }).selectOption('4');
  await expect(page.getByText('Gate 4 threshold met')).toBeVisible();
});

test('the lowest ratings fall below the threshold, and self versus manager gaps are flagged', async ({ page }) => {
  await rateAll(page, 'agreed', 'first');
  await page.getByRole('combobox', { name: 'Gate' }).selectOption('1');
  await expect(page.getByText(/Below threshold: Part A, Part B, Part C/)).toBeVisible();

  await page.locator('select[id="C1-self"]').selectOption('4');
  await page.locator('select[id="C1-manager"]').selectOption('0');
  await expect(page.getByRole('heading', { name: 'Discuss first' })).toBeVisible();
  await expect(page.getByRole('link', { name: /^C1 / })).toBeVisible();
});

test('answers persist in this browser, and export as a scored TSV', async ({ page }) => {
  await page.locator('select[id="A1-self"]').selectOption('Partly');
  await page.locator('select[id="A1-agreed"]').selectOption('Meets');
  await page.getByRole('textbox', { name: 'Evidence for A1', exact: true }).fill('Planned my own work for the referrals release.');
  await page.reload();
  await expect(page.locator('select[id="A1-agreed"]')).toHaveValue('Meets');
  await expect(page.getByRole('textbox', { name: 'Evidence for A1', exact: true })).toHaveValue('Planned my own work for the referrals release.');

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export TSV' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('band-5-quality-assurance-test-analyst--gate-0.tsv');
  const text = await (await download.createReadStream()).toArray().then((chunks) => Buffer.concat(chunks).toString('utf8'));
  const [header, first] = text.split('\n');
  expect(header.split('\t')).toContain('agreed_rating');
  const row = Object.fromEntries(header.split('\t').map((h, i) => [h, first.split('\t')[i]]));
  expect(row.item_id).toBe('A1');
  expect(row.self_rating).toBe('Partly');
  expect(row.agreed_rating).toBe('Meets');
  expect(row.status).toBe('Meets');
});

test('an exported TSV imports back, and a file for another track is refused', async ({ page }) => {
  await page.locator('select[id="A2-agreed"]').selectOption('Partly');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export TSV' }).click();
  const path = await (await downloadPromise).path();

  page.once('dialog', (dialog) => dialog.accept());
  await page.getByRole('button', { name: 'Clear' }).click();
  await expect(page.locator('select[id="A2-agreed"]')).toHaveValue('');

  await page.locator('input[type="file"]').setInputFiles(path);
  await expect(page.getByText(/Imported 49 items/)).toBeVisible();
  await expect(page.locator('select[id="A2-agreed"]')).toHaveValue('Partly');

  await page.locator('input[type="file"]').setInputFiles({
    name: 'other.tsv',
    mimeType: 'text/tab-separated-values',
    buffer: Buffer.from('track\titem_id\tagreed_rating\nBand 7 test management\tA1\tMeets\n')
  });
  await expect(page.getByText(/That file is for track Band 7 test management/)).toBeVisible();
});

test('Band 3 factor levels are agreed at Gate 0 before they count', async ({ page }) => {
  await page.goto('/en-001/self-assessment/band-3-associate-quality-assurance-test-analyst/');
  await expect(page.locator('select[id$="-expected"]')).toHaveCount(16);
  await page.locator('select[id="A6-agreed"]').selectOption('3');
  await expect(page.getByRole('row', { name: /Agreed/ }).getByRole('cell').first()).toHaveText(/—/);
  await page.locator('select[id="A6-expected"]').selectOption('3');
  await expect(page.getByRole('row', { name: /Agreed/ }).getByRole('cell').first()).toHaveText(/^100%/);
});

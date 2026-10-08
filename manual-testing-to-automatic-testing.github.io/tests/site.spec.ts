import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

// Every page in the sitemap, as a path.
const sitemap = readFileSync('build/sitemap.xml', 'utf8');
const paths = [...sitemap.matchAll(/<loc>https:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => decodeURI(m[1]));

test('the site root redirects to the default locale', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/en-001\/$/);
});

test('the sitemap lists every page', () => {
  expect(paths.length).toBeGreaterThan(90);
  expect(paths).toContain('/en-001/spec/');
  expect(paths).toContain('/en-001/self-assessment/band-5-quality-assurance-test-analyst/');
});

test('every page has one h1, a title, a language, and the picker bar', async ({ page }) => {
  test.setTimeout(120_000);
  for (const path of paths) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    await expect(page.locator('h1'), path).toHaveCount(1);
    expect(await page.title(), path).toMatch(/Manual testing to automatic testing$/);
    await expect(page.locator('html'), path).toHaveAttribute('lang', 'en-001');
    await expect(page.locator('main#main'), path).toBeVisible();
  }
});

test('the home page lists all eight tracks', async ({ page }) => {
  await page.goto('/en-001/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Manual testing to automatic testing');
  const rows = page.getByRole('region', { name: 'Tracks' }).locator('tbody tr');
  await expect(rows).toHaveCount(8);
  for (const track of ['B3', 'B4-QA', 'B4-TE', 'B5-QA', 'B6-QA', 'B6-TE', 'B7-TE', 'B7-TM']) {
    await expect(rows.getByRole('rowheader', { name: track, exact: true })).toBeVisible();
  }
});

test('document links point at site pages, downloads, and headings', async ({ page }) => {
  await page.goto('/en-001/');
  await page.getByRole('link', { name: 'Read the programme' }).click();
  await expect(page).toHaveURL(/\/en-001\/spec\/$/);
  await expect(page.locator('a[href="/en-001/plan/"]').first()).toBeAttached();
  await expect(page.locator('#decisions')).toBeAttached();
  await expect(page.locator('#capability-self-assessment')).toBeAttached();

  await page.goto('/en-001/instruments/');
  const download = page.locator('a[href="/downloads/instruments/band-3-associate-quality-assurance-test-analyst.tsv"]').first();
  await expect(download).toBeAttached();
  const tsv = await page.request.get('/downloads/instruments/band-3-associate-quality-assurance-test-analyst.tsv');
  expect(tsv.ok()).toBe(true);
  expect((await tsv.text()).split('\t')[0]).toBe('track');
});

test('search finds documents', async ({ page }) => {
  await page.goto('/en-001/search/?calibration');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Search');
  await expect(page.getByRole('link', { name: 'Calibration guide' }).first()).toBeVisible();
});

test('pages are a single column, with no sidebars', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto('/en-001/spec/');
  const h1 = await page.locator('article h1').boundingBox();
  const contents = await page.getByRole('navigation', { name: 'Contents' }).boundingBox();
  const firstSection = await page.locator('article h2').nth(1).boundingBox();
  expect(h1 && contents && firstSection).toBeTruthy();
  // The contents list sits under the heading, in the same column, and the
  // document continues under it: nothing sits beside the text.
  expect(contents!.y).toBeGreaterThan(h1!.y + h1!.height - 1);
  expect(Math.abs(contents!.x - h1!.x)).toBeLessThan(2);
  expect(firstSection!.y).toBeGreaterThan(contents!.y + contents!.height - 1);
  expect(Math.abs(firstSection!.x - h1!.x)).toBeLessThan(2);
});

for (const width of [1024, 1280, 1600]) {
  test(`the PickerBar shares the brand's row at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/en-001/materials/tracks/b3/');
    const brand = await page.locator('.site-brand').boundingBox();
    const tools = await page.locator('.site-tools').boundingBox();
    const nav = await page.getByRole('navigation', { name: 'Main' }).boundingBox();
    // Same row as the brand, on the right; the navigation is below both.
    expect(tools!.y).toBeLessThan(brand!.y + brand!.height);
    expect(tools!.x).toBeGreaterThan(brand!.x + brand!.width);
    expect(nav!.y).toBeGreaterThanOrEqual(tools!.y + tools!.height - 1);
    await expect(page.getByRole('button', { name: 'Pages' })).toBeVisible();
  });
}

test('every home page tile area has six tiles, in rows of three on wide screens', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/en-001/');
  const areas = page.locator('section:has(> .card-grid-six)');
  await expect(areas).toHaveCount(4);
  for (let i = 0; i < 4; i++) {
    const tiles = areas.nth(i).locator('.card-grid-six > *');
    await expect(tiles).toHaveCount(6);
    const tops = await tiles.evaluateAll((els) => els.map((el) => Math.round(el.getBoundingClientRect().top)));
    expect(new Set(tops).size, `area ${i + 1} should have two rows`).toBe(2);
  }
});

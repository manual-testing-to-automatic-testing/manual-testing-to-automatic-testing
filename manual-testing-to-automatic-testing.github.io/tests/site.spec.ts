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
  expect(paths).toContain('/en-001/self-assessment/band-5-quality-assurance/');
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
  const download = page.locator('a[href="/downloads/instruments/band-3.tsv"]').first();
  await expect(download).toBeAttached();
  const tsv = await page.request.get('/downloads/instruments/band-3.tsv');
  expect(tsv.ok()).toBe(true);
  expect((await tsv.text()).split('\t')[0]).toBe('track');
});

test('search finds documents', async ({ page }) => {
  await page.goto('/en-001/search/?calibration');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Search');
  await expect(page.getByRole('link', { name: 'Calibration guide' }).first()).toBeVisible();
});

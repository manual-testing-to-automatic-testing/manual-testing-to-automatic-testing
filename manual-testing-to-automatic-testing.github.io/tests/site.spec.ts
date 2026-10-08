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
  expect(paths).toContain('/en-001/track-for-band-5-quality-assurance-test-analyst/');
  expect(paths).toContain('/en-001/calibration-guide/');
  // Flat URLs, except a module's training content under curriculum/.
  expect(
    paths.filter((p) => p.split('/').length > 4 && !p.includes('/curriculum/') && !p.includes('/istqb/certified-tester-advanced-level/'))
  ).toEqual([]);
  expect(paths).toContain('/en-001/curriculum/basics-of-an-ai-assistant/');
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

test('the home page sends people to the tracks page, which lists all eight tracks', async ({ page }) => {
  await page.goto('/en-001/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Manual testing to automatic testing');
  const find = page.getByRole('link', { name: 'Find your track' });
  await expect(find).toHaveAttribute('href', '/en-001/tracks/');
  await find.click();
  const items = page.locator('article h1 + p + ul > li');
  await expect(items).toHaveCount(8);
  for (const band of ['3', '4', '4', '5', '6', '6', '7', '7'].entries()) {
    await expect(items.nth(band[0])).toHaveText(new RegExp(`^Track for Band ${band[1]} `));
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

test('pages are a single column at full width, with no sidebars, breadcrumbs, or contents lists', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto('/en-001/spec/');
  const h1 = await page.locator('article h1').boundingBox();
  const firstSection = await page.locator('article h2').first().boundingBox();
  const paragraph = await page.locator('article > p').first().boundingBox();
  expect(h1 && firstSection && paragraph).toBeTruthy();
  // The document continues under its heading, in the same column.
  expect(firstSection!.y).toBeGreaterThan(h1!.y + h1!.height - 1);
  expect(Math.abs(firstSection!.x - h1!.x)).toBeLessThan(2);
  // Text uses the page's width, less its gutters.
  expect(paragraph!.width).toBeGreaterThan(1400);
  await expect(page.getByRole('navigation', { name: 'Contents' })).toHaveCount(0);
  await expect(page.getByRole('navigation', { name: 'Breadcrumb' })).toHaveCount(0);
});

for (const width of [1024, 1280, 1600]) {
  test(`the PickerBar shares the brand's row at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await page.goto('/en-001/track-for-band-3-associate-quality-assurance-test-analyst/');
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

test('the home page has no tiles', async ({ page }) => {
  await page.goto('/en-001/');
  await expect(page.locator('.card-grid, .doc-card')).toHaveCount(0);
  await expect(page.getByRole('heading', { level: 2 })).toHaveText(['Contents']);
  const contents = page.getByRole('region', { name: 'Contents' }).getByRole('link');
  await expect(contents.first()).toHaveText('Tracks');
  await expect(page.getByRole('region', { name: 'Contents' }).getByRole('link', { name: 'Mentor' })).toHaveAttribute('href', '/en-001/mentor/');
  await expect(page.getByRole('region', { name: 'Contents' }).getByRole('link', { name: 'Line manager' })).toHaveAttribute('href', '/en-001/manager/');
});

test('the tracks page links each track to its page', async ({ page }) => {
  await page.goto('/en-001/tracks/');
  const first = page.getByRole('link', { name: 'Track for Band 3 associate quality assurance test analyst' });
  await expect(first).toHaveAttribute('href', '/en-001/track-for-band-3-associate-quality-assurance-test-analyst/');
  await first.click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Track for Band 3 associate quality assurance test analyst');
});

test('the mentor and line manager pages explain the role and its time', async ({ page }) => {
  await page.goto('/en-001/mentor/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mentor');
  await expect(page.getByText(/About 38\.5 per participant/)).toBeVisible();
  await page.goto('/en-001/manager/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Line manager');
  await expect(page.getByText(/About 33 per person/)).toBeVisible();
});

test('a track page starts with a checklist of real checkboxes that are remembered', async ({ page }) => {
  await page.goto('/en-001/track-for-band-5-quality-assurance-test-analyst/');
  await expect(page.locator('article h2').first()).toHaveText('Checklist');
  await expect(page.getByText('This is the one-page guide')).toHaveCount(0);
  const boxes = page.locator('article input[type="checkbox"][data-check]');
  expect(await boxes.count()).toBeGreaterThan(20);
  await expect(boxes.first()).toBeEnabled();
  // Each item is the box and one span of text, so links and bold text stay in one line of flow.
  const childCounts = await page.locator('article .checklist-item label').evaluateAll((labels) => labels.map((l) => l.children.length));
  expect(childCounts.every((n) => n === 2)).toBe(true);
  const gate0 = page.locator('article .checklist-item label', { hasText: 'Gate 0' });
  const [label, text] = await Promise.all([gate0.boundingBox(), gate0.locator('span').boundingBox()]);
  expect(text!.width).toBeGreaterThan(label!.width * 0.8);
  await boxes.nth(1).check();
  await page.reload();
  await expect(boxes.nth(1)).toBeChecked();
  await expect(boxes.first()).not.toBeChecked();
});

test('module training content lives under curriculum/', async ({ page }) => {
  await page.goto('/en-001/curriculum/basics-of-an-ai-assistant/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Basics of an AI assistant');
  await expect(page.getByRole('heading', { name: 'Lesson 8: From Given-When-Then to Selenium JavaScript, and back' })).toBeVisible();
});

test('the ISTQB module pages have their own addresses', async ({ page }) => {
  await page.goto('/en-001/istqb-certified-tester-foundation-level-4/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Module 4 ISTQB Certified Tester Foundation Level v4.0');
  await expect(page.getByRole('heading', { name: 'Is ISTQB certification still relevant?' })).toBeVisible();
  await page.goto('/en-001/istqb-certified-tester-advanced-level-test-automation-engineer/');
  await expect(page.getByRole('link', { name: /ISTQB_CTAL-TAE_Syllabus_v2\.0\.pdf/ })).toBeVisible();
});

test('the CTAL-TAE syllabus is explained, one page per heading', async ({ page }) => {
  const base = '/en-001/istqb/certified-tester-advanced-level/test-automation-engineering/syllabus/';
  await page.goto(base);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('ISTQB CTAL-TAE syllabus, explained');
  await page.goto(`${base}7-1-3-identify-where-test-automation-produces-unexpected-results/`);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('7.1.3 Identify Where Test Automation Produces Unexpected Results');
  await page.getByRole('link', { name: '7.1.4 Explain How Static Analysis Can Aid Test Automation Code Quality' }).click();
  await expect(page).toHaveURL(new RegExp(`${base}7-1-4-explain-how-static-analysis-can-aid-test-automation-code-quality/$`));
});

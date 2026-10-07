#!/usr/bin/env node
// Automated accessibility scan of every web resource in materials/reading-list.md.
//
// Runs axe-core (WCAG 2.0, 2.1, and 2.2, levels A and AA) on each page in
// Chromium and writes materials/accessibility-scan-results.md.
//
// An automated scan finds only some accessibility problems. It supports
// checks 3 (contrast) and 8 (images) in materials/accessibility-check.md,
// and never replaces the manual checks there.
//
// Usage: npm install && npx playwright install chromium && npm run scan

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const readingList = readFileSync(join(root, 'materials', 'reading-list.md'), 'utf8');
const output = join(root, 'materials', 'accessibility-scan-results.md');

const urls = [...new Set([...readingList.matchAll(/<(https?:\/\/[^>\s]+)>/g)].map((m) => m[1]))].sort();
const tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

const browser = await chromium.launch();
const context = await browser.newContext({ locale: 'en-GB' });
const results = [];

for (const url of urls) {
  const page = await context.newPage();
  try {
    const response = await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    const status = response?.status() ?? 0;
    if (status >= 400) throw new Error(status === 403 || status === 429 ? `HTTP ${status}: the site may block automated browsers; check by hand` : `HTTP ${status}: fix the link in the reading list`);
    // Let client-side frameworks finish hydrating, so the scan sees the settled page.
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(1500);
    const scan = await new AxeBuilder({ page }).withTags(tags).analyze();
    const violations = scan.violations.map((v) => ({
      id: v.id,
      impact: v.impact ?? 'unknown',
      nodes: v.nodes.length,
    }));
    results.push({ url, ok: true, violations });
    console.log(`${violations.length === 0 ? 'pass' : 'issues'}  ${url}  (${violations.length} rules)`);
  } catch (error) {
    results.push({ url, ok: false, error: String(error.message ?? error).split('\n')[0] });
    console.log(`error   ${url}  ${String(error.message ?? error).split('\n')[0]}`);
  } finally {
    await page.close();
  }
}
await browser.close();

const date = new Date().toISOString().slice(0, 10);
const order = { critical: 0, serious: 1, moderate: 2, minor: 3, unknown: 4 };
const lines = [
  '# Accessibility scan results',
  '',
  `Automated axe-core scan of every web resource in the [reading list](reading-list.md), run on ${date} with \`scripts/accessibility-scan/\` (axe-core rules for WCAG 2.0, 2.1, and 2.2, levels A and AA, in Chromium).`,
  '',
  'An automated scan finds only some problems. It supports checks 3 (contrast) and 8 (images and diagrams) in the [accessibility check](accessibility-check.md). Every resource still needs the manual checks there before it is marked **passed**.',
  '',
  'Pages change. Re-run the scan before each cohort.',
  '',
  '| Resource | Result | Rules failed | Details (rule: impact, elements) |',
  '| --- | --- | --- | --- |',
];
for (const r of results) {
  if (!r.ok) {
    lines.push(`| <${r.url}> | Could not scan | — | ${r.error.replaceAll('|', '\\|')} |`);
    continue;
  }
  const details = r.violations
    .sort((a, b) => order[a.impact] - order[b.impact])
    .map((v) => `\`${v.id}\`: ${v.impact}, ${v.nodes}`)
    .join('; ');
  lines.push(
    `| <${r.url}> | ${r.violations.length === 0 ? 'No automated issues' : 'Issues found'} | ${r.violations.length} | ${details || '—'} |`,
  );
}
const scanned = results.filter((r) => r.ok);
lines.push(
  '',
  `Summary: ${urls.length} pages; ${scanned.length} scanned; ${scanned.filter((r) => r.violations.length === 0).length} with no automated issues; ${scanned.filter((r) => r.violations.length > 0).length} with issues; ${urls.length - scanned.length} could not be scanned.`,
  '',
);
writeFileSync(output, lines.join('\n'));
console.log(`Wrote ${output}`);

// The monorepo's Markdown documents, vendored into content/docs/ by bin/sync,
// rendered to HTML at build time. See spec/index.md, "Documents".

import { Marked, type Tokens } from 'marked';
import { posix } from 'node:path';
import { sourceHref } from '#lib/site.js';
import { DEFAULT_LOCALE, localeHref, type Locale } from '#lib/i18n/locales.js';

const RAW = import.meta.glob('/content/docs/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const DOWNLOADS = new Set(
  Object.keys(import.meta.glob('/static/downloads/**/*.tsv', { query: '?raw', import: 'default', eager: true })).map(
    (key) => key.replace('/static/downloads/', '')
  )
);

export type Doc = {
  /** Path in the monorepo, for example spec/index.md. */
  path: string;
  /** URL slug inside a locale, for example spec or materials/gates. */
  slug: string;
  title: string;
  description: string;
  markdown: string;
};

export type Heading = { depth: number; text: string; id: string };

/** Documents whose URL is not their own file or folder name. */
const SLUGS: Record<string, string> = {
  'README.md': 'about',
  'materials/planning/hr-briefing.md': 'human-resources-briefing',
  'materials/modules/module-10-continuous-integration/ci-failure-triage-template.md':
    'continuous-integration-failure-triage-template',
  'practice-repo/README.md': 'practice-repository',
  'practice-repo/CONTRIBUTING.md': 'practice-repository-contributing',
  'practice-repo/spec/index.md': 'practice-repository-suite-spec-template',
  'practice-repo/spec/example/index.md': 'practice-repository-suite-spec-example',
  'practice-repo/fhir-sandbox/README.md': 'fhir-sandbox',
  'practice-repo/tests/flaky/README.md': 'flaky-test-exercise',
  'practice-repo/tests/katas/README.md': 'katas'
};

/**
 * Every document's URL is flat and in full words: its file or folder name,
 * with no parent folders. spec/index.md -> spec; plan.md -> plan;
 * materials/gates/calibration-guide.md -> calibration-guide;
 * materials/modules/module-13-capstone/brief-band-3.md -> capstone-brief-band-3.
 * Track guides are named by their title instead (see DOCS).
 */
export function slugForPath(path: string): string {
  if (SLUGS[path]) return SLUGS[path];
  const name = nestedSlug(path).split('/').pop() ?? '';
  return name.replace(/^brief-/, 'capstone-brief-');
}

/** The URL a document had when URLs followed its folders: materials/gates/calibration-guide. */
function nestedSlug(path: string): string {
  return path.replace(/(^|\/)(index|README)\.md$/, '').replace(/\.md$/, '');
}

/** Old track folder names, before abbreviations were written in full. */
const OLD_FOLDERS: [RegExp, string][] = [
  [/\bmodule-(\d+)-/g, 'm$1-'],
  [/\bband-3\b/g, 'b3'],
  [/\bband-([4-7])-quality-assurance\b/g, 'b$1-qa'],
  [/\bband-([4-7])-test-engineering\b/g, 'b$1-te'],
  [/\bband-7-test-management\b/g, 'b7-tm'],
  [/\brole-foundations\b/g, 'r1-role-foundations'],
  [/\bhealth-care-foundations\b/g, 'r2-health-care-foundations'],
  [/\bcoaching-others-in-automation\b/g, 'l1-coaching'],
  [/\bautomation-strategy-and-metrics\b/g, 'l2-strategy-metrics'],
  [/\bframeworks-and-non-functional-testing\b/g, 'l3-frameworks-nonfunctional'],
  [/\bacceptance-test-automation\b/g, 'l4-acceptance-automation'],
  [/\bleading-automation-adoption\b/g, 'l5-adoption'],
  [/\bindividual-learning-plan-template\b/g, 'ilp-template']
];

/**
 * A module's path before the three basics modules were added at the start,
 * when every later module's number was 3 lower: module-7-browser-automation-
 * fundamentals was module-4-browser-automation-fundamentals.
 */
function beforeBasics(path: string): string | undefined {
  const match = path.match(/\bmodule-(\d+)-/);
  if (!match || Number(match[1]) < 3) return undefined;
  return path.replace(/\bmodule-(\d+)-/, `module-${Number(match[1]) - 3}-`);
}

/** The URLs a document used to have, so old links still arrive. */
function oldSlugs(path: string): string[] {
  const slugs = [nestedSlug(path) || 'about'];
  const before = beforeBasics(path);
  if (before) {
    const nested = nestedSlug(before);
    // Flat, nested by folder, and with abbreviations, as each was published.
    slugs.push(slugForPath(before), nested, OLD_FOLDERS.reduce((slug, [from, to]) => slug.replace(from, to), nested));
  } else {
    slugs.push(OLD_FOLDERS.reduce((slug, [from, to]) => slug.replace(from, to), slugs[0]));
  }
  return [...new Set(slugs)];
}

function titleOf(markdown: string, path: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].replace(/[`*_]/g, '').trim() : path;
}

function descriptionOf(markdown: string): string {
  const body = markdown.replace(/^#\s+.+$/m, '');
  for (const block of body.split(/\n\s*\n/)) {
    const text = block.trim();
    if (!text || /^(#|\||```|-|\*|\d+\.|>|<)/.test(text)) continue;
    const plain = text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`*]/g, '')
      // Underscores only as emphasis markers, not inside words such as file names.
      .replace(/(^|\W)_([^_]+)_(?=\W|$)/g, '$1$2')
      .replace(/\s+/g, ' ');
    return plain.length > 200 ? `${plain.slice(0, 197).trimEnd()}…` : plain;
  }
  return '';
}

/** A track guide, such as materials/tracks/band-3/index.md. */
const TRACK_GUIDE = /^materials\/tracks\/band-[^/]+\/index\.md$/;

const DOCS: Doc[] = Object.entries(RAW)
  .map(([key, markdown]) => {
    const path = key.replace('/content/docs/', '');
    const title = titleOf(markdown, path);
    // Track guides live at the top level, named by their title, for example
    // track-for-band-3-associate-quality-assurance-test-analyst.
    const slug = TRACK_GUIDE.test(path) ? githubSlug(title) : slugForPath(path);
    return { path, slug, title, description: descriptionOf(markdown), markdown };
  })
  // A directory's index.md wins over its README.md.
  .sort((a, b) => a.path.localeCompare(b.path));

const BY_SLUG = new Map<string, Doc>();
for (const doc of DOCS) {
  const existing = BY_SLUG.get(doc.slug);
  if (!existing || doc.path.endsWith('index.md')) BY_SLUG.set(doc.slug, doc);
}
const BY_PATH = new Map(DOCS.map((doc) => [doc.path, doc]));

// Two documents with the same URL would hide one of them.
for (const doc of DOCS) {
  const winner = BY_SLUG.get(doc.slug);
  if (winner && winner !== doc && posix.dirname(winner.path) !== posix.dirname(doc.path)) {
    throw new Error(`Two documents share the URL ${doc.slug}: ${winner.path} and ${doc.path}`);
  }
}

/** Old URL -> current URL, for every document. */
const REDIRECTS = new Map<string, string>();
for (const doc of BY_SLUG.values()) {
  for (const old of oldSlugs(doc.path)) {
    if (old !== doc.slug && !BY_SLUG.has(old)) REDIRECTS.set(old, doc.slug);
  }
}

/** Every old URL and where it now lives. */
export function allRedirects(): [string, string][] {
  return [...REDIRECTS.entries()];
}

export function redirectFor(slug: string): string | undefined {
  return REDIRECTS.get(slug.replace(/^\/+|\/+$/g, ''));
}

export function allDocs(): Doc[] {
  return [...BY_SLUG.values()];
}

/** The document at a monorepo path, such as materials/tracks/band-3/index.md. */
export function docByPath(path: string): Doc | undefined {
  return BY_PATH.get(path);
}

/** A track's guide, by its track id, such as Band 3. */
export function trackGuide(trackId: string): Doc {
  const path = `materials/tracks/${trackId.toLowerCase().replaceAll(' ', '-')}/index.md`;
  const doc = BY_PATH.get(path);
  if (!doc) throw new Error(`No track guide at ${path}`);
  return doc;
}

export function docBySlug(slug: string): Doc | undefined {
  return BY_SLUG.get(slug.replace(/^\/+|\/+$/g, ''));
}

/** GitHub's heading anchor: lower case, punctuation dropped, spaces to hyphens. */
export function githubSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .replace(/\s/g, '-');
}

/** Where a relative link in a document should point on this site. */
export function rewriteHref(href: string, fromPath: string, locale: Locale): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('#') || href.startsWith('//')) return href;
  const [target, hash] = href.split('#', 2);
  const anchor = hash ? `#${hash}` : '';
  const trailing = target.endsWith('/');
  const resolved = posix.normalize(posix.join(posix.dirname(fromPath), target)).replace(/\/$/, '');

  // Outside the monorepo, for example a sibling repository on disk: link to
  // the monorepo itself rather than invent a URL.
  if (resolved.startsWith('..')) return sourceHref('');

  const doc =
    BY_PATH.get(resolved) ?? BY_PATH.get(`${resolved}/index.md`) ?? BY_PATH.get(`${resolved}/README.md`);
  if (doc) return localeHref(locale, BY_SLUG.get(doc.slug) === doc ? doc.slug : (BY_PATH.get(`${posix.dirname(doc.path)}/index.md`)?.slug ?? doc.slug)) + anchor;
  if (resolved === '' || resolved === '.') return localeHref(locale) + anchor;
  if (DOWNLOADS.has(resolved)) return `/downloads/${resolved}`;
  return sourceHref(resolved + (trailing ? '/' : '')) + anchor;
}

export type RenderedDoc = { html: string; headings: Heading[] };

export function renderDoc(doc: Doc, locale: Locale = DEFAULT_LOCALE): RenderedDoc {
  const headings: Heading[] = [];
  const used = new Map<string, number>();
  const marked = new Marked({
    gfm: true,
    walkTokens(token) {
      if (token.type === 'link') {
        const link = token as Tokens.Link;
        link.href = rewriteHref(link.href, doc.path, locale);
      }
    },
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        const base = githubSlug(text);
        const count = used.get(base) ?? 0;
        used.set(base, count + 1);
        const id = count ? `${base}-${count}` : base;
        headings.push({ depth, text: text.replace(/[`*_]/g, ''), id });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      }
    }
  });
  // Wide tables and code blocks scroll inside focusable regions, so keyboard
  // users can reach them (WCAG scrollable-region-focusable).
  let html = marked.parse(doc.markdown, { async: false }) as string;
  let n = 0;
  html = html.replace(/<table>/g, () => `<div class="table-scroll" tabindex="0" role="region" aria-label="Table ${++n}"><table>`);
  html = html.replace(/<\/table>/g, '</table></div>');
  html = html.replace(/<pre>/g, '<pre tabindex="0">');
  return { html, headings };
}


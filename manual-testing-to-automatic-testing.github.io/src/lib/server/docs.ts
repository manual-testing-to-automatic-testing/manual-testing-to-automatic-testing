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

/** spec/index.md -> spec; plan.md -> plan; README.md -> about; x/README.md -> x. */
export function slugForPath(path: string): string {
  if (path === 'README.md') return 'about';
  return path.replace(/(^|\/)(index|README)\.md$/, '').replace(/\.md$/, '');
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
      .replace(/[`*_]/g, '')
      .replace(/\s+/g, ' ');
    return plain.length > 200 ? `${plain.slice(0, 197).trimEnd()}…` : plain;
  }
  return '';
}

const DOCS: Doc[] = Object.entries(RAW)
  .map(([key, markdown]) => {
    const path = key.replace('/content/docs/', '');
    return { path, slug: slugForPath(path), title: titleOf(markdown, path), description: descriptionOf(markdown), markdown };
  })
  // A directory's index.md wins over its README.md.
  .sort((a, b) => a.path.localeCompare(b.path));

const BY_SLUG = new Map<string, Doc>();
for (const doc of DOCS) {
  const existing = BY_SLUG.get(doc.slug);
  if (!existing || doc.path.endsWith('index.md')) BY_SLUG.set(doc.slug, doc);
}
const BY_PATH = new Map(DOCS.map((doc) => [doc.path, doc]));

export function allDocs(): Doc[] {
  return [...BY_SLUG.values()];
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
  if (doc) return localeHref(locale, BY_SLUG.get(doc.slug) === doc ? doc.slug : slugForPath(doc.path)) + anchor;
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

export type Crumb = { href: string; label: string };

/** Breadcrumbs for a slug: each ancestor that is itself a document. */
export function crumbsFor(slug: string, locale: Locale): Crumb[] {
  const parts = slug.split('/');
  const crumbs: Crumb[] = [];
  for (let i = 1; i < parts.length; i++) {
    const ancestor = docBySlug(parts.slice(0, i).join('/'));
    if (ancestor) crumbs.push({ href: localeHref(locale, ancestor.slug), label: ancestor.title });
  }
  return crumbs;
}

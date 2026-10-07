// Every prerendered page, for search engines.
import { allDocs } from '#lib/server/docs.js';
import { allTracks } from '#lib/server/instruments.js';
import { LOCALES, localeHref } from '#lib/i18n/locales.js';
import { ORIGIN } from '#lib/site.js';

export const prerender = true;

export const GET = () => {
  const paths = LOCALES.flatMap((locale) => [
    localeHref(locale),
    localeHref(locale, 'self-assessment'),
    ...allTracks().map((t) => localeHref(locale, `self-assessment/${t.slug}`)),
    ...allDocs().map((doc) => localeHref(locale, doc.slug))
  ]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${ORIGIN}${encodeURI(p)}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

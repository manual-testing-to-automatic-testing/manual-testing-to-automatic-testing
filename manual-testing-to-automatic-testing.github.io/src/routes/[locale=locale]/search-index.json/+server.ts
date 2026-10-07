// The search index for the client-side search page: every document's title,
// URL, description, and plain text.
import { json, error } from '@sveltejs/kit';
import { allDocs } from '#lib/server/docs.js';
import { LOCALES, isLocale, localeHref } from '#lib/i18n/locales.js';

export const prerender = true;
export const entries = () => LOCALES.map((locale) => ({ locale }));

function plain(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`|-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const GET = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  const locale = params.locale;
  return json(
    allDocs().map((doc) => ({
      title: doc.title,
      href: localeHref(locale, doc.slug),
      description: doc.description,
      text: plain(doc.markdown)
    }))
  );
};

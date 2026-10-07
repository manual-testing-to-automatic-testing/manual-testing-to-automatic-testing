import { error } from '@sveltejs/kit';
import { allDocs, crumbsFor, docBySlug, renderDoc } from '#lib/server/docs.js';
import { LOCALES, isLocale, localeHref } from '#lib/i18n/locales.js';
import { pageTitle, sourceHref } from '#lib/site.js';

/** Every document, in every locale. */
export const entries = () =>
  LOCALES.flatMap((locale) => allDocs().map((doc) => ({ locale, slug: doc.slug })));

export const load = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  const doc = docBySlug(params.slug);
  if (!doc) error(404, 'Not found');
  const { html, headings } = renderDoc(doc, params.locale);
  return {
    locale: params.locale,
    html,
    headings: headings.filter((h) => h.depth === 2),
    crumbs: [{ href: localeHref(params.locale), label: 'Home' }, ...crumbsFor(doc.slug, params.locale)],
    path: doc.path,
    source: sourceHref(doc.path),
    title: pageTitle(doc.title),
    heading: doc.title,
    description: doc.description
  };
};

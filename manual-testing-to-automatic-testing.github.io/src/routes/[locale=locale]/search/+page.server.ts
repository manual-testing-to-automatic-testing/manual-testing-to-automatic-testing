import { error } from '@sveltejs/kit';
import { LOCALES, isLocale, localeHref } from '#lib/i18n/locales.js';
import { pageTitle } from '#lib/site.js';

// The search picker reaches this page by navigation, not a link, so the
// prerender crawler never finds it on its own.
export const entries = () => LOCALES.map((locale) => ({ locale }));

export const load = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  return {
    locale: params.locale,
    index: `${localeHref(params.locale)}search-index.json`,
    home: localeHref(params.locale),
    title: pageTitle('Search'),
    description: 'Search every document in the programme.'
  };
};

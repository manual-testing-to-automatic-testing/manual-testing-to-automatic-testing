import { error } from '@sveltejs/kit';
import { docBySlug } from '#lib/server/docs.js';
import { isLocale, localeHref } from '#lib/i18n/locales.js';
import { SITE_NAME } from '#lib/site.js';

/** Documents the home page links to, by slug. Each must exist, or the build fails. */
const LINKED = [
  'tracks', 'curriculum', 'mentor', 'manager', 'spec', 'modules', 'gates', 'calibration-guide',
  'instruments', 'planning', 'reading-list', 'practice-repository', 'plan', 'tasks', 'about'
];

export const load = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  const locale = params.locale;
  const docs = Object.fromEntries(
    LINKED.map((slug) => {
      const doc = docBySlug(slug);
      if (!doc) error(500, `Home page links to a missing document: ${slug}`);
      return [slug, { href: localeHref(locale, slug), title: doc.title, description: doc.description }];
    })
  );
  return {
    locale,
    docs,
    title: SITE_NAME,
    description:
      'A formal training programme that upskills manual testers at Bands 3 to 7 into automatic testers over 320 hours, in the band and UK GDaD PCF role they already have.'
  };
};

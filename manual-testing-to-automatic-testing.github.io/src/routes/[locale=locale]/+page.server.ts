import { error } from '@sveltejs/kit';
import { docBySlug, trackGuide } from '#lib/server/docs.js';
import { allTracks } from '#lib/server/instruments.js';
import { isLocale, localeHref } from '#lib/i18n/locales.js';
import { SITE_NAME } from '#lib/site.js';

/** Documents the home page links to, by slug. Each must exist, or the build fails. */
const LINKED = ['spec'];

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
  const tracks = allTracks().map((t) => ({
    id: t.id,
    band: t.band,
    roleLevel: t.roleLevel,
    title: trackGuide(t.id).title,
    guide: localeHref(locale, trackGuide(t.id).slug)
  }));
  return {
    locale,
    docs,
    tracks,
    title: SITE_NAME,
    description:
      'A formal, gated training programme that upskills manual testers at Bands 3 to 7 into automatic testers over 220 hours, in the band and UK GDaD PCF role they already have.'
  };
};

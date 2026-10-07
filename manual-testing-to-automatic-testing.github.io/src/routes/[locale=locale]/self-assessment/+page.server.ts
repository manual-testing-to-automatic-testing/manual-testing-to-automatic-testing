import { error } from '@sveltejs/kit';
import { allTracks } from '#lib/server/instruments.js';
import { isLocale, localeHref } from '#lib/i18n/locales.js';
import { pageTitle } from '#lib/site.js';

export const load = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  const locale = params.locale;
  return {
    locale,
    tracks: allTracks().map((t) => ({
      id: t.id,
      band: t.band,
      role: t.role,
      roleLevel: t.roleLevel,
      counts: t.counts,
      href: localeHref(locale, `self-assessment/${t.slug}`),
      guide: localeHref(locale, `materials/tracks/${t.id.toLowerCase()}`),
      file: `${t.slug}.tsv`,
      blank: `/downloads/instruments/${t.slug}.tsv`
    })),
    calibration: localeHref(locale, 'materials/gates/calibration-guide'),
    instruments: localeHref(locale, 'instruments'),
    home: localeHref(locale),
    title: pageTitle('Self-assessment'),
    description:
      'The capability self-assessment for each track: the band (21 dimensions), PCF role aspects, and every skill in the role, scored in your browser.'
  };
};

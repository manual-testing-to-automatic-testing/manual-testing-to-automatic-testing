import { error } from '@sveltejs/kit';
import { allTracks, trackBySlug } from '#lib/server/instruments.js';
import { LOCALES, isLocale, localeHref } from '#lib/i18n/locales.js';
import { pageTitle } from '#lib/site.js';

export const entries = () => LOCALES.flatMap((locale) => allTracks().map((t) => ({ locale, track: t.slug })));

export const load = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  const track = trackBySlug(params.track);
  if (!track) error(404, 'Not found');
  const locale = params.locale;
  return {
    locale,
    track: { id: track.id, band: track.band, role: track.role, roleLevel: track.roleLevel, counts: track.counts },
    items: track.items,
    blank: `/downloads/instruments/${track.id}.tsv`,
    guide: localeHref(locale, `materials/tracks/${track.slug}`),
    crumbs: [
      { href: localeHref(locale), label: 'Home' },
      { href: localeHref(locale, 'self-assessment'), label: 'Self-assessment' }
    ],
    title: pageTitle(`${track.id} self-assessment`),
    description: `Capability self-assessment for track ${track.id}: ${track.roleLevel}, Band ${track.band}.`
  };
};

import { error } from '@sveltejs/kit';
import { allDocs, docBySlug, renderDoc, trackGuide } from '#lib/server/docs.js';
import { allTracks } from '#lib/server/instruments.js';
import { LOCALES, isLocale, localeHref } from '#lib/i18n/locales.js';
import { pageTitle, sourceHref } from '#lib/site.js';

/** The track whose guide a document is, if any. */
function trackFor(path: string) {
  return allTracks().find((t) => trackGuide(t.id).path === path);
}

/** Every document, in every locale. */
export const entries = () => LOCALES.flatMap((locale) => allDocs().map((doc) => ({ locale, slug: doc.slug })));

export const load = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  const doc = docBySlug(params.slug);
  if (!doc) error(404, 'Not found');
  const { html } = renderDoc(doc, params.locale);
  const track = trackFor(doc.path);
  const assessment = track && {
    track: { id: track.id, band: track.band, role: track.role, roleLevel: track.roleLevel, counts: track.counts },
    items: track.items,
    file: track.slug,
    blank: `/downloads/instruments/${track.slug}.tsv`,
    calibration: localeHref(params.locale, 'calibration-guide'),
    instruments: localeHref(params.locale, 'instruments')
  };
  return {
    locale: params.locale,
    assessment,
    html,
    path: doc.path,
    source: sourceHref(doc.path),
    title: pageTitle(doc.title),
    heading: doc.title,
    description: doc.description
  };
};

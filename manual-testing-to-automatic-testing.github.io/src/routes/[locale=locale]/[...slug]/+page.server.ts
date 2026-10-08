import { error } from '@sveltejs/kit';
import { allDocs, allRedirects, crumbsFor, docBySlug, redirectFor, renderDoc, trackGuide } from '#lib/server/docs.js';
import { allTracks } from '#lib/server/instruments.js';
import { LOCALES, isLocale, localeHref } from '#lib/i18n/locales.js';
import { pageTitle, sourceHref } from '#lib/site.js';

/**
 * The self-assessment lives on each track's page. Its old URLs redirect
 * there: /self-assessment/ to the tracks, and /self-assessment/<file>/ to
 * that track's self-assessment section.
 */
function selfAssessmentRedirects(): [string, string][] {
  return [
    ['self-assessment', 'tracks'],
    ...allTracks().map((t): [string, string] => [`self-assessment/${t.slug}`, `${trackGuide(t.id).slug}#self-assessment`])
  ];
}

/** The track whose guide a document is, if any. */
function trackFor(path: string) {
  return allTracks().find((t) => trackGuide(t.id).path === path);
}

/** Every document, and every old URL that now redirects, in every locale. */
export const entries = () =>
  LOCALES.flatMap((locale) => [
    ...allDocs().map((doc) => ({ locale, slug: doc.slug })),
    ...[...allRedirects(), ...selfAssessmentRedirects()].map(([old]) => ({ locale, slug: old }))
  ]);

export const load = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  const doc = docBySlug(params.slug);
  if (!doc) {
    const target =
      redirectFor(params.slug) ?? new Map(selfAssessmentRedirects()).get(params.slug.replace(/^\/+|\/+$/g, ''));
    if (!target) error(404, 'Not found');
    // A static page that forwards to the document's current URL.
    const [to, hash] = target.split('#');
    const href = localeHref(params.locale, to) + (hash ? `#${hash}` : '');
    return { locale: params.locale, redirect: href, title: pageTitle('Moved'), heading: 'Moved', description: '' };
  }
  const { html, headings } = renderDoc(doc, params.locale);
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
    redirect: undefined,
    assessment,
    html,
    headings: [
      ...headings.filter((h) => h.depth === 2),
      ...(assessment ? [{ depth: 2, text: 'Self-assessment', id: 'self-assessment' }] : [])
    ],
    crumbs: [{ href: localeHref(params.locale), label: 'Home' }, ...crumbsFor(doc, params.locale)],
    path: doc.path,
    source: sourceHref(doc.path),
    title: pageTitle(doc.title),
    heading: doc.title,
    description: doc.description
  };
};

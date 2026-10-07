import { error } from '@sveltejs/kit';
import { docBySlug } from '#lib/server/docs.js';
import { allTracks } from '#lib/server/instruments.js';
import { isLocale, localeHref } from '#lib/i18n/locales.js';
import { SITE_NAME } from '#lib/site.js';

/** Documents the home page links to, by slug. Each must exist, or the build fails. */
const LINKED = [
  'spec', 'plan', 'tasks', 'about',
  'materials/modules', 'materials/tracks', 'materials/gates', 'materials/planning',
  'materials/gates/calibration-guide', 'materials/gates/part-d-practicals', 'materials/gates/gate-review-form',
  'materials/planning/sponsor-brief', 'materials/planning/hr-briefing', 'materials/planning/decision-log',
  'materials/reading-list', 'materials/modules/m11-lean-six-sigma-green-belt', 'instruments', 'practice-repo', 'practice-repo/fhir-sandbox'
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
  const tracks = allTracks().map((t) => ({
    id: t.id,
    band: t.band,
    roleLevel: t.roleLevel,
    guide: localeHref(locale, `materials/tracks/${t.id.toLowerCase()}`),
    assessment: localeHref(locale, `self-assessment/${t.slug}`)
  }));
  return {
    locale,
    docs,
    tracks,
    title: SITE_NAME,
    description:
      'A formal, gated training programme that upskills manual testers at Bands 3 to 7 into automatic testers over 220 hours, ending with a Lean Six Sigma Green Belt, in the band and role they already hold.'
  };
};

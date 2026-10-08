// The capability self-assessment instruments, vendored into
// content/instruments/ by bin/sync from the monorepo's instruments/, which
// scripts/build_instrument.py generates from the roles-skills reference.

import { parseTsv, type Item } from '#lib/capability.js';

const RAW = import.meta.glob('/content/instruments/*.tsv', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

export type Track = {
  /** The track id, such as Band 5 quality assurance. */
  id: string;
  /** The instrument's file name in words, such as band-5-quality-assurance-test-analyst, also its URL slug. */
  slug: string;
  band: string;
  role: string;
  roleLevel: string;
  counts: { A: number; B: number; C: number; total: number };
  items: (Item & { track: string; band: string; role: string; role_level: string })[];
};

/** Track order, from the programme spec. */
const ORDER = ['Band 3', 'Band 4 quality assurance', 'Band 4 test engineering', 'Band 5 quality assurance', 'Band 6 quality assurance', 'Band 6 test engineering', 'Band 7 test engineering', 'Band 7 test management'];

const TRACKS: Track[] = Object.entries(RAW)
  .filter(([key]) => !key.endsWith('/index.tsv'))
  .map(([key, text]) => {
    const slug = key.replace(/^.*\//, '').replace(/\.tsv$/, '');
    const items = parseTsv(text) as unknown as Track['items'];
    const first = items[0];
    return {
      id: first.track,
      slug,
      band: first.band,
      role: first.role,
      roleLevel: first.role_level,
      counts: {
        A: items.filter((i) => i.part === 'A').length,
        B: items.filter((i) => i.part === 'B').length,
        C: items.filter((i) => i.part === 'C').length,
        total: items.length
      },
      items
    };
  })
  .sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));

export function allTracks(): Track[] {
  return TRACKS;
}

export function trackBySlug(slug: string): Track | undefined {
  return TRACKS.find((track) => track.slug === slug);
}

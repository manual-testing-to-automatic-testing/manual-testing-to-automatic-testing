// Capability self-assessment scoring, used in the browser. These rules mirror
// the monorepo's scripts/capability_index.py and the programme spec, sections
// "Capability index" and "Gate thresholds". Keep the two in step.

export type Part = 'A' | 'B' | 'C';

/** One row of a track's instrument (instruments/<track>.tsv). */
export type Item = {
  part: Part;
  item_id: string;
  dimension: string;
  source: string;
  statement: string;
  expected_level: string;
  expected_level_number: string;
  expected_level_description: string;
  next_level_description: string;
  rating_scale: string;
};

/** How an item is rated. */
export type Kind = 'status' | 'factor' | 'skill';

export const STATUS_OPTIONS = ['Not yet', 'Partly', 'Meets'] as const;
export const SKILL_OPTIONS = [
  { value: '0', label: '0 Not yet' },
  { value: '1', label: '1 Awareness' },
  { value: '2', label: '2 Working' },
  { value: '3', label: '3 Practitioner' },
  { value: '4', label: '4 Expert' }
] as const;

export function kindOf(item: Item): Kind {
  if (item.part === 'C') return 'skill';
  if (item.part === 'A' && !/^A[1-5]$/.test(item.item_id)) return 'factor';
  return 'status';
}

/** The factor level summaries embedded in expected_level_description. */
export function factorLevels(item: Item): { value: string; label: string }[] {
  const levels = item.expected_level_description.split('Levels: ')[1] ?? '';
  return levels
    .split(' | ')
    .map((entry) => entry.match(/^(\d+): (.*)$/))
    .filter((m): m is RegExpMatchArray => m !== null)
    .map((m) => ({ value: m[1], label: `${m[1]}: ${m[2]}` }));
}

export type Status = 'Meets' | 'Partly' | 'Not yet';
export const SCORE: Record<Status, number> = { Meets: 1, Partly: 0.5, 'Not yet': 0 };

/**
 * The status of one rating, or undefined if it cannot be scored (no rating,
 * or no expected level, as for Band 3 factors before Gate 0 agrees them).
 */
export function statusOf(item: Item, rating: string, expectedOverride?: string): Status | undefined {
  if (!rating) return undefined;
  const kind = kindOf(item);
  if (kind === 'status') return (STATUS_OPTIONS as readonly string[]).includes(rating) ? (rating as Status) : undefined;
  const expected = Number(expectedOverride || item.expected_level_number);
  if (!expected) return undefined;
  const gap = expected - Number(rating);
  if (Number.isNaN(gap)) return undefined;
  if (gap <= 0) return 'Meets';
  if (gap === 1) return 'Partly';
  return 'Not yet';
}

export type PartIndex = { percent: number | undefined; rated: number; total: number };
export type CapabilityIndex = Record<Part, PartIndex> & { overall: number | undefined };

export function capabilityIndex(
  items: Item[],
  ratingOf: (item: Item) => string,
  expectedOf: (item: Item) => string | undefined = () => undefined
): CapabilityIndex {
  const parts = {} as Record<Part, PartIndex>;
  for (const part of ['A', 'B', 'C'] as Part[]) {
    const inPart = items.filter((item) => item.part === part);
    const scores = inPart
      .map((item) => statusOf(item, ratingOf(item), expectedOf(item)))
      .filter((s): s is Status => s !== undefined)
      .map((s) => SCORE[s]);
    parts[part] = {
      percent: scores.length ? (100 * scores.reduce((a, b) => a + b, 0)) / scores.length : undefined,
      rated: scores.length,
      total: inPart.length
    };
  }
  const values = (['A', 'B', 'C'] as Part[]).map((p) => parts[p].percent);
  const overall = values.every((v) => v !== undefined) ? (values as number[]).reduce((a, b) => a + b, 0) / 3 : undefined;
  return { ...parts, overall };
}

/** Each gate's threshold for Parts A, B, and C (spec, "Gate thresholds"). */
export const GATE_THRESHOLDS: Record<number, number | undefined> = { 0: undefined, 1: 60, 2: 70, 3: 80, 4: 90, 5: 90 };

export const GATE_CONDITIONS: Record<number, string> = {
  0: 'Baseline, no threshold. The individual learning plan is agreed and signed.',
  1: 'No item lower than at Gate 0 without an agreed reason. Part D: Partly or better.',
  2: 'Clinical risk management and information governance meet expectations. Part D: Partly or better.',
  3: 'Test engineering at the automation target, or one level below it. Part D: Meets.',
  4: 'No skill more than one level below expected; test engineering at the automation target; capstone accepted by the product owner. Part D: Meets.',
  5: 'At least 90%, sustained, and a plan for any remaining gaps. Part D: Meets.'
};

/** Columns of an exported assessment, in the instrument's order. */
export const EXPORT_COLUMNS = [
  'track', 'band', 'role', 'role_level', 'part', 'item_id', 'dimension', 'source', 'statement',
  'expected_level', 'expected_level_number', 'expected_level_description', 'next_level_description',
  'rating_scale', 'self_rating', 'manager_rating', 'agreed_rating', 'status', 'evidence', 'ilp_action'
] as const;

/** Parse a TSV with a header row into records. Tabs and newlines never occur inside fields. */
export function parseTsv(text: string): Record<string, string>[] {
  const lines = text.replace(/\r\n/g, '\n').split('\n').filter((line) => line.length > 0);
  const [header, ...rows] = lines;
  if (!header) return [];
  const names = header.split('\t');
  return rows.map((row) => {
    const cells = row.split('\t');
    return Object.fromEntries(names.map((name, i) => [name, cells[i] ?? '']));
  });
}

/** Make a value safe for one TSV cell. */
export function tsvCell(value: string): string {
  return value.replace(/[\t\r\n]+/g, ' ').trim();
}

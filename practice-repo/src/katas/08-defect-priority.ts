/**
 * Kata 08: work out a defect's priority from its severity and likelihood,
 * using a simple 3 x 3 risk matrix.
 */
export type Level = 'low' | 'medium' | 'high';
export type Priority = 'P1' | 'P2' | 'P3';

const score: Record<Level, number> = { low: 1, medium: 2, high: 3 };

export function defectPriority(
  severity: Level,
  likelihood: Level,
  clinicalSafety = false,
): Priority {
  if (clinicalSafety && severity === 'high') return 'P1';
  const risk = score[severity] * score[likelihood];
  if (risk >= 6) return 'P1';
  if (risk >= 3) return 'P2';
  return 'P3';
}

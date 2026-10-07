/**
 * Kata 06: validate a date of birth written as YYYY-MM-DD.
 *
 * Valid when it is a real calendar date, not in the future, and not more
 * than 130 years before today.
 */
export type DobResult = { valid: true } | { valid: false; reason: string };

export function validateDateOfBirth(input: string, today: Date = new Date()): DobResult {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input);
  if (!match) return { valid: false, reason: 'format' };
  const [y, m, d] = [Number(match[1]), Number(match[2]), Number(match[3])];
  const date = new Date(Date.UTC(y, m - 1, d));
  if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) {
    return { valid: false, reason: 'not a real date' };
  }
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  if (date.getTime() > todayUtc) return { valid: false, reason: 'in the future' };
  const oldest = Date.UTC(today.getUTCFullYear() - 130, today.getUTCMonth(), today.getUTCDate());
  if (date.getTime() < oldest) return { valid: false, reason: 'too old' };
  return { valid: true };
}

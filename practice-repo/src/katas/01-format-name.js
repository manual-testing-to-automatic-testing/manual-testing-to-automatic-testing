/**
 * Kata 01: format a person's name for display as "FAMILY, Given".
 * Trims spaces, keeps apostrophes, hyphens, and diacritics intact.
 */
export function formatName(given, family) {
  const g = given.trim().replace(/\s+/g, ' ');
  const f = family.trim().replace(/\s+/g, ' ').toLocaleUpperCase('en-GB');
  if (f === '') return g;
  if (g === '') return f;
  return `${f}, ${g}`;
}

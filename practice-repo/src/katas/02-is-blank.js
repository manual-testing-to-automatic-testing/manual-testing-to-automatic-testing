/** Kata 02: is a form field value blank (undefined, null, empty, or only whitespace)? */
export function isBlank(value) {
  return value === null || value === undefined || value.trim() === '';
}

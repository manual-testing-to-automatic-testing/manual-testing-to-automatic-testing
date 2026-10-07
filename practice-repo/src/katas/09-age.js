/** Kata 09: a person's age in whole years on a given date. */
export function ageInYears(dateOfBirth, on) {
  const [by, bm, bd] = dateOfBirth.split('-').map(Number);
  const [oy, om, od] = on.split('-').map(Number);
  if ([by, bm, bd, oy, om, od].some(Number.isNaN)) throw new Error('dates must be YYYY-MM-DD');
  let age = oy - by;
  if (om < bm || (om === bm && od < bd)) age -= 1;
  if (age < 0) throw new RangeError('date is before date of birth');
  return age;
}

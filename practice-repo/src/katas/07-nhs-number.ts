/**
 * Kata 07: validate an NHS number with the modulus 11 check digit.
 *
 * 1. Remove spaces. There must be exactly 10 digits.
 * 2. Multiply the first 9 digits by weights 10, 9, ..., 2 and add them up.
 * 3. check = 11 - (sum mod 11). If check is 11, it becomes 0.
 *    If check is 10, the number is invalid.
 * 4. The number is valid when check equals the 10th digit.
 *
 * Test data must only use numbers starting 999, which are reserved for testing.
 */
export function isValidNhsNumber(input: string): boolean {
  const digits = input.replace(/\s+/g, '');
  if (!/^\d{10}$/.test(digits)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += Number(digits[i]) * (10 - i);
  }
  let check = 11 - (sum % 11);
  if (check === 11) check = 0;
  if (check === 10) return false;
  return check === Number(digits[9]);
}

/** Is this NHS number in the 999 range reserved for test data? */
export function isTestRangeNhsNumber(input: string): boolean {
  return isValidNhsNumber(input) && input.replace(/\s+/g, '').startsWith('999');
}

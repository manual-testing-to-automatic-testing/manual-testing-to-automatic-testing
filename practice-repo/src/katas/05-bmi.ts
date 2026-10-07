/**
 * Kata 05: body mass index, rounded to 1 decimal place.
 * Throws for impossible inputs rather than returning a misleading number.
 */
export function bmi(weightKg: number, heightCm: number): number {
  if (!(weightKg > 0) || !(heightCm > 0)) {
    throw new RangeError('weight and height must be positive numbers');
  }
  const heightM = heightCm / 100;
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

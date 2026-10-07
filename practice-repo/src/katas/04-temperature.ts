/** Kata 04: convert body temperatures between Celsius and Fahrenheit, to 1 decimal place. */
export function celsiusToFahrenheit(c: number): number {
  return Math.round(((c * 9) / 5) * 10 + 320) / 10;
}

export function fahrenheitToCelsius(f: number): number {
  return Math.round((((f - 32) * 5) / 9) * 10) / 10;
}

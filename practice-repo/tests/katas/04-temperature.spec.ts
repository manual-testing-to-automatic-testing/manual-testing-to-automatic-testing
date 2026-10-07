import { test, expect } from '@playwright/test';
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../../src/katas/04-temperature';

test('converts Celsius to Fahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(100)).toBe(212);
  expect(celsiusToFahrenheit(37)).toBe(98.6);
});

test('converts Fahrenheit to Celsius', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
  expect(fahrenheitToCelsius(98.6)).toBe(37);
});

test('round trips a normal body temperature', () => {
  expect(fahrenheitToCelsius(celsiusToFahrenheit(36.8))).toBe(36.8);
});

import { strict as assert } from 'node:assert';
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../../src/katas/04-temperature.js';

it('converts Celsius to Fahrenheit', () => {
  assert.equal(celsiusToFahrenheit(0), 32);
  assert.equal(celsiusToFahrenheit(100), 212);
  assert.equal(celsiusToFahrenheit(37), 98.6);
});

it('converts Fahrenheit to Celsius', () => {
  assert.equal(fahrenheitToCelsius(32), 0);
  assert.equal(fahrenheitToCelsius(98.6), 37);
});

it('round trips a normal body temperature', () => {
  assert.equal(fahrenheitToCelsius(celsiusToFahrenheit(36.8)), 36.8);
});

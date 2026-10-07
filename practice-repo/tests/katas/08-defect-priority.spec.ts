import { test, expect } from '@playwright/test';
import { defectPriority } from '../../src/katas/08-defect-priority';

test('high severity and high likelihood is P1', () => {
  expect(defectPriority('high', 'high')).toBe('P1');
});

test('medium severity and medium likelihood is P2', () => {
  expect(defectPriority('medium', 'medium')).toBe('P2');
});

test('low severity and low likelihood is P3', () => {
  expect(defectPriority('low', 'low')).toBe('P3');
});

test('a high-severity clinical safety defect is always P1', () => {
  expect(defectPriority('high', 'low')).toBe('P2');
  expect(defectPriority('high', 'low', true)).toBe('P1');
});

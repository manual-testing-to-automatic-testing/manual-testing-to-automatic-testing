import { strict as assert } from 'node:assert';
import { defectPriority } from '../../src/katas/08-defect-priority.js';

it('high severity and high likelihood is P1', () => {
  assert.equal(defectPriority('high', 'high'), 'P1');
});

it('medium severity and medium likelihood is P2', () => {
  assert.equal(defectPriority('medium', 'medium'), 'P2');
});

it('low severity and low likelihood is P3', () => {
  assert.equal(defectPriority('low', 'low'), 'P3');
});

it('a high-severity clinical safety defect is always P1', () => {
  assert.equal(defectPriority('high', 'low'), 'P2');
  assert.equal(defectPriority('high', 'low', true), 'P1');
});

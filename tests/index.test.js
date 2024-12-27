const { sum, minus } = require('../index.js');

describe('Math functions', () => {
  describe('sum function', () => {
    test('adds two positive numbers correctly', () => {
      expect(sum(2, 3)).toBe(5);
    });

    test('adds a positive and negative number correctly', () => {
      expect(sum(2, -3)).toBe(-1);
    });

    test('adds two negative numbers correctly', () => {
      expect(sum(-2, -3)).toBe(-5);
    });
  });

  describe('minus function', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(minus(5, 3)).toBe(2);
    });

    test('subtracts a negative number correctly', () => {
      expect(minus(5, -3)).toBe(8);
    });

    test('subtracts to get a negative result correctly', () => {
      expect(minus(3, 5)).toBe(-2);
    });
  });
});

import parseFormattedNumber from '..';

test('returns NaN when an passed empty value', () => {
  ['', null, undefined].forEach((value) => {
    expect(parseFormattedNumber(value)).toBeNaN();
  });
});

test('returns a number when passed a number', () => {
  [123, 123.123456789, 0.123, -123, -123.123456789, -0.123, 0].forEach(
    (value) => {
      expect(parseFormattedNumber(value)).toBe(value);
    }
  );
});

test('returns a number when passed a string', () => {
  [
    ['123', 123],
    ['123.45', 123.45],
    ['123.123456789', 123.123456789],
    ['0.123', 0.123],
    ['0', 0],
  ].forEach(([value, expected]) => {
    expect(parseFormattedNumber(value)).toBe(expected);
  });
});

test('returns a number when passed a string with formatting', () => {
  [
    ['NZD $123.00', 123],
    ['12,345,678.90', 12345678.9],
    ['12 345 678.90', 12345678.9],
    ["12'345'678.90", 12345678.9],
    ['42% per annum', 42],
    ['.123', 0.123],
    ['-.456', -0.456],
    ['789.', 789],
  ].forEach(([value, expected]) => {
    expect(parseFormattedNumber(value)).toBe(expected);
  });
});

test('returns a number when passed a string with custom decimal separator', () => {
  [
    ['123,0', ',', 123],
    ['12.345.678,90', ',', 12345678.9],
    ["12.345.678'90", "'", 12345678.9],
    ['0·123', '·', 0.123],
  ].forEach(([value, decimal, expected]) => {
    expect(parseFormattedNumber(value, { decimal })).toBe(expected);
  });
});

test('returns NaN when passed an invalid string', () => {
  ['blah', '3.2.1', '123-456', '-.'].forEach((value) => {
    expect(parseFormattedNumber(value)).toBeNaN();
  });
});

test('throws when options.decimal isn’t a string', () => {
  expect(() => parseFormattedNumber('1', { decimal: 1 })).toThrow(
    'Invariant failed: Expected `options.decimal` to be a string'
  );
});

test('throws when options.decimal doesn’t have length of 1', () => {
  expect(() => parseFormattedNumber('1', { decimal: ':)' })).toThrow(
    'Invariant failed: Expected `options.decimal` to contain only one character'
  );
});

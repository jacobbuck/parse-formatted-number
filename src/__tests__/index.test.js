import parseFormattedNumber from '..';

test('returns NaN when an passed empty value', () => {
  expect(parseFormattedNumber('')).toBe(NaN);
  expect(parseFormattedNumber(null)).toBe(NaN);
  expect(parseFormattedNumber(undefined)).toBe(NaN);
});

test('returns a number when passed a number', () => {
  expect(parseFormattedNumber(123)).toBe(123);
  expect(parseFormattedNumber(123.123456789)).toBe(123.123456789);
  expect(parseFormattedNumber(0.123)).toBe(0.123);
  expect(parseFormattedNumber(-123)).toBe(-123);
  expect(parseFormattedNumber(-123.123456789)).toBe(-123.123456789);
  expect(parseFormattedNumber(-0.123)).toBe(-0.123);
  expect(parseFormattedNumber(0)).toBe(0);
});

test('returns a number when passed a string', () => {
  expect(parseFormattedNumber('123')).toBe(123);
  expect(parseFormattedNumber('123.45')).toBe(123.45);
  expect(parseFormattedNumber('123.123456789')).toBe(123.123456789);
  expect(parseFormattedNumber('0.123')).toBe(0.123);
  expect(parseFormattedNumber('0')).toBe(0);
});

test('returns a number when passed a string with formatting', () => {
  expect(parseFormattedNumber('NZD $123.00')).toBe(123);
  expect(parseFormattedNumber('12,345,678.90')).toBe(12345678.9);
  expect(parseFormattedNumber('12 345 678.90')).toBe(12345678.9);
  expect(parseFormattedNumber("12'345'678.90")).toBe(12345678.9);
  expect(parseFormattedNumber('42% per annum')).toBe(42);
  expect(parseFormattedNumber('.123')).toBe(0.123);
  expect(parseFormattedNumber('-.456')).toBe(-0.456);
  expect(parseFormattedNumber('789.')).toBe(789);
});

test('returns a number when passed a string with custom decimal separator', () => {
  expect(parseFormattedNumber('123,0', { decimal: ',' })).toBe(123);
  expect(parseFormattedNumber('12.345.678,90', { decimal: ',' })).toBe(
    12345678.9
  );
  expect(parseFormattedNumber("12.345.678'90", { decimal: "'" })).toBe(
    12345678.9
  );
  expect(parseFormattedNumber('0·123', { decimal: '·' })).toBe(0.123);
});

test('returns NaN when passed an invalid string value', () => {
  expect(parseFormattedNumber('blah')).toBe(NaN);
  expect(parseFormattedNumber('3.2.1')).toBe(NaN);
  expect(parseFormattedNumber('123-456')).toBe(NaN);
  expect(parseFormattedNumber('-.')).toBe(NaN);
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

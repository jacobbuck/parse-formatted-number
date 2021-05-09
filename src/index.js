import invariant from 'tiny-invariant';

const parseFormattedNumber = (value, { decimal = '.' } = {}) => {
  invariant(
    typeof decimal === 'string',
    'Expected `options.decimal` to be a string'
  );
  invariant(
    decimal.length === 1,
    'Expected `options.decimal` to contain only one character'
  );

  if (Number.isFinite(value)) {
    return value;
  }

  if (typeof value !== 'string') {
    return Number.NaN;
  }

  const unformatted = value
    .replace(new RegExp(`[^\\d\\-\\${decimal}]*`, 'g'), '')
    .replace(decimal, '.');

  if (unformatted === '') {
    return Number.NaN;
  }

  return Number(unformatted);
};

export default parseFormattedNumber;

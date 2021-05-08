import invariant from 'tiny-invariant';

const parseFormattedNumber = (value, options = {}) => {
  invariant(
    typeof options === 'object' && options !== null,
    'Expected `options` to be an object'
  );
  invariant(
    typeof options.decimal === 'string' || options.decimal === undefined,
    'Expected `options.decimal` to be a string'
  );
  invariant(
    typeof options.decimal !== 'string' || options.decimal.length === 1,
    'Expected `options.decimal` to contain only one character'
  );

  if (Number.isFinite(value)) {
    return value;
  }

  if (typeof value !== 'string') {
    return Number.NaN;
  }

  const { decimal = '.' } = options;

  const sanitize = new RegExp(`[^\\d\\-\\${decimal}]*`, 'g');

  const unformatted = value.replace(sanitize, '').replace(decimal, '.');

  return unformatted === '' ? Number.NaN : Number(unformatted);
};

export default parseFormattedNumber;

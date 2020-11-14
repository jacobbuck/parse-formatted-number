const parseFormattedNumber = (value, options = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof options !== 'object') {
      throw new TypeError(
        `Expected \`options\` to be of type \`object\` but received type \`${typeof options}\``
      );
    }
    if (typeof options.decimal !== 'string' && options.decimal !== undefined) {
      throw new TypeError(
        `Expected property \`decimal\` to be of type \`string\` but received type \`${typeof options.decimal}\` in \`options\``
      );
    }
    if (typeof options.decimal === 'string' && options.decimal.length !== 1) {
      throw new TypeError(
        `Expected property \`decimal\` to have length \`1\`, got \`${options.decimal}\` in \`options\``
      );
    }
  }

  const { decimal = '.' } = options;

  if (Number.isFinite(value)) {
    return value;
  }

  if (typeof value !== 'string') {
    return Number.NaN;
  }

  const sanitize = new RegExp(`[^\\d\\-\\${decimal}]*`, 'g');

  const unformatted = value.replace(sanitize, '').replace(decimal, '.');

  return unformatted === '' ? Number.NaN : Number(unformatted);
};

export default parseFormattedNumber;

const parseFormattedNumber = (value, options = {}) => {
  const { decimal = '.' } = options;

  if (typeof value === 'number') {
    return value;
  }

  const sanitize = new RegExp(`[^\\d\\-\\${decimal}]*`, 'g');

  const unformatted = value
    .toString()
    .replace(sanitize, '')
    .replace(decimal, '.');

  if (!unformatted) {
    return Number.NaN;
  }

  return new Number(unformatted).valueOf();
};

export default parseFormattedNumber;

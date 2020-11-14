const parseFormattedNumber = (value, options = {}) => {
  const { decimal = '.' } = options;

  if (Number.isFinite(value)) {
    return value;
  }

  if (typeof value !== 'string' || value === '') {
    return Number.NaN;
  }

  const sanitize = new RegExp(`[^\\d\\-\\${decimal}]*`, 'g');

  const unformatted = value
    .toString()
    .replace(sanitize, '')
    .replace(decimal, '.');

  if (!unformatted) {
    return Number.NaN;
  }

  return Number(unformatted);
};

export default parseFormattedNumber;

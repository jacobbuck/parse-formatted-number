const parseFormattedNumber = (value, options = {}) => {
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

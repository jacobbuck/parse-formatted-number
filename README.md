# parse-formatted-number

Parses a formatted number from a string and returns a number.

## Usage

```js
parseFormattedNumber(value)
parseFormattedNumber(value, options)
```

### Parameters

- `value` The value you want to parse.
- `options.decimal` decimal separator character. defaults to `"."`.

### Return value

`Number` number parsed from the given value. If the value cannot be converted to a number, `NaN` is returned.

## Example

```js
import parseFormattedNumber from 'parse-formatted-number';

parseFormattedNumber('NZD $12,345.60');
// returns 12345.6

parseFormattedNumber('123,45', { decimal: ',' });
// returns 123.45
```
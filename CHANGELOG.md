# Changelog

## 1.1.0 - 2020-11-14

### Added

- Added ES Module build.
- Added source maps to build output.
- Added type-checking of parameters.
- Set `"sideEffects": false` in [package.json](./package.json).

### Changed

- Changed logic to return `NaN` when not passed a number or string to parse.
- Refactored internals to simplify logic and reduce size.
- Updated `options.decimal` to only allow a string with length of 1.
- Updated devDependencies.

### Removed

- Removed [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp) dependency.

## 1.0.4 - 2020-04-27

### Changed

- Updated copyright in [LICENCE](./LICENCE).
- Updated devDependencies.

## 1.0.3 - 2019-06-02

### Changed

- Builds are now done with [Rollup](http://rollupjs.org).

## 1.0.2 - 2018-10-21

### Changed

- Updated devDependencies.

## 1.0.1 - 2018-03-06

### Fixed

- Fixed path of `"main"` in [package.json](./package.json).

## 1.0.0 - 2018-03-06

### Added

Initial public version! :tada:

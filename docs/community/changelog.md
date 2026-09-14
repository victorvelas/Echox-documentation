# Changelog

All notable changes to Echox are documented here, following [Keep a Changelog](https://keepachangelog.com/).

## [v1.0.0] - 2026-09-13

Initial public release of the `velas/echox` Composer package.

### Added

- `Velas\Echox\ActionResult` — abstract base contract shared by all result types (`__toString`, `getBaseHeaders`, `data`).
- `Velas\Echox\Html` — HTML result type:
  - template rendering from the configured views folder (`setFile`),
  - layout inheritance (`extends`, `yield`/`setYield`),
  - sections (`section`, `endSection`, `renderSection`),
  - output escaping helpers (`esc` / `noEsc`),
  - asset cache busting (`getMemoFile`).
- `Velas\Echox\Json` — JSON result type with `get()` accessor.
- `Velas\Echox\Functions\renderHTML()` — one-liner entry point returning an `Html` instance.
- `Velas\Echox\Exceptions\HtmlException` and `Velas\Echox\Exceptions\JsonException`.
- Runnable example scenarios under `test/`: base rendering, escaping data, and extending views.

### Changed

- README polish and usage examples.

## How to add a release

When a new release is tagged, add an entry above using this format:

```md
## [x.y.z] - YYYY-MM-DD

### Added
- ...

### Changed
- ...

### Fixed
- ...
```

Run `git log --oneline` in the source repository to review each commit before summarizing it.
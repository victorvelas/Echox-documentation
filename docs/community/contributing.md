# Contributing

Thank you for considering contributing to Echox. This page explains how to help.

## Development setup

Clone the source repository:

```bash
git clone https://github.com/victorvelas/echox.git
cd echox
composer install
```

The package requires PHP `^8.2`.

## Project layout

```
echox/
├── src/                # library code (Velas\Echox)
│   ├── ActionResult.php
│   ├── Html.php
│   ├── Json.php
│   ├── Exceptions/
│   └── Functions/
├── test/               # runnable examples and scenarios
├── composer.json
└── README.md
```

## Working on the code

- Keep the library **dependency-free** — that is a core promise.
- Preserve backward compatibility when possible; prefer additive changes.
- Keep templates plain PHP; never introduce a custom template syntax.
- Follow the existing style: PHP 8.x, PSR-4 under `Velas\Echox\`, docblocks on public members.

## Testing

There is no dedicated test framework. The `test/` folder holds runnable scenarios:

```bash
php -S localhost:8000 -t test/base-rendering
```

or simply:

```bash
php test/base-rendering/index.php
```

Each scenario ships its own `views/` folder so it runs standalone. Add a new scenario folder for any new behavior you introduce:

```
test/<feature-name>/
├── index.php
└── views/
```

## Reporting issues

Open an issue on GitHub describing:

- the Echox version (or commit) you used,
- PHP version,
- the code that triggers the problem,
- expected vs. actual output.

Please include a minimal reproduction.

## Feature ideas

Documentation notes that the following are partial and could be expanded:

- [Blocks](/fundamentals/blocks) — yield mechanism is thin and overlaps with sections.
- [Includes](/fundamentals/includes) — no first-class include/partial directive.

Keep the [Changelog](/community/changelog) up to date as new releases are tagged (starting from `v1.0.0`). If you pick up one of the ideas above, mention it in the issue/PR.
# Sections

Sections are named blocks of markup that a child view captures and a layout renders. They are the building block of [layouts](/fundamentals/layouts).

## Declaring a section

Capture content between `$this->section('name')` and `$this->endSection()`:

```php
<?php $this->section('content'); ?>
    <div>
        <h1><?= ($this->viewData['wordsToSay'] ?? ''); ?></h1>
    </div>
<?php $this->endSection(); ?>
```

## Rendering a section

The layout renders the captured section wherever it needs it:

```php
<?= $this->renderSection('content'); ?>
```

## A minimal pair

```php
<!-- views/layout.php -->
<html>
<head>
    <title>Echox</title>
</head>
<body>
    <?= $this->renderSection('content'); ?>
</body>
</html>
```

```php
<!-- views/child.php -->
<?php $this->extends('layout'); ?>

<?php $this->section('content'); ?>
    <h1>Hello from the child</h1>
<?php $this->endSection(); ?>
```

## Missing sections

`renderSection()` returns an empty string when a section was never defined, so layouts stay safe even if a child forgets one:

```php
<?= $this->renderSection('optional-extra'); ?>
<!-- renders nothing if 'optional-extra' was not defined -->
```

## Typical section names

- `css` — page-specific styles for the `<head>`
- `content` — the main body content
- `js` — page-specific scripts before `</body>`

## Next steps

- [Blocks](/fundamentals/blocks) — a related, more limited mechanism.
- [Building Reusable Views](/guides/building-reusable-views) — reuse markup across pages.
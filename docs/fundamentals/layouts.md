# Layouts

Layouts let you define a shared page skeleton once and fill it from every child view.

## Extending a layout

A child view calls `$this->extends('layout')` — the name of the parent file without extension:

```php
<?php $this->extends('layout'); ?>
```

When a view extends a parent, Echox renders the **parent** and injects the child content where the parent asks for it.

## The layout file

The layout is a normal template that renders named sections at the desired positions:

```php
<!-- views/layout.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My site</title>
    <link rel="stylesheet" href="/css/app.css">
    <?= $this->renderSection('css'); ?>
</head>
<body>
    <main>
        <?= $this->renderSection('content'); ?>
    </main>
    <?= $this->renderSection('js'); ?>
</body>
</html>
```

## The child file

The child defines the sections that the parent renders:

```php
<?php $this->extends('layout'); ?>

<?php $this->section('css'); ?>
    <style>
        h1 { color: #8341db; }
    </style>
<?php $this->endSection(); ?>

<?php $this->section('content'); ?>
    <div>
        <h1><?= ($this->viewData['wordsToSay'] ?? ''); ?></h1>
    </div>
<?php $this->endSection(); ?>
```

Render the child normally:

```php
echo renderHTML('child', ['wordsToSay' => 'Hello World']);
```

## Key facts

- Only one call to `extends()` per view.
- Section names are arbitrary strings shared between child and parent.
- See [Sections](/fundamentals/sections) for the section mechanics.

## Next steps

- [Sections](/fundamentals/sections) — how sections are captured and rendered.
- [Building a Layout](/guides/building-a-layout) — a full worked example.
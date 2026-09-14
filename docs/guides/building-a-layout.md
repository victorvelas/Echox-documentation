# Building a Layout

A master layout keeps your page skeleton (doctype, head, nav, footer) in one place. This guide walks through one end to end.

## 1. Create the layout

`views/layout.php`:

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My site</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/css/foundation-float.min.css" crossorigin="anonymous">
    <style>
        small { color: gray; }
    </style>
    <?= $this->renderSection('css'); ?>
</head>
<body>
    <div class="container">
        <header class="text-center">
            <h3>😄 My awesome site</h3>
        </header>
        <div>
            <?= $this->renderSection('content'); ?>
        </div>
        <footer class="text-center">
            <small>© Copyright, all rights reserved</small>
        </footer>
    </div>
    <?= $this->renderSection('js'); ?>
</body>
</html>
```

Notice the two hooks: `renderSection('css')` in the head and `renderSection('content')` in the body.

## 2. Create a child view that extends it

`views/child.php`:

```php
<?php $this->extends('layout'); ?>

<?php $this->section('css'); ?>
    <style>
        h1.hello-world { color: #8341db; }
    </style>
<?php $this->endSection(); ?>

<?php $this->section('content'); ?>
    <div>
        <h1 class="hello-world"><?= ($this->viewData['wordsToSay'] ?? ''); ?></h1>
        <button class="submit button">Click to greet</button>
    </div>
<?php $this->endSection(); ?>

<?php $this->section('js'); ?>
    <script>
        const sayHello = function () {
            alert("Echox PHP says: \"Hello World\"");
        };
    </script>
<?php $this->endSection(); ?>
```

## 3. Render it

```php
use Velas\Echox\Html;
use function Velas\Echox\Functions\renderHTML;

Html::$baseFolder = './views/';

echo renderHTML('child', ['wordsToSay' => 'Hello World']);
```

## 4. Result

The layout wraps the child's sections: page-specific styles land in `<head>`, content lands in the body, and scripts land before `</body>` — all inside the shared skeleton.

## Tips

- Keep the number of sections small and consistent (`css`, `content`, `js` is a solid default).
- Make sections optional in the layout; `renderSection()` is safe for missing ones.
- See [Sections](/fundamentals/sections) for section mechanics.
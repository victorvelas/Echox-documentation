# Quick Start

Get a view on the screen in a few lines.

## 1. Create the view folder

Echox reads views from the `views/` folder by default:

```
your-project/
├── views/
│   └── presentation.php
└── index.php
```

## 2. Write a view

Views are plain PHP files. Your data is available through `$this->viewData`.

```php
<!-- views/presentation.php -->
<h1>Hello World, welcome again <?= ($this->viewData['user'] ?? ''); ?></h1>
<hr>
<?php if ($this->viewData['echoxIsCool'] === true) { ?>
    <p>Now you can write php code like a boss</p>
<?php } ?>
```

## 3. Render it

```php
<?php
// index.php
use Velas\Echox\Html;
use function Velas\Echox\Functions\renderHTML;

require './vendor/autoload.php';

Html::$baseFolder = './views/'; // './views/' by default

echo renderHTML('presentation', [
    'user' => 'Velas - dev',
    'echoxIsCool' => true,
]);
```

## Result

```html
<h1>Hello World, welcome again Velas - dev</h1>
<hr>
<p>Now you can write php code like a boss</p>
```

## Next steps

- [Core Concepts](/introduction/core-concepts) — how values flow into your views.
- [Output Escaping](/fundamentals/output-escaping) — the safe way to display user input.
- [Layouts](/fundamentals/layouts) — share the same page structure across views.
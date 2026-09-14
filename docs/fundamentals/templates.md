# Templates

Echox templates are **plain PHP files** with a `.php` extension. There is no template DSL, no compiler, and no cache to warm.

## View folder

All templates must live inside the shared views folder (default `views/`):

```
views/
├── presentation.php
├── child.php
└── layout.php
```

## Anatomy of a template

A template mixes markup and PHP freely:

```php
<!-- views/presentation.php -->
<h1>Hello World, welcome again <?= ($this->viewData['user'] ?? ''); ?></h1>
<hr>
<?php if ($this->viewData['echoxIsCool'] === true) { ?>
    <p>Now you can write php code like a boss</p>
<?php } ?>
```

## The echo shorthand

Use `<?= ... ?>` to print values, and `<?php ... ?>` for statements:

```php
<p><?= $this->viewData['user'] ?></p>
<?php foreach ($this->viewData['list'] as $item) { ?>
    <p><?= $item->name ?></p>
<?php } ?>
```

## File naming

The filename without extension is the key you pass to `renderHTML()`:

```php
// views/base-list.php  →  renderHTML('base-list')
renderHTML('base-list', $data);
```

## Next steps

- [Variables](/fundamentals/variables) — passing data to your templates.
- [Code Blocks](/fundamentals/code-blocks) — loops and conditions inside a template.
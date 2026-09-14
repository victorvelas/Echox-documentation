# Includes

> [!WARNING] Partial documentation
> This page covers a feature that is currently **partial** in Echox. There is no first-class "include" directive yet. The recommended way to reuse markup today is through [layout inheritance](/fundamentals/layouts) and [sections](/fundamentals/sections). First-class partial includes are a candidate for a future release.

## The gap

Many template engines let you inline one template inside another with an `include`. Echox does **not** ship a dedicated `include()` helper. If you try to call a view file from inside another, remember that included files won't automatically receive `$this->viewData` or share the rendering flow.

## What to use instead

### 1. Layouts + sections

Share page structure across views:

```php
<?php $this->extends('layout'); ?>
<?php $this->section('content'); ?>
    ...page-specific markup...
<?php $this->endSection(); ?>
```

### 2. Reusable components through sections

Repeated widgets (headers, cards, pagination) can be captured once and rendered in several places:

```php
<?php $this->section('header-area'); ?>
    <!-- the same header markup -->
<?php $this->endSection(); ?>
```

### 3. Plain PHP

Because views are ordinary PHP files, you can always build a small helper that `require`s a snippet. This stays outside Echox and is up to you.

## Trade-offs of the current approach

- Reuse is **structural** (via layouts) rather than inline.
- Sharing a tiny partial across unrelated pages requires a plain-PHP helper.
- A dedicated include/partial mechanism would reduce duplication in those cases.

## See also

- [Sections](/fundamentals/sections)
- [Building Reusable Views](/guides/building-reusable-views)
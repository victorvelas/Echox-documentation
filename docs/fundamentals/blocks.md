# Blocks

> [!WARNING] Partial documentation
> This page covers a feature that is currently **partial** in Echox. The block mechanism already exists but is thin and largely overlaps with [Sections](/fundamentals/sections). It is marked for review in a future release.

Blocks are a small, additional mechanism for passing values from a **child** view to its **parent** layout, on top of sections.

## Setting a yield

A child view pushes a value to the parent's yields:

```php
<?php $this->setYield('pageTitle', 'Welcome home'); ?>
```

## Reading a yield

The layout reads it back with `$this->yield('pageTitle')`:

```php
<title><?= $this->yield('pageTitle'); ?></title>
```

A missing key returns `null`, so combine it with a fallback:

```php
<title><?= $this->yield('pageTitle') ?? 'Untitled'; ?></title>
```

## Current limitations

- `setYield()` only accepts `int | float | string` values — you cannot pass arrays or objects.
- Yields are read back with `yield()`, which returns `null` if the key was never set.
- The feature does not yet compose with nested layouts, and its test coverage is minimal.

## See also

- [Sections](/fundamentals/sections) — the primary, richer mechanism for injecting markup.
- [Layouts](/fundamentals/layouts) — how child and parent views work together.
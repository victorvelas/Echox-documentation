# Project Structure

Echox is folder-driven: everything it renders lives in one views folder, and your business logic stays out of it.

## Recommended layout

```
your-project/
├── views/                 # all echox templates live here
│   ├── presentation.php
│   ├── child.php
│   └── layout.php
├── src/                   # your PHP business logic
├── public/                # web root (index.php, assets)
└── vendor/                # composer dependencies
```

## The views folder

- **One folder for the whole view layer.** The default is `views/`. Change it once, up front:

```php
use Velas\Echox\Html;
Html::$baseFolder = './resources/views/';
```

- Views are referenced **by filename without the `.php` extension**: `renderHTML('child')` resolves to `views/child.php`.

## Naming conventions

- `layout.php` — the master skeleton used across pages.
- Descriptive names for the rest: `user-card.php`, `product-list.php`, `checkout-summary.php`.
- Prefer lowercase, hyphen-separated names (`base-list`, `checkout-summary`) for consistency.

## What belongs where

| Component         | Location        |
| ----------------- | --------------- |
| Templating, markup | `views/`       |
| Business logic     | `src/` or `app/` |
| Entry point        | `public/index.php` |
| Static assets      | `public/assets/` |

## Rendering from your entry point

```php
<?php
// public/index.php
use Velas\Echox\Html;
use function Velas\Echox\Functions\renderHTML;

require '../vendor/autoload.php';
Html::$baseFolder = '../views/';

echo renderHTML('presentation', ['user' => 'Velas - dev']);
```

## See also

- [Best Practices](/guides/best-practices)
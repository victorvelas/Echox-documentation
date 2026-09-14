# Installation

Echox is distributed through [Composer](https://getcomposer.org).

## Requirements

- PHP `^8.2`
- Composer

## Install

Run the following command inside your project directory:

```bash
composer require velas/echox
```

## Verify

After installation, make sure the Composer autoloader is included in your entry point and the package is available:

```php
require './vendor/autoload.php';

use function Velas\Echox\Functions\renderHTML;

$view = renderHTML('presentation');

echo ((string) $view);
```

## Folder layout

Echox expects all views to live inside a single shared folder. By default that folder is `views/` inside your project root. See [Core Concepts](/introduction/core-concepts) and [Configuration](/reference/configuration) to learn how to change it.
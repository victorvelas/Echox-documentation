# Configuration

Echox is configured with two static properties on `Velas\Echox\Html`. Set them once, early in your bootstrap.

## `Html::$baseFolder`

The directory Echox reads view files from. Defaults to `./views/`.

```php
use Velas\Echox\Html;

Html::$baseFolder = './views/';                        // default
Html::$baseFolder = './resources/views/';
Html::$baseFolder = '../app/views/';
```

- Views are referenced by filename **without** the `.php` extension.
- A trailing slash is expected: `renderHTML('child')` resolves to `$baseFolder . 'child.php'`.
- Pointing it at a missing folder means every render throws a `HtmlException`.

## `Html::$baseAssetsFolder`

The directory used by `getMemoFile()` for asset cache busting. Defaults to `null`.

```php
Html::$baseAssetsFolder = './public/assets/';
```

Then in a layout:

```php
<link rel="stylesheet" href="<?= Html::getMemoFile('css/app.css'); ?>">
```

The emitted value is the file path plus its modification time as a query string, e.g. `css/app.css?1712345678`. If the filename contains `?`, a `HtmlException` is thrown.

## Setup order matters

Set both properties **before** calling any render:

```php
require './vendor/autoload.php';

use Velas\Echox\Html;

Html::$baseFolder = './views/';
Html::$baseAssetsFolder = './public/assets/';

echo renderHTML('presentation', ['user' => 'Velas - dev']);
```

## See also

- [Engine](/reference/engine)
- [Exceptions](/reference/exceptions)
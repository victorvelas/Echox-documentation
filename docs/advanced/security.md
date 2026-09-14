# Security

Echox is small, which keeps its security surface small — but because templates are plain PHP, the duty of safe output is yours.

## Escape untrusted data

User input should never be echoed raw into HTML. `Html::esc()` encodes it with `ENT_QUOTES`:

```php
<input value="<?= self::esc($_GET['q'] ?? '') ?>" />
```

`noEsc()` is the inverse and provides **no protection** — use only for trusted, previously-encoded content:

```php
<?= self::noEsc($trusted) ?>
```

## Don't trust `viewData`

Anything that arrives in `$this->viewData` from the request or a database is suspect until escaped. When iterating collections, escape member fields too:

```php
<?= ($item->favoriteFood ?? '') ?>            <!-- raw, fine only if trusted -->
<?= self::esc($item->favoriteFood ?? '') ?>   <!-- safe for user content -->
```

## Templates run with full PHP privileges

A view is a PHP script included in your process. That means:

- a compromised template can run arbitrary code,
- keep templates **author-reviewable** — never let end users edit view files,
- treat the `views/` folder as trusted application code, not as user-controlled uploads.

## Asset cache busting

`Html::getMemoFile()` returns an asset URL suffixed with its file modification time, so browsers never cache stale assets:

```php
<link rel="stylesheet" href="<?= Html::getMemoFile('css/app.css'); ?>">
```

The result looks like `css/app.css?1710000000`. A filename containing `?` is rejected with an `HtmlException` — a guard against injection-style names.

```php
Html::$baseAssetsFolder = './public/assets/';
```

## Rules of thumb

1. Escape everything that isn't authored by you.
2. Never mix raw user input into a template without `esc()`.
3. Never let untrusted users create or edit template files.
4. Keep an eye on the [Changelog](/community/changelog) for security fixes.

## See also

- [Output Escaping](/fundamentals/output-escaping)
- [Exceptions](/reference/exceptions)
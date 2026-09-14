# Best Practices

Hard-won rules for building maintainable apps with Echox.

## 1. One views folder

Keep every template in the same directory and set `Html::$baseFolder` once at bootstrap, before any rendering:

```php
use Velas\Echox\Html;
Html::$baseFolder = './views/';
```

Consistency makes it obvious where markup lives and how Echox resolves files.

## 2. Keep logic out of views

Views should render data, not compute it. Do the work in your controller or service layer, then pass simple values:

```php
// controller
$view = renderHTML('user-card', [
    'name'    => $user->name,
    'isAdmin' => $user->isAdmin(),
]);
```

```php
// view
<?php if ($this->viewData['isAdmin'] === true) { ?>
    <a href="/admin">Admin panel</a>
<?php } ?>
```

## 3. Escape by default

Treat every piece of data as untrusted until proven otherwise. Use `self::esc()` for anything from the request, never `noEsc()` unless you know exactly what you're printing:

```php
<input value="<?= self::esc($_GET['q'] ?? '') ?>" />
```

See [Output Escaping](/fundamentals/output-escaping).

## 4. Always provide fallbacks

A missing key should never crash a page. Use `??`:

```php
<?= ($this->viewData['user'] ?? 'Guest'); ?>
```

## 5. Prefer layouts over duplication

Repeated structure → a layout. Repeated markup → a section. Reuse data-driven templates instead of copy-pasting PHP/HTML. See [Building Reusable Views](/guides/building-reusable-views).

## 6. Name files clearly

Match the view name to the filename (`renderHTML('checkout-summary')` → `views/checkout-summary.php`). Lowercase, hyphen-separated names keep it predictable.

## 7. Know when not to use Echox

For heavy template logic, sandboxed templates, or a rich plugin ecosystem like a PHP framework, consider a different engine. Echox shines when you want plain, dependency-free PHP views.
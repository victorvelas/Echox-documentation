# Context

Everything a template can touch during execution is exposed through `$this` — the [`Html`](/reference/engine) instance doing the rendering.

## `$this->viewData`

The data array passed to `renderHTML()`:

```php
echo renderHTML('child', ['wordsToSay' => 'Hello World']);
```

```php
<!-- inside the view -->
<h1><?= $this->viewData['wordsToSay']; ?></h1>
```

## `$this->data()`

The same array through the `ActionResult` contract — useful when you pass the instance around:

```php
$view->data();
// ['wordsToSay' => 'Hello World']
```

## Escaping helpers

Available statically and equally reachable from a template:

```php
<?= $this::esc($_GET['q'] ?? '') ?>     <!-- HTML-encoded -->
<?= $this::noEsc($_GET['q'] ?? '') ?>   <!-- raw -->
```

## Layout and section state

While a template executes you can call:

| Member            | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `$this->extends()` | mark a view as a child of a layout            |
| `$this->section()` / `endSection()` | capture a named block |
| `$this->renderSection()` | output a captured section            |
| `$this->yield()` / `setYield()` | read / write a block value     |
| `$this->parent`   | the parent `Html` when a layout is in play    |

## Beyond the instance

Nothing else is injected. Global PHP state (functions, classes, `$_GET`, etc.) behaves exactly as it would in any PHP script — which is both the power and the responsibility of plain-PHP templates (see [Security](/advanced/security)).

## See also

- [Rendering](/advanced/rendering)
- [Reference API](/reference/api)
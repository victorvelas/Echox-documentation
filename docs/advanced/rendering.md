# Rendering

Under the hood, rendering is a straightforward read of a PHP file into an internal buffer.

## The entry point

```php
use function Velas\Echox\Functions\renderHTML;

$view = renderHTML('base-list', $data);
```

`renderHTML()` creates an [`Html`](/reference/engine) instance with your data and asks it to render a file:

```php
$html = new Html($data);
$html->setFile($file);
```

## How `setFile()` works

```php
public function setFile(string $file) : string {
    if (!is_file(Html::$baseFolder . $file . '.php')) {
        throw new HtmlException('The view file "' . Html::$baseFolder . $file . '.php" does\'nt exists');
    }
    ob_start();
    include Html::$baseFolder . $file . '.php';
    $content = ob_get_contents();
    ob_end_clean();
    if ($this->parent instanceof Html) {
        $content = $this->parent->setFile($this->parentFile);
    }
    $this->content = $content;
    return $this->content;
}
```

1. **Resolve** — the file must exist at `$baseFolder` + name + `.php`, otherwise an [`HtmlException`](/reference/exceptions) is thrown.
2. **Capture** — the view executes inside an output buffer (`ob_start`), so `<?= ... ?>` and stray output are collected rather than printed immediately.
3. **Clean up** — the buffer is stored as `content`.
4. **Layout chain** — if the view [extends a layout](/fundamentals/layouts), the parent file is rendered instead, using the sections captured by the child.

## Producing output

Casting to string returns the captured content:

```php
echo ((string) $view); // string is "the content"
```

`__toString()` returns `$this->content ?? ''`, so an unrendered instance is an empty string.

## Headers

Every result carries default response headers via `getBaseHeaders()`:

- `Html` → `['text/html; charset=utf-8']`
- `Json` → `['Content-Type: application/json; charset=utf-8']`

## Next steps

- [Context](/advanced/context) — what is available while a template executes.
- [Extending Echox](/advanced/extending-echox) — build your own result types.
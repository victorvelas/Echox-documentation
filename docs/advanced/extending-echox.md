# Extending Echox

Echox is built around a tiny abstract contract, which makes it easy to add your own result types.

## The `ActionResult` contract

```php
abstract class ActionResult
{
    protected string $content;
    protected array $viewData = [];

    abstract public function __toString() : string;
    abstract public function getBaseHeaders() : array;

    public function data() : array
    {
        return $this->viewData;
    }
}
```

Every result must:

- define what it **outputs** (`__toString()`), and
- define the **response headers** it wants (`getBaseHeaders()`).

## How `Json` extends it

The built-in JSON result shows how small new types can be:

```php
class Json extends ActionResult
{
    public function __construct(array $data)
    {
        $this->viewData = $data;
    }

    public function __toString() : string
    {
        return json_encode($this->viewData);
    }

    public function getBaseHeaders() : array
    {
        return ['Content-Type: application/json; charset=utf-8'];
    }

    public function get(string $key) : mixed
    {
        return $this->viewData[$key] ?? null;
    }
}
```

```php
$json = new Json(['ok' => true, 'user' => 'Velas']);
echo ((string) $json); // {"ok":true,"user":"Velas"}
```

## Write a custom result

Subclass `ActionResult`, implement the two abstract methods, and add any helpers your type needs:

```php
use Velas\Echox\ActionResult;

class CsvResult extends ActionResult
{
    public function __construct(array $rows)
    {
        $this->viewData = ['rows' => $rows];
    }

    public function __toString(): string
    {
        $out = '';
        foreach ($this->viewData['rows'] as $row) {
            $out .= implode(',', $row) . PHP_EOL;
        }
        return $out;
    }

    public function getBaseHeaders(): array
    {
        return ['Content-Type: text/csv; charset=utf-8'];
    }
}
```

## Considerations

- Keep `__toString()` side-effect free — it may be called multiple times.
- Return correct headers from `getBaseHeaders()` so your response is served properly.
- Reuse `Html` for anything markup-heavy; reach for a custom type only when the output contract differs (JSON, CSV, plain text…).
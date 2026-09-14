# Engine

The engine is made of four small pieces: two result classes, one abstract base class, and one helper function.

## `renderHTML(string $file, array $data = []) : Html`

The global entry point defined in `Velas\Echox\Functions`:

```php
use function Velas\Echox\Functions\renderHTML;

$view = renderHTML('base-list', ['list' => $rows]);
echo ((string) $view);
```

It creates an `Html` instance, calls `setFile($file)`, and returns it.

## `Velas\Echox\Html`

The HTML renderer. Holds template data, executes `.php` views, and supports layout inheritance. Full method reference in [API](/reference/api).

```php
use Velas\Echox\Html;

Html::$baseFolder = './views/';
$view = new Html(['user' => 'Velas']);

$view->setFile('presentation');
echo ((string) $view);
```

## `Velas\Echox\Json`

A JSON result backed by the same `ActionResult` contract:

```php
use Velas\Echox\Json;

$json = new Json(['ok' => true, 'user' => 'Velas']);
echo ((string) $json);               // {"ok":true,"user":"Velas"}
$json->get('user');                  // 'Velas'
$json->getBaseHeaders();             // ['Content-Type: application/json; charset=utf-8']
```

See [Extending Echox](/advanced/extending-echox) to write your own result types.

## `Velas\Echox\ActionResult`

The abstract base contract every result implements:

- `__toString() : string`
- `getBaseHeaders() : array`
- `data() : array`

## Lifecycle overview

```
renderHTML($file, $data)
   └─ new Html($data)
       └─ setFile($file)
           ├─ include views/<file>.php (buffered)
           ├─ if a layout is extended → render the parent instead
           └─ stored as content
echo (string) $view
```

## See also

- [Rendering](/advanced/rendering)
- [Configuration](/reference/configuration)
- [API](/reference/api)
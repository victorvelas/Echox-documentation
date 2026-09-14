# API

Complete reference for the public surface of Echox. Namespace root: `Velas\Echox`.

## Function

### `Velas\Echox\Functions\renderHTML`

```php
renderHTML(string $file, array $data = []) : Html
```

Creates an `Html` instance with `$data`, renders `$file`, and returns it. Equivalent to:

```php
$html = new Html($data);
$html->setFile($file);
return $html;
```

---

## Abstract class `ActionResult`

### `data() : array`

Returns the `viewData` array passed at construction.

### `abstract __toString() : string`

Every result must define how it converts to a string.

### `abstract getBaseHeaders() : array`

Every result must announce the header lines for the response.

---

## Class `Html extends ActionResult`

### Static properties

| Property                    | Type             | Default        |
| --------------------------- | ---------------- | -------------- |
| `$baseFolder`               | `?string`        | `./views/`     |
| `$baseAssetsFolder`         | `?string`        | `null`         |

### Instance properties

| Property         | Type       | Purpose                                   |
| ---------------- | ---------- | ----------------------------------------- |
| `$currentSection`| `?string`  | Section currently being captured          |
| `$sections`      | `array`    | Captured sections by name                 |
| `$parent`        | `?Html`    | The layout instance when one is set       |
| `$hasParent`     | `bool`     | Whether a layout is extended              |
| `$parentFile`    | `string`   | File name of the extended layout          |
| `$yields`        | `array`    | Values pushed from child to parent        |

### Methods

#### `__construct(array $data)`

Initializes the instance, defaults `$baseFolder` to `./views/` if unset, and stores `$data` as `viewData`.

#### `__toString() : string`

Returns `$this->content ?? ''`.

#### `getBaseHeaders() : array`

Returns `['text/html; charset=utf-8']`.

#### `static esc(string $text) : string`

HTML-escapes `$text` with `htmlspecialchars($text, ENT_QUOTES, 'utf-8')`.

#### `static noEsc(string $text) : string`

Decodes entities with `html_entity_decode($text, ENT_QUOTES, 'UTF-8')`. No protection — trusted data only.

#### `extends(string $parentFile) : void`

Marks the view as a child of a layout. Creates the parent `Html` and resets its yields.

#### `yield(string $key) : int|float|string|null`

Reads a yield value, or `null` if not set.

#### `setYield(string $yield, int|float|string $content)`

Pushes a value to the parent's yields.

#### `renderSection(string $sectionKey) : string`

Returns a captured section, or `''` if missing.

#### `section(string $sectionKey)`

Starts capturing a section; subsequent output is buffered into it.

#### `endSection()`

Stops capturing and stores the buffered content under the current section.

#### `setFile(string $file) : string`

Renders `$baseFolder . $file . '.php'` into an output buffer. Throws `HtmlException` if the file is missing. Deferring to the parent when a layout is extended. Stores and returns the result as `content`.

#### `static getMemoFile(string $fileName) : string`

Builds `$baseAssetsFolder . '/' . $fileName . '?' . filemtime(...)` for cache busting. Throws `HtmlException` (code `1`) if the name contains `?`.

---

## Class `Json extends ActionResult`

### Methods

#### `__toString() : string`

Returns `json_encode($this->viewData)`.

#### `getBaseHeaders() : array`

Returns `['Content-Type: application/json; charset=utf-8']`.

#### `get(string $key) : mixed`

Returns the value at `$key`, or `null` if missing.

---

## Exceptions

- `Velas\Echox\Exceptions\HtmlException extends \Exception`
- `Velas\Echox\Exceptions\JsonException extends \Exception`

Both accept `(string $message = '', int $code = 0, ?Throwable $previous = null)`.
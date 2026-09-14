# Exceptions

Echox throws two exception types, both under `Velas\Echox\Exceptions`.

## `HtmlException`

Thrown when rendering fails.

```php
use Velas\Echox\Exceptions\HtmlException;
```

The cases that trigger it:

| Trigger                                       | Message                                        |
| --------------------------------------------- | ---------------------------------------------- |
| View file does not exist                      | `The view file "<path>.php" does'nt exists`    |
| `getMemoFile()` receives a filename with `?` | `Bad file name setled` (code `1`)              |

Both derive from PHP's `\Exception`, so usual `try/catch` and logging work:

```php
try {
    echo renderHTML('missing-view');
} catch (HtmlException $e) {
    error_log($e->getMessage());
    echo 'View not found';
}
```

## `JsonException`

A sibling of `HtmlException` reserved for JSON-related rendering failures. It has no specific triggers in the current code base, but is thrown/handled like any `\Exception` subclass:

```php
use Velas\Echox\Exceptions\JsonException;

try {
    // json result work
} catch (JsonException $e) {
    // handle
}
```

## Catching both

Because they share `\Exception`, you can catch both with a single handler:

```php
use Exception;

try {
    // render html or json
} catch (Exception $e) {
    log_error($e);
}
```

## Constructor signatures

Both exceptions match PHP's standard signature:

```php
__construct(string $message = '', int $code = 0, ?Throwable $previous = null)
```

## See also

- [API](/reference/api)
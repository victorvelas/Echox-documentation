# Core Concepts

Echox is small on purpose. Understanding these five ideas covers the whole library.

## 1. Views are plain PHP files

Every view is a regular `.php` file stored inside a single shared folder. There is no custom template syntax, so everything you already know about PHP works inside a view: loops, conditionals, functions, and even `foreach` over collections.

## 2. The views folder

All views must live in the same directory. The default is `views/` in your project root, and it can be changed at runtime:

```php
use Velas\Echox\Html;

Html::$baseFolder = './your-custom-view-directory/';
```

Keeping a single folder for the view layer keeps the project organized and makes it obvious where rendering happens.

## 3. Data flows through `viewData`

When you render a view you pass an associative array of data. Inside the view that array is available as `$this->viewData`:

```php
renderHTML('presentation', [
    'user' => 'Velas - dev',
    'echoxIsCool' => true,
]);
```

```php
// views/presentation.php
<h1>Hello <?= $this->viewData['user']; ?></h1>
```

## 4. `$this` is the renderer

Because views are included inside an [`Html`](/reference/engine) instance, `$this` inside the view is that instance. That's how you access data, escape output, and hook into layouts and sections.

## 5. Rendering returns a result

The entry point `renderHTML()` returns an `Html` instance that **you** decide how to output — usually by casting it to string:

```php
echo renderHTML('presentation', $data);
// equivalent to
$view = renderHTML('presentation', $data);
echo ((string) $view);
```

The same contract is shared by other result types. See [Extending Echox](/advanced/extending-echox) for building your own.
# Variables

Data is passed to a view as an associative array and read from `$this->viewData`.

## Passing data

```php
renderHTML('user-card', [
    'name'    => 'Tayler Edison',
    'country' => 'France',
    'age'     => 22,
]);
```

## Reading data in the view

Inside the template, access values with `$this->viewData['key']`:

```php
<h1><?= $this->viewData['name']; ?></h1>
<p><?= $this->viewData['country']; ?></p>
```

## Defensive access

Keys that may not exist are usually read with a fallback. Prefer the null coalescing operator `??`:

```php
<h1><?= ($this->viewData['name'] ?? ''); ?></h1>
<p><?= ($this->viewData['country'] ?? 'Unknown'); ?></p>
```

## Complex values

You can pass and iterate any value that plain PHP supports — arrays and objects included:

```php
renderHTML('base-list', [
    'list' => [
        (object) ['name' => 'Tayler Edison', 'favoriteFood' => 'Pineapple - Pizza'],
        (object) ['name' => 'Loona Del Principe', 'favoriteFood' => 'Sushi'],
    ],
]);
```

```php
<?php foreach ($this->viewData['list'] as $key => $item) { ?>
    <tr>
        <td><?= ($key + 1); ?></td>
        <td><?= ($item->name ?? ''); ?></td>
        <td><?= ($item->favoriteFood ?? ''); ?></td>
    </tr>
<?php } ?>
```

## Next steps

- [Output Escaping](/fundamentals/output-escaping) — print user input safely.
- [Context](/advanced/context) — everything available inside a view.
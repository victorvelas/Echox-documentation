# Building Reusable Views

Sections and layouts let you compose views so the same markup isn't copy-pasted across pages.

## Reuse the shell once

Put the fixed page structure in a layout (see [Building a Layout](/guides/building-a-layout)) and only override what changes per page:

```php
<?php $this->extends('layout'); ?>

<?php $this->section('content'); ?>
    <!-- only this part changes per page -->
<?php $this->endSection(); ?>
```

## Reuse pieces within a view

Keep the data model the same and loop over it with plain PHP. One template renders any number of rows or cards:

`views/base-list.php`:

```php
<table>
    <thead>
        <tr>
            <th>N°</th>
            <th>Name</th>
            <th>Favorite food</th>
            <th>Age</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($this->viewData['list'] as $key => $item) { ?>
            <tr>
                <td><?= ($key + 1); ?></td>
                <td><?= ($item->name ?? ''); ?></td>
                <td><?= ($item->favoriteFood ?? ''); ?></td>
                <td><?= ($item->age ?? ''); ?></td>
                <td><?= ($item->country ?? ''); ?></td>
            </tr>
        <?php } ?>
    </tbody>
</table>
```

Render it with different data each time:

```php
renderHTML('base-list', ['list' => $usersA]);
renderHTML('base-list', ['list' => $usersB]);
```

## Consistency contracts

For templates to stay reusable, agree on the shape of `viewData` for each view:

- Document the expected keys at the top of the file as comments.
- Use the same keys across calls (`list`, `item->name`, …).
- Provide fallbacks with `??` so missing fields don't break rendering.

## Layouts of reuse

1. **Master layout** — the skeleton (`layout.php`).
2. **Per-page views** — extend the layout, fill `content`.
3. **Repeated markup** — built with sections or loops over consistent data.

## See also

- [Sections](/fundamentals/sections)
- [Best Practices](/guides/best-practices)
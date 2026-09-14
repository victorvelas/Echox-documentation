# Code Blocks

"Code blocks" simply means **writing PHP inside your templates**. There is no proprietary syntax — whatever PHP you know works.

## Statements with `<?php ?>`

Use full PHP blocks for control structures:

```php
<?php if ($this->viewData['echoxIsCool'] === true) { ?>
    <p>Now you can write php code like a boss</p>
<?php } ?>
```

## Expression output with `<?= ?>`

Print values with the echo shorthand:

```php
<h1><?= ($this->viewData['user'] ?? ''); ?></h1>
```

## Loops

```php
<?php foreach ($this->viewData['list'] as $key => $item) { ?>
    <tr>
        <td><?= ($key + 1); ?></td>
        <td><?= ($item->name ?? ''); ?></td>
    </tr>
<?php } ?>
```

`foreach`, `for`, `while`, `switch`, ternaries — every construct of the language is available.

## Mixing markup and logic

Keep blocks readable by closing PHP and writing plain HTML inside the loop/condition body:

```php
<ul>
    <?php foreach ($this->viewData['list'] as $item) { ?>
        <li class="list-item">
            <?= ($item->name ?? ''); ?>
        </li>
    <?php } ?>
</ul>
```

## Style tips

- Keep heavy logic out of views; do it in your controller/business layer.
- Always provide a fallback when a key may be missing (see [Variables](/fundamentals/variables)).
- Escape anything that comes from user input (see [Output Escaping](/fundamentals/output-escaping)).
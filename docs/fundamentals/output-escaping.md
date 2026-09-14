# Output Escaping

Echoing raw user input into HTML is the most common source of XSS vulnerabilities. Echox gives you two helpers to control escaping.

## `Html::esc()` — escape output

`esc()` applies `htmlspecialchars()` with `ENT_QUOTES`, encoding quotes as well as `<`, `>`, `&`:

```php
<input value="<?= self::esc($_GET['foo'] ?? '') ?>" />
```

If a user submits `<script>alert('x')</script>`, the rendered value is harmless encoded text instead of executable HTML.

## `Html::noEsc()` — raw output

`noEsc()` reverses the encoding (`html_entity_decode`). It is useful only when your data was previously encoded and you now want the literal characters:

```php
<?= self::noEsc($_GET['foo'] ?? '') ?>
```

::: warning
`noEsc()` prints content **without any protection**. Only use it with trusted data. When in doubt, escape.
:::

## Rule of thumb

| Data source        | Use                            |
| ------------------ | ------------------------------ |
| User input, unknown data | `self::esc(...)`         |
| Trusted HTML you authored | `<?= ... ?>` directly   |

## In practice

```php
<div>
    <b>Escaped data:</b><br>
    <?= self::esc($_GET['foo'] ?? '') ?>
</div>
<br><br>
<div>
    <b>Unescaped data:</b><br>
    <?= self::noEsc($_GET['foo'] ?? '') ?>
</div>
```

## Next steps

- [Security](/advanced/security) — a deeper look at keeping your output safe.
- [Best Practices](/guides/best-practices) — escaping as part of your habit.
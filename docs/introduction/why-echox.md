# Why Echox?

Echox is a simple template engine for PHP 8.2 that takes `echo` for HTML content to another level.

## The problem

Most PHP projects end up mixing business logic and markup inside the same file. As the application grows, those files become hard to read, hard to test, and even harder to maintain.

## The Echox approach

Echox lets you keep clean code by separating **business logic** and **views** into different files, while staying close to plain PHP:

- **No template syntax to learn.** Views are ordinary `.php` files.
- **No dependencies.** Just PHP 8.2.
- **Explicit, not magical.** Your data is passed to the view and accessed through `$this->viewData`.
- **Composable.** Build master layouts and reuse sections across views.
- **Predictable output.** Control exactly what is echoed, escaped, or left raw.

## When to use Echox

- You want a tiny, dependency-free view layer for an MVC-style PHP application.
- Your team already knows PHP and you don't want to introduce a template DSL.
- You want a small, readable renderer you can fully understand and extend.

## When it might not fit

- You need complex template logic like pipelines, filters, or a thick plugin ecosystem.
- You expect an isolated sandbox for templates (Echox views are plain PHP executed in context).
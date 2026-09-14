# Architecture

Echox is intentionally tiny. Its whole design fits in a two-level class hierarchy and a single helper function.

## Class diagram

```
Velas\Echox
│
├── abstract ActionResult
│   ├── class Html extends ActionResult
│   └── class Json extends ActionResult
│
├── Functions
│   └── renderHTML()  →  Html
│
└── Exceptions
    ├── HtmlException
    └── JsonException
```

## `ActionResult` — the result contract

Every result type must answer two questions:

- **What do I look like as a string?** — `__toString()`
- **What headers do I need?** — `getBaseHeaders()`

Plus shared access to data through `data()`.

## `Html` — the renderer

`Html` does the real work:

- holds the view folder / asset folder configuration (`$baseFolder`, `$baseAssetsFolder`),
- captures template output via PHP output buffering in `setFile()`,
- implements layout inheritance (`extends()`) and sections (`section()`/`endSection()`/`renderSection()`),
- provides escaping helpers (`esc()`/`noEsc()`) and asset cache busting (`getMemoFile()`).

## `Json` — a ready-made alternative

Shows how easy it is to produce a different output type: same contract, tiny implementation (`json_encode` + JSON header + `get()`).

## `renderHTML()` — the one-liner

Keeps templates as dumb files: create `Html`, render the file, return the result. Views never worry about the mechanics.

## Rendering flow

```
renderHTML('child', $data)
      │
      ▼
Html->setFile('child')
      │  include views/child.php  (inside ob_start)
      │  └─ $this->extends('layout')  → creates parent Html
      │  └─ $this->section('content') … endSection()
      │
      ▼
if parent exists → parent->setFile('layout')
      └─ renders sections via renderSection('content')
      │
      ▼
content stored → echo (string) $view
```

## Design decisions

- **Plain PHP templates** — no parser, no cache, no DSL. Simple to reason about.
- **Output buffering** — a single `ob_start`/`ob_get_contents`/`ob_end_clean` cycle per file.
- **Zero dependencies** — the whole library is a handful of classes on top of the PHP standard library.

## See also

- [Engine](/reference/engine)
- [Extending Echox](/advanced/extending-echox)
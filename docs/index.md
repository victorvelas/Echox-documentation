---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Echox"
  text: "Simple templating for PHP"
  tagline: A lightweight template engine for PHP 8.2 with zero dependencies. Separate your business logic from your views with plain, readable PHP.
  image: 
    src: /images/branding/logo.png
    alt: Echox
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/quick-start
    - theme: alt
      text: Why Echox?
      link: /introduction/why-echox

features:
  - icon: 🚫
    title: Zero dependencies
    details: Pure PHP 8.2. No additional packages, no magic syntax to learn.
  - icon: 📋
    title: Plain PHP templates
    details: Views are ordinary .php files, so everything you already know about PHP just works.
  - icon: 👩‍👧‍👦
    title: Layout inheritance
    details: Build master layouts and compose child views with sections and yields.
  - icon: ✨
    title: Multiple result types
    details: Render HTML or JSON through a common ActionResult contract.
---
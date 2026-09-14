import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "Echox",
  base: '/',
  description: "Echox PHP library documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction/why-echox' },
      { text: 'Fundamentals', link: '/fundamentals/templates' },
      { text: 'Guides', link: '/guides/project-structure' },
      { text: 'Advanced', link: '/advanced/rendering' },
      { text: 'Reference', link: '/reference/api' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Why Echox?', link: '/introduction/why-echox' },
          { text: 'Installation', link: '/introduction/installation' },
          { text: 'Quick Start', link: '/introduction/quick-start' },
          { text: 'Core Concepts', link: '/introduction/core-concepts' }
        ]
      },
      {
        text: 'Fundamentals',
        items: [
          { text: 'Templates', link: '/fundamentals/templates' },
          { text: 'Variables', link: '/fundamentals/variables' },
          { text: 'Output Escaping', link: '/fundamentals/output-escaping' },
          { text: 'Layouts', link: '/fundamentals/layouts' },
          { text: 'Sections', link: '/fundamentals/sections' },
          { text: 'Blocks', link: '/fundamentals/blocks' },
          { text: 'Includes', link: '/fundamentals/includes' },
          { text: 'Code Blocks', link: '/fundamentals/code-blocks' }
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Project Structure', link: '/guides/project-structure' },
          { text: 'Building a Layout', link: '/guides/building-a-layout' },
          { text: 'Building Reusable Views', link: '/guides/building-reusable-views' },
          { text: 'Best Practices', link: '/guides/best-practices' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Rendering', link: '/advanced/rendering' },
          { text: 'Context', link: '/advanced/context' },
          { text: 'Extending Echox', link: '/advanced/extending-echox' },
          { text: 'Security', link: '/advanced/security' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Engine', link: '/reference/engine' },
          { text: 'Configuration', link: '/reference/configuration' },
          { text: 'Exceptions', link: '/reference/exceptions' },
          { text: 'API', link: '/reference/api' }
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'Architecture', link: '/community/architecture' },
          { text: 'Changelog', link: '/community/changelog' },
          { text: 'Contributing', link: '/community/contributing' },
          { text: 'License', link: '/community/license' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/victorvelas/echox' }
    ]
  }
})
# iroha-css

[English](README.md) | [日本語](README.ja.md)

Make AI-generated websites feel hand-designed.

iroha-css is a lightweight SCSS/CSS design system for semantic `wa-*` classes, quiet spacing, paper-like surfaces, fine borders, and Japanese-inspired themes. It is not a Tailwind replacement and not a full UI framework. It gives AI coding tools a better default vocabulary for building pages that do not look like the same centered hero and three-card SaaS layout.

See the live GitHub Pages demo first: [https://tzks.github.io/iroha-css/](https://tzks.github.io/iroha-css/)

## Installation

```bash
npm install iroha-css
```

```scss
@use "iroha-css";
```

```html
<link rel="stylesheet" href="./dist/iroha.css" />
```

## Quick Example

```html
<main data-wa-theme="ai">
  <section class="wa-hero">
    <div class="wa-container wa-split">
      <div class="wa-stack">
        <p class="wa-hero__kicker">Human-feeling CSS</p>
        <h1 class="wa-hero__title">A quieter layout language for AI-built websites.</h1>
        <p class="wa-text-muted">
          Use semantic classes, role-based tokens, and asymmetrical rhythm.
        </p>
        <a class="wa-button" href="#docs">Read the docs</a>
      </div>
      <div class="wa-card wa-card--quiet wa-offset">
        Designed for restraint, contrast, and intent.
      </div>
    </div>
  </section>
</main>
```

## Themes

Use `data-wa-theme` on any parent element: `sakura`, `sumi`, `ai`, `matcha`, `kurenai`, or `yamabuki`.

## Layout Patterns

Core layout classes include `wa-container`, `wa-section`, `wa-stack`, `wa-grid`, `wa-cluster`, `wa-split`, `wa-frame`, `wa-flow`, `wa-offset`, `wa-layer`, `wa-ma`, `wa-editorial`, `wa-story`, and `wa-silent`.

## Components

Core components are CSS-only: `wa-button`, `wa-card`, `wa-hero`, `wa-nav`, `wa-form`, `wa-badge`, `wa-alert`, `wa-article`, and `wa-footer`.

## AI Usage

Read the AI-facing guides in `docs/ai/`. They tell Codex, Cursor, and Claude Code to use semantic classes, avoid raw hex colors, preserve the `wa-` prefix, and avoid generic AI-looking layouts.

For AI agents, start with:

- `docs/ai/class-decision-tree.md`
- `docs/ai/component-snippets.md`
- `docs/ai/accessibility.md`
- `docs/mcp/classes.manifest.json`
- `docs/mcp/components.catalog.json`
- `docs/mcp/tokens.catalog.json`

## Documentation

Start with `docs/en/getting-started.md`, then inspect `docs/mcp/iroha-css.context.md` for a structured AI-readable overview.

## GitHub Pages Demo

View the live demo on GitHub Pages: [https://tzks.github.io/iroha-css/](https://tzks.github.io/iroha-css/)

The demo includes a theme color comparison, expanded component gallery with charts and feedback surfaces, layout pattern gallery, and full-page examples.

Library controls include `data-wa-theme`, `data-wa-density`, and `data-wa-contrast`, plus a small reference-oriented utility set. The component catalog documents variants, state classes, and implementation notes for practical adoption. The MCP-style JSON files provide a machine-readable contract so AI tools can select documented classes instead of inventing one-off UI.

## Accessibility

iroha-css includes `:focus-visible` styles, a visually hidden utility, reduced-motion handling, and contrast-aware theme defaults.

## License

MIT

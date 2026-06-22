# iroha-css Context

iroha-css is a human-feeling SCSS design system for AI-generated websites, inspired by traditional Japanese colors. It provides semantic `wa-*` classes, CSS custom properties, six themes, layout primitives, and CSS-only components.

Use it to generate pages with restraint, asymmetry, quiet spacing, and accessible contrast.

## AI Use

Start with the MCP files:

- `iroha-css.manifest.json` for entrypoints and global rules.
- `classes.manifest.json` for allowed classes.
- `components.schema.json` for component metadata shape.
- `tokens.schema.json` for token metadata shape.
- `prompts.json` for reusable generation prompts.

Then use the AI guides:

- `docs/ai/class-decision-tree.md`
- `docs/ai/component-snippets.md`
- `docs/ai/accessibility.md`
- `docs/ai/anti-ai-layout.md`
- `docs/ai/stability-policy.md`

## Composition Rule

Use layout primitives first, components second, utilities last. Avoid raw custom CSS unless the documented primitives cannot express the layout.

## Stable Controls

- Theme: `data-wa-theme="sakura|sumi|ai|matcha|kurenai|yamabuki"`
- Density: `data-wa-density="compact|spacious"`
- Contrast: `data-wa-contrast="high"`

## Behavior Boundary

Tabs, modals, dropdowns, and toasts are CSS-only surfaces. Generated applications must provide state, keyboard behavior, focus handling, and live-region behavior where relevant.

# AI Stability Policy

This policy helps AI tools avoid fragile generated UI.

## Stable Public API

- `wa-*` class names documented in the reference and MCP manifest.
- `data-wa-theme`.
- `data-wa-density`.
- `data-wa-contrast`.
- Semantic CSS variables beginning with `--wa-color-`, `--wa-space-`, `--wa-text-`, `--wa-radius-`, and `--wa-shadow-`.
- Component tokens such as `--wa-card-*`, `--wa-button-*`, `--wa-input-*`, and chart value variables.

## Extension Rules

- Extend themes by overriding semantic tokens on a parent element.
- Extend components by setting component tokens locally.
- Add project-specific classes outside the `wa-` namespace.
- Do not override internal selectors globally unless the project intentionally forks the design system.

## AI Generation Rules

- Select from documented classes.
- Compose primitives first, then components, then utilities.
- Prefer readable HTML over clever class density.
- Add custom CSS only when iroha-css lacks the necessary primitive.
- Keep custom CSS token-driven.

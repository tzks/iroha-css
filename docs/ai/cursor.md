# Cursor Usage

Add `.cursor/rules/iroha-css.mdc` to projects that consume iroha-css.

```md
---
description: Use iroha-css safely
globs: **/*.{html,tsx,jsx,vue,svelte,mdx}
alwaysApply: false
---

When editing UI that uses iroha-css:

- Use existing `wa-*` classes only.
- Use `data-wa-theme`, `data-wa-density`, and `data-wa-contrast` on parent elements.
- Read `docs/mcp/iroha-css.manifest.json`, `docs/mcp/classes.manifest.json`, and `docs/ai/component-snippets.md` before creating new UI.
- Prefer `wa-container`, `wa-section`, `wa-stack`, `wa-grid`, `wa-split`, `wa-sidebar`, and `wa-editorial` before custom layout CSS.
- Use semantic/component tokens instead of raw colors.
- Avoid generic AI-looking layouts: centered gradient hero, three identical cards, vague badges, decorative blobs.
- For tabs, modals, dropdowns, and toasts, CSS classes only style the surface. Application code must handle behavior and accessibility.
```

Keep Cursor focused on composition. If it starts inventing class names, stop and ask it to select from the manifest.

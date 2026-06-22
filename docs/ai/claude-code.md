# Claude Code Usage

Point Claude Code at `CLAUDE.md`, `docs/mcp/iroha-css.context.md`, and the JSON files in `docs/mcp/`.

Recommended `CLAUDE.md` section:

```md
## iroha-css

- Use `wa-*` classes from `docs/mcp/classes.manifest.json`.
- Use `data-wa-theme` for theme selection.
- Use `data-wa-density` and `data-wa-contrast` for page-level tuning.
- Do not invent new classes, color tokens, or raw hex values.
- Prefer layout primitives before custom CSS.
- Use `docs/ai/class-decision-tree.md` and `docs/ai/component-snippets.md` before composing UI.
- Avoid generic AI-looking layouts; use asymmetry, quiet contrast, and Japanese-inspired surfaces only when they support content.
```

Claude Code should make small, source-aligned edits. When a component requires runtime behavior, it should implement the behavior in app code and use iroha-css only for styling.

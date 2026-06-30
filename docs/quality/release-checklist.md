# Release Checklist

Run this checklist before publishing a new version.

## Local Commands

```sh
npm run check
npm run pack:check
```

## Manual Review

- Open GitHub Pages locally or from the built `docs/` folder.
- Review components, themes, layouts, reference, and recipes.
- Confirm `docs/dist/iroha.css` matches the current build.
- Confirm the MCP files describe every public class added in the release.
- Check mobile and desktop layouts.
- Check keyboard focus on forms, menus, tabs, and overlay surfaces.

## API Stability

- Do not rename public `wa-*` classes without a migration note.
- Do not remove semantic tokens without a migration note.
- Keep `data-wa-theme`, `data-wa-density`, and `data-wa-contrast` stable.
- Add new classes to `docs/mcp/classes.manifest.json`.
- Add new component groups to `docs/mcp/components.catalog.json`.

## Version Notes

- Patch: bug fixes, docs, visual corrections.
- Minor: new components, variants, tokens, or examples.
- Major: renamed classes, removed tokens, changed behavior assumptions.

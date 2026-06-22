# Codex Usage

Use this guide when Codex edits a project that consumes iroha-css.

## Contract

- Preserve the `wa-` class prefix.
- Preserve the `data-wa-theme` theme attribute.
- Use `data-wa-density` and `data-wa-contrast` for page-level tuning before writing custom CSS.
- Use semantic tokens or component tokens. Do not add raw hex colors in app components.
- Prefer existing layout primitives before adding project-specific layout CSS.
- Do not invent `wa-*` class names. Check the reference or MCP files first.
- Keep JavaScript behavior in the application layer. iroha-css provides CSS surfaces, not state management.

## Build Order

1. Pick the page mood with `data-wa-theme`: `sakura`, `sumi`, `ai`, `matcha`, `kurenai`, or `yamabuki`.
2. Choose one outer rhythm: `wa-section`, `wa-container`, then either `wa-stack`, `wa-split`, `wa-sidebar`, `wa-editorial`, or `wa-grid`.
3. Add semantic components: `wa-card`, `wa-button`, `wa-form`, `wa-table`, `wa-tabs`, `wa-alert`, `wa-donut`, `wa-progress`, `wa-meter`.
4. Add Japanese helpers only when they support meaning: `wa-washi`, `wa-kasane`, `wa-seal`, `wa-kamon`, `wa-vertical`.
5. Use utilities sparingly for small adjustments: `wa-text-muted`, `wa-gap-4`, `wa-surface-muted`, `wa-rule-start`, `wa-hide-sm`.

## Layout Decision Tree

- Use `wa-stack` for vertical forms, settings panels, article sections, and repeated content.
- Use `wa-grid` for equal-weight cards or component catalogs.
- Use `wa-split` when two areas have comparable importance.
- Use `wa-sidebar` when navigation, filters, or metadata support a main task.
- Use `wa-editorial` when the page needs an asymmetric Japanese magazine-like rhythm.
- Use `wa-reel` for horizontal choice sets or compact media rails.
- Use `wa-masonry` only for visual collections with uneven item heights.
- Use `wa-layer`, `wa-offset`, and `wa-kasane` for intentional depth, not decoration filler.

## Component Decision Tree

- Use `wa-card` for one bounded idea. Do not wrap whole page sections in cards.
- Use `wa-card--washi` for paper-like editorial surfaces.
- Use `wa-card--quiet` when the layout already has enough borders.
- Use `wa-button` for the primary action and `wa-button--soft` or `wa-button--outline` for secondary actions.
- Use `wa-button--seal` only for a small ceremonial or brand-forward action.
- Use `wa-alert` for inline status; use `wa-toast` for transient status controlled by app JavaScript.
- Use `wa-donut`, `wa-progress`, `wa-meter`, and `wa-bar-chart` only for simple display values. Use a charting library for interactive analytics.

## Accessibility Rules

- Use real headings in logical order.
- Use labels for every input.
- Use `aria-invalid="true"` with `wa-field--invalid` and visible `wa-error` text.
- For tabs, provide JavaScript to update `aria-selected`, keyboard focus, and panel visibility.
- For modals, provide JavaScript for focus trap, Escape close, inert background, and restore focus.
- Do not communicate state by color alone. Pair color with text, labels, or values.

## Good Prompt

```text
Build a product settings page with iroha-css. Use data-wa-theme="matcha", wa-sidebar for filters, wa-stack for the main form, wa-card only for bounded settings groups, and wa-alert for validation feedback. Do not invent classes or raw colors.
```

## Good Output Shape

```html
<main data-wa-theme="matcha" data-wa-density="compact">
  <section class="wa-section">
    <div class="wa-container wa-sidebar">
      <aside class="wa-card wa-card--quiet wa-flow">
        <h2>Settings</h2>
        <nav class="wa-list" aria-label="Settings sections">
          <a href="#profile">Profile</a>
          <a href="#billing">Billing</a>
        </nav>
      </aside>
      <form class="wa-card wa-card--washi wa-form" id="profile">
        <label class="wa-field">
          Display name
          <input class="wa-input" name="name" />
        </label>
        <button class="wa-button">Save</button>
      </form>
    </div>
  </section>
</main>
```

## Avoid

- Generic centered gradient hero plus three identical cards.
- Many nested `wa-card` surfaces.
- Raw `style="color: #..."` or new custom token names.
- Theme-specific one-off component CSS.
- Fake interactivity on tabs, dropdowns, or modals without the required behavior.

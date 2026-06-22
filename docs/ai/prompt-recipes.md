# Prompt Recipes

Use prompts that constrain structure, class selection, and behavior boundaries.

## Landing Page

```text
Build this page with iroha-css. Use semantic wa-* classes, data-wa-theme="ai", restrained color, and asymmetrical spacing. Avoid a generic centered SaaS hero.
```

## Product Page

```text
Create a product page with iroha-css. Use data-wa-theme="kurenai", wa-split for the first viewport, wa-card--washi for the feature note, wa-button for the main action, and wa-table for specs. Use no raw colors and do not invent class names.
```

## Dashboard

```text
Create an operations dashboard with iroha-css. Use data-wa-theme="sumi" data-wa-density="compact" data-wa-contrast="high". Use wa-sidebar for navigation, wa-grid for metrics, wa-table for records, wa-donut and wa-progress for simple values. Do not use decorative cards where a table is clearer.
```

## Settings Form

```text
Create a settings form with iroha-css. Use wa-stack for the form rhythm, wa-field labels, wa-input controls, wa-field--invalid with aria-invalid and wa-error for invalid states, and wa-alert for form-level feedback. Keep actions in a wa-cluster.
```

## Editorial Article

```text
Create an editorial article page with iroha-css. Use data-wa-theme="matcha", wa-editorial for the intro, wa-article for the body, wa-quote for pull quotes, and wa-washi only for a related note. Avoid marketing-style hero composition.
```

## Component Catalog

```text
Create a component catalog page with iroha-css. Use wa-grid for samples, theme comparison via data-wa-theme on each sample card, and copyable HTML snippets. Include accessibility notes for components that need JavaScript behavior.
```

## Repair Prompt

```text
Refactor this UI to use iroha-css correctly. Replace invented class names with documented wa-* classes, remove raw hex colors, reduce nested cards, and choose layout primitives from wa-stack, wa-grid, wa-split, wa-sidebar, wa-editorial, and wa-reel.
```

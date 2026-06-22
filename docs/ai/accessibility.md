# Accessibility Notes

iroha-css is CSS-only. It gives components visual structure, but application code must provide behavior and state.

## Always

- Keep heading order logical.
- Label every form control.
- Add visible text for errors, warnings, and success states.
- Provide accessible names for chart-like displays.
- Keep table headers in real `th` elements.
- Preserve focus styles.

## Components Needing App Behavior

- `wa-tabs`: roving focus, selected state, keyboard interaction, and panel visibility.
- `wa-modal`: focus trap, close behavior, inert background, labelled dialog, and focus restore.
- `wa-dropdown`: expanded state, keyboard navigation, outside click handling.
- `wa-toast`: live region behavior if the message is announced dynamically.
- `wa-accordion`: native `details` works for simple cases; custom accordion behavior needs keyboard support.

## Chart Displays

`wa-donut`, `wa-progress`, `wa-meter`, and `wa-bar-chart` are for simple values. Pair them with text values or `aria-label`.

```html
<div class="wa-donut" style="--wa-donut-value: 72%" aria-label="Completion 72%">
  <span class="wa-donut__value">72%</span>
</div>
```

Use a dedicated charting library when users need tooltips, filtering, legends, zooming, or data exploration.

# Accessibility Matrix

iroha-css is CSS-only. It provides visual surfaces; application code owns behavior.

| Component group                                   | CSS provides                           | App must provide                                                  |
| ------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| `wa-button`                                       | Focus-visible styling, visual variants | Correct element choice: `button` for commands, `a` for navigation |
| `wa-form`, `wa-field`, `wa-input`                 | Field rhythm, focus, invalid styling   | Real labels, validation messages, `aria-invalid`                  |
| `wa-checkbox`, `wa-radio`, `wa-switch`            | Native control styling and spacing     | Native input semantics and visible label text                     |
| `wa-combobox`                                     | Popup/list surface                     | ARIA combobox pattern, filtering, keyboard selection              |
| `wa-command`                                      | Command list surface                   | Keyboard navigation, selected state, action handling              |
| `wa-tabs`                                         | Tab list and panel surface             | Roving focus, `aria-selected`, panel visibility                   |
| `wa-modal`, `wa-drawer`, `wa-sheet`               | Layered surface                        | Focus trap, Escape close, inert background, focus restore         |
| `wa-popover`, `wa-tooltip`                        | Anchored visual surface                | Positioning, dismissal, accessible naming                         |
| `wa-toast`, `wa-banner`                           | Status surface                         | Live region for dynamic announcements                             |
| `wa-donut`, `wa-progress`, `wa-meter`, `wa-gauge` | Visual value display                   | Text value, `aria-label`, or table fallback                       |
| `wa-table`                                        | Table surface and overflow wrapper     | Real `table`, `th`, captions when needed                          |

## Release Gate

Before release, inspect the docs pages with keyboard only:

- Tab order is visible.
- Controls have names.
- Interactive-looking surfaces have documented behavior boundaries.
- Color is not the only state indicator.

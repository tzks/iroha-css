# Class Decision Tree

Use this file before composing UI with iroha-css.

## Page Root

- Need a theme: add `data-wa-theme`.
- Need denser UI: add `data-wa-density="compact"`.
- Need more readable contrast: add `data-wa-contrast="high"`.
- Need more breathing room: add `data-wa-density="spacious"`.

## Layout

- Single column content: `wa-section` > `wa-container` > `wa-stack`.
- Equal repeated items: `wa-grid`.
- Primary/secondary pair: `wa-split`.
- Filters, nav, or metadata beside content: `wa-sidebar`.
- Editorial asymmetry: `wa-editorial`.
- Horizontal scroll group: `wa-reel`.
- Uneven visual collection: `wa-masonry`.
- Full-bleed strip inside constrained content: `wa-bleed`.
- Aspect-ratio media: `wa-frame`.
- Layered emphasis: `wa-layer`, `wa-offset`, `wa-kasane`.

## Surfaces

- Bounded idea: `wa-card`.
- Low visual weight: `wa-card wa-card--quiet`.
- Paper feeling: `wa-card wa-card--washi`.
- Important accent: `wa-card wa-card--accent`.
- Strong depth: `wa-card wa-card--elevated`, used sparingly.

## Actions

- Main action: `wa-button`.
- Secondary action: `wa-button wa-button--secondary`.
- Low emphasis: `wa-button wa-button--soft`.
- Border action: `wa-button wa-button--outline`.
- Dangerous action: `wa-button wa-button--danger`.
- Full-width mobile or form action: `wa-button wa-button--block`.
- Small action: `wa-button wa-button--sm`.
- Ceremonial mark-like action: `wa-button wa-button--seal`.

## Data Display

- Simple percentage: `wa-donut`.
- Linear progress: `wa-progress`.
- Score or risk indicator: `wa-meter`.
- Small categorical comparison: `wa-bar-chart`.
- Dense records: `wa-table` inside `wa-table-wrap`.
- Key number: `wa-stat`.

## Feedback

- Inline status: `wa-alert`.
- Transient app status: `wa-toast`.
- Empty state: `wa-empty`.
- Loading placeholder: `wa-skeleton`.
- Step list: `wa-stepper`.
- Historical sequence: `wa-timeline`.

## Forms

- Form wrapper: `wa-form`.
- Label and control group: `wa-field`.
- Text control: `wa-input`.
- Select control: `wa-select`.
- Multi-line text: `wa-textarea`.
- Error state: `wa-field--invalid`, `aria-invalid="true"`, and `wa-error`.
- Helper text: `wa-field__hint`.

## Japanese Helpers

- Paper surface: `wa-washi`.
- Layered surface: `wa-kasane`.
- Seal mark: `wa-seal`.
- Crest mark: `wa-kamon`.
- Short vertical label: `wa-vertical`.

Use helpers with restraint. They should support hierarchy or brand tone, not decorate every component.

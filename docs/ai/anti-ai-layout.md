# Anti-AI Layout Rules

AI-generated UI often fails because every section has the same centered rhythm. iroha-css should push generation toward intent, restraint, and useful structure.

## Avoid

- Full-page gradient hero with a centered headline and no real page structure.
- Three identical cards with vague claims.
- Nested cards inside cards.
- Oversized rounded panels everywhere.
- Decorative blobs, random gradients, and visual noise that does not encode information.
- Fake dashboards where every metric has the same weight.
- Unlabeled chart shapes with no accessible value text.
- Theme-specific one-off CSS for every component.

## Prefer

- One clear page task.
- Asymmetric composition with `wa-editorial`, `wa-split`, `wa-sidebar`, or `wa-offset`.
- Paper-like surfaces only where a bounded idea benefits from a surface.
- Quiet rules, muted text, and spacing before decoration.
- Japanese helpers with meaning: `wa-washi` for paper, `wa-seal` for a mark, `wa-kasane` for layered emphasis, `wa-vertical` for short side labels.
- Real content hierarchy: headings, labels, table headers, values, captions.

## Rewrite Patterns

Generic:

```html
<section class="hero">
  <h1>Build faster with AI</h1>
  <div class="cards">...</div>
</section>
```

iroha-css:

```html
<section class="wa-section">
  <div class="wa-container wa-editorial">
    <div class="wa-flow">
      <p class="wa-hero__kicker">Operations</p>
      <h1 class="wa-hero__title">A calmer dashboard for daily review.</h1>
    </div>
    <div class="wa-stack wa-space-6">
      <article class="wa-card wa-card--washi wa-flow">...</article>
      <div class="wa-grid">...</div>
    </div>
  </div>
</section>
```

The goal is not to make every page look traditional. The goal is to give AI a structured vocabulary for hierarchy, restraint, and human-feeling rhythm.

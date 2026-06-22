# Component Snippets

Copy these snippets before inventing new structure.

## Themed Page Shell

```html
<main data-wa-theme="sakura" data-wa-density="spacious">
  <section class="wa-section">
    <div class="wa-container wa-stack wa-space-6">
      <header class="wa-flow">
        <p class="wa-hero__kicker">Iroha</p>
        <h1 class="wa-hero__title">A calm page title.</h1>
        <p class="wa-text-muted">Short supporting copy with clear intent.</p>
      </header>
    </div>
  </section>
</main>
```

## Editorial Hero

```html
<section class="wa-hero">
  <div class="wa-container wa-editorial">
    <div class="wa-flow">
      <span class="wa-vertical">余白</span>
      <h1 class="wa-hero__title">A first viewport with rhythm.</h1>
      <p class="wa-text-muted">Use uneven emphasis instead of a generic centered hero.</p>
    </div>
    <aside class="wa-card wa-card--washi wa-kasane wa-flow">
      <span class="wa-seal">和</span>
      <p>One grounded supporting note.</p>
    </aside>
  </div>
</section>
```

## Settings Form

```html
<form class="wa-card wa-card--washi wa-form">
  <label class="wa-field">
    Display name
    <input class="wa-input" name="display_name" />
    <span class="wa-field__hint">Shown on public pages.</span>
  </label>
  <label class="wa-field wa-field--invalid">
    Email
    <input class="wa-input" type="email" aria-invalid="true" />
    <span class="wa-error">Enter a valid email address.</span>
  </label>
  <div class="wa-cluster">
    <button class="wa-button" type="submit">Save</button>
    <button class="wa-button wa-button--soft" type="button">Cancel</button>
  </div>
</form>
```

## Data Card

```html
<article class="wa-card wa-flow">
  <div class="wa-cluster">
    <span class="wa-badge wa-badge--primary">Revenue</span>
    <span class="wa-text-muted">This month</span>
  </div>
  <div class="wa-stat">
    <div class="wa-stat__value">74%</div>
    <div class="wa-stat__label">Target progress</div>
  </div>
  <div class="wa-progress wa-progress--lg" aria-label="Target progress 74%">
    <div class="wa-progress__bar" style="--wa-progress-value: 74%"></div>
  </div>
</article>
```

## Chart Group

```html
<section class="wa-grid" aria-label="Performance summary">
  <article class="wa-card wa-flow">
    <h2>Completion</h2>
    <div
      class="wa-donut wa-donut--accent"
      style="--wa-donut-value: 68%"
      aria-label="Completion 68%"
    >
      <span class="wa-donut__value">68%</span>
    </div>
  </article>
  <article class="wa-card wa-flow">
    <h2>Health</h2>
    <div class="wa-meter" aria-label="Health score 82%">
      <div class="wa-meter__track">
        <span class="wa-meter__marker" style="--wa-meter-value: 82%"></span>
      </div>
      <span class="wa-text-muted">82% stable</span>
    </div>
  </article>
</section>
```

## Table

```html
<div class="wa-table-wrap">
  <table class="wa-table wa-table--striped wa-table--compact">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Updated</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Catalog</td>
        <td><span class="wa-badge">Ready</span></td>
        <td>Today</td>
      </tr>
    </tbody>
  </table>
</div>
```

## CSS-Only Surface With App Behavior

```html
<div class="wa-modal" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
  <h2 id="confirm-title">Confirm changes</h2>
  <p>Use application JavaScript for focus trap, Escape close, and restore focus.</p>
  <div class="wa-cluster">
    <button class="wa-button">Confirm</button>
    <button class="wa-button wa-button--soft">Cancel</button>
  </div>
</div>
```

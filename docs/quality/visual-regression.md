# Visual Regression

Visual regression tests protect iroha-css from silent CSS drift.

## Required Screens

Capture these pages before releases:

- `docs/index.html`
- `docs/components/index.html`
- `docs/themes/index.html`
- `docs/layouts/index.html`
- `docs/reference/index.html`
- `docs/recipes/index.html`

## Viewports

- Mobile: `390x844`
- Tablet: `768x1024`
- Desktop: `1440x1000`

## What To Check

- Components render nonblank.
- Text does not overlap controls or cards.
- Chart, meter, gauge, and sparkline values are visible.
- Theme cards keep readable contrast.
- App shell, drawer, sheet, and filter patterns remain usable on mobile.
- Japanese concept components add identity without blocking scanability.

## Playwright Shape

```js
import { test, expect } from "@playwright/test";

for (const path of ["/", "/components/", "/themes/", "/layouts/", "/reference/", "/recipes/"]) {
  test(`visual ${path}`, async ({ page }) => {
    await page.goto(`http://127.0.0.1:4173${path}`);
    await expect(page).toHaveScreenshot();
  });
}
```

Keep snapshots in the consuming project or a dedicated visual test workspace. The package itself keeps this checklist lightweight so installation stays small.

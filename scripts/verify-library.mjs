import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

function read(path) {
  return readFileSync(resolve(root, path), "utf8");
}

function readJson(path) {
  return JSON.parse(read(path));
}

function flattenClasses(value) {
  if (Array.isArray(value)) {
    return value.flatMap(flattenClasses);
  }

  if (value && typeof value === "object") {
    return Object.values(value).flatMap(flattenClasses);
  }

  return typeof value === "string" && /^wa-[a-z0-9]/.test(value) ? [value] : [];
}

const css = read("dist/iroha.css");
const classes = readJson("docs/mcp/classes.manifest.json");
const catalog = readJson("docs/mcp/components.catalog.json");
const manifestClasses = [...new Set(flattenClasses(classes))];
const cssClassNames = new Set(
  [...css.matchAll(/\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g)].map((match) => match[1])
);

const missingCss = manifestClasses.filter((className) => !cssClassNames.has(className));

const catalogClasses = [
  ...new Set(
    catalog.components.flatMap((item) => [
      item.class,
      ...(item.variants ?? []),
      ...(item.elements ?? [])
    ])
  )
].filter(Boolean);

const missingManifest = catalogClasses.filter((className) => !manifestClasses.includes(className));

const requiredDocs = [
  "docs/index.html",
  "docs/components/index.html",
  "docs/reference/index.html",
  "docs/recipes/index.html",
  "docs/quality/visual-regression.md",
  "docs/quality/accessibility-matrix.md",
  "docs/quality/release-checklist.md",
  "docs/mcp/classes.manifest.json",
  "docs/mcp/components.catalog.json",
  "docs/mcp/tokens.catalog.json"
];

const missingDocs = requiredDocs.filter((path) => !existsSync(resolve(root, path)));

const docsIndex = read("docs/index.html");
const missingHomeLinks = ["./recipes/", "./quality/visual-regression.md"].filter(
  (href) => !docsIndex.includes(href)
);

const failures = [
  ...missingCss.map(
    (className) => `Class ${className} is listed in MCP manifest but missing from dist/iroha.css.`
  ),
  ...missingManifest.map(
    (className) =>
      `Class ${className} is listed in component catalog but missing from MCP manifest.`
  ),
  ...missingDocs.map((path) => `Required documentation file is missing: ${path}.`),
  ...missingHomeLinks.map((href) => `docs/index.html does not link to ${href}.`)
];

if (failures.length > 0) {
  console.error("iroha-css verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Verified ${manifestClasses.length} manifest classes against dist/iroha.css.`);
console.log(`Verified ${catalog.components.length} component catalog entries.`);

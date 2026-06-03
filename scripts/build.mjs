import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { compile } from "sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = resolve(root, "dist");
const docsDist = resolve(root, "docs/dist");
mkdirSync(dist, { recursive: true });
mkdirSync(docsDist, { recursive: true });

const targets = [
  ["src/index.scss", "iroha.css"],
  ["src/tokens/index.scss", "iroha.tokens.css"],
  ["src/themes/index.scss", "iroha.themes.css"],
  ["src/components/index.scss", "iroha.components.css"],
  ["src/layout/index.scss", "iroha.layouts.css"]
];

for (const [entry, out] of targets) {
  const result = compile(resolve(root, entry), { style: "expanded" });
  const processed = await postcss([autoprefixer]).process(result.css, { from: undefined });
  writeFileSync(resolve(dist, out), processed.css);
}

const full = readFileSync(resolve(dist, "iroha.css"), "utf8");
writeFileSync(
  resolve(dist, "iroha.min.css"),
  full.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s*([{}:;,>])\s*/g, "$1").trim()
);

copyFileSync(resolve(dist, "iroha.css"), resolve(docsDist, "iroha.css"));
copyFileSync(resolve(dist, "iroha.min.css"), resolve(docsDist, "iroha.min.css"));

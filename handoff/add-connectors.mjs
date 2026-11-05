#!/usr/bin/env node
// Adds named connectors from this repository to a BoldCreate Connectors checkout.
//   node handoff/add-connectors.mjs <connectors-repo-folder> name1 name2 ...
// Run it from the root of a BoldCreate Plugins checkout (branch bc/1d0e49bb-perform-complete).
// It copies third_party/<name>/ (skipping generated manifests), points repository URLs at the new repo,
// and adds one README row per connector to the "## Connectors" table, keeping it sorted.
// It refuses to overwrite a folder that already exists. Afterwards, in the target:
//   npm run build && npm run validate && npm run build -- --check

import { readFileSync, writeFileSync, existsSync, cpSync, readdirSync, statSync } from "fs";
import { resolve, join } from "path";

const [target, ...names] = process.argv.slice(2);
if (!target || !names.length) { console.error("usage: node handoff/add-connectors.mjs <connectors-repo-folder> <name>..."); process.exit(1); }
const dest = resolve(target);
const SLUG_OLD = "syncfusion/BoldCreate-Plugins", SLUG_NEW = process.env.CONNECTORS_SLUG || "SF3922-Shreedhar/BoldCreate-Connectors";
const GENERATED = [".claude-plugin", ".boldcreate-plugin"];

const readme = readFileSync("README.md", "utf8").split("\n");
const rowOf = (n) => readme.find((l) => l.startsWith(`| \`${n}\` |`));

const rows = [];
for (const n of names) {
  const from = join("third_party", n), to = join(dest, "third_party", n);
  if (!existsSync(join(from, "mcp.json"))) throw new Error(`${n}: not a connector here (no mcp.json)`);
  if (existsSync(to)) throw new Error(`${n}: already in the target, not overwriting`);
  const row = rowOf(n);
  if (!row) throw new Error(`${n}: no README row in this repository`);
  cpSync(from, to, { recursive: true, filter: (p) => !GENERATED.some((g) => p.split(/[\\/]/).includes(g)) });
  const walk = (d) => { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else if (/\.(json|md)$/.test(f)) {
    const s = readFileSync(p, "utf8"), r = s.replaceAll(`https://github.com/${SLUG_OLD}`, `https://github.com/${SLUG_NEW}`).replaceAll(SLUG_OLD, SLUG_NEW).replaceAll("@boldcreate-plugins", "@boldcreate-connectors");
    if (r !== s) writeFileSync(p, r); } } };
  walk(to);
  rows.push(row);
}

const rp = join(dest, "README.md");
const out = readFileSync(rp, "utf8").split("\n");
const head = out.findIndex((l) => l.startsWith("## Connectors"));
const first = out.findIndex((l, i) => i > head && l.startsWith("| `") && !l.startsWith("| `name`"));
let last = first; while (out[last + 1]?.startsWith("| `")) last++;
const table = [...out.slice(first, last + 1), ...rows].sort((a, b) => { const x = a.split("`")[1], y = b.split("`")[1]; return x < y ? -1 : x > y ? 1 : 0; });
if (new Set(table.map((l) => l.split("`")[1])).size !== table.length) throw new Error("duplicate README row");
out.splice(first, last - first + 1, ...table);
writeFileSync(rp, out.join("\n"));
console.log(`added ${names.length} connectors: ${names.join(", ")}; README table now ${table.length} rows. Next: npm run build && npm run validate`);

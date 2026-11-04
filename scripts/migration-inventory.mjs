#!/usr/bin/env node
// Builds docs/migration/INVENTORY.md from the saved upstream marketplace index.
// Run: node scripts/migration-inventory.mjs
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const index = JSON.parse(readFileSync(join(root, "docs/migration/anthropic-marketplace-index.json"), "utf-8"));
const have = new Map();
for (const d of readdirSync(join(root, "third_party"))) {
  const p = JSON.parse(readFileSync(join(root, `third_party/${d}/.boldcreate-plugin/plugin.json`), "utf-8"));
  have.set(d, p.version);
}

const describe = (s) => {
  if (typeof s === "string") return { kind: "local", where: `claude-plugins-official ${s}`, pin: "-" };
  const repo = (s.url || "").replace(/^https:\/\/github\.com\//, "").replace(/\.git$/, "");
  return { kind: s.source, where: s.path ? `${repo} (${s.path})` : repo, pin: (s.sha || s.ref || "-").slice(0, 12) };
};

const esc = (t) => String(t ?? "").replace(/\|/g, "\\|");
const rows = index.plugins
  .map((p) => ({ p, s: describe(p.source) }))
  .sort((a, b) => a.p.name.localeCompare(b.p.name));
const present = rows.filter((r) => have.has(r.p.name));
const missing = rows.filter((r) => !have.has(r.p.name));

const out = [];
out.push("# Upstream plugin inventory", "");
out.push(`The upstream index lists ${rows.length} plugins. ${present.length} already exist in \`third_party/\`. ${missing.length} do not.`, "");
out.push("The index holds names and source pointers only. It has no MCP endpoints, auth modes, variables, licences or logos, which a BoldCreate `plugin.json` requires. A plugin can be imported only after its source is readable. The workspace egress policy currently blocks those sources, so every missing plugin has the status **Blocked: source not readable**.", "");
out.push("This file is generated. Regenerate it with `node scripts/migration-inventory.mjs`.", "");
out.push("## Plugins already in third_party", "");
out.push("| ID | Connector | Current version | Upstream version | Migration required | Status |", "|---|---|---|---|---|---|");
present.forEach((r, i) => out.push(`| PM-${String(i + 1).padStart(3, "0")} | ${esc(r.p.name)} | ${have.get(r.p.name)} | ${esc(r.p.version || "not stated")} | Needs source comparison | Blocked: upstream source not readable |`));
out.push("", "## Plugins not yet imported", "");
out.push("| ID | Connector | Category | Source type | Source | Pinned ref | Status |", "|---|---|---|---|---|---|---|");
missing.forEach((r, i) => out.push(`| PM-${String(present.length + i + 1).padStart(3, "0")} | ${esc(r.p.name)} | ${esc(r.p.category)} | ${r.s.kind} | ${esc(r.s.where)} | ${r.s.pin} | Blocked: source not readable |`));
out.push("");
writeFileSync(join(root, "docs/migration/INVENTORY.md"), out.join("\n"));
console.log(`wrote ${rows.length} rows`);

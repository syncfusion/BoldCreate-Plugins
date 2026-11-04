#!/usr/bin/env node
// Builds docs/migration/INVENTORY.md from the saved upstream marketplace index.
// Run: node scripts/migration-inventory.mjs
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const index = JSON.parse(readFileSync(join(root, "docs/migration/anthropic-marketplace-index.json"), "utf-8"));
// Folder names in third_party/ that differ from the name in the upstream index.
const ALIASES = { monday: "monday-crm" };
const have = new Map();
const imported = new Set();
for (const d of readdirSync(join(root, "third_party"))) {
  const p = JSON.parse(readFileSync(join(root, `third_party/${d}/.boldcreate-plugin/plugin.json`), "utf-8"));
  have.set(ALIASES[d] ?? d, p.version);
  const meta = JSON.parse(readFileSync(join(root, `third_party/${d}/boldcreate.json`), "utf-8"));
  const src = meta.endpointCheck?.source ?? "";
  // Plugins added from the upstream index record where they came from.
  if (meta.upstream || /vendor plugin repository/.test(src)) imported.add(ALIASES[d] ?? d);
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
out.push(`The upstream index lists ${rows.length} plugins. ${present.length} exist in \`third_party/\`, ${imported.size} of them imported from this index. ${missing.length} do not exist yet.`, "");
out.push("The index holds names and source pointers only. It has no MCP endpoints, auth modes, variables, licences or logos, which a BoldCreate `plugin.json` requires. A plugin can be imported only after its source is read. The workspace egress policy blocks cloning the vendor repositories, so remote MCP plugins were imported by reading each vendor's \`.mcp.json\` and licence through the GitHub API, and skill plugins through \`scripts/fetch-upstream.mjs\`. Plugins not yet imported have the status **Not imported**.", "");
out.push("This file is generated. Regenerate it with `node scripts/migration-inventory.mjs`.", "");
out.push("## Plugins already in third_party", "");
out.push("| ID | Connector | Current version | Upstream version | Migration required | Status |", "|---|---|---|---|---|---|");
present.forEach((r, i) => out.push(`| PM-${String(i + 1).padStart(3, "0")} | ${esc(r.p.name)} | ${have.get(r.p.name)} | ${esc(r.p.version || "not stated")} | ${imported.has(r.p.name) ? "No" : "Needs source comparison"} | ${imported.has(r.p.name) ? "Imported" : "Blocked: upstream source not readable"} |`));
out.push("", "## Plugins not yet imported", "");
out.push("| ID | Connector | Category | Source type | Source | Pinned ref | Status |", "|---|---|---|---|---|---|---|");
missing.forEach((r, i) => out.push(`| PM-${String(present.length + i + 1).padStart(3, "0")} | ${esc(r.p.name)} | ${esc(r.p.category)} | ${r.s.kind} | ${esc(r.s.where)} | ${r.s.pin} | Not imported |`));
out.push("");
writeFileSync(join(root, "docs/migration/INVENTORY.md"), out.join("\n"));
console.log(`wrote ${rows.length} rows`);

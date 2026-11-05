#!/usr/bin/env node
// Compares the connectors on the saved Claude directory page with the connectors in a repo.
//   node handoff/reconcile-connectors.mjs <saved-page.txt> [repo-folder]   (repo-folder defaults to ".")
// A repo connector is any third_party/<name>/mcp.json. Prints counts and writes nothing.
// Use --list to also print the titles in each group.

import { readFileSync, readdirSync, existsSync } from "fs";
import { join, resolve } from "path";

const args = process.argv.slice(2).filter((a) => a !== "--list");
const list = process.argv.includes("--list");
if (!args[0]) { console.error("usage: node handoff/reconcile-connectors.mjs <saved-page.txt> [repo-folder] [--list]"); process.exit(1); }
const repo = resolve(args[1] || ".");

// The page embeds its data as Next.js chunks: self.__next_f.push([1,"..."]).
const html = readFileSync(args[0], "utf8");
let text = "";
for (const m of html.matchAll(/self\.__next_f\.push\((\[1,.*?\])\)<\/script>/gs)) {
  try { text += JSON.parse(m[1])[1]; } catch { /* chunk is not JSON, skip */ }
}
const at = text.indexOf('"data":{"items":[');
if (at < 0) { console.error("directory data not found in the page"); process.exit(1); }
// Read the balanced JSON object that starts at "data":
const start = at + '"data":'.length;
let depth = 0, end = start, inStr = false, esc = false;
for (let i = start; i < text.length; i++) {
  const c = text[i];
  if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; continue; }
  if (c === '"') inStr = true; else if (c === "{") depth++; else if (c === "}" && --depth === 0) { end = i + 1; break; }
}
const items = JSON.parse(text.slice(start, end)).items;

const norm = (u) => { const p = new URL(u); return (p.host + p.pathname).replace(/\/+$/, "").toLowerCase(); };
const dir = join(repo, "third_party");
const ours = new Map(); // normalised url -> folder
const hosts = new Map();
for (const d of existsSync(dir) ? readdirSync(dir) : []) {
  const f = join(dir, d, "mcp.json");
  if (!existsSync(f)) continue;
  let j; try { j = JSON.parse(readFileSync(f, "utf8")); } catch { continue; }
  for (const s of Object.values(j.mcpServers || {})) {
    if (!s?.url) continue;
    ours.set(norm(s.url), d);
    const h = new URL(s.url).host.toLowerCase();
    (hosts.get(h) || hosts.set(h, new Set()).get(h)).add(d);
  }
}

const g = { exact: [], hostOnly: [], missing: [], remoteNoUrl: [], local: [] };
for (const x of items) {
  if (x.type === "local") { g.local.push(x.title); continue; }
  if (!x.serverUrl) { g.remoteNoUrl.push(x.title); continue; }
  if (ours.has(norm(x.serverUrl))) g.exact.push(x.title);
  else if (hosts.has(new URL(x.serverUrl).host.toLowerCase())) g.hostOnly.push(x.title);
  else g.missing.push(x.title);
}

const ids = new Set(items.map((x) => x._id));
console.log(`page records: ${items.length} (unique ids ${ids.size}); remote ${items.length - g.local.length}, local ${g.local.length}`);
console.log(`repo: ${repo}`);
console.log(`repo connectors (third_party/*/mcp.json): ${new Set(ours.values()).size}`);
console.log(`remote, exact URL match:           ${g.exact.length}`);
console.log(`remote, same host only (check!):   ${g.hostOnly.length}`);
console.log(`remote, not in repo:               ${g.missing.length}`);
console.log(`remote, no URL on the page:        ${g.remoteNoUrl.length}`);
console.log(`local (stdio, out of scope):       ${g.local.length}`);
if (list) for (const [k, v] of Object.entries(g)) console.log(`\n## ${k} (${v.length})\n${v.join("\n")}`);

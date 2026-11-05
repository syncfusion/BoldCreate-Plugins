#!/usr/bin/env node
// Builds the BoldCreate Connectors repository from this repository.
//   node scripts/export-connectors.mjs ../BoldCreate-Connectors
// The target folder is created if needed. Existing files in it are overwritten, nothing else is touched.
// A connector is any folder under third_party/ that has an mcp.json. Skill plugins stay here.
// Afterwards, in the target: npm ci && npm run build && npm run validate.

import { readFileSync, writeFileSync, mkdirSync, cpSync, readdirSync, existsSync, rmSync } from "fs";
import { resolve, join } from "path";

const target = resolve(process.argv[2] || "");
if (!process.argv[2]) { console.error("usage: node scripts/export-connectors.mjs <target-folder>"); process.exit(1); }
const src = resolve(".");
if (target === src) { console.error("target must not be this repository"); process.exit(1); }

const OLD_URL = "https://github.com/syncfusion/BoldCreate-Plugins";
const OLD_SLUG = "syncfusion/BoldCreate-Plugins";
const NEW_SLUG = process.env.CONNECTORS_SLUG || "SF3922-Shreedhar/BoldCreate-Connectors";
const NEW_URL = `https://github.com/${NEW_SLUG}`;
const read = (p) => readFileSync(join(src, p), "utf8");
const write = (p, s) => { mkdirSync(join(target, p, ".."), { recursive: true }); writeFileSync(join(target, p), s); };
const retarget = (s) => s.replaceAll(OLD_URL, NEW_URL).replaceAll(OLD_SLUG, NEW_SLUG).replaceAll("@boldcreate-plugins", "@boldcreate-connectors");

mkdirSync(target, { recursive: true });

// 1. Tooling, copied as is (same structure, same checks).
for (const f of [".gitignore", ".gitattributes"]) write(f, read(f));
for (const f of ["build.mjs", "validate.mjs", "check-kit.mjs"]) write(`scripts/${f}`, read(`scripts/${f}`));
for (const f of readdirSync(join(src, "schemas"))) write(`schemas/${f}`, retarget(read(`schemas/${f}`)));

// 2. Package files: only the name and description change.
const pkg = JSON.parse(read("package.json"));
pkg.name = "boldcreate-connectors";
pkg.description = "Connector (remote MCP) marketplace for BoldCreate Connect";
write("package.json", JSON.stringify(pkg, null, 2) + "\n");
const lock = JSON.parse(read("package-lock.json"));
lock.name = "boldcreate-connectors";
if (lock.packages?.[""]) lock.packages[""].name = "boldcreate-connectors";
write("package-lock.json", JSON.stringify(lock, null, 2) + "\n");

// 3. build.mjs: marketplace name and description.
let build = read("scripts/build.mjs");
build = build.replace('name: "boldcreate-plugins"', 'name: "boldcreate-connectors"');
build = build.replace(/description:\s*\n\s*"Reviewed AI-agent plugins[^"]*"/, 'description:\n    "Reviewed connectors (remote MCP servers) for BoldCreate Connect."');
if (!build.includes("boldcreate-connectors")) throw new Error("could not rename the marketplace in build.mjs");
write("scripts/build.mjs", build);

// 4. CI: this repository has only third_party/, so the root and syncfusion/ globs are dropped.
let wf = read(".github/workflows/validate.yml");
wf = wf.replace("for dir in */.claude-plugin syncfusion/*/*/.claude-plugin third_party/*/.claude-plugin; do", "for dir in third_party/*/.claude-plugin; do");
if (wf.includes("syncfusion/*/*")) throw new Error("could not update the CI plugin loop");
write(".github/workflows/validate.yml", wf);

// 5. Connectors: every third_party folder with an mcp.json, with the repository name updated in text files.
const TEXT = /\.(md|json)$/;
function copyDir(from, to) {
  mkdirSync(to, { recursive: true });
  for (const e of readdirSync(from, { withFileTypes: true })) {
    const a = join(from, e.name), b = join(to, e.name);
    if (e.isDirectory()) copyDir(a, b);
    else if (TEXT.test(e.name)) writeFileSync(b, retarget(readFileSync(a, "utf8")));
    else cpSync(a, b);
  }
}
const names = readdirSync(join(src, "third_party")).filter((n) => existsSync(join(src, "third_party", n, "mcp.json"))).sort();
rmSync(join(target, "third_party"), { recursive: true, force: true });
for (const n of names) copyDir(join(src, "third_party", n), join(target, "third_party", n));

// 6. README: one connectors table, rows taken from this repository's MCP table.
const lines = read("README.md").split("\n");
const from = lines.findIndex((l) => l.startsWith("## MCP plugins"));
const to = lines.findIndex((l, i) => i > from && l.startsWith("## "));
const set = new Set(names);
const rows = lines.slice(from, to).filter((l) => l.startsWith("| `") && set.has(l.split("`")[1])).map(retarget);
const missing = names.filter((n) => !rows.some((r) => r.split("`")[1] === n));
if (missing.length) throw new Error(`no README row for: ${missing.join(", ")}`);
rows.sort((a, b) => a.split("`")[1].localeCompare(b.split("`")[1]));
write("README.md", `# BoldCreate Connectors

Connectors for BoldCreate Connect, Cursor and Claude Code. Each connector is a plugin under \`third_party/\` that connects agents to a vendor's remote [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

This repository is a staging copy. It holds the connectors moved out of [BoldCreate Plugins](${OLD_URL}), with the same structure, manifests, scripts and checks. It will move to the Syncfusion organization after the connectors have been verified in the target environment.

## Install

- **BoldCreate Connect:** open **Marketplace**, find the connector, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install the connector.
- **Claude Code:** \`/plugin marketplace add ${NEW_SLUG}\`, then \`/plugin install <name>@boldcreate-connectors\`.

Secrets such as API keys are never stored in this repository. Each connector declares them as install-time variables, and you enter them when you install it. See each connector's README for setup.

## Connectors

| \`name\` | Connector | Category | \`description\` (from marketplace) |
|:-------|:-------|:---------|:-------------------------------------|
${rows.join("\n")}

## Repository structure

\`\`\`text
.claude-plugin/marketplace.json      generated marketplace index for Claude Code
.cursor-plugin/marketplace.json      generated marketplace index for Cursor
.boldcreate-plugin/marketplace.json  generated marketplace index for BoldCreate Connect
third_party/<name>/                  one connector per folder
  .cursor-plugin/plugin.json         hand-written source manifest
  .claude-plugin/plugin.json         generated
  .boldcreate-plugin/plugin.json     generated
  boldcreate.json                    transport, auth, hosting and endpoint check
  mcp.json                           the remote MCP server
  README.md  CHANGELOG.md  LICENSE
  assets/logo.*
schemas/                             JSON schemas for every manifest
scripts/                             build.mjs, validate.mjs, check-kit.mjs
.github/workflows/validate.yml       CI
\`\`\`

## Contributing

Edit \`third_party/<name>/.cursor-plugin/plugin.json\`, \`mcp.json\` and \`boldcreate.json\` by hand. Never edit the generated manifests or the three marketplace indexes. Run:

\`\`\`bash
npm ci
npm run build
npm run validate
\`\`\`

## License

Each connector is MIT licensed. The vendor's name and logo remain the property of the vendor.
`);
console.log(`exported ${names.length} connectors to ${target}`);

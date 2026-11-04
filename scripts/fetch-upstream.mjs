#!/usr/bin/env node
// Copies upstream plugin folders into _import/<name>/ at the commit pinned in the saved index.
// Run it on a machine that can reach GitHub.
//   node scripts/fetch-upstream.mjs crowdsec growthbook-skills
//   node scripts/fetch-upstream.mjs --dry-run crowdsec     (prints what it would do)
//   node scripts/fetch-upstream.mjs --file docs/migration/batch-8.txt   (one plugin name per line)
//   node scripts/fetch-upstream.mjs --full crowdsec        (copy the whole folder, not only what the import uses)
// Each folder gets a .upstream-commit file holding the repository, path and commit.

import { readFileSync, mkdirSync, rmSync, cpSync, writeFileSync, existsSync, mkdtempSync } from "fs";
import { execFileSync } from "child_process";
import { resolve, dirname, join } from "path";
import { tmpdir } from "os";
import { fileURLToPath } from "url";
import { slimCopy, copyFilter, findLfsPointers } from "./slim-copy.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const full = args.includes("--full");
const fileIdx = args.indexOf("--file");
const fromFile = fileIdx >= 0 ? readFileSync(args[fileIdx + 1], "utf-8").split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#")) : [];
const names = [...args.filter((a, i) => !a.startsWith("--") && i !== fileIdx + 1), ...fromFile];
if (!names.length) {
  console.error("Usage: node scripts/fetch-upstream.mjs [--dry-run] <plugin-name> [<plugin-name> ...]");
  process.exit(1);
}

const index = JSON.parse(readFileSync(join(root, "docs/migration/anthropic-marketplace-index.json"), "utf-8"));
const git = (cwd, ...a) => execFileSync("git", a, { cwd, stdio: "pipe" }).toString();

let failed = 0;
for (const name of names) {
  const entry = index.plugins.find((p) => p.name === name);
  if (!entry) { console.error(`${name}: not in the index`); failed++; continue; }
  const s = entry.source;
  if (typeof s === "string") { console.error(`${name}: lives inside claude-plugins-official (${s}); fetch that repository instead`); failed++; continue; }
  if (!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+(\.git)?$/.test(s.url) || !/^[0-9a-f]{40}$/.test(s.sha ?? "")) {
    console.error(`${name}: unexpected source in the index`); failed++; continue;
  }
  const sub = s.path ?? "";
  if (sub.split("/").includes("..")) { console.error(`${name}: path is not allowed`); failed++; continue; }
  const dest = join(root, "_import", name);
  console.log(`${name}: ${s.url} @ ${s.sha.slice(0, 12)} ${sub ? `(${sub})` : "(whole repository)"} -> _import/${name}`);
  if (dry) continue;

  const tmp = mkdtempSync(join(tmpdir(), "fetch-upstream-"));
  try {
    // core.autocrlf=false keeps the files byte for byte as the vendor published them, also on Windows.
    git(tmp, "-c", "core.autocrlf=false", "clone", "--quiet", "--no-checkout", "--filter=blob:none", s.url, "repo");
    const repo = join(tmp, "repo");
    git(repo, "checkout", "--quiet", s.sha);
    const from = join(repo, sub);
    if (!existsSync(from)) throw new Error(`path "${sub}" not found at that commit`);
    rmSync(dest, { recursive: true, force: true });
    mkdirSync(dest, { recursive: true });
    // --full copies everything. The default copies only what the import step uses (see slim-copy.mjs).
    let skipped = [];
    if (full) cpSync(from, dest, { recursive: true, filter: copyFilter });
    else ({ skipped } = slimCopy(from, dest));
    const pointers = findLfsPointers(dest);
    if (pointers.length) {
      rmSync(dest, { recursive: true, force: true });
      throw new Error(`${pointers.length} files are Git LFS pointers, not real content (for example ${pointers[0]}). git-lfs could not download them; check "git lfs version" and the vendor's LFS quota`);
    }
    // A plugin in a subfolder often relies on the repository-root LICENSE.
    if (sub && !existsSync(join(dest, "LICENSE")) && existsSync(join(repo, "LICENSE"))) cpSync(join(repo, "LICENSE"), join(dest, "LICENSE"));
    writeFileSync(join(dest, ".upstream-commit"), `repository: ${s.url}\npath: ${sub || "."}\ncommit: ${s.sha}\n${skipped.length ? `not copied: ${skipped.join(" ")}\n` : ""}`);
    if (skipped.length) console.log(`  not copied: ${skipped.join(" ")}`);
    console.log(`  done`);
  } catch (e) {
    console.error(`  failed: ${e.message.split("\n")[0]}`);
    failed++;
  } finally {
    try {
      rmSync(tmp, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
    } catch (e) {
      console.error(`  could not delete the temporary folder ${tmp}: ${e.message.split("\n")[0]}`);
    }
  }
}
process.exit(failed ? 1 : 0);

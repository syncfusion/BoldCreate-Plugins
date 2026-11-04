// Copies only the parts of an upstream plugin that BoldCreate Connect uses or that the import
// step reads: skills, agents, rules, hooks, commands, assets, vendor manifests, and the small
// files at the top level (licence, README, MCP config). Large source folders are skipped.
import { readdirSync, statSync, cpSync, mkdirSync } from "fs";
import { join } from "path";

export const KEEP_DIRS = new Set(["skills", "agents", "rules", "hooks", "commands", "assets", ".claude-plugin", ".cursor-plugin"]);
export const MAX_TOP_FILE_BYTES = 1024 * 1024;

export function slimCopy(from, dest) {
  mkdirSync(dest, { recursive: true });
  const kept = [];
  const skipped = [];
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const src = join(from, entry.name);
    const isDir = entry.isDirectory() || (entry.isSymbolicLink() && statSync(src).isDirectory());
    const keep = isDir ? KEEP_DIRS.has(entry.name) : statSync(src).size <= MAX_TOP_FILE_BYTES;
    if (!keep) { skipped.push(entry.name + (isDir ? "/" : "")); continue; }
    cpSync(src, join(dest, entry.name), { recursive: true, filter: (p) => !p.split(/[\\/]/).includes(".git") });
    kept.push(entry.name + (isDir ? "/" : ""));
  }
  return { kept: kept.sort(), skipped: skipped.sort() };
}

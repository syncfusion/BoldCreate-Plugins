// Copies only the parts of an upstream plugin that BoldCreate Connect uses or that the import
// step reads: skills, agents, rules, hooks, commands, assets, vendor manifests, and the small
// files at the top level (licence, README, MCP config). Large source folders are skipped.
import { readdirSync, statSync, cpSync, mkdirSync, openSync, readSync, closeSync } from "fs";
import { join, relative } from "path";

export const KEEP_DIRS = new Set(["skills", "agents", "rules", "hooks", "commands", "assets", ".claude-plugin", ".cursor-plugin"]);
export const MAX_TOP_FILE_BYTES = 1024 * 1024;

// A vendor's .gitattributes can switch on Git LFS for the files next to it. Inside this
// repository, `git add` would then turn those files into LFS pointers and upload them to this
// repository's LFS storage, which has a limited budget. These files are never copied.
export const NEVER_COPY = new Set([".gitattributes", ".lfsconfig"]);
const baseName = (p) => p.split(/[\\/]/).pop();
export const copyFilter = (p) => !p.split(/[\\/]/).includes(".git") && !NEVER_COPY.has(baseName(p));

export function slimCopy(from, dest) {
  mkdirSync(dest, { recursive: true });
  const kept = [];
  const skipped = [];
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    if (entry.name === ".git" || NEVER_COPY.has(entry.name)) continue;
    const src = join(from, entry.name);
    const isDir = entry.isDirectory() || (entry.isSymbolicLink() && statSync(src).isDirectory());
    const keep = isDir ? KEEP_DIRS.has(entry.name) : statSync(src).size <= MAX_TOP_FILE_BYTES;
    if (!keep) { skipped.push(entry.name + (isDir ? "/" : "")); continue; }
    cpSync(src, join(dest, entry.name), { recursive: true, filter: copyFilter });
    kept.push(entry.name + (isDir ? "/" : ""));
  }
  return { kept: kept.sort(), skipped: skipped.sort() };
}

// A Git LFS pointer is a short text file. If git-lfs could not download the real content,
// the clone holds the pointer instead, and copying it would put fake files in the plugin.
const LFS_PREFIX = "version https://git-lfs.github.com/spec/v1";

export function findLfsPointers(dir) {
  const found = [];
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!e.isFile() || statSync(p).size > 1024) continue;
      const buf = Buffer.alloc(LFS_PREFIX.length);
      const fd = openSync(p, "r");
      try { readSync(fd, buf, 0, buf.length, 0); } finally { closeSync(fd); }
      if (buf.toString("utf8") === LFS_PREFIX) found.push(relative(dir, p));
    }
  };
  walk(dir);
  return found.sort();
}

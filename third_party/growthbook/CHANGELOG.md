# Changelog

All notable changes to this plugin will be documented here.

## 2.0.0 - 2026-11-04

- First version in this marketplace: the GrowthBook skills, copied from https://github.com/growthbook/skills at commit `7a84f33`.
- Skill files are unchanged from the vendor's.
- In the vendor repository each skill's `scripts/gb-call` is a symlink to the shared `scripts/gb-call`. Symlinks do not survive every checkout, so each is replaced here by a copy of the real script (commit `7a84f33`), marked executable.
- The vendor's plugin-level files (`scripts/`, `CLAUDE.md`, `.github/`, `.claude-plugin/`, `.cursor-plugin/`) are not included. BoldCreate Connect delivers only the skills folder.

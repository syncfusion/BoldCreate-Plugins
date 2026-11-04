# Changelog

All notable changes to this plugin will be documented here.

## 1.10.0 - 2026-11-04

- First version in this marketplace: the Langfuse skills, copied from https://github.com/langfuse/skills at commit `b86532b`.
- Skill files are unchanged from the vendor's.
- The vendor's plugin-level files (manifests, MCP configs, hooks, commands, docs, build files) are not included. BoldCreate Connect delivers only skills, agents, rules and hooks, and the hooks it delivers must use Cursor's `hooks/hooks.json` format.
- The sibling `langfuse-observability` plugin (a hooks-only tracing plugin) is not part of this import, because it has no skills.

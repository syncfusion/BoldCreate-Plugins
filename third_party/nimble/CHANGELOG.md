# Changelog

All notable changes to this plugin will be documented here.

## 1.7.0 - 2026-11-04

- First version in this marketplace: the Nimble skills and agents, copied from https://github.com/Nimbleway/agent-skills at commit `fdb077c`.
- Skill and agent files are unchanged from the vendor's, except for the one edit listed below.
- The vendor's plugin-level files (manifests, MCP configs, hooks, commands, docs, build files) are not included. BoldCreate Connect delivers only skills, agents, rules and hooks, and the hooks it delivers must use Cursor's `hooks/hooks.json` format.
- One vendor file was edited: `skills/nimble-web-expert/SKILL.md`, description line, `(>= 1.2.0)` became `(1.2.0 or newer)`. This is the only change to a vendor file in this plugin.

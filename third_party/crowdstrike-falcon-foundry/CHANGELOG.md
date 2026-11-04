# Changelog

All notable changes to this plugin will be documented here.

## 1.6.0 - 2026-11-04

- First version in this marketplace: the CrowdStrike Falcon Foundry skills, copied from https://github.com/CrowdStrike/foundry-skills at commit `61572f3`.
- Skill files are unchanged from the vendor's.
- The vendor's plugin-level files (manifests, MCP configs, hooks, commands, docs, build files) are not included. BoldCreate Connect delivers only skills, agents, rules and hooks, and the hooks it delivers must use Cursor's `hooks/hooks.json` format.
- The sibling plugin `crowdstrike-falcon-fusion` is not part of this import. It has a skill named `setup` that clashes with an existing skill.

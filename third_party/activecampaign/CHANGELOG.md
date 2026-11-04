# Changelog

All notable changes to this plugin will be documented here.

## 0.3.1 - 2026-11-04

- First version in this marketplace: the ActiveCampaign skills and agents, copied from https://github.com/ActiveCampaign/activecampaign-plugin at commit `0ff8587`.
- Skill and agent files are unchanged from the vendor's.
- The vendor's plugin-level files (manifests, MCP configs, hooks, commands, docs, build files) are not included. BoldCreate Connect delivers only skills, agents, rules and hooks, and the hooks it delivers must use Cursor's `hooks/hooks.json` format.
- The vendor's five slash commands (`audience-health`, `automation-audit`, `campaign-report`, `deal-pipeline-review`, `weekly-digest`) are not included.

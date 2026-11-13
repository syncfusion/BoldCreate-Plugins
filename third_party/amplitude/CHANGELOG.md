# Changelog

All notable changes to this plugin will be documented here.

## 0.2.0 - 2026-11-13

- Added 27 of the 36 agent skills published in `amplitude/mcp-marketplace` (commit `658f88b9`), copied unchanged, with the original licence in `skills/LICENSE`.
- Left out 9 skills that Amplitude marks with feature flags: `analyze-chart`, `analyze-experiment`, `analyze-experiment-consolidated`, `build-charts-with-typed-params`, `create-chart`, `edit-guides-surveys`, `manage-amp-context`, `monitor-experiments`, `monitor-experiments-consolidated`. This plugin cannot set those flags, and `analyze-experiment` also has a name that does not match its folder.
- No change to the MCP server, sign-in or install settings.

## 0.1.0 - 2026-11-04

- First version: Amplitude remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's plugin repository (amplitude/mcp-marketplace at 94f58cc). The vendor's repository is MIT-licensed.
- OAuth sign-in: each member signs in to their own Amplitude account in the browser. BoldCreate Connect supplies its own OAuth client.

# Changelog

All notable changes to this plugin will be documented here.

## 0.2.0 - 2026-11-13

- Added 9 of the 12 agent skills published in `mixpanel/ai-plugins` (commit `dad3c11d`), copied unchanged, with the original Apache-2.0 licence in `skills/LICENSE`.
- Left out 3 skills that install software, write config files, hold tokens or run scripts: `install`, `tracking-implementation`, `manage-boards`.
- No change to the MCP server, sign-in or install settings.

## 0.1.0 - 2026-11-04

- First version: Mixpanel remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's docs (docs.mixpanel.com/docs/mcp). Targets the US endpoint (`https://mcp.mixpanel.com/mcp`).
- OAuth sign-in: each member signs in to their own Mixpanel account in the browser. BoldCreate Connect supplies its own OAuth client.

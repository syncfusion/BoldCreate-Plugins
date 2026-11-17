# Changelog

All notable changes to this plugin will be documented here.

## 0.7.2 - 2026-11-17

- Skills refreshed to `atlassian/atlassian-mcp-server` commit `352a02b0`: 6 skills, copied unchanged.
- Removed `generate-status-report`, which ships a Python script. Atlassian's newer report skills ship Python renderers and are not included.
- README: live check of the hosted endpoint, and the places where the live scopes differ from Atlassian's README.
- Logo is now Atlassian's own site icon.
- Recorded a live check of the hosted endpoint on 2026-11-17.

## 0.7.1 - 2026-11-10

- The server URL is now `https://mcp.atlassian.com/v2/mcp`, the endpoint Atlassian recommends.
- Added the 7 agent skills published in `atlassian/atlassian-mcp-server` (commit `3be55622`), copied unchanged, with Atlassian's Apache-2.0 licence in `skills/LICENSE`.
- README: added authentication, endpoint, what the tools can do, write access, admin controls, rate limits and security notes.
- Recorded a live check of the hosted endpoint on 2026-11-10.

## 0.7.0 - 2026-10-29

- Updated plugin version for marketplace release.

## 0.2.0 - 2026-10-26

- Moved to `third_party/atlassian/` to match the cursor/plugins layout.
- Added `assets/logo.svg` and set `logo` in the manifest.
- Added `LICENSE` (MIT), `license` and `minClientVersions` in the manifest.
- Rewrote the README in the Cursor plugin style (Install, MCP, Setup, Docs).

## 0.1.0 - 2026-10-24

- First version: Atlassian (Jira + Confluence) remote MCP server over streamable HTTP.

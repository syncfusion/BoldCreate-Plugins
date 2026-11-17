# Changelog

All notable changes to this plugin will be documented here.

## 0.7.2 - 2026-11-17

- Added 6 agent skills published in `atlassian/atlassian-mcp-server` (commit `352a02b0`), copied unchanged, with Atlassian's Apache-2.0 licence in `skills/LICENSE`.
- Left out `generate-status-report` and Atlassian's newer report skills because they ship Python scripts. The README names them.
- README: added a Skills section and a note on the v1 and v2 endpoints.
- Recorded a live check of the hosted endpoint on 2026-11-17.

## 0.7.0 - 2026-10-29

- Updated plugin version for marketplace release.

## 0.2.0 - 2026-10-26

- Moved to `third_party/atlassian/` to match the cursor/plugins layout.
- Added `assets/logo.svg` and set `logo` in the manifest.
- Added `LICENSE` (MIT), `license` and `minClientVersions` in the manifest.
- Rewrote the README in the Cursor plugin style (Install, MCP, Setup, Docs).

## 0.1.0 - 2026-10-24

- First version: Atlassian (Jira + Confluence) remote MCP server over streamable HTTP.

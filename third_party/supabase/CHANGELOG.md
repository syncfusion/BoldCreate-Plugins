# Changelog

All notable changes to this plugin will be documented here.

## 0.7.2 - 2026-11-13

- Fixed "Unreachable" on install: the server URL no longer holds a `${SUPABASE_READ_ONLY}` placeholder, which stayed unreplaced when the app did not apply the default. The URL is now fixed to `https://mcp.supabase.com/mcp?read_only=false`.
- The `SUPABASE_READ_ONLY` setting is removed, and the plugin now starts with writes allowed (`read_only=false`). To make it read-only, change the server URL in BoldCreate Connect to `read_only=true`.
- README: added a link to Supabase's privacy policy.

## 0.7.1 - 2026-11-10

- Sign-in is now OAuth: each member signs in to their own account. The `SUPABASE_ACCESS_TOKEN` and `SUPABASE_PROJECT_REF` settings are removed, and the personal access token stays an alternative. Read-only mode stays on by default.
- Added the 2 agent skills published in `supabase/agent-skills` (commit `c9be0e93`), copied unchanged, with Supabase's MIT licence in `skills/LICENSE`.
- README: added authentication, what the tools can do, write access, confirmations, rate limits and security notes.
- Recorded a live check of the hosted endpoint on 2026-11-10.

## 0.7.0 - 2026-10-29

- Updated plugin version for marketplace release.

## 0.2.0 - 2026-10-26

- Moved to `third_party/supabase/` to match the cursor/plugins layout.
- Added `assets/logo.svg` and set `logo` in the manifest.
- Added `LICENSE` (MIT), `license` and `minClientVersions` in the manifest.
- Rewrote the README in the Cursor plugin style (Install, MCP, Setup, Docs).

## 0.1.0 - 2026-10-24

- First version: Supabase remote MCP server over streamable HTTP.

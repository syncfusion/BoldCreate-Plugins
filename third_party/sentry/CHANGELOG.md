# Changelog

All notable changes to this plugin will be documented here.

## 0.7.2 - 2026-11-10

- Documented what the server offers: 76 tools in five skills, which skills are on by default, and which ones can write or delete.
- Listed the `Sentry-Bearer` API token mode as an alternative sign-in method (`header`). Sign-in is still OAuth by default.
- Noted the rate-limit behaviour and the OAuth scope difference.
- Pointed the source link at `getsentry/toolkit`.

## 0.7.1 - 2026-11-10

- Checked the hosted server again: the endpoint, streamable HTTP and OAuth are unchanged.
- Recorded the OAuth scopes the server advertises: `org:read`, `project:write`, `team:write`, `event:write`, `alerts:write`.
- Updated the description and README to match the vendor's current docs.

## 0.7.0 - 2026-10-29

- Updated plugin version for marketplace release.

## 0.2.0 - 2026-10-26

- Moved to `third_party/sentry/` to match the cursor/plugins layout.
- Added `assets/logo.svg` and set `logo` in the manifest.
- Added `LICENSE` (MIT), `license` and `minClientVersions` in the manifest.
- Rewrote the README in the Cursor plugin style (Install, MCP, Setup, Docs).

## 0.1.0 - 2026-10-24

- First version: Sentry remote MCP server over streamable HTTP.

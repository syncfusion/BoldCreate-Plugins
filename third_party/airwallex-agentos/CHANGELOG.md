# Changelog

All notable changes to this plugin will be documented here.

## 0.1.0 - 2026-11-13

- First version: Airwallex AgentOS with two remote MCP servers over streamable HTTP, the production server and the sandbox server.
- Endpoints taken from the vendor's plugin repository (airwallex/airwallex-marketplace at f9d74f7, `plugins/airwallex-agentos/.mcp.json`). The vendor's repository is Apache-2.0-licensed. Its plugin manifests are version 0.2.8; this plugin starts at 0.1.0 like the other plugins here.
- OAuth sign-in: each member signs in to their own Airwallex account in the browser. BoldCreate Connect supplies its own OAuth client.
- Requests the 35 scopes the production server lists. The sandbox server lists 12 more (for example `w:awx_action:transfers_edit` and `w:awx_action:conversions_edit`); they are not requested here.
- Includes all 5 agent skills published in `airwallex/airwallex-marketplace` (commit `f9d74f7d`), copied unchanged, with the original licence in `skills/LICENSE`. Their shared `references/feedback.md` is copied too.
- Not included: the vendor's deprecated `airwallex` stub plugin (no skills or MCP servers), and the vendor's Codex and Grok packaging.

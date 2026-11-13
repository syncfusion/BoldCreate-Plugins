# Changelog

All notable changes to this plugin will be documented here.

## 0.1.0 - 2026-11-13

- First version: Dropbox remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's plugin repository (dropbox/dropbox-ai-plugins at 078f0ca), which publishes it for Cursor as `https://mcp.dropbox.com/cursor_app_mcp`. The vendor's repository is Apache-2.0-licensed.
- OAuth sign-in: each member signs in to their own Dropbox account in the browser. BoldCreate Connect supplies its own OAuth client.
- Includes all 6 agent skills published in `dropbox/dropbox-ai-plugins` (commit `078f0ca3`), copied unchanged, with the original licence in `skills/LICENSE`.
- Requests the eight Dropbox scopes the vendor lists for this server. Read-only tools need only the read scopes; creating, copying, moving and deleting content and creating links or file requests need the write scopes.

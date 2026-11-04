# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: Mintlify remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's plugin repository (mintlify/mintlify-claude-plugin at 59d71b8). The vendor's repository is MIT-licensed.
- The vendor names its servers `Mintlify Search` and `Mintlify Admin`. This plugin uses `mintlify-search` and `mintlify-admin`, because names with spaces break some clients.
- The vendor does not state which server needs sign-in. Confirm the auth mode for each server before release.
- The auth mode is OAuth, an assumption based on how the vendor's connector works. BoldCreate Connect supplies its own OAuth client.

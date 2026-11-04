# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: Render remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's plugin repository (render-oss/render-plugin-claude-code at 2df0bc0). The vendor's repository is MIT-licensed.
- The vendor's `oauth.clientId` (`claude`) is not copied.
- The auth mode is OAuth, an assumption based on how the vendor's connector works. BoldCreate Connect supplies its own OAuth client.

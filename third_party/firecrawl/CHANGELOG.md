# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: Firecrawl remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's plugin repository (`firecrawl/firecrawl-claude-plugin`).
- The vendor's `X-Firecrawl-Origin` header is not copied. It labels traffic as coming from the Claude plugin.
- The auth mode is OAuth, as the vendor describes it. BoldCreate Connect supplies its own OAuth client.

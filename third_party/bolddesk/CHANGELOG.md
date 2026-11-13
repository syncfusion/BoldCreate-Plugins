# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-05

- Description now uses the wording from the vendor's own source (plugin, README or docs).
- First version: BoldDesk remote MCP server over streamable HTTP.
- Endpoint and tools taken from the BoldDesk MCP Server documentation. The endpoint is per account, so you enter your BoldDesk host when you install.
- The auth mode is OAuth 2.0 (dynamic client registration). An API key in the `x-api-key` header is also supported by BoldDesk.
- OAuth 2.0 is the shipped auth mode, like GitLab. For an API key, set Authentication to API key on the server in BoldCreate Connect and use the `x-api-key` header.
- Logo: replaced the `<style>` block with inline fills so the Claude Code validator accepts it.
- README: added a link to BoldDesk's privacy policy.

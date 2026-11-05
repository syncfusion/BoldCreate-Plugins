# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: Attentive remote MCP server over streamable HTTP.
- Endpoint taken from the Claude connector directory listing for Attentive.
- The auth mode is OAuth. The server answered an anonymous request with a 401 and a link to its OAuth metadata. BoldCreate Connect supplies its own OAuth client.
- The directory lists the endpoint with `?readOnly=false`. That parameter is left out, so the server applies its own default access level.

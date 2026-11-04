# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: HyperFrames by HeyGen remote MCP server over streamable HTTP.
- Endpoint taken from the Claude connector directory listing for HyperFrames by HeyGen.
- The auth mode is OAuth. The server answered an anonymous request with a 401, but its challenge has no OAuth metadata, so OAuth is an assumption. BoldCreate Connect supplies its own OAuth client.

# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: Trivago remote MCP server over streamable HTTP.
- Endpoint taken from the Claude connector directory listing for Trivago.
- The auth mode is none: the server answered anonymous initialize and tools/list requests without asking for sign-in. The directory may still require sign-in for some tools.  BoldCreate Connect supplies its own OAuth client.

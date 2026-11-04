# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: Greptile remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's plugin repository (`greptileai/claude-plugin f0b7379`).
- The auth mode is OAuth, as the vendor describes it. BoldCreate Connect supplies its own OAuth client.
- The vendor's `/greptile:login` and `/greptile:review` commands and its bundled CLI script are not included. They need files that BoldCreate Connect does not deliver.

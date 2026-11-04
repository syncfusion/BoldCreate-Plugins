# Changelog

All notable changes to this plugin will be documented here.

## 0.7.1 - 2026-11-04

- First version: incident.io remote MCP server over streamable HTTP.
- Endpoint taken from the vendor's plugin repository (incident-io/skills at 2741fb4). The vendor's repository is MIT-licensed.
- The vendor names its server `incident_io`. This plugin uses `incident-io`.
- The auth mode is OAuth, an assumption based on how the vendor's connector works. BoldCreate Connect supplies its own OAuth client.

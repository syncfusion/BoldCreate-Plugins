# Changelog

All notable changes to this plugin will be documented here.

## 0.1.1 - 2026-11-17

- The server host is now a setting (`PAGERDUTY_MCP_HOST`, default `mcp.pagerduty.com`), so EU service region accounts can use `mcp.eu.pagerduty.com`.
- README: authentication, the EU host, user-level key limits, and what is not included. Docs link now points to PagerDuty's MCP API reference.
- Logo is now PagerDuty's own site icon.
- Recorded a live check of both hosts on 2026-11-17.

## 0.1.0 - 2026-11-04

- First version: PagerDuty remote MCP server over streamable HTTP.
- Endpoint and header format taken from PagerDuty's repository (`PagerDuty/claude-code-plugins`).
- Only the MCP server is included. The slash commands (pre-commit risk scoring, skill builder) are not.
- PagerDuty's repository is Apache-2.0. See the License section in the README.

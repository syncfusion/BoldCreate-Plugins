# Changelog

All notable changes to this plugin will be documented here.

## 0.1.0 - 2026-11-27

- First version: Azure DevOps remote MCP server over streamable HTTP.
- The URL leaves out the organization, as the documentation allows. Name the organization in each request.
- Auth is Microsoft Entra ID with a public client. Each team registers its own Entra app and enters its client ID when installing, because Entra does not support dynamic client registration.

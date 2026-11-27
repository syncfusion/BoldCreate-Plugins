# Changelog

All notable changes to this plugin will be documented here.

## 0.1.0 - 2026-11-27

- First version: Azure DevOps remote MCP server over streamable HTTP.
- The URL leaves out the organization, as the documentation allows. Name the organization in each request.
- Auth is Microsoft Entra ID (OAuth). The plugin sets no client ID and no client secret, like the plugins whose servers support dynamic client registration. Entra itself does not support dynamic client registration, so sign-in through BoldCreate Connect has not been tested.

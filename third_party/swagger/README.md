# Swagger

BoldCreate plugin that connects agents to Swagger through SmartBear's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Design, govern and document APIs with Swagger: search and edit API definitions in the Swagger registry, scan them against governance rules, and manage API portals.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Swagger**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Swagger**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install swagger@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "swagger": {
      "type": "http",
      "url": "https://swagger.mcp.smartbear.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own SmartBear account in the browser (OAuth). SmartBear's page says no API token or environment variable is needed. The README of SmartBear's own plugin says you need a SmartBear account with access to Swagger Studio.

## Which server this is

`swagger-api` on GitHub holds Swagger's open-source tools (Swagger UI, Editor, Codegen, Core and others). It has no MCP server and no agent plugin. The hosted server comes from SmartBear, which owns Swagger. The plugin source is [SmartBear/swagger-agent-skills](https://github.com/SmartBear/swagger-agent-skills), and the server's documentation is [SmartBear MCP Server](https://developer.smartbear.com/smartbear-mcp).

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: OAuth` and a link to the protected-resource metadata. The 401 body also lists optional `Swagger-Api-Key` and related headers, for clients that send them.
- The protected-resource metadata names `https://auth.swaggerhub.com` as the authorization server. It lists no scopes.
- The authorization server metadata lists a registration endpoint (`/register`, dynamic client registration) and PKCE with S256. Token endpoint authentication is `none`, so there is no client secret.
- The authorization server metadata also lists the scopes `openid`, `profile`, `email` and `offline_access`.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

SmartBear's local server (`@smartbear/mcp` on npm) takes a `SWAGGER_API_KEY` instead. This plugin does not use it, and no key is stored here.

**Not checked.** The tool list behind sign-in was not read. The tool names below come from SmartBear's rule file and plugin README. Whether SmartBear accepts BoldCreate Connect's redirect address at registration was not checked.

## What the server does

SmartBear's plugin README says the server gives the agent access to:

- **Swagger registry:** search, fetch, create and update API definitions across your organizations.
- **API governance:** scan definitions against your organization's standardization rules.
- **AI-assisted design:** generate an API definition from a description and fix governance violations.
- **API portals:** create and publish portal products and documentation pages.

SmartBear's rule file names tools such as `swagger_search_apis_and_domains`, `swagger_get_api_definition`, `swagger_create_or_update_api`, `swagger_scan_api_standardization`, `swagger_create_api_from_prompt`, `swagger_standardize_api`, `swagger_list_portals`, `swagger_create_documentation_page` and `swagger_publish_portal_product`.

Some of these tools change data in the signed-in account, including API definitions and published portal content. Review the agent's plan before you approve a change.

This remote server covers Swagger Studio and Swagger Portal only. SmartBear lists separate hosted servers for BugSnag (`bugsnag.mcp.smartbear.com`) and Zephyr (`zephyr.mcp.smartbear.com`). Other SmartBear products, such as PactFlow, Reflect and QMetry, are in the local npm server only. None of these is part of this plugin.

## Rules

The `rules/` folder holds `swagger.mdc` from [SmartBear/swagger-agent-skills](https://github.com/SmartBear/swagger-agent-skills/tree/7c4ef60b915a9080afc598026804ee640eac46aa/plugins/cursor/rules) at commit `7c4ef60b915a9080afc598026804ee640eac46aa`, copied unchanged. It tells the agent when to use the Swagger tools. The rule is not always on (`alwaysApply: false`). A copy of the repository's `LICENSE` (MIT, copyright 2026 SmartBear Software) is in `rules/LICENSE`.

The folder's hash was compared with the one GitHub returns for `plugins/cursor/rules`.

**Left out.** The same repository also holds a Kiro power, a Gemini extension file and a Cursor marketplace file. They are not used here. The repository has no skills, so this plugin has none.

## Docs

- Swagger remote server: https://developer.smartbear.com/smartbear-mcp/docs/remote-swagger
- SmartBear MCP Server: https://developer.smartbear.com/smartbear-mcp
- SmartBear plugin source: https://github.com/SmartBear/swagger-agent-skills

## Logo

The Swagger mark from SmartBear's Cursor plugin, scaled to fit on a white tile with its proportions kept. It is SmartBear's mark and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT

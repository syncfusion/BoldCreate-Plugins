# Mermaid

BoldCreate plugin that connects agents to Mermaid through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create, validate, and render Mermaid diagrams, and manage them in your Mermaid account.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mermaid**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mermaid**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mermaid@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mermaid": {
      "type": "http",
      "url": "https://mcp.mermaid.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Mermaid account in the browser (OAuth). Mermaid's documentation says every tool call needs a Mermaid login, and that a free Basic account is enough.

## About the repository link

The repository this plugin was started from, [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid), is the open-source Mermaid diagramming library. It does not contain an MCP server, skills or a plugin, and nothing from it is imported. The hosted MCP server belongs to Mermaid's product site, `mermaid.ai`. The only file taken from the library repository is the logo (see Logo).

## What it does

Mermaid's documentation lists nine tools:

| Tool | What it does, in Mermaid's words |
| --- | --- |
| `validate_and_render_mermaid_diagram` | Validates Mermaid syntax and renders diagrams as PNG images with Mermaid live links. |
| `get_diagram_title` | Generates descriptive titles for Mermaid diagrams. |
| `get_diagram_summary` | Creates concise summaries of diagram content. |
| `list_tools` | Lists all available MCP tools. |
| `list_mermaid_chart_projects` | List all projects in your Mermaid account. |
| `list_mermaid_chart_diagrams` | List diagrams within a specific project. |
| `create_mermaid_chart_diagram` | Create new diagrams in Mermaid. |
| `get_mermaid_chart_diagram` | Retrieve specific diagrams from Mermaid. |
| `update_mermaid_chart_diagram` | Update existing diagrams in Mermaid. |

`create_mermaid_chart_diagram` and `update_mermaid_chart_diagram` change data in the member's Mermaid account.

**Not checked.** The tool list is behind sign-in, so `tools/list` was not called. The table comes from Mermaid's documentation page, not from the live server. A third-party note in this session counted 25 tools on the live server, which is more than the nine documented. Treat the count as unverified.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer`, a link to the protected-resource metadata and the address of the authorization server's metadata.
- The protected-resource metadata names a Supabase-hosted authorization server (`https://ummcsnegloedxcrwlucz.supabase.co/auth/v1`) and the scope `email`.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with `S256` and `plain`, and the `authorization_code` and `refresh_token` grants.
- Token endpoint methods are `client_secret_basic`, `client_secret_post` and `none`. The metadata lists the scopes `openid`, `profile`, `email`, `phone` and `offline_access`.
- A request with a made-up `Authorization` value, with or without `Bearer`, was rejected with `invalid_token`.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

Mermaid's documentation also describes a manual option: paste a Mermaid token into the `Authorization` header, with no `Bearer` prefix. This plugin does not set one, and the manual option was not tested.

## Hosts

The same server answers on two hostnames. A live check on 2026-11-13 found `https://mcp.mermaid.ai/mcp` and `https://mcp.mermaidchart.com/mcp` give the same 401 and the same authorization server. This plugin uses `mcp.mermaid.ai`, the address in Mermaid's documentation. The documentation also lists an SSE address (`/sse`); this plugin does not use it. The older `mermaidchart.com` host answered `/sse` as well, but a request there points back at the `/mcp` metadata.

## Docs

- Mermaid MCP server: https://mermaid.ai/docs/ai/mcp-server

## Logo

The Mermaid mark from [`docs/public/favicon.svg`](https://github.com/mermaid-js/mermaid/blob/develop/docs/public/favicon.svg) in the open-source library repository, which is also served at `mermaid.js.org/favicon.svg`. It is drawn in the file's own pink (`#FF3670`) on a white tile. It is a trademark of its owner and is not covered by the MIT licence of this plugin.

## License

MIT

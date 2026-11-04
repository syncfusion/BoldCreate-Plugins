# Seismic

BoldCreate plugin that connects agents to Seismic through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect Claude to Seismic MCP for generative search.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Seismic**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Seismic**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install seismic@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "seismic": {
      "type": "http",
      "url": "https://mcp.seismic.com/claude"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Seismic in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Seismic: https://www.seismic.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

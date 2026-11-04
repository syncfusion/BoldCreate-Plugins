# BioRender

BoldCreate plugin that connects agents to BioRender through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search the BioRender library, find your files, and generate new scientific figures directly from Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **BioRender**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **BioRender**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install biorender@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "biorender": {
      "type": "http",
      "url": "https://mcp.services.biorender.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to BioRender in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- BioRender: https://biorender.com/

## Logo

Neutral tile with the product's initials.

## License

MIT

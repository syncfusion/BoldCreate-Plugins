# Kajabi

BoldCreate plugin that connects agents to Kajabi through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build and grow your Kajabi business with Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Kajabi**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Kajabi**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install kajabi@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "kajabi": {
      "type": "http",
      "url": "https://mcp.kajabi.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Kajabi in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Kajabi: https://kajabi.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

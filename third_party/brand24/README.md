# Brand24

BoldCreate plugin that connects agents to Brand24 through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze online discussions.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Brand24**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Brand24**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install brand24@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "brand24": {
      "type": "http",
      "url": "https://mcp.brand24.com/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Brand24 in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Brand24: https://brand24.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

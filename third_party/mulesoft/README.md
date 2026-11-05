# MuleSoft

BoldCreate plugin that connects agents to MuleSoft through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Govern, manage, and observe your entire Agent ecosystem.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **MuleSoft**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **MuleSoft**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mulesoft@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mulesoft": {
      "type": "http",
      "url": "https://omni.mulesoft.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to MuleSoft in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- MuleSoft: https://www.mulesoft.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

# Conductor

BoldCreate plugin that connects agents to Conductor through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze your brand presence and sentiment in AI.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Conductor**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Conductor**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install conductor@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "conductor": {
      "type": "http",
      "url": "https://mcp-universal.conductor.com/mcp/v3"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Conductor in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Conductor: https://www.conductor.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

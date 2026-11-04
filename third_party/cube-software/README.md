# Cube Software

BoldCreate plugin that connects agents to Cube Software through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Bring trusted Cube financial context into Claude. Analyze performance, model scenarios, and move decisions into action, with your Cube permissions enforced on every request.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Cube Software**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Cube Software**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cube-software@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cube-software": {
      "type": "http",
      "url": "https://mcp.cubesoftware.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Cube Software in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Cube Software: https://www.cubesoftware.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

# Windmill HR

BoldCreate plugin that connects agents to Windmill HR through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Draft performance reviews, manage 1:1s, send pulses, and collect feedback in Windmill, without ever leaving Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Windmill HR**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Windmill HR**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install windmill-hr@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "windmill-hr": {
      "type": "http",
      "url": "https://mcp.gowindmill.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Windmill HR in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Windmill HR: https://gowindmill.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

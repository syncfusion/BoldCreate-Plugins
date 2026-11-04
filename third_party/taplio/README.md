# Taplio

BoldCreate plugin that connects agents to Taplio through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Run your LinkedIn by talking to Claude. Schedule content, pull inspiration from 5M+ viral posts, and get your analytics as plain answers.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Taplio**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Taplio**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install taplio@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "taplio": {
      "type": "http",
      "url": "https://mcp.taplio.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Taplio in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Taplio: https://taplio.com/

## Logo

Icon downloaded from the Claude connector directory listing for Taplio. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

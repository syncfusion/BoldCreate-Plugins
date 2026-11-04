# Solve Intelligence

BoldCreate plugin that connects agents to Solve Intelligence through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, draft, and chart patents.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Solve Intelligence**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Solve Intelligence**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install solve-intelligence@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "solve-intelligence": {
      "type": "http",
      "url": "https://api.solveintelligence.com/mcp/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Solve Intelligence in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Solve Intelligence: https://www.solveintelligence.com/

## Logo

Icon downloaded from the Claude connector directory listing for Solve Intelligence. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

# Zocks

BoldCreate plugin that connects agents to Zocks through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Analyze client conversations, patterns, and insights.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Zocks**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Zocks**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install zocks@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "zocks": {
      "type": "http",
      "url": "https://mcp.zocks.io/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Zocks in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Zocks: https://www.zocks.io/

## Logo

Icon downloaded from the Claude connector directory listing for Zocks. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

# Oxford Economics

BoldCreate plugin that connects agents to Oxford Economics through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Access Oxford Economics’ trusted economic analysis and data directly in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Oxford Economics**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Oxford Economics**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install oxford-economics@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "oxford-economics": {
      "type": "http",
      "url": "https://services.oxfordeconomics.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Oxford Economics in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Oxford Economics: https://www.oxfordeconomics.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

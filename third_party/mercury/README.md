# Mercury

BoldCreate plugin that connects agents to Mercury through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Understand your finances, organize/categorize transactions, and set up payments and transfers for approval in Mercury.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mercury**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mercury**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mercury@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mercury": {
      "type": "http",
      "url": "https://mcp.mercury.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Mercury in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Mercury: https://mercury.com/

## Logo

Icon downloaded from the Claude connector directory listing for Mercury. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

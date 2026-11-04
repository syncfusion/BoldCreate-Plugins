# DataHub

BoldCreate plugin that connects agents to DataHub through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect AI agents to enterprise data & context.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **DataHub**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **DataHub**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install datahub@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "datahub": {
      "type": "http",
      "url": "https://mcp.datahub.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to DataHub in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- DataHub: https://datahub.com/

## Logo

Icon downloaded from the Claude connector directory listing for DataHub. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

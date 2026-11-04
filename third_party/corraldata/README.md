# CorralData

BoldCreate plugin that connects agents to CorralData through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect Claude to CorralData so it can query your data, build dashboards, and manage boards and data apps without leaving the conversation.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CorralData**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CorralData**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install corraldata@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "corraldata": {
      "type": "http",
      "url": "https://mcp.corraldata.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CorralData in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- CorralData: https://corraldata.com/

## Logo

Icon downloaded from the Claude connector directory listing for CorralData, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

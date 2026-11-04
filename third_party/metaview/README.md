# Metaview

BoldCreate plugin that connects agents to Metaview through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

The AI platform for recruiting.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Metaview**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Metaview**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install metaview@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "metaview": {
      "type": "http",
      "url": "https://mcp.metaview.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Metaview in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Metaview: https://metaview.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Metaview. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

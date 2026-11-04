# EULER

BoldCreate plugin that connects agents to EULER through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage your partner program and access your Partner Data Lake with Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **EULER**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **EULER**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install euler@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "euler": {
      "type": "http",
      "url": "https://mcp.eulerapp.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to EULER in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- EULER: https://eulerapp.com/

## Logo

Icon downloaded from the Claude connector directory listing for EULER, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

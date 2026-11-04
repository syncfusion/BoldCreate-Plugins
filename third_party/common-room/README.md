# Common Room

BoldCreate plugin that connects agents to Common Room through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your GTM Copilot.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Common Room**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Common Room**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install common-room@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "common-room": {
      "type": "http",
      "url": "https://mcp.commonroom.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Common Room in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Common Room: https://commonroom.io/

## Logo

Icon downloaded from the Claude connector directory listing for Common Room. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

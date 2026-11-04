# Softr

BoldCreate plugin that connects agents to Softr through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build internal tools, workflows and databases all in one platform.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Softr**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Softr**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install softr@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "softr": {
      "type": "http",
      "url": "https://mcp.softr.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Softr in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Softr: https://www.softr.io/

## Logo

Icon downloaded from the Claude connector directory listing for Softr, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

# Lightfield

BoldCreate plugin that connects agents to Lightfield through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

CRM that remembers everything and works for you.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Lightfield**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Lightfield**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install lightfield@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "lightfield": {
      "type": "http",
      "url": "https://mcp.lightfield.app/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Lightfield in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Lightfield: https://lightfield.app/

## Logo

Icon downloaded from the Claude connector directory listing for Lightfield. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

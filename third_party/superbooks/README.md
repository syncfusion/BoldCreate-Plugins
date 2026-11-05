# SuperBooks

BoldCreate plugin that connects agents to SuperBooks through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Financial OS for small businesses.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **SuperBooks**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **SuperBooks**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install superbooks@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "superbooks": {
      "type": "http",
      "url": "https://app.superbooks.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to SuperBooks in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- SuperBooks: https://devino.ca/

## Logo

Icon downloaded from the Claude connector directory listing for SuperBooks, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

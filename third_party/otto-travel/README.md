# Otto Travel

BoldCreate plugin that connects agents to Otto Travel through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Plan, book, and manage business travel.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Otto Travel**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Otto Travel**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install otto-travel@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "otto-travel": {
      "type": "http",
      "url": "https://api.ottotheagent.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Otto Travel in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Otto Travel: https://www.ottotheagent.com/

## Logo

Icon downloaded from the Claude connector directory listing for Otto Travel, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

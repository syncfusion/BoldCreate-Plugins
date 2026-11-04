# Fullstory

BoldCreate plugin that connects agents to Fullstory through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Product analytics with receipts. Build segments, compute metrics, and analyze conversions from your Fullstory behavioral data. Then pull the real sessions to back it up.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fullstory**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fullstory**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fullstory@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fullstory": {
      "type": "http",
      "url": "https://api.fullstory.com/mcp/fullstory"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fullstory in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fullstory: https://www.fullstory.com/

## Logo

Icon downloaded from the Claude connector directory listing for Fullstory. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

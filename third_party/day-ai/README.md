# Day AI

BoldCreate plugin that connects agents to Day AI through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Know everything about your prospects & customers with CRMx.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Day AI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Day AI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install day-ai@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "day-ai": {
      "type": "http",
      "url": "https://day.ai/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Day AI in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Day AI: https://day.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Day AI, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

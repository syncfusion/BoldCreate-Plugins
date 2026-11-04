# Insider One

BoldCreate plugin that connects agents to Insider One through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query Insider One CDP and APIs using natural language.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Insider One**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Insider One**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install insider-one@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "insider-one": {
      "type": "http",
      "url": "https://mcp.insiderone.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Insider One in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Insider One: https://insiderone.com/

## Logo

Icon downloaded from the Claude connector directory listing for Insider One, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

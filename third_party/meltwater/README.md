# Meltwater

BoldCreate plugin that connects agents to Meltwater through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and analyze billions of news articles and social posts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Meltwater**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Meltwater**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install meltwater@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "meltwater": {
      "type": "http",
      "url": "https://api.meltwater.com/v2/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Meltwater in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Meltwater: https://www.meltwater.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

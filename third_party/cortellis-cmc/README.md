# Cortellis CMC Intelligence

BoldCreate plugin that connects agents to Cortellis CMC Intelligence through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Trusted regulatory CMC insights, powered by Clarivate’s Cortellis CMC Intelligence.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Cortellis CMC Intelligence**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Cortellis CMC Intelligence**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cortellis-cmc@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cortellis-cmc": {
      "type": "http",
      "url": "https://api.clarivate.com/lifesciences/mcp-cmc/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Cortellis CMC Intelligence in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Cortellis CMC Intelligence: https://clarivate.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

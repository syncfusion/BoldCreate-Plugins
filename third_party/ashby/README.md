# Ashby

BoldCreate plugin that connects agents to Ashby through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, analyze, and act on your recruiting data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Ashby**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Ashby**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install ashby@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "ashby": {
      "type": "http",
      "url": "https://mcp.ashbyhq.com/mcp/v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Ashby in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Ashby: https://www.ashbyhq.com/

## Logo

Neutral tile with the product's initials.

## License

MIT

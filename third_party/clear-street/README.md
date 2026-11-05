# Clear Street

BoldCreate plugin that connects agents to Clear Street through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Research and Analyze Stocks and Options.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Clear Street**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Clear Street**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install clear-street@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "clear-street": {
      "type": "http",
      "url": "https://api.clearstreet.com/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Clear Street in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Clear Street: https://www.clearstreet.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

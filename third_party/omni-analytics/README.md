# Omni Analytics

BoldCreate plugin that connects agents to Omni Analytics through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Query your data using natural language through Omni's semantic model.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Omni Analytics**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Omni Analytics**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install omni-analytics@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "omni-analytics": {
      "type": "http",
      "url": "https://callbacks.omniapp.co/callback/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Omni Analytics in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Omni Analytics: https://www.omni.co/

## Logo

Neutral tile with the product's initials.}

## License

MIT

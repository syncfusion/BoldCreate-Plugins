# Seamless

BoldCreate plugin that connects agents to Seamless through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find leads and automate outreach.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Seamless**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Seamless**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install seamless@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "seamless": {
      "type": "http",
      "url": "https://mcp.seamless.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Seamless in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Seamless: https://seamless.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT

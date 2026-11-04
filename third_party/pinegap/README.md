# Pinegap

BoldCreate plugin that connects agents to Pinegap through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

AI-powered Equity Research Platform.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Pinegap**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Pinegap**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pinegap@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "pinegap": {
      "type": "http",
      "url": "https://mcp.pinegap.ai/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Pinegap in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Pinegap: https://www.pinegap.ai/

## Logo

Neutral tile with the product's initials.}

## License

MIT

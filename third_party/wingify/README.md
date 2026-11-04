# Wingify

BoldCreate plugin that connects agents to Wingify through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Optimize digital experiences directly from Claude and supercharge your CRO workflow.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Wingify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Wingify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install wingify@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "wingify": {
      "type": "http",
      "url": "https://mcp.wingify.ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Wingify in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Wingify: https://vwo.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

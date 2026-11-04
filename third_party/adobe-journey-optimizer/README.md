# Adobe Journey Optimizer

BoldCreate plugin that connects agents to Adobe Journey Optimizer through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Understand and troubleshoot your Journeys and Campaigns.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Adobe Journey Optimizer**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Adobe Journey Optimizer**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install adobe-journey-optimizer@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "adobe-journey-optimizer": {
      "type": "http",
      "url": "https://ajo-mcp.adobe.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Adobe Journey Optimizer in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Adobe Journey Optimizer: https://adobe.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.

## License

MIT

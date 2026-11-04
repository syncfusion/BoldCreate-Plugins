# Metricool Social Media Management

BoldCreate plugin that connects agents to Metricool Social Media Management through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Schedule posts, analyze, and manage social media with AI.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Metricool Social Media Management**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Metricool Social Media Management**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install metricool@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "metricool": {
      "type": "http",
      "url": "https://ai.metricool.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Metricool Social Media Management in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Metricool Social Media Management: https://metricool.com/

## Logo

Neutral tile with the product's initials.

## License

MIT

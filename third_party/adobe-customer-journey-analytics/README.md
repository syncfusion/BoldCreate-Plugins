# Adobe Customer Journey Analytics

BoldCreate plugin that connects agents to Adobe Customer Journey Analytics through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Run reports using your metrics, dimensions, and segments.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Adobe Customer Journey Analytics**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Adobe Customer Journey Analytics**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install adobe-customer-journey-analytics@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "adobe-customer-journey-analytics": {
      "type": "http",
      "url": "https://cja-mcp.adobe.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Adobe Customer Journey Analytics in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Adobe Customer Journey Analytics: https://business.adobe.com/products/adobe-analytics/customer-journey-analytics.html (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT

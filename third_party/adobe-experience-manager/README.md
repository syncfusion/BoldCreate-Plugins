# Adobe Experience Manager

BoldCreate plugin that connects agents to Adobe Experience Manager through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage your Adobe Experience Manager content.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Adobe Experience Manager**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Adobe Experience Manager**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install adobe-experience-manager@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "adobe-experience-manager": {
      "type": "http",
      "url": "https://mcp.adobeaemcloud.com/adobe/mcp/aem"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Adobe Experience Manager in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Adobe Experience Manager: https://business.adobe.com/products/experience-manager (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.

## License

MIT

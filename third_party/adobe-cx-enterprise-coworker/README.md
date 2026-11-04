# Adobe CX Enterprise Coworker

BoldCreate plugin that connects agents to Adobe CX Enterprise Coworker through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Drive CX Workflows.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Adobe CX Enterprise Coworker**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Adobe CX Enterprise Coworker**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install adobe-cx-enterprise-coworker@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "adobe-cx-enterprise-coworker": {
      "type": "http",
      "url": "https://mcp.coworker.experience.adobe.io/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Adobe CX Enterprise Coworker in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Adobe CX Enterprise Coworker: https://business.adobe.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.

## License

MIT

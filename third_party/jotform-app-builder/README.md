# Jotform App Builder

BoldCreate plugin that connects agents to Jotform App Builder through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build and manage no-code apps with AI. Create CRM apps, event apps, school apps, and internal tools. Customize layouts, automate workflows, and publish and share apps.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Jotform App Builder**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Jotform App Builder**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install jotform-app-builder@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "jotform-app-builder": {
      "type": "http",
      "url": "https://mcp.jotform.com/mcp-jotform-apps-v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Jotform App Builder in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Jotform App Builder: https://www.jotform.com/

## Logo

Icon downloaded from the Claude connector directory listing for Jotform App Builder, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

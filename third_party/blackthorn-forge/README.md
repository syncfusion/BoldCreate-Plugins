# Blackthorn Forge MCP for Native Salesforce Event Management

BoldCreate plugin that connects agents to Blackthorn Forge MCP for Native Salesforce Event Management through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Blackthorn's MCP server for Salesforce events: create, query, and report on events, attendees, tickets, sessions, forms, and email campaigns, over 100 available tools, live against your org.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Blackthorn Forge MCP for Native Salesforce Event Management**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Blackthorn Forge MCP for Native Salesforce Event Management**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install blackthorn-forge@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "blackthorn-forge": {
      "type": "http",
      "url": "https://forge.blackthorn.io/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Blackthorn Forge MCP for Native Salesforce Event Management in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Blackthorn Forge MCP for Native Salesforce Event Management: https://blackthorn.io/

## Logo

Icon downloaded from the Claude connector directory listing for Blackthorn Forge MCP for Native Salesforce Event Management, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

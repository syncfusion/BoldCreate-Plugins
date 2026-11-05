# Nutshell CRM

BoldCreate plugin that connects agents to Nutshell CRM through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect Claude to Nutshell CRM to search leads, contacts, and companies, pull sales reports, and review deal timelines - all without leaving chat.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Nutshell CRM**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Nutshell CRM**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install nutshell-crm@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "nutshell-crm": {
      "type": "http",
      "url": "https://app.nutshell.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Nutshell CRM in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Nutshell CRM: https://www.nutshell.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

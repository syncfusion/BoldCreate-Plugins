# Chariot

BoldCreate plugin that connects agents to Chariot through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage your nonprofit's DAF donations and deposits.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Chariot**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Chariot**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install chariot@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "chariot": {
      "type": "http",
      "url": "https://api.givechariot.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Chariot in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Chariot: https://givechariot.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

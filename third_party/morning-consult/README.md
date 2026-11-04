# Morning Consult

BoldCreate plugin that connects agents to Morning Consult through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Global market intelligence: brands, economy & politics.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Morning Consult**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Morning Consult**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install morning-consult@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "morning-consult": {
      "type": "http",
      "url": "https://api.morningconsult.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Morning Consult in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- Morning Consult: https://morningconsult.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

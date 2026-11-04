# Fever Event Discovery

BoldCreate plugin that connects agents to Fever Event Discovery through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Discover live entertainment events worldwide.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fever Event Discovery**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fever Event Discovery**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fever-event-discovery@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fever-event-discovery": {
      "type": "http",
      "url": "https://data-search.apigw.feverup.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fever Event Discovery in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fever Event Discovery: https://feverup.com/

## Logo

Icon downloaded from the Claude connector directory listing for Fever Event Discovery. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

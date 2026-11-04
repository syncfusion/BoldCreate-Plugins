# Coralogix

BoldCreate plugin that connects agents to Coralogix through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Explore and debug your Coralogix observability data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Coralogix**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Coralogix**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install coralogix@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "coralogix": {
      "type": "http",
      "url": "https://api.eu2.coralogix.com/mgmt/api/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Coralogix in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Coralogix: https://coralogix.com/

## Logo

Icon downloaded from the Claude connector directory listing for Coralogix. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

# Fitch Solutions

BoldCreate plugin that connects agents to Fitch Solutions through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Fitch credit intelligence, inside your AI workflow.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fitch Solutions**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fitch Solutions**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fitch-solutions@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "fitch-solutions": {
      "type": "http",
      "url": "https://api.fitch.group/nexus/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Fitch Solutions in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Fitch Solutions: https://fitchsolutions.com/

## Logo

Icon downloaded from the Claude connector directory listing for Fitch Solutions, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

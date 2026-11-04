# Filevine

BoldCreate plugin that connects agents to Filevine through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect Claude to Filevine through the Filevine API to securely access and work with Filevine data and functionality.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Filevine**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Filevine**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install filevine@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "filevine": {
      "type": "http",
      "url": "https://api.filevineapp.com/mcp/api-v2"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Filevine in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Filevine: https://www.filevine.com/

## Logo

Icon downloaded from the Claude connector directory listing for Filevine, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

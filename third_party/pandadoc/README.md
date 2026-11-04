# PandaDoc

BoldCreate plugin that connects agents to PandaDoc through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create, send, sign and track documents.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **PandaDoc**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **PandaDoc**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pandadoc@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "pandadoc": {
      "type": "http",
      "url": "https://mcp.pandadoc.com/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to PandaDoc in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- PandaDoc: https://www.pandadoc.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for PandaDoc. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

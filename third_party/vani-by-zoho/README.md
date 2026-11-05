# Vani by Zoho

BoldCreate plugin that connects agents to Vani by Zoho through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Create diagrams, visualize workflows, and manage Spaces in Vani.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Vani by Zoho**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Vani by Zoho**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install vani-by-zoho@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "vani-by-zoho": {
      "type": "http",
      "url": "https://app.vanihq.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Vani by Zoho in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Vani by Zoho: https://zoho.com/

## Logo

Icon downloaded from the Claude connector directory listing for Vani by Zoho. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

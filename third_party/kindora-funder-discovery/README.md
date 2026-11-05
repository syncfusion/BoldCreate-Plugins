# Kindora Funder Discovery

BoldCreate plugin that connects agents to Kindora Funder Discovery through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find funders who support causes like yours.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Kindora Funder Discovery**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Kindora Funder Discovery**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install kindora-funder-discovery@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "kindora-funder-discovery": {
      "type": "http",
      "url": "https://mcp.kindora.co/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Kindora Funder Discovery: https://www.kindora.co/

## Logo

Neutral tile with the product's initials.}

## License

MIT

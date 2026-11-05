# TaxAct

BoldCreate plugin that connects agents to TaxAct through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Estimate your refund, and check what documents you need.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **TaxAct**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **TaxAct**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install taxact@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "taxact": {
      "type": "http",
      "url": "https://mcp.taxact.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- TaxAct: https://www.taxact.com/

## Logo

Icon downloaded from the Claude connector directory listing for TaxAct. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

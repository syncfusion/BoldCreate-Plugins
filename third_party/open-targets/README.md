# Open Targets

BoldCreate plugin that connects agents to Open Targets through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Drug target discovery and prioritisation platform.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Open Targets**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Open Targets**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install open-targets@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "open-targets": {
      "type": "http",
      "url": "https://mcp.platform.opentargets.org/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Open Targets: https://www.opentargets.org/

## Logo

Neutral tile with the product's initials.

## License

MIT

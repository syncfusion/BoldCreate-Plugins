# Floot

BoldCreate plugin that connects agents to Floot through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build and host websites and mobile apps using your own Claude subscription.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Floot**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Floot**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install floot@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "floot": {
      "type": "http",
      "url": "https://mcp.floot.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Floot: https://floot.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT

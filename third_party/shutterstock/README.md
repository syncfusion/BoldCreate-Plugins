# Shutterstock

BoldCreate plugin that connects agents to Shutterstock through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Spark ideas with Shutterstock.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Shutterstock**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Shutterstock**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install shutterstock@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "shutterstock": {
      "type": "http",
      "url": "https://www.shutterstock.com/cciq/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Shutterstock: https://www.shutterstock.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Neutral tile with the product's initials.}

## License

MIT

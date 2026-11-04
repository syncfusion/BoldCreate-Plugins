# Coursera

BoldCreate plugin that connects agents to Coursera through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Transform your prompts into active skill-building.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Coursera**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Coursera**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install coursera@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "coursera": {
      "type": "http",
      "url": "https://api.coursera.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Coursera: https://www.coursera.org/

## Logo

Coursera mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0056D2, on a padded white tile. The mark is a trademark of its owner.

## License

MIT

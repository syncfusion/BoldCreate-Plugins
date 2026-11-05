# Internet Computer

BoldCreate plugin that connects agents to Internet Computer through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Ask questions and perform actions across Internet Computer (ICP) apps using your Internet Identity.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Internet Computer**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Internet Computer**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install internet-computer@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "internet-computer": {
      "type": "http",
      "url": "https://mcp.internetcomputer.org/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Internet Computer in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Internet Computer: https://dfinity.org/

## Logo

Internet Computer mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #3B00B9, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT

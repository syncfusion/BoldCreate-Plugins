# Black Diamond

BoldCreate plugin that connects agents to Black Diamond through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Client, portfolio, and performance data for advisors.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Black Diamond**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Black Diamond**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install black-diamond@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "black-diamond": {
      "type": "http",
      "url": "https://bd3.bdreporting.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Black Diamond in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Black Diamond: https://www.sscblackdiamond.com/

## Logo

Icon downloaded from the Claude connector directory listing for Black Diamond, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

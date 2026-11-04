# AllTrails

BoldCreate plugin that connects agents to AllTrails through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find your next hike.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AllTrails**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AllTrails**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install alltrails@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "alltrails": {
      "type": "http",
      "url": "https://www.alltrails.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- AllTrails: https://www.alltrails.com/

## Logo

Icon downloaded from the Claude connector directory listing for AllTrails. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

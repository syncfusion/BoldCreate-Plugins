# pg-aiguide

BoldCreate plugin that connects agents to pg-aiguide through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search pg and Tiger docs, learn database skills.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **pg-aiguide**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **pg-aiguide**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pg-aiguide@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "pg-aiguide": {
      "type": "http",
      "url": "https://mcp.tigerdata.com/docs"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- pg-aiguide: https://tigerdata.com/

## Logo

Icon downloaded from the Claude connector directory listing for pg-aiguide. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

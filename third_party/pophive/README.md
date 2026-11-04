# PopHIVE

BoldCreate plugin that connects agents to PopHIVE through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Yale's harmonized US public health surveillance data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **PopHIVE**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **PopHIVE**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pophive@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "pophive": {
      "type": "http",
      "url": "https://mcp.pophive.org/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- PopHIVE: https://www.pophive.org/

## Logo

Icon downloaded from the Claude connector directory listing for PopHIVE. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

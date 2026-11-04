# Courtroom5

BoldCreate plugin that connects agents to Courtroom5 through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Civil legal guidance for self-represented litigants.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Courtroom5**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Courtroom5**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install courtroom5@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "courtroom5": {
      "type": "http",
      "url": "https://mcp.courtroom5.com/v1"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Courtroom5: https://courtroom5.com/

## Logo

Icon downloaded from the Claude connector directory listing for Courtroom5. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

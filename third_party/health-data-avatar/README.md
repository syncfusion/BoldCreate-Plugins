# Health Data Avatar (HDA)

BoldCreate plugin that connects agents to Health Data Avatar (HDA) through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Your complete health history structured for Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Health Data Avatar (HDA)**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Health Data Avatar (HDA)**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install health-data-avatar@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "health-data-avatar": {
      "type": "http",
      "url": "https://hda-mcp.healthdataavatar.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Health Data Avatar (HDA) in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Health Data Avatar (HDA): https://healthdataavatar.com/

## Logo

Icon downloaded from the Claude connector directory listing for Health Data Avatar (HDA), converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

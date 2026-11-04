# alphaXiv

BoldCreate plugin that connects agents to alphaXiv through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Fast search and full-text access over arXiv pre-prints.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **alphaXiv**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **alphaXiv**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install alphaxiv@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "alphaxiv": {
      "type": "http",
      "url": "https://api.alphaxiv.org/mcp/v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to alphaXiv in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- alphaXiv: https://www.alphaxiv.org/

## Logo

Icon downloaded from the Claude connector directory listing for alphaXiv, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

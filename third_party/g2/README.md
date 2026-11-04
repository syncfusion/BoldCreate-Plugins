# G2

BoldCreate plugin that connects agents to G2 through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Bring real buyer signals into AI workflows.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **G2**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **G2**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install g2@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "g2": {
      "type": "http",
      "url": "https://mcp.g2.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to G2 in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- G2: https://g2.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for G2, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

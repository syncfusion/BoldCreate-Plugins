# Bloomberg Law

BoldCreate plugin that connects agents to Bloomberg Law through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Legal intelligence powered by Bloomberg AI.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Bloomberg Law**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Bloomberg Law**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install bloomberg-law@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "bloomberg-law": {
      "type": "http",
      "url": "https://gw.mcp.bindg.ai/blaw/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Bloomberg Law in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Bloomberg Law: https://www.bloombergindustry.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Bloomberg Law, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

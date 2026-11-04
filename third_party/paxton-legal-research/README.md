# Paxton Legal Research

BoldCreate plugin that connects agents to Paxton Legal Research through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Research U.S. law in Claude—with citations you can open and verify.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Paxton Legal Research**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Paxton Legal Research**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install paxton-legal-research@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "paxton-legal-research": {
      "type": "http",
      "url": "https://paxton-mcp-connector-xmfvvq3waa-uc.a.run.app/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Paxton Legal Research in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Paxton Legal Research: https://www.paxton.ai/

## Logo

Icon downloaded from the Claude connector directory listing for Paxton Legal Research, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

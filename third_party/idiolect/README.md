# Idiolect

BoldCreate plugin that connects agents to Idiolect through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Make Claude write in your real writing voice.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Idiolect**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Idiolect**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install idiolect@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "idiolect": {
      "type": "http",
      "url": "https://idiolect.app/api/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Idiolect in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Idiolect: https://idiolect.app/

## Logo

Icon downloaded from the Claude connector directory listing for Idiolect. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

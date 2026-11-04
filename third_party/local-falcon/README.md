# Local Falcon

BoldCreate plugin that connects agents to Local Falcon through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

AI visibility and local search intelligence platform.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Local Falcon**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Local Falcon**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install local-falcon@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "local-falcon": {
      "type": "http",
      "url": "https://mcp.localfalcon.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Local Falcon in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Local Falcon: https://www.localfalcon.com/

## Logo

Icon downloaded from the Claude connector directory listing for Local Falcon, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

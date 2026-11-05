# Control Plane

BoldCreate plugin that connects agents to Control Plane through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Deploy, scale, and debug cloud apps from one platform.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Control Plane**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Control Plane**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install control-plane@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "control-plane": {
      "type": "http",
      "url": "https://mcp.cpln.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Control Plane in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Control Plane: https://controlplane.com/

## Logo

Icon downloaded from the Claude connector directory listing for Control Plane, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

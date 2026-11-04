# Roboflow

BoldCreate plugin that connects agents to Roboflow through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build, search, and run computer vision with Roboflow.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Roboflow**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Roboflow**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install roboflow@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "roboflow": {
      "type": "http",
      "url": "https://mcp.roboflow.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Roboflow in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Roboflow: https://roboflow.com/

## Logo

Icon downloaded from the Claude connector directory listing for Roboflow. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

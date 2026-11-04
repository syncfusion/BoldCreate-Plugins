# Profound

BoldCreate plugin that connects agents to Profound through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Pull Profound Visibility, Citation, & AI Bot Visit Data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Profound**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Profound**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install profound@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "profound": {
      "type": "http",
      "url": "https://mcp.tryprofound.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Profound in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Profound: https://tryprofound.com/

## Logo

Icon downloaded from the Claude connector directory listing for Profound. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

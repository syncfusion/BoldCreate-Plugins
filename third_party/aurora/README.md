# Aurora

BoldCreate plugin that connects agents to Aurora through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search your Consilio matters, docs, and more.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Aurora**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Aurora**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install aurora@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "aurora": {
      "type": "http",
      "url": "https://mcp.ai.consilio.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Aurora in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Aurora: https://www.consilio.com/

## Logo

Icon downloaded from the Claude connector directory listing for Aurora, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

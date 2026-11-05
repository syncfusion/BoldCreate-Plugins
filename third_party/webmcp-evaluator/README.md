# WebMCP Evaluator

BoldCreate plugin that connects agents to WebMCP Evaluator through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Check whether a public page is ready for agents: tools observed, tools to add, what must never be exposed.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **WebMCP Evaluator**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **WebMCP Evaluator**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install webmcp-evaluator@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "webmcp-evaluator": {
      "type": "http",
      "url": "https://mcp.webmcp-eval.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to WebMCP Evaluator in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- WebMCP Evaluator: https://www.sunbusinessgroup.com/

## Logo

Icon downloaded from the Claude connector directory listing for WebMCP Evaluator, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

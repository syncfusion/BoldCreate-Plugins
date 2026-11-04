# HyperFrames by HeyGen

BoldCreate plugin that connects agents to HyperFrames by HeyGen through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build animated slides and motion graphics with HTML.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **HyperFrames by HeyGen**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **HyperFrames by HeyGen**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install heygen-hyperframes@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "heygen-hyperframes": {
      "type": "http",
      "url": "https://mcp.heygen.com/mcp/hyperframes"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to HyperFrames by HeyGen in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- HyperFrames by HeyGen: https://www.heygen.com/

## Logo

Neutral tile with the product's initials.

## License

MIT

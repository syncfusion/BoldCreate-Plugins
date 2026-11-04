# Phoenix by HG Insights

BoldCreate plugin that connects agents to Phoenix by HG Insights through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

AI-powered B2B data intelligence & analytics.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Phoenix by HG Insights**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Phoenix by HG Insights**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install phoenix-by-hg-insights@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "phoenix-by-hg-insights": {
      "type": "http",
      "url": "https://phoenix.hginsights.com/api/ai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Phoenix by HG Insights in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Phoenix by HG Insights: https://hginsights.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Phoenix by HG Insights. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

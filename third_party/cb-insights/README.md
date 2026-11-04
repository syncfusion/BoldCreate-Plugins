# CB Insights

BoldCreate plugin that connects agents to CB Insights through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Predictive intelligence on private companies.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CB Insights**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CB Insights**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cb-insights@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cb-insights": {
      "type": "http",
      "url": "https://mcp.cbinsights.com/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CB Insights in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- CB Insights: https://www.cbinsights.com/

## Logo

Icon downloaded from the Claude connector directory listing for CB Insights, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

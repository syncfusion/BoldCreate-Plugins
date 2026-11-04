# D&B Risk Analytics

BoldCreate plugin that connects agents to D&B Risk Analytics through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Execute risk workflows powered by the D&B Commercial Graph™.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **D&B Risk Analytics**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **D&B Risk Analytics**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install d-b-risk-analytics@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "d-b-risk-analytics": {
      "type": "http",
      "url": "https://agents.riskanalytics.dnb.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to D&B Risk Analytics in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- D&B Risk Analytics: https://www.dnb.com/

## Logo

D&B Risk Analytics mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #B03931, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT

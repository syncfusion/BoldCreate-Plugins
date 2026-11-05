# viaNexus vAST

BoldCreate plugin that connects agents to viaNexus vAST through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Power AI workflows with viaNexus: a financial data marketplace delivering prices, news, fundamentals, and global macro economic data directly from trusted provider partners.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **viaNexus vAST**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **viaNexus vAST**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install vianexus-vast@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "vianexus-vast": {
      "type": "http",
      "url": "https://vast.blueskyapi.com/vianexus/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to viaNexus vAST in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- viaNexus vAST: https://vianexus.com/

## Logo

Neutral tile with the product's initials.}

## License

MIT

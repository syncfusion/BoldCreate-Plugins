# freee

BoldCreate plugin that connects agents to freee through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

freeeの各種プロダクトへのデータ下書作成、自動登録、登録済みデータの分析 / Draft, register, and analyze data across freee products.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **freee**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **freee**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install freee@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "freee": {
      "type": "http",
      "url": "https://mcp.freee.co.jp/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to freee in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- freee: https://corp.freee.co.jp/

## Logo

Neutral tile with the product's initials.}

## License

MIT

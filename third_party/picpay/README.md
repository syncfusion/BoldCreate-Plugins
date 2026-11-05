# PicPay

BoldCreate plugin that connects agents to PicPay through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

PicPay. Seu próximo banco.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **PicPay**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **PicPay**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install picpay@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "picpay": {
      "type": "http",
      "url": "https://mcp.svc.picpay.com/v2/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to PicPay in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- PicPay: https://picpay.com/

## Logo

PicPay mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #21C25E, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT

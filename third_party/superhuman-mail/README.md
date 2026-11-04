# Superhuman Mail

BoldCreate plugin that connects agents to Superhuman Mail through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

The most productive email app ever, for Gmail & Outlook.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Superhuman Mail**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Superhuman Mail**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install superhuman-mail@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "superhuman-mail": {
      "type": "http",
      "url": "https://mcp.mail.superhuman.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Superhuman Mail in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Superhuman Mail: https://superhuman.com/products/mail

## Logo

Neutral tile with the product's initials.

## License

MIT

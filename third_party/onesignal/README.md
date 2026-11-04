# OneSignal

BoldCreate plugin that connects agents to OneSignal through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Agentic access to OneSignal’s customer engagement platform for messaging, users, and analytics.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **OneSignal**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **OneSignal**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install onesignal@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "onesignal": {
      "type": "http",
      "url": "https://api.onesignal.com/mcp/oauth"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to OneSignal in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 without OAuth metadata, so the server is reachable and asks for credentials, but the sign-in method is an assumption. No tool call has been made.

## Docs

- OneSignal: https://onesignal.com/

## Logo

Icon downloaded from the Claude connector directory listing for OneSignal. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

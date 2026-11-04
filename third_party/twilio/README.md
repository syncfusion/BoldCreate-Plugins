# Twilio

BoldCreate plugin that connects agents to Twilio through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build powerful communications and customer engagement.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Twilio**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Twilio**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install twilio@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "twilio": {
      "type": "http",
      "url": "https://mcp.twilio.com/docs"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Twilio: https://twilio.com/

## Logo

Icon downloaded from the Claude connector directory listing for Twilio, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

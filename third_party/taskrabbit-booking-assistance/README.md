# Taskrabbit Booking Assistance

BoldCreate plugin that connects agents to Taskrabbit Booking Assistance through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Find & book local Taskrabbit services near you.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Taskrabbit Booking Assistance**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Taskrabbit Booking Assistance**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install taskrabbit-booking-assistance@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "taskrabbit-booking-assistance": {
      "type": "http",
      "url": "https://mcp.taskrabbit.com/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Taskrabbit Booking Assistance: https://www.taskrabbit.com/

## Logo

Icon downloaded from the Claude connector directory listing for Taskrabbit Booking Assistance. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

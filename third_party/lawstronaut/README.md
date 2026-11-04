# Lawstronaut

BoldCreate plugin that connects agents to Lawstronaut through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

52+ million verified legal records, sourced directly from official authorities.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Lawstronaut**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Lawstronaut**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install lawstronaut@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "lawstronaut": {
      "type": "http",
      "url": "https://mcp.lawstronaut.com/"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Lawstronaut: https://lawstronaut.com/

## Logo

Icon downloaded from the Claude connector directory listing for Lawstronaut, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

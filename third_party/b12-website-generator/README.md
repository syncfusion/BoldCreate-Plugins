# Website Generator by B12

BoldCreate plugin that connects agents to Website Generator by B12 through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Build a website or web app in minutes! Generate, design, write code, and create copy for your website. Powered by B12. Contact: hello@b12.io.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Website Generator by B12**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Website Generator by B12**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install b12-website-generator@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "b12-website-generator": {
      "type": "http",
      "url": "https://mcp.b12.io/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Website Generator by B12: https://www.b12.io/

## Logo

Icon downloaded from the Claude connector directory listing for Website Generator by B12, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

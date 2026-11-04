# Autodesk Product Help

BoldCreate plugin that connects agents to Autodesk Product Help through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Securely access Autodesk's help documentation.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Autodesk Product Help**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Autodesk Product Help**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install autodesk-help@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "autodesk-help": {
      "type": "http",
      "url": "https://developer.api.autodesk.com/knowledge/public/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- Autodesk Product Help: https://www.autodesk.com/ (vendor homepage; the sandbox could not load it, so the link is not verified)

## Logo

Icon downloaded from the Claude connector directory listing for Autodesk Product Help. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

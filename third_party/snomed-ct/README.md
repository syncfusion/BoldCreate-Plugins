# SNOMED CT Terminology

BoldCreate plugin that connects agents to SNOMED CT Terminology through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, validate, and expand SNOMED CT concepts, directly from SNOMED International.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **SNOMED CT Terminology**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **SNOMED CT Terminology**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install snomed-ct@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "snomed-ct": {
      "type": "http",
      "url": "https://snowstorm-mcp.snomedtools.org/mcp"
    }
  }
}
```

## Setup

No settings.

The server answered anonymous requests without asking for sign-in, so no account is needed to connect. Some tools may still need one.

The endpoint comes from the Claude connector directory. An anonymous initialize and tools/list request returned a tool list. No tool was called.

## Docs

- SNOMED CT Terminology: https://snomed.org/

## Logo

Icon downloaded from the Claude connector directory listing for SNOMED CT Terminology, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

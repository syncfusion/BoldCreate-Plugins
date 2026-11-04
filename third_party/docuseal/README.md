# DocuSeal

BoldCreate plugin that connects agents to DocuSeal through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Sign, send & manage documents with DocuSeal.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **DocuSeal**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **DocuSeal**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install docuseal@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "docuseal": {
      "type": "http",
      "url": "https://docuseal.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to DocuSeal in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- DocuSeal: https://www.docuseal.com/

## Logo

Icon downloaded from the Claude connector directory listing for DocuSeal. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

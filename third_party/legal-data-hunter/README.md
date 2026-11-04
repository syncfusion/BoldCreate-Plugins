# Legal Data Hunter

BoldCreate plugin that connects agents to Legal Data Hunter through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search 23M+ legal docs in 160+ jurisdictions.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Legal Data Hunter**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Legal Data Hunter**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install legal-data-hunter@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "legal-data-hunter": {
      "type": "http",
      "url": "https://legaldatahunter.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Legal Data Hunter in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Legal Data Hunter: https://legaldatahunter.com/

## Logo

Icon downloaded from the Claude connector directory listing for Legal Data Hunter. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

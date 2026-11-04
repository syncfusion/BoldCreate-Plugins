# Inductive Bio

BoldCreate plugin that connects agents to Inductive Bio through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

State-of-the-art ADMET prediction models for drug discovery.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Inductive Bio**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Inductive Bio**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install inductive-bio@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "inductive-bio": {
      "type": "http",
      "url": "https://api.inductive.bio/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Inductive Bio in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Inductive Bio: https://inductive.bio/

## Logo

Icon downloaded from the Claude connector directory listing for Inductive Bio, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

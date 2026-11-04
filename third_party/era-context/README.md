# Era Context

BoldCreate plugin that connects agents to Era Context through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage your personal finances using Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Era Context**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Era Context**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install era-context@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "era-context": {
      "type": "http",
      "url": "https://context.era.app/"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Era Context in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Era Context: https://era.app/

## Logo

Icon downloaded from the Claude connector directory listing for Era Context. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

# Evernote

BoldCreate plugin that connects agents to Evernote through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect Evernote to search, edit, and organize your notes, create new ones, and bring your knowledge into every conversation.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Evernote**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Evernote**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install evernote@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "evernote": {
      "type": "http",
      "url": "https://mcp.evernote.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Evernote in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Evernote: https://evernote.com/

## Logo

Icon downloaded from the Claude connector directory listing for Evernote, converted to PNG and centred on a white tile. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

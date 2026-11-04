# Files.com

BoldCreate plugin that connects agents to Files.com through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

The Secure File Orchestration Platform.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Files.com**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Files.com**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install files-com@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "files-com": {
      "type": "http",
      "url": "https://app.files.com/api/ai/mcp/v1"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Files.com in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Files.com: https://www.files.com/

## Logo

Files.com mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #4285F4, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT

# Mintlify

BoldCreate plugin that connects agents to Mintlify through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Mintlify documentation and manage your docs site.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mintlify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mintlify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mintlify@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "mintlify-search": {
      "type": "http",
      "url": "https://mintlify.com/docs/mcp"
    },
    "mintlify-admin": {
      "type": "http",
      "url": "https://mcp.mintlify.com"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Mintlify in the browser (OAuth). Tool calls run with that member's permissions. The vendor's repository does not state the auth mode for the hosted server, so confirm it against Mintlify's documentation before release.

## Notes

- The vendor names its servers `Mintlify Search` and `Mintlify Admin`. This plugin uses `mintlify-search` and `mintlify-admin`, because names with spaces break some clients.
- The vendor does not state which server needs sign-in. Confirm the auth mode for each server before release.

## Docs

- Mintlify plugin (vendor repository): https://github.com/mintlify/mintlify-claude-plugin

## Logo

Mintlify mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #18E299, on a padded white tile. The mark is a trademark of its owner.

## License

MIT

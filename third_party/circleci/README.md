# CircleCI

BoldCreate plugin that connects agents to CircleCI through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Manage CI/CD pipelines, debug failed builds, and optimize test suites directly from Claude - no terminal required.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CircleCI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CircleCI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install circleci@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "circleci": {
      "type": "http",
      "url": "https://mcp.circleci.com/v1/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CircleCI in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- CircleCI: https://circleci.com/

## Logo

CircleCI mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #343434, on a padded white tile. The mark is a trademark of its owner.}

## License

MIT

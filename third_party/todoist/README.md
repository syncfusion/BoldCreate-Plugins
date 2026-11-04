# Todoist

BoldCreate plugin that connects agents to Todoist through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, complete, and manage your tasks in Todoist.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Todoist**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Todoist**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install todoist@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "todoist": {
      "type": "http",
      "url": "https://ai.todoist.net/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Todoist in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- Todoist: https://todoist.com/help/articles/use-todoist-with-ai-assistants

## Logo

Todoist mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #E44332, on a padded white tile. The mark is a trademark of its owner.

## License

MIT

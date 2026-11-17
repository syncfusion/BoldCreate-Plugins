# Atlassian (Jira + Confluence)

BoldCreate plugin that connects agents to Atlassian (Jira + Confluence) through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search and update Jira issues and Confluence pages.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Atlassian (Jira + Confluence)**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Atlassian (Jira + Confluence)**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install atlassian@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "atlassian": {
      "type": "http",
      "url": "https://mcp.atlassian.com/v2/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own account in the browser (OAuth). Tool calls run with that member's permissions.

## Notes

Uses OAuth by default. Sites whose admin enables API token access can use Basic auth (email + API token) instead. This plugin ships the OAuth flow.

The plugin uses `https://mcp.atlassian.com/v2/mcp`, the endpoint Atlassian recommends for new setups. Atlassian's README says clients that cannot complete authentication after the move to v2 tools may need to clear cached client IDs or `.well-known` credentials.

## Skills

The `skills/` folder holds 6 agent skills published in [atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server/tree/352a02b05189e2a958a973867cc6eca365cb8fc3/skills) at commit `352a02b05189e2a958a973867cc6eca365cb8fc3`, copied unchanged. The source is licensed under Apache-2.0, copyright Atlassian US, Inc. The original licence text is in `skills/LICENSE`.

| Skill |
| --- |
| `atlassian-mcp-code-search` |
| `capture-tasks-from-meeting-notes` |
| `jira-sprint-dashboard` |
| `search-company-knowledge` |
| `spec-to-backlog` |
| `triage-issue` |

Atlassian's skills README says these skills target the `/v2/mcp` endpoint and use v2 tool names, such as `listJiraProjects` and `searchConfluence`.

Left out:

- **`generate-status-report`:** it ships a Python script, `scripts/jql_builder.py`.
- **Atlassian's newer skills:** `assess-release`, `atlassian-design`, `before-you-start`, `catch-up`, `decision-trace`, `dependency-map`, `how-it-works` and `teamwork-graph-context`. The report skills ship Python renderers (`render.py`, `render_kit/`).
- **`skills/v1/`:** Atlassian's archive of the older skills.

## Docs

- Atlassian (Jira + Confluence) MCP server: https://github.com/atlassian/atlassian-mcp-server

## Logo

Atlassian mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #0052CC, on a padded white tile. The mark is a trademark of its owner.

## License

MIT

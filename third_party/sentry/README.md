# Sentry

BoldCreate plugin that connects agents to Sentry through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search Sentry errors, analyze performance, triage issues, read Sentry docs, and manage projects, scoped to one organization and project.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Sentry**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Sentry**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install sentry@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "sentry": {
      "type": "http",
      "url": "https://mcp.sentry.dev/mcp/${SENTRY_ORG}/${SENTRY_PROJECT}"
    }
  }
}
```

## Setup

Set these when you install the plugin. They only scope the server to one organization and project; they are not secrets.

| Setting | Required | Secret | What to enter |
| --- | --- | --- | --- |
| **Organization slug** (`SENTRY_ORG`) | Yes | No | Your Sentry organization slug. Scopes the server to this organization. |
| **Project slug** (`SENTRY_PROJECT`) | Yes | No | Your Sentry project slug. Scopes the server to this project. |

The first time the agent calls a tool, each member signs in to their own account in the browser (OAuth). Tool calls run with that member's permissions.

The server asks for these OAuth scopes: `org:read`, `project:write`, `team:write`, `event:write`, `alerts:write`.

Scoping to a project is the vendor's recommendation. With a scope set, tools default to that organization and project, and discovery tools that are no longer needed are hidden.

## What it can do

The server groups its 76 tools into five skills. At sign-in, the member chooses which skills to grant. Only the first two are on by default.

| Skill | Default | Tools | What it covers |
| --- | --- | --- | --- |
| Inspect Issues & Events (`inspect`) | On | 52 | Read-only: issues, events, stack traces, traces, spans, logs, metrics, replays, profiles, releases, cron, uptime and metric monitors, alert rules, dashboards, dropped events, and Sentry docs. |
| Seer (`seer`) | On | 22 | Sentry's AI debugger: root cause analysis for an issue, plus the read tools it needs. |
| Triage Issues (`triage`) | Off | 30 | Resolve, reopen and assign issues, add notes, and link or unlink external tickets and pull requests. |
| Manage Projects & Teams (`project-management`) | Off | 26 | Create, update and delete projects, teams, DSNs, cron, uptime and metric monitors, and alert rules. |
| Documentation (`docs`) | Off | 8 | Deprecated. Docs search is now part of `inspect`. |

Tools in the last three skills can change or delete data in Sentry. Grant them only when the agent needs them. 22 of the 76 tools write.

Search tools (`search_errors`, `search_issues`, `search_traces`, `search_logs` and others) take plain-language queries and turn them into Sentry's query syntax.

## Other ways to sign in

OAuth is the default. The server also accepts a Sentry API token sent as `Authorization: Sentry-Bearer <token>` (not `Bearer`). In that mode the server does not store or refresh the token, and every active skill is granted unless the URL narrows it with `?skills=inspect,triage` or `?disable-skills=seer`. BoldCreate does not use this mode by default.

## Limits

- Tool calls count against the Sentry API rate limits. If many calls run in parallel, the server returns a "Rate Limited" message with a wait time. Run calls one at a time if you see it.
- The OAuth metadata lists five scopes. Some read tools use `event:read`, `project:read` and `team:read`, which the metadata does not list. Sentry handles this on its side.

This is Sentry's hosted server for sentry.io. Self-hosted Sentry is not covered; Sentry offers a separate local (stdio) server for that.

## Docs

- Sentry MCP server: https://mcp.sentry.dev/
- Source (CLI, MCP server and shared packages): https://github.com/getsentry/toolkit

## Logo

Sentry mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #362D59, on a padded white tile. The mark is a trademark of its owner.

## License

MIT

# Close

BoldCreate plugin that connects agents to Close through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect agents to Close CRM to research leads, review pipeline and activity, prepare follow-ups, and create or update CRM records.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Close**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Close**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install close@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "close": {
      "type": "http",
      "url": "https://mcp.close.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to Close in the browser (OAuth), chooses their Close organization and an access level, and approves. Close's page says the server supports OAuth 2.0 dynamic client registration.

## Access levels

Close's page lists three OAuth scopes. Each one includes the one before it.

| Scope | What the agent can do |
| --- | --- |
| `mcp.read` | Read only. |
| `mcp.write_safe` | Read, plus create and update records. |
| `mcp.write_destructive` | Read, create, update and delete. |

Close's tools page lists more than 100 tools across the three scopes. Choose the lowest scope that covers the work. The destructive scope includes tools that permanently delete leads, contacts, opportunities, notes and tasks, and tools that schedule voice-agent calls and change voice-agent settings. The `rent_phone_number` tool creates a billable phone number.

## Authentication

A live check on 2026-11-15 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata lists the scopes `mcp.read`, `mcp.write_safe`, `mcp.write_destructive` and `offline_access`, and names `https://api.close.com` as the authorization server.
- The authorization server metadata lists a registration endpoint (`/oauth2/register/`, dynamic client registration) and PKCE with S256. Token endpoint methods are `none`, `client_secret_basic` and `client_secret_post`. It does not list client ID metadata documents.
- A plain GET to the registration address returned 405, so the address exists. No registration request was sent to the server.

Close's page also allows an API key, sent as the `Close-API-Key` header with a `Close-Scope` header. This plugin does not use that route. Do not put a key in a file.

**Not checked.** The tool list behind sign-in was not read. Whether Close accepts BoldCreate Connect's redirect address was not checked. Close's page names Claude, ChatGPT, Cursor, Grok Bot, n8n and VS Code.

## Several Close organizations

Close's page says to add one connection per organization, each with its own name. Claude does not allow the same URL twice, so Close suggests adding `?1`, `?2` and so on to the address. Close calls that a workaround, and this plugin does not set it up.

## Skills

The `skills/` folder holds the 4 skills in [closeio/agent-plugin](https://github.com/closeio/agent-plugin/tree/3e102297006a4663e65d5fa9b195569843a5c53f/skills) at commit `3e102297006a4663e65d5fa9b195569843a5c53f`, copied unchanged. The source is licensed under MIT, copyright 2026 Close. The original licence is in `skills/LICENSE`. The folder hashes were compared with the ones GitHub returns for that commit.

| Skill | What it does, in Close's words |
| --- | --- |
| `close-crm` | Use Close CRM data to research leads, review pipeline and activity, prepare follow-ups, and safely create or update CRM records. |
| `account-brief` | Build a Close account brief when preparing for a call or researching a lead. |
| `pipeline-review` | Review the Close pipeline to assess opportunity risk, find stale deals, and prioritize next actions. |
| `follow-up-plan` | Prepare a follow-up plan for a Close lead from its latest conversations and open tasks. |

`close-crm` says the scope the user picked is the most the agent may do, not permission for every action. It asks the agent to confirm before a write and to delete only after an explicit request. The other three skills only read. The skills are plain `SKILL.md` files with no scripts, installs or outside links, apart from one link to Close's documentation.

**Left out.**

- The commands in Close's Cursor plugin (`account-brief`, `follow-up-plan`, `pipeline-review`). This repository does not import commands.
- The `cursor-plugin` repository (its `close-crm` skill is the same file), and the Agent Plugins manifests, validation scripts and schemas in both repositories.

## Docs

- Close MCP server: https://developer.close.com/mcp
- Close MCP tools: https://developer.close.com/mcp/tools
- Plugin source: https://github.com/closeio/agent-plugin

## Logo

Close's mark from the `assets/mark.svg` file in [closeio/agent-plugin](https://github.com/closeio/agent-plugin), centred on a white tile. It is Close's own mark and a trademark of its owner. It is not covered by the MIT licence. I could not view the logo.

## License

MIT

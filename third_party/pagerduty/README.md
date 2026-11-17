# PagerDuty

BoldCreate plugin that connects agents to PagerDuty through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Browse PagerDuty services, incidents, and change events.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **PagerDuty**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **PagerDuty**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pagerduty@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "pagerduty": {
      "type": "http",
      "url": "https://${PAGERDUTY_MCP_HOST}/mcp",
      "headers": {
        "Authorization": "Token token=${PAGERDUTY_API_KEY}"
      }
    }
  }
}
```

## Setup

Set these when you install the plugin. Secrets are stored encrypted and sent only to the MCP server.

| Setting | Required | Secret | What to enter |
| --- | --- | --- | --- |
| **PagerDuty API key** (`PAGERDUTY_API_KEY`) | Yes | Yes | API user token from PagerDuty: User Profile, User Settings, API Access, Create API User Token. |
| **PagerDuty MCP host** (`PAGERDUTY_MCP_HOST`) | No | No | `mcp.pagerduty.com` (the default) for US accounts, or `mcp.eu.pagerduty.com` for EU service region accounts. The API key is sent to this host, so enter only one of these two values. |

Tool calls run with the permissions of the key or token you provide. Rotate or revoke it if it is ever exposed.

PagerDuty's docs say some tools and filters need a user-level key. For example, scoping `list_incidents` by `teams` or `assigned` does not work with an account-level key. They also say the account needs Advanced Permissions.

## Authentication

PagerDuty's docs say the hosted server accepts a PagerDuty API key in the `Authorization: Token token=<key>` header, and also OAuth. This plugin uses the API key.

OAuth needs a PagerDuty OAuth client that your team creates, because PagerDuty's docs say dynamic client registration is not supported. This plugin does not set one up. Scoped OAuth clients can limit which tools succeed, because PagerDuty says tool filtering is not available on the hosted server.

A live check on 2026-11-17 found:

- An unauthenticated request to `https://mcp.pagerduty.com/mcp` and to `https://mcp.eu.pagerduty.com/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names `https://app.pagerduty.com/global/oauth/anonymous` as the authorization server. That server's OpenID configuration lists a registration endpoint, but PagerDuty's docs say dynamic client registration is not supported. No registration request was sent.

**Not checked.** The tool list behind sign-in was not read. Whether the API key header is accepted was not tested, because no key was used.

## Not included

- **Skills.** PagerDuty's `PagerDuty/github-agenthq-plugins` repository (Apache-2.0) has four skills: `investigate`, `on-call-handoff`, `pre-commit-risk-scoring` and `create-pagerduty-skill`. They are written for GitHub Copilot: they tell the user to set `COPILOT_MCP_PAGERDUTY_API_KEY`, and `investigate` and `create-pagerduty-skill` need a second server, `pagerduty-advance`, at `/pagerduty-advance-mcp`. That second server answers HTTP 401 with a sign-in link but is not described in the docs I read, so it is left out.
- **Slash commands** from `PagerDuty/claude-code-plugins` (pre-commit risk scoring, skill builder).
- **The self-hosted server.** `PagerDuty/pagerduty-mcp-server` is archived and read-only. PagerDuty points to the hosted server instead.

## Docs

- PagerDuty MCP API: https://docs.pagerduty.com/developer/api/reference/mcp
- PagerDuty MCP Server guide: https://docs.pagerduty.com/ai-automation/advance/pagerduty-mcp-server

## Logo

PagerDuty's site icon (`pagerduty.com/favicon/prod/icon.svg`), centred on a white tile. It is PagerDuty's own mark and a trademark of its owner. I could not view the logo.

## License

MIT for this plugin's files.

# Brevo

BoldCreate plugin that connects agents to Brevo through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect Brevo to analyze email campaign performance and A/B test results, look up contacts, and explore audience segments in plain language.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Brevo**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Brevo**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install brevo@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "brevo": {
      "type": "http",
      "url": "https://mcp.brevo.com/v1/openai/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Brevo account in the browser (OAuth). There is no API key to paste. Brevo's README says the connection is available on all Brevo plans.

## Endpoint

Brevo runs several addresses on `mcp.brevo.com`. A live check on 2026-11-13 found that all of these answer an unauthenticated request with HTTP 401, `WWW-Authenticate: Bearer` and a link to their own protected-resource metadata:

| Address | Brevo's docs say it is for |
| --- | --- |
| `/v1/openai/mcp` | ChatGPT, Codex, Cursor, Grok and other Agent Plugins clients |
| `/v1/anthropic/mcp` | Claude Code, claude.ai, Claude Desktop, Cowork |
| `/v1/google/mcp` | Gemini app, Gemini CLI, Antigravity |
| `/v1/brevo/mcp` | The main server, 27 modules. Brevo's docs set it up with an MCP token from **Account > SMTP & API > API Keys** |

This plugin uses `/v1/openai/mcp`. It is the address in Brevo's own Cursor manifest and `mcp.json`, and Brevo's docs list it for Cursor. Its metadata names 8 scopes (`account:read`, `contacts:read`, `campaigns.email:read`, `campaigns.email:write`, `campaigns.sms:read`, `campaigns.sms:write`, `transactional.email:read`, `transactional.email:write`). The main server's metadata lists one scope, `all`.

## Authentication

The same check found, for `/v1/openai/mcp`:

- The protected-resource metadata names `https://mcp.brevo.com/v1/openai/oauth` as the authorization server.
- The authorization server metadata lists a registration endpoint (dynamic client registration), PKCE with S256, and the `authorization_code` and `refresh_token` grants.
- The only token endpoint method is `none`, so registration does not issue a client secret. The metadata does not list client ID metadata documents.

Brevo's `docs/platforms.md` says every endpoint uses OAuth 2.1 with PKCE and supports dynamic client registration, and that Gemini Enterprise is the exception because it needs a manually registered client.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check. **Not checked:** whether the server accepts BoldCreate Connect's redirect address at registration.

**API token instead of OAuth.** Brevo's docs also describe sending an MCP token as `Authorization: Bearer …` to the main server. This plugin does not set one. Do not put a token in a file.

**Not checked.** The tool list behind sign-in was not read, and no tool was called.

## What it offers

Brevo's pages describe the connection as reading campaign and A/B test results, contacts, lists and segments, and saving email templates, email campaigns and SMS campaigns as drafts in your account. Brevo's README says the Claude connector never sends or schedules a campaign and never deletes anything. Brevo's ChatGPT plugin text says it can send a test email, only to addresses you choose.

I could not confirm this for the address in this plugin. Brevo's `email-campaign-create` skill says the server also has tools for sending and scheduling campaigns (`email_campaign_management_send_email_campaign_now` and `email_campaign_management_update_campaign_status`), and that the skill deliberately does not use them. The tools an account sees depend on the scopes it grants, and the scope list above includes write access to email and SMS campaigns. Review what the agent plans to do before you approve it.

## Skills

The `skills/` folder holds 8 of the 9 skills from [getbrevo/brevo-skills](https://github.com/getbrevo/brevo-skills/tree/399856558d83de75b97f99c3601c14b34f12e74b/skills) at commit `399856558d83de75b97f99c3601c14b34f12e74b`, copied unchanged:

| Skill | In Brevo's words |
| --- | --- |
| `brevo-guide` | Find and load Brevo skills on any agent: from the Brevo MCP server's guides, or install them once. |
| `email` | Route an email request to the right email skill, after confirming the account. |
| `email-brand-kit` | Read the account's brand kit (logo, colours, fonts, social links) as email styles, and set it up or change it after the user approves. |
| `email-campaign-create` | Create a Brevo email campaign as a draft from finished HTML, for a chosen list and a verified sender. |
| `email-template-check` | Check email HTML against Brevo's template rules and fix what fails, before it is saved or sent. |
| `email-template-to-dnd` | Turn email HTML into a design that opens in Brevo's drag-and-drop editor, and save it as a template. |
| `email-template-write` | Write the HTML of a Brevo email (campaign, automation or transactional) with personalization. |
| `email-test-preview` | Preview a draft email and send a test of it to addresses the user names. |

Each folder's tree hash was compared with the one GitHub returns for the same commit, and all 8 match. A copy of the repository's `LICENSE` (MIT, copyright 2026 Brevo) is in `skills/LICENSE`. Brevo marks all of these skills beta.

**Left out.** The ninth skill, `brevo-cli`, is not included. It is for working in a project that uses the Brevo Developer CLI, it needs a terminal, and it tells the agent to stop and have the user run `npm install -g @getbrevo/cli`. It is synced from a different repository, [getbrevo/brevo-cli](https://github.com/getbrevo/brevo-cli).

**What the included skills do.** The skills say to use only the Brevo MCP server's tools and never to ask for or write an API key. They tell the agent to call `get_brevo_guide` and `list_brevo_guides`, which are tools on Brevo's server. I did not check that the server at this address offers them. Several skills also print install commands for the user to run (`npx skills add getbrevo/brevo-skills`, `npm i -g @getbrevo/cli`); `brevo-guide` says the agent should not run them without a yes from the user. They have no scripts. Their links resolve inside the folder. The skills also carry `agents/openai.yaml` files that point at Brevo's `/v1/openai/mcp` address, which is the one this plugin uses.

**Not included.** Brevo's repository also holds manifests for Claude, Codex, Gemini and Grok, a Gemini extension file and an OpenAI plugin build. They are not used here. Brevo's separate GitHub organisation, [getbrevo](https://github.com/getbrevo), also holds API client libraries and the Brevo CLI. None is imported.

## Docs

- Brevo MCP server: https://developers.brevo.com/docs/mcp-protocol
- Tool configuration guide: https://developers.brevo.com/docs/integration-guide
- Brevo skills: https://github.com/getbrevo/brevo-skills

## Logo

Brevo's own logo mark from `brevo.com`, centred on a white tile. It is a trademark of its owner and is not covered by the MIT licence. I could not view the rendered logo.

## License

MIT

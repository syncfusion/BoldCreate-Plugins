# OneSignal

BoldCreate plugin that connects agents to OneSignal through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Give AI agents direct access to OneSignal's customer engagement platform: explore users, segments, messages, templates and analytics, and manage messaging across push, email, SMS and in-app.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **OneSignal**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **OneSignal**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install onesignal@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "onesignal": {
      "type": "http",
      "url": "https://api.onesignal.com/mcp/oauth"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own OneSignal account in the browser and clicks **Agree & Allow Access** (OAuth). OneSignal's page says there is no REST API key to configure. It also says to leave any OAuth client ID and client secret fields blank, because OneSignal registers the client automatically and filled-in values make the connection fail.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp/oauth` returned HTTP 401 with no `WWW-Authenticate` header and a JSON error asking for an API key. A client that finds OAuth only from that header will not find it.
- The protected-resource metadata at `https://api.onesignal.com/.well-known/oauth-protected-resource` names `https://api.onesignal.com` as the authorization server. It lists no scopes.
- The authorization server metadata lists a registration endpoint (`/oauth/register`, dynamic client registration), PKCE with S256, and the `authorization_code` and `refresh_token` grants. It does not list client ID metadata documents.
- Token endpoint methods are `client_secret_post` and `none`.
- The sign-in page is on `dashboard.onesignal.com`.

No registration request was sent to the server during the check. A plain GET to the registration address returned HTTP 400, so it exists.

OneSignal's own Cursor plugin also sets a fixed OAuth client ID (`1fa917d8-98d4-419b-a9ca-2cf0ab8fccdc`) in its `mcp.json`. This plugin does not use it, because OneSignal's documentation says to leave client ID fields blank. If sign-in does not start in your client, that is the thing to compare.

**Not checked.** The tool list behind sign-in was not read. Whether OneSignal accepts BoldCreate Connect's redirect address was not checked. OneSignal's page names Cursor, Claude, Codex, VS Code and custom connectors, and does not list Connect.

## Before you connect

OneSignal's page says:

- It needs a OneSignal account with access to the apps you want to manage.
- OneSignal turns AI tool access on or off for each OneSignal login. If a tool returns "tool access is not enabled for this application", OneSignal has not turned it on for that login yet, and the fix is to contact OneSignal support. The `onesignal_health` tool works before access is turned on, so a healthy result does not show that the other tools work.
- The connection follows the signed-in user's permissions and can reach every OneSignal app that user can manage. Call `list_apps` to find app IDs.
- Connecting is free. Each action counts toward the normal OneSignal API usage limits.
- Revoke a connection under **Settings > Account settings > Connected apps**. It does not affect teammates' connections.

OneSignal's page does not give the server a stage, and this plugin sets none. Some third-party descriptions call it beta, which I could not confirm from OneSignal.

## Tools

OneSignal's page lists tools in these groups: apps, Journeys, messaging, users and subscriptions, templates, segments, Live Activities, exports, custom events, email deliverability, email warmup, and analytics and utility. The groups on that page add up to 53 tools. Third-party projects that describe this server give smaller numbers (34 and 43), probably from earlier versions, so treat the number as approximate.

Some of them change data or reach real people:

- `send_message` sends a push notification, email or SMS. OneSignal marks it as high-impact and checks targeting before it sends.
- Others create, change or delete segments, templates, Journeys, users and subscriptions. `delete_journey` deletes a Journey permanently, and `transfer_subscription` moves a subscription to a different user.
- Two export subscriber data to CSV.

Review what the agent plans before approving a send or a change. Test on a test segment or test users first.

## Skills and rules

The `skills/` folder holds the `onesignal-setup` skill and the `rules/` folder holds the `onesignal-safety.mdc` rule, both from [OneSignal/onesignal-cursor-plugin](https://github.com/OneSignal/onesignal-cursor-plugin/tree/491d5626d39311021fc9fbb3353fbe2dead02641) at commit `491d5626d39311021fc9fbb3353fbe2dead02641`, copied unchanged. The folder and file hashes were compared with the ones GitHub returns for that commit, and they match. A copy of the repository's `LICENSE` (MIT, copyright 2026 OneSignal) is in `skills/LICENSE` and `rules/LICENSE`.

- **`onesignal-setup`.** A short skill for connecting Cursor to the server and fixing sign-in problems. It tells the agent to start with a read-only tool such as `onesignal_health`. It is written for Cursor and for OneSignal's own plugin, so some of its troubleshooting steps (symlinking the plugin, `Developer: Reload Window`) do not apply here.
- **`onesignal-safety.mdc`.** An always-on rule. It says to prefer read-only checks, to get explicit approval before sends and writes, and to ask for extra confirmation before large-audience or production sends. It tells the agent never to ask for API keys or tokens in chat. It is about 440 tokens of always-on text.

**Left out.**

- The three commands in the repository's `commands/` folder (`setup-onesignal`, `send-onesignal-test-notification`, `debug-onesignal-delivery`). This repository does not import commands.
- `bin/validate-template.mjs`, which only checks the plugin template, and `package.json`.
- OneSignal's other agent repositories. `onesignal-agent-plugin` (MIT) installs the OneSignal SDK into a codebase. It runs nine Python and shell scripts, one of which reports onboarding milestones to `api.onesignal.com/sdk/agent-progress` as usage tracking, and it needs a REST API key. `onesignal-ai-skills` has no licence. Neither is used here.

## Docs

- OneSignal MCP server: https://documentation.onesignal.com/docs/en/model-context-protocol
- Keys and IDs: https://documentation.onesignal.com/docs/en/keys-and-ids

## Logo

OneSignal's logomark from `OneSignal/onesignal-agent-plugin` (`assets/logomark.png`), scaled and centred on a white tile. It is OneSignal's own mark and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT

# CB Insights

BoldCreate plugin that connects agents to CB Insights through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect agents to CB Insights to research private and public companies, investors, deals, markets and analyst research, and to manage watchlists and signal alerts.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CB Insights**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CB Insights**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cb-insights@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cb-insights": {
      "type": "http",
      "url": "https://mcp.cbinsights.com"
    }
  }
}
```

The server address has no `/mcp` path. A request to `https://mcp.cbinsights.com/mcp` returns HTTP 404.

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CB Insights in the browser (OAuth) and approves access. Members need a CB Insights account that includes MCP access. CB Insights' terms say access follows the licensed access type of the account.

## Access

CB Insights' docs list 55 tools in three groups:

- **Entity data (24 tools):** a company's or investor's profile, funding, investors, investments, acquisitions, exits, cap table, competitors, similar companies, key people, headcount, hiring insights, revenue, outlook, markets, relationships, news, signals, analyst ratings, predicted funding window, buyer interview transcripts, strategy map and earnings call transcripts.
- **Search (6 tools):** search companies, deals, investors, partnerships, people and CB Insights research.
- **Other (25 tools):** markets, saved searches, signals, usage, watchlists and signal alerts.

Several of the other tools change data in the member's account:

- Create, rename and delete watchlists, add and remove companies, and add, rename and delete columns and set their values. Deleting a watchlist you own deletes it for everyone it was shared with.
- Create and update signal alerts. Alerts send email to the member when a signal fires.

The scopes on offer are only `openid`, `email` and `profile`. They identify the member and do not limit what the agent can do, so the agent gets everything the member's account can see and change.

**Usage limits.** The `get_usage` tool reports how many tool calls the member has made against a daily per-user limit and an annual team limit set by the plan. Calls over the limit are rejected.

**Logging.** The `log_app_event` tool records interaction events from CB Insights' own app screens to CB Insights, tied to the member and team.

## Authentication

A live check on 2026-11-15 found:

- An unauthenticated request to `https://mcp.cbinsights.com` returned HTTP 401 with `WWW-Authenticate: Bearer`, the scopes `openid email profile`, and a link to the protected-resource metadata.
- The metadata names `https://mcp.cbinsights.com/` as its own authorization server. Its metadata lists a registration endpoint (`/register`, dynamic client registration), PKCE with S256, and the token methods `none`, `client_secret_post` and `client_secret_basic`.
- The same server also supports the `client_credentials` grant for scripts, using a CB Insights API client ID and secret. This plugin does not use it, and no secret is stored here.
- No registration request was sent to the server.

**Not checked.** The tool list behind sign-in was not read; the list above comes from CB Insights' docs. Whether CB Insights accepts BoldCreate Connect's redirect address was not checked.

## Not included

- **Skills.** CB Insights publishes no skills or rules.
- **The self-hosted server.** The `cbinsights/cbi-mcp-server` repository is a local server that needs an API client ID and secret. CB Insights marked it deprecated in January 2026 and points to the hosted server instead. It has no licence file.

## Docs

- CB Insights MCP server: https://mcp.cbinsights.com/docs-portal.md
- CB Insights support: https://www.cbinsights.com/contact
- CB Insights privacy policy: https://www.cbinsights.com/privacy-policy

## Logo

The `apple-touch-icon.png` from `cbinsights.com`, centred on a white tile. It is CB Insights' own icon and a trademark of its owner. It is not covered by the MIT licence. I could not view the logo.

## License

MIT

# Morningstar

BoldCreate plugin that connects agents to Morningstar through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect agents to Morningstar for fund, ETF and stock data, analyst research, articles, investment screening and portfolio analysis.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Morningstar**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Morningstar**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install morningstar@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "morningstar": {
      "type": "http",
      "url": "https://mcp.morningstar.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in with their Morningstar credentials in the browser (OAuth) and approves access.

**A Morningstar licence is required.** Morningstar's docs say a licensed Morningstar account is needed to connect and use the server. For licensing, contact your Morningstar account representative or use the "Connect with us" form on Morningstar's MCP server page.

## Access

Morningstar's docs list 7 tools:

- `morningstar-analyst-research-tool`: relevant parts of Morningstar's analyst and quantitative investment reports.
- `morningstar-articles-tool`: relevant parts of articles, news and commentary published on Morningstar.com and other Morningstar products.
- `morningstar-data-tool`: Morningstar data for global mutual funds, ETFs and stocks.
- `morningstar-fund-holdings-tool`: top holdings for a list of mutual funds or ETFs.
- `morningstar-id-lookup-tool`: identifies the investments and data points in a question and passes them to the other tools.
- `morningstar-portfolio-analysis-tool`: breaks down a portfolio or fund by asset allocation, sector, region, style and risk and return, using Morningstar's X-Ray method.
- `morningstar-screener-tool`: lists investments that match given criteria.

The descriptions only retrieve or analyse data. None creates or changes anything, but the docs do not say the server is read-only. Morningstar's data and research are proprietary and are covered by the member's Morningstar licence terms.

The sign-in asks for the scopes `offline_access`, `openid`, `email` and `profile`. They identify the member and keep the session open. They do not limit what the agent can do.

## Authentication

A live check on 2026-11-16 found:

- An unauthenticated request to `https://mcp.morningstar.com/mcp` returned HTTP 401 with a plain-text body and **no** `WWW-Authenticate` header, so there is no sign-in link in the response. The metadata is still served at `/.well-known/oauth-protected-resource/mcp`, which MCP clients try next.
- The metadata names `https://mcp.morningstar.com/mcp` as its own authorization server. Its metadata lists a registration endpoint (`/oauth-issuer/register`, dynamic client registration), PKCE with S256, and the token methods `none`, `client_secret_post` and `client_secret_basic`. The sign-in itself goes through Morningstar's Auth0 tenant.
- Morningstar's docs also describe a second way to connect: an `Authorization: Bearer` header with a token from Morningstar's Authentication API. This plugin does not use it, and no token is stored here.
- No registration request was sent to the server.

**Not checked.** The tool list behind sign-in was not read; the list above comes from Morningstar's docs. Whether Morningstar accepts BoldCreate Connect's redirect address was not checked. The docs page itself needs JavaScript, so its text was read through a search tool, not a browser.

## Not included

Morningstar publishes a plugin repository, `Morningstar/morningstar-plugins`, with 5 skills: `datapoint-finder`, `fund-comparison`, `fund-screener`, `fund-summarizer` and `medalist-rating-analyzer`. They are left out:

- The repository has no licence file. A Codex manifest in it says "MIT", but there is no licence text to carry over, and the skills include Morningstar's own logos and rating icons.
- `fund-comparison`, `fund-summarizer` and `medalist-rating-analyzer` ship scripts (`.py` and `.mjs`).
- The repository's README says the skills route data access through the Morningstar app, not this server.

The archived `Morningstar/morningstar-mcp-server` repository is not used. It is a self-hosted server that needs an auth token from Morningstar.

## Docs

- Morningstar MCP server: https://developer.morningstar.com/direct-web-services/documentation/mcp-server/morningstar-mcp-server
- Morningstar privacy policy: https://www.morningstar.com/company/privacy-policy

## Logo

The `apple-touch-icon.png` from `morningstar.com`, centred on a white tile. It is Morningstar's own icon and a trademark of its owner. It is not covered by the MIT licence. I could not view the logo.

## License

MIT

# Twelve Data

BoldCreate plugin that connects agents to Twelve Data through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Real-time and historical market data from Twelve Data: prices, technical indicators, fundamentals, ETFs and funds, market movers, and regulatory filings.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Twelve Data**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Twelve Data**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install twelve-data@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "twelve-data": {
      "type": "http",
      "url": "https://mcp.twelvedata.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Twelve Data account in the browser (OAuth). Twelve Data's page says there is no API key to copy. A free account is available at https://twelvedata.com/register.

## Authentication

Twelve Data's `auth.md` says the hosted server uses OAuth 2.1 and does not accept API keys. A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- That metadata is served at `/.well-known/oauth-protected-resource/mcp`, not at the root of the host. It names `https://auth.twelvedata.com` as the authorization server, with the scope `twelvedata`.
- The authorization server metadata lists a registration endpoint (`/register`, dynamic client registration), client ID metadata documents, and PKCE with S256.
- Token endpoint methods are `none`, `client_secret_basic`, `client_secret_post` and `private_key_jwt`. Twelve Data's `auth.md` says clients registered this way are public and get no secret.
- A request with the key `demo`, sent as `Authorization: Bearer demo` or as `X-API-Key: demo`, returned HTTP 401. There is no anonymous or demo access on the hosted server.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

Twelve Data's `auth.md` also says an authorization request must carry `resource=https://mcp.twelvedata.com/mcp` and is refused without it. Whether BoldCreate Connect sends that value was not checked.

**Not checked.** The tool list behind sign-in was not read. The description above comes from Twelve Data's own page, which names prices, 60+ technical indicators, fundamentals, ETFs and funds, company news, market movers, and regulatory filings. Twelve Data's ChatGPT plugin page calls that plugin read-only. I did not find the same statement for this server. Credits and rate limits depend on the member's Twelve Data plan (https://twelvedata.com/pricing).

## Skills

The `skills/` folder holds 5 of the 7 skills in [MazeBraker/twelvedata-skills](https://github.com/MazeBraker/twelvedata-skills/tree/76b9acf146f1b2c19f3da272e9f85eaf27200a8b/skills) at commit `76b9acf146f1b2c19f3da272e9f85eaf27200a8b`, copied unchanged: `twelvedata-api`, `twelvedata-best-practices`, `twelvedata-funds`, `twelvedata-indicators` and `twelvedata-websocket`. Together they are 5 `SKILL.md` files and 4 reference files. A copy of the repository's `LICENSE` (MIT, copyright 2026 Twelve Data) is in `skills/LICENSE`.

**Where it comes from.** The link you gave, [github.com/twelvedata](https://github.com/twelvedata), does not hold these skills. Its `twelvedata/mcp` repository is the self-hosted server, and its `twelvedata-clawhub` repository holds one skill for OpenClaw. The skills above are in a repository under another account, `MazeBraker`. Its manifest names Twelve Data as the author and `info@twelvedata.com` as the contact, and its licence names Twelve Data. I could not confirm from Twelve Data's own pages that the account is theirs. Twelve Data's documentation does not link to it.

**Check.** The `skills` folder's tree hash at that commit is `ebbdf5fe541daa3468d08fb6a21ebc3ea01dfc74`. Each copied file was compared with the same path in a fresh download of that commit and matched.

**Left out.**

- `twelvedata-cli`. Its text tells the agent to install a program with `curl -fsSL … | bash`, `brew` or `go install`.
- `twelvedata-mcp`. It describes running the self-hosted server with `uvx` or `pip` and an API key, which this plugin does not do. `twelvedata-api` mentions it ("see the `twelvedata-mcp` skill for setup"), so that pointer leads nowhere here.
- The `evals/evals.json` file in each skill folder. These are test prompts for the skills, not skill content.

**What the skills assume.** They call the REST API at `api.twelvedata.com` and the WebSocket at `ws.twelvedata.com` with an API key in the `TWELVE_DATA_API_KEY` environment variable. The hosted MCP server does not use that key. So the skills work for a member who also has a key set, and the MCP tools work without one. The skills do not contain a key. The five folders have no scripts and no install commands.

## Docs

- Twelve Data MCP server: https://twelvedata.com/docs/ai/mcp-server
- Authentication and client registration: https://twelvedata.com/auth.md
- API documentation: https://twelvedata.com/docs
- Documentation for LLMs: https://twelvedata.com/docs/llms.txt
- Self-hosted server source: https://github.com/twelvedata/mcp

## Logo

Twelve Data's favicon from `twelvedata.com/build/favicons/favicon-192.png`, scaled to 120 by 120 and centred on a white tile. The file is byte for byte the same as the logo in the skills repository. It is a trademark of its owner and is not covered by the MIT licence. I did not view the finished image.

## License

MIT

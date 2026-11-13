# CoinGecko

BoldCreate plugin that connects agents to CoinGecko through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect AI agents to real-time crypto data via the CoinGecko MCP Server.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CoinGecko**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CoinGecko**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install coingecko@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "coingecko": {
      "type": "http",
      "url": "https://mcp.pro-api.coingecko.com/mcp"
    }
  }
}
```

## Setup

No settings.

CoinGecko's page says this address needs a CoinGecko API key, and that the key is entered in a browser tab the first time the member connects. A free Demo key is available from https://www.coingecko.com/en/api/pricing. Each member uses their own key. The plugin holds none.

## Endpoint

CoinGecko's page lists three ways to connect:

| Server | Address | In CoinGecko's words |
| --- | --- | --- |
| Free (Keyless) | `https://mcp.api.coingecko.com/mcp` | No API key needed. Shared rate limits. |
| Use your API key | `https://mcp.pro-api.coingecko.com/mcp` | CoinGecko API key required. Higher limits, full tool set. |
| Local | `@coingecko/coingecko-mcp` on npm | Pro or Demo API key. Runs on your machine. |

A live check on 2026-11-13 found:

| Address | Result |
| --- | --- |
| `https://mcp.api.coingecko.com/mcp` | Answered `initialize` with HTTP 200 and no sign-in. Two tools: `execute` and `search_docs`. |
| `https://mcp.pro-api.coingecko.com/mcp` | HTTP 401 with `WWW-Authenticate: Bearer` and a link to protected-resource metadata. |

The keyless address would not give each member their own limits or key, so this plugin uses the key-based address. A third address, `https://mcp.coingecko.com/mcp`, also answered without sign-in and listed 13 tools. CoinGecko's page does not mention it, so it is not used.

## Authentication

The same check found:

- The protected-resource metadata is served at the root of the host (`/.well-known/oauth-protected-resource`), not under `/mcp`. It names the host itself as the authorization server.
- The authorization server metadata lists a registration endpoint (`/register`, dynamic client registration), PKCE with `plain` and `S256`, and the `authorization_code` and `refresh_token` grants.
- Token endpoint methods are `client_secret_basic`, `client_secret_post` and `none`. The metadata does not list client ID metadata documents and does not list scopes.

**Not checked.** No registration request was sent. I found no source code for the hosted server, so I could not check whether it limits which redirect addresses may register, as some servers do. The `coingecko-typescript` repository holds the local package only. Whether BoldCreate Connect can register and sign in is not confirmed. The page where the key is entered was not seen. The tool list behind sign-in was not read.

## Tools

CoinGecko's tools page lists two tools: `search_docs` (search the CoinGecko API documentation) and `execute` (run a call against the CoinGecko API). The keyless server returned those two. Which endpoints `execute` can reach depends on the member's CoinGecko plan, and every call counts toward that plan's rate limit and credits.

## Skills

The `skills/` folder holds the one skill in [coingecko/skills](https://github.com/coingecko/skills/tree/84fb359ffd4667aa2a772fe3725e03bc586b7592) at commit `84fb359ffd4667aa2a772fe3725e03bc586b7592`, copied unchanged. In the source it is a single `SKILL.md` at the top of the repository. Here it is placed at `skills/coingecko/SKILL.md` so that the folder name matches its `name`. The file's content hash (`0d76bbc0236d40183352227ac9d2e1062a6c5b8f`) matches the file in the repository. A copy of the repository's `LICENSE` (MIT, copyright 2026 Gecko Labs Pte. Ltd.) is in `skills/LICENSE`.

**What the skill does.** It tells the agent to answer market questions only from live calls, never from memory, and to read endpoint details from the CoinGecko documentation. It describes three plans (paid, Demo, keyless) and the API key header each one uses. It has no scripts and no install commands.

**What to know.**

- The skill calls the REST API with `curl`, using an `x-cg-pro-api-key` or `x-cg-demo-api-key` header. The MCP sign-in does not give the agent that key. The skill tells the agent to use a key kept in an environment variable (for example `COINGECKO_API_KEY`) and not to paste it in chat.
- The skill sends one search request to `https://docs.coingecko.com/mcp`, a documentation search server. That is CoinGecko's own host.
- It mentions claude.ai settings for allowed domains. That does not apply to other clients.

**Not included.** The repository's other files (`README.md`, `.github`, `.clawhubignore`) are not copied.

## Docs

- CoinGecko MCP: https://docs.coingecko.com/ai-integration/mcp-server
- Tools: https://docs.coingecko.com/ai-integration/mcp-tools
- Skill source: https://github.com/coingecko/skills
- API keys and plans: https://www.coingecko.com/en/api/pricing

## Logo

CoinGecko's icon from its documentation site (`docs.coingecko.com`, 192 by 192), scaled to 120 by 120 and centred on a white tile. I could not load `www.coingecko.com` to compare it with the main site. It is a trademark of its owner and is not covered by the MIT licence. I did not view the finished image.

## License

MIT

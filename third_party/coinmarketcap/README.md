# CoinMarketCap

BoldCreate plugin that connects agents to CoinMarketCap through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect agents to CoinMarketCap for crypto prices, market metrics, technical analysis, news, trending narratives and on-chain data.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CoinMarketCap**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CoinMarketCap**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install coinmarketcap@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cmc-mcp": {
      "type": "http",
      "url": "https://mcp.coinmarketcap.com/mcp"
    }
  }
}
```

The server is named `cmc-mcp`, the name CoinMarketCap's docs and skills use, so the tool names in the skills match.

## Setup

No settings.

The first time the agent calls a tool, each member signs in to CoinMarketCap in the browser (OAuth) and allows access. CoinMarketCap's MCP page says signing in sets up an API key for the member, so nobody needs to create one.

CoinMarketCap's docs also describe a second way to connect: an API key in the `X-CMC-MCP-API-KEY` header. This plugin does not use it. Do not put a key in a file you commit.

## Access

CoinMarketCap's MCP page says:

- A free CoinMarketCap account includes monthly credits. Credit use depends on the tool, and rate limits depend on the plan. Requests use the account's API credits, which are shared with REST API use.
- The server cannot trade, place orders or move funds on any exchange.
- The agent can only reach market data called through the member's key, not the rest of the account.
- Members disconnect by removing CoinMarketCap from their AI app's settings.

CoinMarketCap's Cursor plugin adds that hosted research requests can take 30 to 300 seconds, and that repeating a timed-out request may use more credits.

## Authentication

A live check on 2026-11-16 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer`. The header has no link to the protected-resource metadata.
- The metadata is at `/.well-known/oauth-protected-resource/mcp`. It names `https://mcp.coinmarketcap.com` as the authorization server, with the scope `mcp`.
- The authorization server metadata lists a registration endpoint (`/register`, dynamic client registration) and PKCE with S256. Sign-in happens on `coinmarketcap.com`.
- No registration request was sent to the server.

CoinMarketCap's docs call the API key header "the verified setup" and say OAuth depends on the client. Its own Cursor plugin uses OAuth with no key.

**Not checked.** The tool list behind sign-in was not read. Whether CoinMarketCap accepts BoldCreate Connect's redirect address was not checked.

## Tools

CoinMarketCap's docs list 12 tools, grouped like this:

- **Market data:** search cryptocurrencies, live quotes, global market metrics (including the Fear and Greed Index and BTC and ETH dominance).
- **Technical analysis:** for a single coin and for the whole market cap.
- **Information and news:** coin info, latest news, concept search and trending narratives.
- **Advanced metrics:** on-chain holder metrics, derivatives data and upcoming macro events.

All of them read data. None change anything in the account.

## Skills

The `skills/` folder holds 3 of the 8 skills published in [OpenCMC/skills-for-ai-agents-by-CoinMarketCap](https://github.com/OpenCMC/skills-for-ai-agents-by-CoinMarketCap/tree/734e728ad1b3b9fe775c911f581dc750e7875983/skills) at commit `734e728ad1b3b9fe775c911f581dc750e7875983`, copied unchanged. The source is MIT licensed. The original licence is in `skills/LICENSE`.

| Skill | What it does |
| --- | --- |
| `cmc-mcp` | Answers crypto questions with the MCP tools: prices, technical analysis, news and market data. |
| `crypto-research` | Researches one coin: fundamentals, tokenomics, holders, technicals and risks. |
| `market-report` | Writes a market report from global metrics, sentiment, narratives, derivatives and upcoming events. |

Each skill shows the API key header setup in its "Prerequisites" section. This plugin signs in with OAuth instead, so members do not need to follow that step.

**Left out.**

- `cmc-x402` tells the agent to run `npm install` and to use a wallet private key to pay per call in USDC.
- `cmc-api-crypto`, `cmc-api-dex`, `cmc-api-exchange` and `cmc-api-market` are guides for writing code against the REST API with an API key. They do not use this MCP server.

## Not included

- **x402 server.** CoinMarketCap also runs `https://mcp.coinmarketcap.com/x402/mcp`, where an agent pays 0.01 USDC per call from a funded wallet. It is not used here.
- **CoinMarketCap's Cursor plugin.** [OpenCMC/coinmarketcap-cursor-plugin](https://github.com/OpenCMC/coinmarketcap-cursor-plugin) has only a manifest, the server address and a logo. This plugin points at the same server.

## Docs

- CoinMarketCap MCP: https://coinmarketcap.com/api/mcp/
- MCP integration guide: https://coinmarketcap.com/api/documentation/ai-agent-hub/mcp
- Pricing: https://coinmarketcap.com/api/pricing/
- Privacy: https://coinmarketcap.com/privacy/

## Logo

The `apple-touch-icon.png` from coinmarketcap.com, centred on a white tile. It is CoinMarketCap's own icon and a trademark of its owner. It is not covered by the MIT licence. I could not view the logo.

## License

MIT for the files written for this plugin. The skills are MIT, as above.

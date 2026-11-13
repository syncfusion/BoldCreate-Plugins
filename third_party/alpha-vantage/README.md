# Alpha Vantage

BoldCreate plugin that connects agents to Alpha Vantage through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Real-time and historical stock market data from Alpha Vantage.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Alpha Vantage**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Alpha Vantage**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install alpha-vantage@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "alpha-vantage": {
      "type": "http",
      "url": "https://mcp.alphavantage.co/mcp"
    }
  }
}
```

## Setup

No settings.

Alpha Vantage's README says that when you connect, an authentication page opens where you enter and authorize your own Alpha Vantage API key. A free key is available from Alpha Vantage. To change the key later, disconnect and reconnect the server. So the sign-in is OAuth, but the member supplies an API key on the consent page, not a username and password.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names `https://mcp.alphavantage.co` as the authorization server, with the scope `alphavantage:read`.
- The authorization server metadata lists a registration endpoint (`/register`, dynamic client registration), PKCE with S256 only, and the `authorization_code` and `refresh_token` grants.
- Token endpoint methods are `none`, `client_secret_basic` and `client_secret_post`. The metadata does not list client ID metadata documents.

**Which clients can register.** The server source in Alpha Vantage's repository (`mcp/src/av_mcp/oauth.py`, read at commit `3ed9b05d`) checks the redirect address of every registration. It accepts loopback addresses on any port, and https addresses on `claude.ai`, `claude.com`, `chatgpt.com`, `chat.openai.com`, `gptcloud.arc53.com` and `manufact.com` (with subdomains). One Microsoft Teams callback is reserved for confidential clients. Any other https redirect address is rejected with `invalid_redirect_uri`. This source is the repository head, which may differ from what is deployed. It was not tested against the live server, and no registration request was sent. **Whether BoldCreate Connect's callback address is accepted is not confirmed.** If it is not, sign-in through Connect will fail at registration. The source comments say Claude Code uses a loopback address, which it accepts. I did not check which address other clients use.

**API key instead of OAuth.** Alpha Vantage's README also describes sending the key directly. A live check with Alpha Vantage's public demo key from its documentation showed that the server accepted it in the `X-API-Key` header, in `Authorization: Bearer`, and in `Authorization` without a prefix, and returned the tool list each time. A key in the URL (`?apikey=`) is documented as legacy and deprecated, and this plugin does not use it. The plugin sets no key.

## What it offers

Alpha Vantage's README groups the tools into these categories: core stock data, options, Alpha Intelligence (news sentiment, earnings call transcripts, insider and institutional data, top gainers and losers), fundamentals, forex, cryptocurrencies, commodities, economic indicators, technical indicators, and congressional trades. Its documentation labels some endpoints Premium. I did not check which tools a free key can use. The tools named in Alpha Vantage's README are market and economic data lookups. I did not read what each of the 133 live tools does, so I cannot say none of them changes anything.

A live `tools/list` call using the public demo key returned **133 tools**. Alpha Vantage's README table lists 120 tool names. Fourteen live tools are not in that table: `CRYPTO_INTRADAY`, `DIVIDENDS`, `EARNINGS_ESTIMATES`, `ETF_PROFILE`, `HISTORICAL_PUT_CALL_RATIO`, `HISTORICAL_VOLUME_OPEN_INTEREST_RATIO`, `INDEX_CATALOG`, `INDEX_DATA`, `REALTIME_PUT_CALL_RATIO`, `REALTIME_VOLUME_OPEN_INTEREST_RATIO`, `SPLITS`, `TOOL_CALL`, `TOOL_GET` and `TOOL_LIST`. One table entry, `DIGITAL_CURRENCY_INTRADAY`, was not in the live list. I did not read what the three `TOOL_*` tools do. The tool list for a signed-in account was not checked, so it may differ.

When asked for protocol version 2025-06-18, the key-authenticated `initialize` call answered with 2024-11-05. The tools answered normally.

## Skills

Not included. Alpha Vantage's repository has one skill, `global-stock-analysis` (7 Markdown files, at commit `3ed9b05d`, tree hash `5fa7bfa3`). Its front matter says it requires the `marketdata-cli` command-line tool (`pip install marketdata-cli`) and an `ALPHAVANTAGE_API_KEY` environment variable, and its workflows run `marketdata-cli` commands. It does not use this MCP server, and the file has no licence field of its own, so it was left out. The repository's licence is MIT.

## Not imported

Nothing from the repository is copied into this plugin. The linked organisation, [github.com/alphavantage](https://github.com/alphavantage), has one repository, `alpha_vantage_mcp`. It holds the server source (Python), a command-line tool and the skill above. The hosted address comes from Alpha Vantage's own README.

## Docs

- Alpha Vantage MCP server: https://mcp.alphavantage.co/
- Source: https://github.com/alphavantage/alpha_vantage_mcp
- API documentation: https://www.alphavantage.co/documentation/
- Free API key: https://www.alphavantage.co/support/#api-key

## Logo

Alpha Vantage's own logo from `cdn.alphavantage.co/logo.png` (128 by 128), centred at its original size on a white tile. It is a trademark of its owner and is not covered by the MIT licence.

## License

MIT

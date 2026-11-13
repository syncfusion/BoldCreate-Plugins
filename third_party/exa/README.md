# Exa

BoldCreate plugin that connects agents to Exa through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Connect AI agents to Exa for web search, content fetching, and multi-step research.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Exa**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Exa**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install exa@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "exa": {
      "type": "http",
      "url": "https://mcp.exa.ai/mcp/oauth"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Exa account in the browser (OAuth). There is no API key to paste.

## Endpoint

Exa's README gives `https://mcp.exa.ai/mcp` as the server address and says it works anonymously with rate limits. It also says that `https://mcp.exa.ai/mcp?login` or `https://mcp.exa.ai/mcp/oauth` forces the sign-in flow, which is useful for shared connectors and plugins.

A live check on 2026-11-13 found:

| Address | Result |
| --- | --- |
| `https://mcp.exa.ai/mcp` | HTTP 200 to `initialize` with no sign-in. `tools/list` returned 2 tools: `web_search_exa` and `web_fetch_exa`. |
| `https://mcp.exa.ai/mcp?login` | HTTP 401 with `WWW-Authenticate: Bearer`. |
| `https://mcp.exa.ai/mcp/oauth` | HTTP 401 with `WWW-Authenticate: Bearer` and a link to its own protected-resource metadata. |

The anonymous address would not give each member their own account, so this plugin uses `/mcp/oauth`.

## Authentication

The same check found:

- The protected-resource metadata for `/mcp/oauth` names `https://auth.exa.ai` as the authorization server, with the scope `mcp:tools`.
- The authorization server metadata lists a registration endpoint (dynamic client registration), client ID metadata documents, PKCE with S256, and the `authorization_code`, `refresh_token` and `jwt-bearer` grants.
- The only token endpoint method is `none`, so registration does not issue a client secret.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

Exa's README also allows an API key, sent as `Authorization: Bearer …`, an `x-api-key` header, or `?exaApiKey=…` in the URL. This plugin does not set one. Do not put a key in the URL.

**Not checked.** The tool list behind sign-in was not read.

## Tools

Exa's README lists these tools:

| Tool | In Exa's words | Default |
| --- | --- | --- |
| `web_search_exa` | Search the web for any topic and get clean, ready-to-use content. | Yes |
| `web_fetch_exa` | Read a webpage's full content as clean markdown from one or more URLs. | Yes |
| `agent_run` | Run an Exa Agent for multi-step research, list-building, enrichment, and structured output. | No |
| `web_search_advanced_exa` | Advanced search with filters, domains, dates, highlights, summaries, and subpage crawling. | No |

Exa's README says the optional tools are turned on with a `tools` parameter on the URL, and that Exa Agent needs sign-in. This plugin uses the plain `/mcp/oauth` address, so which tools a signed-in account gets was not checked.

## Skills

The `skills/` folder holds the `search` skill from [exa-labs/exa-mcp-server](https://github.com/exa-labs/exa-mcp-server/tree/93c0d5e1fecfc1ec9bf70fa9f3633962a1f2fa8a/skills/search) at commit `93c0d5e1fecfc1ec9bf70fa9f3633962a1f2fa8a`, copied unchanged. It has a `SKILL.md` and 11 reference files. Exa describes it as deep research, lead generation, literature reviews and competitive analysis.

The folder's tree hash was compared with the one GitHub returns for the repository's `skills` folder. A copy of the repository's `LICENSE` (MIT, copyright 2025 Exa Labs) is in `skills/LICENSE`.

**Left out.** The repository's second skill, `exa-agent`, is not included. Its `name` is `Exa Agent`, with capital letters and a space. This repository requires a skill name to match its folder name and use only lowercase letters, digits and single hyphens, and files are not edited after import. The skill also depends on the `agent_run` tool, which Exa's README lists as optional.

**What the skill does.** Its text says to start with OAuth, with an API key as a second choice and anonymous use as a third, and to plan the work and hand parts of it to subagents. It names `https://mcp.exa.ai/mcp` as the server. It has no scripts or install commands. One link in `references/synthesis.md` points to a file named `url`, which does not exist.

**Not included.** Exa's repository also holds a Claude plugin copy, a Gemini extension file, and an Agent Plugin manifest. They are not used here. Exa publishes separate plugins for Cursor and other clients, which were not used.

## Docs

- Exa MCP: https://exa.ai/docs/get-started/exa-mcp
- Exa MCP server source: https://github.com/exa-labs/exa-mcp-server
- API keys: https://dashboard.exa.ai/api-keys

## Logo

Exa's logomark from `exa.ai`, centred on a white tile. It is Exa's own mark and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT

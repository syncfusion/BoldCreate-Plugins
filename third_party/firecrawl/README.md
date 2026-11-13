# Firecrawl

BoldCreate plugin that connects agents to Firecrawl through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Search, scrape, and interact with the web, plus parse, crawl, map, Agent and Monitor.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Firecrawl**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Firecrawl**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install firecrawl@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "firecrawl": {
      "type": "http",
      "url": "https://mcp.firecrawl.dev/v2/mcp-oauth"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Firecrawl account in the browser (OAuth). There is no API key to paste.

## Endpoints

Firecrawl hosts three endpoints. This plugin uses the first.

| Endpoint | What Firecrawl's README says | What a live check on 2026-11-13 found |
| --- | --- | --- |
| `https://mcp.firecrawl.dev/v2/mcp-oauth` | The account surface, for an interactive account connection with OAuth. | HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata. |
| `https://mcp.firecrawl.dev/v2/mcp` | The full tool set with an API key, or a keyless free tier. | HTTP 200 to `initialize` with no sign-in. `tools/list` returned 3 tools: `firecrawl_scrape`, `firecrawl_search` and `firecrawl_parse`. |
| `https://mcp.firecrawl.dev/v2/mcp-search` | A fixed set of 11 search tools. | Not checked. |

The `/v2/mcp` endpoint answers without sign-in, so it does not use OAuth and would not give each member their own account. This plugin therefore uses `/v2/mcp-oauth`. Firecrawl's README says the keyless tier is rate limited and that `crawl`, `map` and `agent` need a key.

## Authentication

The same check found:

- The protected-resource metadata for `/v2/mcp-oauth` names `https://www.firecrawl.dev` as the authorization server, with the scope `firecrawl:global`.
- The authorization server metadata lists a registration endpoint (dynamic client registration), client ID metadata documents, PKCE with S256, the `authorization_code`, `refresh_token` and JWT-bearer grants, and the scopes `firecrawl:global` and `offline_access`.
- The only token endpoint method is `none`, so clients are public. Registration does not issue a client secret.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

Firecrawl's README also allows an API key as `Authorization: Bearer <key>` on `/v2/mcp`. This plugin does not set one.

**Not checked.** The tool list for `/v2/mcp-oauth` is behind sign-in, so `tools/list` was not called there. Firecrawl's README says the full profile lists 31 tools. That count and the tool names come from the README, not from the live account endpoint.

## Skills

The `skills/` folder holds 18 of the 19 skills in [firecrawl/firecrawl-cursor-plugin](https://github.com/firecrawl/firecrawl-cursor-plugin/tree/81aa63c0f5a7d8b6bb0f3df204156aad608eac78/skills) at commit `81aa63c0f5a7d8b6bb0f3df204156aad608eac78`, copied unchanged. A copy of that repository's `LICENSE` (MIT, copyright 2026 Firecrawl) is in `skills/LICENSE`.

`brand-identity`, `business-contact-research`, `design`, `enrich-lead`, `fantasy-sports`, `find-leads`, `firecrawl`, `flights-and-hotels`, `get-started`, `job-postings`, `local-businesses`, `markets-and-filings`, `news-coverage`, `prices-and-plans`, `property-listings`, `read-docs`, `seo-audit`, `video-transcripts`.

**Left out.** `firecrawl-deep-research` says `license: ISC` in its front matter, while the rest of the repository is MIT. The ISC text is published in the separate `firecrawl/skills` repository, and that repository's copy of the skill differs from this one. The `firecrawl`, `news-coverage` and `firecrawl-deep-research` skills refer to it, so those references point at a skill that is not installed.

**Feedback calls.** The `firecrawl` skill tells the agent to send feedback to Firecrawl after it uses a search, and for Alexandria and scrape jobs. The calls use the `firecrawl_search_feedback` and `firecrawl_feedback` tools and send a rating, short notes and missing-content topics. Firecrawl's README says the first feedback per search refunds one credit. The skill says to leave sensitive information out and to skip feedback when the tool is missing or the team has opted out. Firecrawl's README says the server can be started without these tools (`FIRECRAWL_NO_SEARCH_FEEDBACK=1`), but that setting applies to a server you run, not to the hosted one.

**Other things the skills cover.**

- Several skills use Alexandria data providers. Firecrawl's README says some providers need an organization admin to accept data terms in the Firecrawl dashboard, and that the agent cannot accept them.
- The README says Alexandria tools, `crawl`, `map` and `agent` need a Firecrawl account. Some skills depend on them.
- `get-started` links to the Firecrawl CLI at `github.com/firecrawl/cli` for readers who ask for it. This plugin does not install it.
- The skills contain no scripts, install commands or `curl` pipes. Every file is Markdown.

## Docs

- Firecrawl MCP server: https://docs.firecrawl.dev/mcp-server
- Firecrawl MCP server source: https://github.com/firecrawl/firecrawl-mcp-server
- Firecrawl Cursor plugin source: https://github.com/firecrawl/firecrawl-cursor-plugin

## Logo

Firecrawl flame mark from Firecrawl's Cursor plugin, redrawn in brand colour #FA5D19 on a padded white tile. The mark is a trademark of its owner and is not covered by the MIT licence.

## License

MIT

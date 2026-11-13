# Cloudinary

BoldCreate plugin that connects agents to Cloudinary through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) servers over streamable HTTP.

Use Cloudinary directly in your agent. Upload, manage, optimize, and transform images and videos at scale using natural language.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Cloudinary**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Cloudinary**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cloudinary@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "cloudinary-asset-mgmt": {
      "type": "http",
      "url": "https://asset-management.mcp.cloudinary.com/mcp"
    },
    "cloudinary-env-config": {
      "type": "http",
      "url": "https://environment-config.mcp.cloudinary.com/mcp"
    },
    "cloudinary-smd": {
      "type": "http",
      "url": "https://structured-metadata.mcp.cloudinary.com/mcp"
    },
    "cloudinary-analysis": {
      "type": "http",
      "url": "https://analysis.mcp.cloudinary.com/mcp"
    }
  }
}
```

## Setup

No settings.

Each server asks for its own sign-in the first time the agent calls one of its tools. The member signs in to their Cloudinary account in the browser (OAuth) and picks the product environment (cloud) to use. There are four servers, so expect up to four sign-ins. Cloudinary suggests turning off the servers and tools you do not need, to limit context use and errors.

## Servers

Descriptions are from the table in Cloudinary's [mcp-servers](https://github.com/cloudinary/mcp-servers) README.

| Key | Address | What it does |
| --- | --- | --- |
| `cloudinary-asset-mgmt` | `https://asset-management.mcp.cloudinary.com/mcp` | Upload, manage, search, and transform your media assets, and generate new images with AI from text prompts or reference images. |
| `cloudinary-env-config` | `https://environment-config.mcp.cloudinary.com/mcp` | Configure and manage your Cloudinary environment settings, upload presets, and transformations. |
| `cloudinary-smd` | `https://structured-metadata.mcp.cloudinary.com/mcp` | Create, manage, and query structured metadata fields for enhanced asset organization and searchability. |
| `cloudinary-analysis` | `https://analysis.mcp.cloudinary.com/mcp` | Leverage AI-powered content analysis, moderation, and auto-tagging capabilities for your media assets. |

Cloudinary's docs say `/mcp` (streamable HTTP) is the recommended address and that `/sse` is deprecated, except on the analysis server. This plugin uses `/mcp` on all four.

## Authentication

A live check on 2026-11-13 found, on each of the four servers:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer` and a link to the protected-resource metadata.
- The metadata names the server's own host as the authorization server.
- The authorization server metadata lists a registration endpoint (`/register`, dynamic client registration), PKCE with S256, and the token endpoint methods `client_secret_post`, `client_secret_basic` and `none`.
- The scopes are `openid profile email offline_access` plus, on asset management, `asset_management upload media_generation`; on environment config and structured metadata, `asset_management upload`; and on analysis, `media_analysis query_analysis_tasks`.

So members connect without a client ID or client secret from your team. No registration request was sent to any server during the check.

Cloudinary's docs also describe sending an API key and secret in request headers (for example a `cloudinary-url` header) instead of OAuth, and say the analysis server does not support that. This plugin sets no key. Do not put a key or secret in a file that is committed.

**Not checked.** The tool lists are behind sign-in, so `tools/list` was not called, and whether Cloudinary's servers accept BoldCreate Connect's redirect address was not tested.

## What the agent can change

Cloudinary's README lists these abilities by server. They change data in the signed-in product environment:

- **Asset management:** upload and manage assets, folders, tags and asset relationships, and generate archives and download links.
- **Environment config:** create and manage named transformations and upload presets, streaming profiles and triggers (webhook notifications), and upload mappings.
- **Structured metadata:** create and manage metadata fields, conditional metadata rules, and list values.
- **Analysis:** run AI analysis, moderation and tagging on assets.

Cloudinary says some features need a paid plan, for example advanced AI analysis and high-volume API use. Review what the agent plans to do before you approve it.

## Left out

- **MediaFlows.** Cloudinary's own plugin also sets `https://mediaflows.mcp.cloudinary.com/v2/mcp`. It is not included. Cloudinary says it does not use OAuth and needs the cloud name, API key and secret in headers. A live check found HTTP 401 with no `WWW-Authenticate` header, and both protected-resource metadata addresses returned 404.
- **Account provisioning and media generation.** Cloudinary has `account-provisioning-mcp` and `media-generation-mcp` repositories, but the `mcp-servers` README lists no hosted address for them, and `account-provisioning.mcp.cloudinary.com` and `media-generation.mcp.cloudinary.com` do not resolve.
- **Skills.** Cloudinary publishes agent skills in [cloudinary-devs/skills](https://github.com/cloudinary-devs/skills) and [cloudinary-devs/cloudinary-plugin](https://github.com/cloudinary-devs/cloudinary-plugin). None are included, for two reasons:
  - Neither repository has a `LICENSE` file. Each skill says `license: MIT` in its header, but there is no copyright notice or licence text to keep with a copy.
  - The skills I checked (`cloudinary-docs` and `cloudinary-transformations`) tell the agent to call a Cloudinary address with the skill name and version, the agent product and model, the kind of task, and the cloud name if the agent already knows it. This repository does not ship that kind of call.
- **Hooks and commands.** None.

## Docs

- Cloudinary AI agent tools and MCP servers: https://cloudinary.com/documentation/cloudinary_llm_mcp
- Cloudinary MCP servers source: https://github.com/cloudinary/mcp-servers
- API keys: https://console.cloudinary.com/app/settings/api-keys

## Logo

Cloudinary's favicon from `cloudinary.com`, centred on a white tile. I did not view the result. It is Cloudinary's own mark and a trademark of its owner. It is not covered by the MIT licence.

## License

MIT

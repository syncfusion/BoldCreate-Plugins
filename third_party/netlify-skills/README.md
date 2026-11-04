# Netlify

Skills that teach agents to work with Netlify. They are copied from the vendor's repository, [netlify/context-and-tools](https://github.com/netlify/context-and-tools), at commit `dc9ebf1`.

Netlify platform skills for Claude Code

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Netlify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Netlify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install netlify-skills@boldcreate-plugins`.

## Skills

15 skills: `netlify-access-control`, `netlify-agent-runner`, `netlify-ai-gateway`, `netlify-blobs`, `netlify-caching`, `netlify-config`, `netlify-database`, `netlify-deploy`, `netlify-edge-functions`, `netlify-forms`, `netlify-frameworks`, `netlify-functions`, `netlify-identity`, `netlify-image-cdn`, `netlify-mcp-servers`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

The skills mention these environment variables for credentials: `ACCESS_TOKEN`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `GOOGLE_API_KEY`, `NPM_TOKEN`, `OPENAI_API_KEY`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/netlify/context-and-tools

## Logo

Netlify mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #00C7B7, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

# Cloudflare

Skills that teach agents to work with Cloudflare. They are copied from the vendor's repository, [cloudflare/skills](https://github.com/cloudflare/skills), at commit `b052c32`.

Build, test, and deploy applications on Cloudflare with platform guidance Skills and the Cloudflare MCP server.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Cloudflare**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Cloudflare**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install cloudflare@boldcreate-plugins`.

## Skills

14 skills: `agents-sdk`, `cloudflare`, `cloudflare-email-service`, `cloudflare-one`, `cloudflare-one-migrations`, `durable-objects`, `nextjs-on-cloudflare`, `sandbox-migrate-to-next`, `sandbox-next`, `sandbox-stable`, `turnstile-spin`, `web-perf`, `workers-best-practices`, `wrangler`.

## Setup

No install-time settings.

## Before you install

4 script files ship inside the skills. The agent can run them on your machine. Read them first. 3 of them make network calls.

The skills mention these environment variables for credentials: `EMAIL_SECRET`, `WEBHOOK_SECRET`, `CLOUDFLARE_API_KEY`, `ARTIFACTS_TOKEN`, `API_TOKEN`, `CF_TOKEN`, `COMPLETION_TOKEN`, `DB_PASSWORD`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/cloudflare/skills

## Logo

Cloudflare mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #F38020, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

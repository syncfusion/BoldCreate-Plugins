# Postman

Skills that teach agents to work with Postman. They are copied from the vendor's repository, [postmanlabs/postman-plugin](https://github.com/postmanlabs/postman-plugin), at commit `c6352ef`.

Work with Postman from your agent: bootstrap a repo's Postman setup, mock an API before it's implemented, run collection and governance checks in CI, monitor a live endpoint, deploy and debug Postman

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Postman**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Postman**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install postman@boldcreate-plugins`.

## Skills

17 skills: `ai-readiness`, `api-discovery`, `api-documentation`, `api-engineer`, `api-mocking`, `api-monitoring`, `api-simulation`, `api-testing`, `bootstrap`, `ci-integration`, `collection-schema-v3`, `datasets`, `flows`, `performance-testing`, `postman-mcp-server`, `variables`, `webhook-testing`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

1 document show install commands that pipe a download into a shell (`curl ... | sh`). The agent may suggest them. Read the script before you run it.

The skills mention these environment variables for credentials: `POSTMAN_API_KEY`, `STRIPE_API_KEY`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/postmanlabs/postman-plugin

## Logo

Postman mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FF6C37, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

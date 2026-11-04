# Carta CRM

Skills that teach agents to work with Carta CRM. They are copied from the vendor's repository, [carta/plugins](https://github.com/carta/plugins), at commit `ea7fe1d`.

Manage the Carta CRM conversationally — search, add, update, and enrich investors, companies, contacts, deals, notes, and fundraisings via the Carta CRM MCP Server

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Carta CRM**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Carta CRM**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install carta-crm@boldcreate-plugins`.

## Skills

26 skills: `add-company`, `add-contact`, `add-deal`, `add-fundraising`, `add-investor`, `add-note`, `carta-crm-home-build`, `deal-flow-analytics`, `enrich-company`, `get-angles`, `home`, `prepare-for-meeting`, `search-companies`, `search-contacts`, `search-deals`, `search-fundraisings`, `search-investors`, `search-notes`, `search-reports`, `tutorial`, `update-company`, `update-contact`, `update-deal`, `update-fundraising`, `update-investor`, `update-note`.

## Setup

No install-time settings.

## Before you install

1 script file ship inside the skills. The agent can run it on your machine. Read it first.

Some skill files use `${CLAUDE_PLUGIN_ROOT}` or `${CLAUDE_SKILL_DIR}`. These are Claude Code variables, so other clients may not expand them. The skill files are unchanged.

## Docs

- Vendor repository: https://github.com/carta/plugins

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

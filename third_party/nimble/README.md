# Nimble

Skills and agents that teach agents to work with Nimble. They are copied from the vendor's repository, [Nimbleway/agent-skills](https://github.com/Nimbleway/agent-skills), at commit `fdb077c`.

Search the live web, extract page content and run research workflows with Nimble.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Nimble**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Nimble**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install nimble@boldcreate-plugins`.

## Skills

15 skills: `brand-mention-monitor`, `company-deep-dive`, `competitor-intel`, `competitor-positioning`, `healthcare-providers-enrich`, `healthcare-providers-extract`, `healthcare-providers-verify`, `launch-monitor`, `local-places`, `market-finder`, `meeting-prep`, `nimble-databricks-data-products`, `nimble-web-expert`, `seo-intel`, `talent-sourcing`.

## Setup

No install-time settings.

## Before you install

The skills call the `nimble` command-line tool (`nimble search`, `nimble extract`, `nimble map`, `nimble crawl`) and read your Nimble API key from `NIMBLE_API_KEY`. Install the CLI yourself with `npm i -g @nimble-way/nimble-cli`. This plugin does not install it or store the key.

Two scripts ship inside `nimble-databricks-data-products`: `ingest.sh` and `build_dashboard.py`. They run SQL against a Databricks warehouse, so read them first.

**One vendor file was edited.** In `skills/nimble-web-expert/SKILL.md`, the description said `(>= 1.2.0)`. The validator rejects `>` in a skill description, so it now says `(1.2.0 or newer)`. Nothing else differs from the vendor's file.

## Docs

- Vendor repository: https://github.com/Nimbleway/agent-skills

## Logo

Logo copied from the vendor repository. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

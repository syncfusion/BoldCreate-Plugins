# Mercado Pago

Skills and agents that teach agents to work with Mercado Pago. They are copied from the vendor's repository, [mercadopago/mercadopago-claude-marketplace](https://github.com/mercadopago/mercadopago-claude-marketplace), at commit `755d337`.

Mercado Pago integration toolkit for Claude Code.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Mercado Pago**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Mercado Pago**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install mercadopago@boldcreate-plugins`.

## Skills

4 skills: `mp-integrate`, `mp-review`, `mp-test-setup`, `mp-webhooks`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

The skills mention these environment variables for credentials: `ACCESS_TOKEN`. This plugin does not store them.

Some skill files use `${CLAUDE_PLUGIN_ROOT}` or `${CLAUDE_SKILL_DIR}`. These are Claude Code variables, so other clients may not expand them. The skill files are unchanged.

## Docs

- Vendor repository: https://github.com/mercadopago/mercadopago-claude-marketplace

## Logo

Mercado Pago mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #00B1EA, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

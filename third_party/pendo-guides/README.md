# Pendo Guides

Skills that teach agents to work with Pendo Guides. They are copied from the vendor's repository, [pendo-io/claude-pendo-plugin](https://github.com/pendo-io/claude-pendo-plugin), at commit `340d503`.

Create production-ready Pendo in-app guides (walkthroughs, announcements, alerts, polls, promotions) as HTML/CSS/JS from a short intake conversation

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Pendo Guides**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Pendo Guides**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pendo-guides@boldcreate-plugins`.

## Skills

1 skills: `pendo-guide-creator`.

## Setup

No install-time settings.

## Before you install

1 script file ship inside the skills. The agent can run it on your machine. Read it first.

The `pendo-guide-creator` skill ships two small browser components (`pendo-poll.js` and `register.min.js`) that the guides it writes embed. The agent does not run them.

## Docs

- Vendor repository: https://github.com/pendo-io/claude-pendo-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

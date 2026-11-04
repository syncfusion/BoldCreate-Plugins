# Resend

Skills that teach agents to work with Resend. They are copied from the vendor's repository, [resend/resend-skills](https://github.com/resend/resend-skills), at commit `fd14937`.

Send and receive email with Resend, build emails with React Email, and follow deliverability practices.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Resend**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Resend**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install resend@boldcreate-plugins`.

## Skills

5 skills: `agent-email-inbox`, `email-best-practices`, `react-email`, `resend`, `resend-cli`.

## Setup

No install-time settings.

## Before you install

One script ships inside the skills: `resend/references/fetch-all-templates.mjs`. It calls the Resend API with your `RESEND_API_KEY`.

A webhook-setup reference shows `curl -fsSL https://tailscale.com/install.sh | sh`. That is text for the agent to read, but an agent could run it.

The vendor's MCP server (`https://mcp.resend.com/mcp`) is not part of this plugin.

## Docs

- Vendor repository: https://github.com/resend/resend-skills

## Logo

Resend mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #000000, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

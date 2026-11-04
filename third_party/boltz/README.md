# Boltz

Skills that teach agents to work with Boltz. They are copied from the vendor's repository, [boltz-bio/boltz-api-skills](https://github.com/boltz-bio/boltz-api-skills), at commit `beafb3c`.

Predict structures, screen molecules and proteins, and design binders with Boltz.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Boltz**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Boltz**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install boltz@boldcreate-plugins`.

## Skills

8 skills: `boltz-check-status`, `boltz-cli-setup`, `boltz-protein-design`, `boltz-protein-screen`, `boltz-small-molecule-adme`, `boltz-small-molecule-design`, `boltz-small-molecule-screen`, `boltz-structure-and-binding`.

## Setup

No install-time settings.

## Before you install

Six Python scripts ship in `boltz-protein-design/scripts`. I searched them for network calls and process launches and found none, but I did not run them.

The `boltz-cli-setup` skill tells the agent to install the vendor's command-line tool with `curl -fsSL https://install.boltz.bio/boltz-api/install.sh | sh`. Read that line before you let an agent run it.

The skills drive the `boltz-api` command-line tool and read your Boltz API key from `BOLTZ_API_KEY`. This plugin installs neither.

## Docs

- Vendor repository: https://github.com/boltz-bio/boltz-api-skills

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

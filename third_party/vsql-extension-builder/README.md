# VillageSQL Extension Builder

Skills that teach agents to work with VillageSQL Extension Builder. They are copied from the vendor's repository, [villagesql/villagesql-skills](https://github.com/villagesql/villagesql-skills), at commit `18f7d68`.

Skills for VillageSQL (MySQL with extensions): build extensions end-to-end (including porting PostgreSQL extensions to MySQL) and install VillageSQL Server.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **VillageSQL Extension Builder**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **VillageSQL Extension Builder**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install vsql-extension-builder@boldcreate-plugins`.

## Skills

2 skills: `vsql-extension-builder`, `vsql-install-server`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

1 document show install commands that pipe a download into a shell (`curl ... | sh`). The agent may suggest them. Read the script before you run it.

A skill document links to the vendor's plugin-level `README.md`, which is not part of this plugin, so that link does not resolve. The skill file is unchanged.

## Docs

- Vendor repository: https://github.com/villagesql/villagesql-skills

## Logo

Logo copied from the vendor repository. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

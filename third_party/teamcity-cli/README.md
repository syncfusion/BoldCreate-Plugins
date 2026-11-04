# TeamCity CLI

Skills that teach agents to work with TeamCity CLI. They are copied from the vendor's repository, [JetBrains/teamcity-cli](https://github.com/JetBrains/teamcity-cli), at commit `ac6c1fd`.

Agent skill for interacting with TeamCity CI/CD using the teamcity CLI.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **TeamCity CLI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **TeamCity CLI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install teamcity-cli@boldcreate-plugins`.

## Skills

2 skills: `migrate-to-teamcity`, `teamcity-cli`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

1 document show install commands that pipe a download into a shell (`curl ... | sh`). The agent may suggest them. Read the script before you run it.

The skills mention these environment variables for credentials: `GH_TOKEN`, `GITHUB_TOKEN`, `TEAMCITY_TOKEN`, `ACCESS_TOKEN`, `REGISTRY_TOKEN`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/JetBrains/teamcity-cli

## Logo

TeamCity mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #000000, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

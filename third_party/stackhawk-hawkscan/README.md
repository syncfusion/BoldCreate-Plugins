# StackHawk HawkScan

Skills that teach agents to work with StackHawk HawkScan. They are copied from the vendor's repository, [stackhawk/agent-skills](https://github.com/stackhawk/agent-skills), at commit `66cac9b`.

Configure, run, and interpret HawkScan DAST results inside Claude Code.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **StackHawk HawkScan**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **StackHawk HawkScan**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install stackhawk-hawkscan@boldcreate-plugins`.

## Skills

1 skills: `hawkscan`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

The skills configure and run HawkScan scans from your machine. Only scan targets you are allowed to test.

The skills mention these environment variables for credentials: `GEMINI_API_KEY`, `HAWK_API_KEY`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/stackhawk/agent-skills

## Logo

StackHawk mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #00CBC6, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

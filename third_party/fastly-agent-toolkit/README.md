# Fastly Agent Toolkit

Skills that teach agents to work with Fastly Agent Toolkit. They are copied from the vendor's repository, [fastly/fastly-agent-toolkit](https://github.com/fastly/fastly-agent-toolkit), at commit `6db70ea`.

Work with the Fastly CLI, Compute, Fiddle, NGWAF, VCL tooling and reference architectures.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Fastly Agent Toolkit**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Fastly Agent Toolkit**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install fastly-agent-toolkit@boldcreate-plugins`.

## Skills

10 skills: `falco`, `fastlike`, `fastly`, `fastly-cli`, `fastly-fiddle`, `fastly-ngwaf`, `fastly-reference-architectures`, `fastly-stats`, `viceroy`, `xvcl`.

## Setup

No install-time settings.

## Before you install

Two shell scripts ship inside the skills: `fastly-fiddle/scripts/run-fiddle.sh` and `fastly-ngwaf/scripts/assess_ngwaf_rules.sh`. They call Fastly services with your `FASTLY_API_KEY`, so read them first.

The skills assume the `fastly` command-line tool and related tools such as `viceroy` and `falco`.

## Docs

- Vendor repository: https://github.com/fastly/fastly-agent-toolkit

## Logo

Fastly mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FF282D, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

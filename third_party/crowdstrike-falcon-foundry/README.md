# CrowdStrike Falcon Foundry

Skills that teach agents to work with CrowdStrike Falcon Foundry. They are copied from the vendor's repository, [CrowdStrike/foundry-skills](https://github.com/CrowdStrike/foundry-skills), at commit `61572f3`.

Build CrowdStrike Falcon Foundry applications: functions, workflows, UI extensions and collections.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **CrowdStrike Falcon Foundry**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **CrowdStrike Falcon Foundry**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install crowdstrike-falcon-foundry@boldcreate-plugins`.

## Skills

12 skills: `ai-agents-development`, `api-integrations`, `collections-development`, `debugging-workflows`, `development-workflow`, `e2e-testing`, `functions-development`, `functions-falcon-api`, `fusion-redirect`, `security-patterns`, `ui-development`, `workflows-development`.

## Setup

No install-time settings.

## Before you install

Three Python scripts ship inside the skills: `adapt_spec_for_foundry.py`, `detect_fusion_redirect.py` and `action_search.py`. An agent can run them on your machine.

The skills show example credentials such as `CLIENT_SECRET` and `FALCON_PASSWORD` as variable names in samples. The plugin stores no secrets.

The vendor's hooks, which add routing reminders and a CLI guard, are not included, so the skills load on demand only.

## Docs

- Vendor repository: https://github.com/CrowdStrike/foundry-skills

## Logo

Logo copied from the vendor repository. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

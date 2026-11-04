# AMD Skills

Skills that teach agents to work with AMD Skills. They are copied from the vendor's repository, [amd/skills](https://github.com/amd/skills), at commit `6916fb3`.

Serve and optimize large language models on AMD EPYC and Instinct hardware, and set up local AI with Lemonade.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AMD Skills**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AMD Skills**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install amd-skills@boldcreate-plugins`.

## Skills

8 skills: `hyperloom-workload-optimizer`, `lemonade-router-builder`, `local-ai-app-integration`, `local-ai-use`, `magpie-kernel-evaluator`, `serving-llms-on-epyc`, `serving-llms-on-instinct`, `tracelens-analysis-orchestrator`.

## Setup

No install-time settings.

## Before you install

21 script files ship inside the skills. The agent can run them on your machine. Read them first.

Some skills show `docker run` and `pip install` commands, and four Python scripts fetch model metadata from Hugging Face, GitHub or a local Lemonade server.

`hyperloom-workload-optimizer/scripts/launch.sh` starts a long-running optimization run in the background with `setsid nohup`. Read it before you let the agent run it.

The skills mention these environment variables for credentials: `ANTHROPIC_API_KEY`, `HF_TOKEN`, `LEMONADE_API_KEY`, `OPENAI_API_KEY`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/amd/skills

## Logo

AMD mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #ED1C24, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

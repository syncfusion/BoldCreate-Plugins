# AWS Agents

Skills that teach agents to work with AWS Agents. They are copied from the vendor's repository, [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws), at commit `0d6167a`.

Build, deploy, and operate AI agents on AWS.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AWS Agents**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AWS Agents**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install aws-agents@boldcreate-plugins`.

## Skills

8 skills: `agents-build`, `agents-connect`, `agents-debug`, `agents-deploy`, `agents-get-started`, `agents-harden`, `agents-optimize`, `agents-pay`.

## Setup

No install-time settings.

## Before you install

19 script files ship inside the skills. The agent can run them on your machine. Read them first. 4 of them make network calls.

1 document show install commands that pipe a download into a shell (`curl ... | sh`). The agent may suggest them. Read the script before you run it.

The skills mention these environment variables for credentials: `JWT_TOKEN`, `GEMINI_API_KEY`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `WALLET_SECRET`, `APP_SECRET`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/aws/agent-toolkit-for-aws

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

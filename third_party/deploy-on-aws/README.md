# Deploy on AWS

Skills that teach agents to work with Deploy on AWS. They are copied from the vendor's repository, [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins), at commit `fbefb37`.

Deploy applications to AWS with architecture recommendations, cost estimates, and IaC deployment.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Deploy on AWS**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Deploy on AWS**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install deploy-on-aws@boldcreate-plugins`.

## Skills

3 skills: `aws-architecture-diagram`, `deploy`, `elastic-beanstalk`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

The skills mention these environment variables for credentials: `DB_PASSWORD`, `SENDGRID_API_KEY`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/awslabs/agent-plugins

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

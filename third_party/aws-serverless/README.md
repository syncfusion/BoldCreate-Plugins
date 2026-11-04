# AWS Serverless

Skills that teach agents to work with AWS Serverless. They are copied from the vendor's repository, [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins), at commit `097fe8a`.

Design, build, deploy, test, and debug serverless applications with AWS Serverless services.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AWS Serverless**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AWS Serverless**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install aws-serverless@boldcreate-plugins`.

## Skills

7 skills: `api-gateway`, `aws-lambda`, `aws-lambda-durable-functions`, `aws-lambda-managed-instances`, `aws-lambda-microvms`, `aws-serverless-deployment`, `aws-step-functions`.

## Setup

No install-time settings.

## Before you install

1 script file ship inside the skills. The agent can run it on your machine. Read it first.

The skills mention these environment variables for credentials: `EXPIRED_TOKEN`, `INVALID_API_KEY`. This plugin does not store them.

The `aws-step-functions` skill links to a sibling plugin folder (`deploy-on-aws`), which is a separate plugin here. The skill file is unchanged.

## Docs

- Vendor repository: https://github.com/awslabs/agent-plugins

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

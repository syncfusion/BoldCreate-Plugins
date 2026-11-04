# AWS Core

Skills that teach agents to work with AWS Core. They are copied from the vendor's repository, [aws/agent-toolkit-for-aws](https://github.com/aws/agent-toolkit-for-aws), at commit `34b3ecc`.

Build, deploy, and operate applications on AWS.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **AWS Core**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **AWS Core**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install aws-core@boldcreate-plugins`.

## Skills

25 skills: `amazon-bedrock`, `aws-ai-ml`, `aws-auth`, `aws-billing-and-cost-management`, `aws-blocks`, `aws-cdk`, `aws-cloudformation`, `aws-compute`, `aws-containers`, `aws-database`, `aws-deployment`, `aws-iam`, `aws-messaging-and-streaming`, `aws-networking`, `aws-observability`, `aws-sdk-js-v3-usage`, `aws-sdk-python-usage`, `aws-sdk-swift-usage`, `aws-secrets-manager`, `aws-security`, `aws-serverless`, `aws-storage`, `aws-well-architected-review`, `launch-with-aws`, `signing-in-to-aws`.

## Setup

No install-time settings.

## Before you install

64 script files ship inside the skills. The agent can run them on your machine. Read them first. 2 of them make network calls.

The skills mention these environment variables for credentials: `NEW_API_KEY`, `HF_TOKEN`, `SOFTWARE_TOKEN`, `DB_PASSWORD`, `SENDGRID_API_KEY`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/aws/agent-toolkit-for-aws

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

# Amazon SageMaker AI

Skills that teach agents to work with Amazon SageMaker AI. They are copied from the vendor's repository, [awslabs/agent-plugins](https://github.com/awslabs/agent-plugins), at commit `097fe8a`.

Build, train, and deploy AI models with deep AWS AI/ML expertise brought directly into your coding assistants, covering the surface area of Amazon SageMaker AI.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Amazon SageMaker AI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Amazon SageMaker AI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install sagemaker-ai@boldcreate-plugins`.

## Skills

19 skills: `dataset-evaluation`, `dataset-transformation`, `directory-management`, `finetuning`, `finetuning-technique`, `hyperpod-cluster-debugger`, `hyperpod-issue-report`, `hyperpod-nccl`, `hyperpod-node-debugger`, `hyperpod-performance-debugger`, `hyperpod-slurm-debugger`, `hyperpod-ssm`, `hyperpod-version-checker`, `model-deployment`, `model-evaluation`, `model-selection`, `planning`, `sdk-getting-started`, `use-case-specification`.

## Setup

No install-time settings.

## Before you install

35 script files ship inside the skills. The agent can run them on your machine. Read them first. 4 of them make network calls.

The skills mention these environment variables for credentials: `IMDS_TOKEN`, `HF_TOKEN`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/awslabs/agent-plugins

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

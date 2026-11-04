# Together AI Skills

Skills that teach agents to work with Together AI Skills. They are copied from the vendor's repository, [togethercomputer/skills](https://github.com/togethercomputer/skills), at commit `644d382`.

Use the Together AI platform: chat, embeddings, images, audio, video, batch inference, fine-tuning and GPU clusters.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Together AI Skills**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Together AI Skills**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install togetherai-skills@boldcreate-plugins`.

## Skills

14 skills: `together-audio`, `together-batch-inference`, `together-chat-completions`, `together-dedicated-containers`, `together-dedicated-model-inference`, `together-embeddings`, `together-evaluations`, `together-fine-tuning`, `together-gpu-clusters`, `together-images`, `together-kueue`, `together-sandboxes`, `together-video`, `together-volcano`.

## Setup

No install-time settings.

## Before you install

32 Python scripts ship inside the skills. They call the Together AI API with your `TOGETHER_API_KEY` and send your prompts and files to Together AI. A few download sample files from public hosts. I found no `subprocess` or `os.system` calls in them.

Read the scripts before you allow the agent to run them. Calls to paid endpoints, such as GPU clusters and fine-tuning, can cost money.

## Docs

- Vendor repository: https://github.com/togethercomputer/skills

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

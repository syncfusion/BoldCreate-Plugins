# GC AI

Skills and agents that teach agents to work with GC AI. They are copied from the vendor's repository, [GC-AI-Inc/gc-ai-claude-plugin](https://github.com/GC-AI-Inc/gc-ai-claude-plugin), at commit `efda779`.

Use a GC AI legal knowledge base: upload documents, run review playbooks and ask grounded questions.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **GC AI**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **GC AI**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install gc-ai@boldcreate-plugins`.

## Skills

3 skills: `ask`, `organize-matter`, `review-document`.

## Setup

No install-time settings.

## Before you install

The plugin has one agent, `gc-ai-analyst`, and three skills: `ask`, `organize-matter` and `review-document`.

The skills use the GC AI tools from the vendor's MCP server at `https://app.gc.ai/api/mcp`. That server is not part of this plugin, so add it yourself before you use the skills.

The skills send your documents to GC AI through that server.

## Docs

- Vendor repository: https://github.com/GC-AI-Inc/gc-ai-claude-plugin

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

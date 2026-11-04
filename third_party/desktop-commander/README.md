# Desktop Commander

Skills that teach agents to work with Desktop Commander. They are copied from the vendor's repository, [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP), at commit `7504827`.

MCP server for terminal commands, process management, and file operations across text files, code, PDF, DOCX, Excel, images, and structured data

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Desktop Commander**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Desktop Commander**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install desktop-commander@boldcreate-plugins`.

## Skills

6 skills: `ai-tools-setup`, `computer-health-check`, `desktop-commander-overview`, `knowledge-base`, `obsidian-vault`, `terminal`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

The skills assume the Desktop Commander MCP server, which is not part of this plugin.

`ai-tools-setup/references/hermes.md` shows `curl ... | bash` and `iex` install commands for another tool. The `terminal` skill tells the agent to show such commands and ask first.

## Docs

- Vendor repository: https://github.com/wonderwhy-er/DesktopCommanderMCP

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

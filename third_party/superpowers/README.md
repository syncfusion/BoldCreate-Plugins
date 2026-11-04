# Superpowers

Skills that teach agents to work with Superpowers. They are copied from the vendor's repository, [obra/superpowers](https://github.com/obra/superpowers), at commit `bb92a77`.

Core engineering skills: brainstorming, planning, test-driven development, debugging and code review.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Superpowers**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Superpowers**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install superpowers@boldcreate-plugins`.

## Skills

15 skills: `brainstorming`, `diagnosing-superpowers`, `dispatching-parallel-agents`, `executing-plans`, `finishing-a-development-branch`, `receiving-code-review`, `requesting-code-review`, `subagent-driven-development`, `systematic-debugging`, `test-driven-development`, `using-git-worktrees`, `using-superpowers`, `verification-before-completion`, `writing-plans`, `writing-skills`.

## Setup

No install-time settings.

## Before you install

Six scripts ship inside the skills. The `brainstorming` skill includes a small local web server (`server.cjs`, `helper.js`, `start-server.sh`, `stop-server.sh`) for its visual companion. `systematic-debugging/find-polluter.sh` and `writing-skills/render-graphs.js` are helpers.

The vendor loads its `using-superpowers` skill at the start of every session with a SessionStart hook. That hook is not included, because it uses Claude Code's hook format, so the skills load on demand only. This differs from how the vendor's own plugin behaves.

The `using-superpowers` skill name is generic. Check it against the other skills you have installed.

## Docs

- Vendor repository: https://github.com/obra/superpowers

## Logo

Logo copied from the vendor repository. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

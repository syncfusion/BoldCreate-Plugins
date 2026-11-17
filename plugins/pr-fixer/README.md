# PR Fixer

Fixes an existing pull request. It collects the failing CI checks, the unresolved review comments and any merge conflict, decides each one, then fixes what is unambiguous, answers what it can, and asks you about the rest. It never merges.

It works on its own, on a PR from anyone. It does not need the SDLC Toolkit or any other plugin.

## What it contains

One skill, `pr-fixer`. You start it yourself, because it pushes commits to the PR branch. No MCP server, no rules and no agents.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **PR Fixer**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **PR Fixer**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install pr-fixer@boldcreate-plugins`.

## What you need

- `git`, a clean working tree, and permission to push to the PR's branch in this repository.
- A way to read the PR and its checks: the GitHub CLI (`gh`), the GitLab CLI (`glab`), or the `github` or `gitlab` plugin from this marketplace.

## Use

Start the skill and give a PR link or number. It lists every finding, shows what it will do with each, and then works through them.

| Finding | What it does |
|:--|:--|
| Clear defect or improvement in the PR's purpose | Fixes it and replies with the commit |
| Question the code answers | Replies with the answer |
| Out of scope | Replies and suggests a follow-up |
| Design or scope change | Asks you |
| Flaky or unrelated failing test | Reports it; never disables the test |
| Simple conflict | Merges the base in and resolves it |
| Conflict that changes behaviour | Asks you |

## Limits

- It cannot push to a PR from a fork; it offers suggested patches instead.
- It never resolves review threads, approves, merges, force-pushes or rebases a pushed branch.
- It uses only the build, test and lint commands it finds in your repository.
- Behaviour depends on the host and model. Read the commits before you ask for re-review.

## Tests

`tests/scenarios/pr-fixer.md` holds the scenarios, and `tests/fixtures/` the planted findings with the expected handling.

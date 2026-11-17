# Changelog

All notable changes to this plugin will be documented here.

## 0.1.0 - 2026-11-17

- First version, in preview: the `pr-fixer` skill fixes an existing pull request or merge request on GitHub or GitLab. It collects failing CI checks, review comments and merge conflicts, fixes what is unambiguous with one commit per finding, answers comments, and asks you about design or behaviour changes. It never merges, force-pushes, resolves threads or disables a test.
- It works alone and uses the `gh` or `glab` CLI, or the `github` or `gitlab` plugin. It uses only the build, test and lint commands it finds in your repository, scoped to the changed packages in a monorepo.
- It cites its sources and says "unknown" instead of guessing.

# Migration findings

Scope: bring the plugins from the upstream marketplace index (`anthropic-marketplace-index.json`) into this repository as BoldCreate plugins. Auth is defined in a separate BoldCreate application, so these findings do not change any auth field.

Status on this date: no upstream plugin has been imported. The sources are not readable from the workspace. See [INVENTORY.md](INVENTORY.md) for the full list.

## Findings

### PM-001 Upstream sources are not readable
- **Component:** all 301 plugins not yet in `third_party/`, and the 14 that are.
- **Current state:** the index holds pointers (163 `url`, 99 `git-subdir`, 53 local paths in `claude-plugins-official`). Cloning any of them returns 403 from the workspace egress policy.
- **Problem:** a `plugin.json` needs endpoints, auth mode, variables, licence and logo. None of these are in the index.
- **Severity:** Critical (blocks the migration).
- **Recommended migration:** grant read access to the source orgs, or add the plugin folders under `_import/`. Import each plugin with a pinned commit in its `upstream` block.
- **Breaking change:** No.
- **Validation:** `npm run build -- --check` and `npm run validate` for each imported plugin.

### PM-002 Pinned versions of the 14 overlapping plugins cannot be compared
- **Component:** atlassian, context7, figma, github, gitlab, google-cloud-storage, linear, neon, notion, posthog, sentry, stripe, supabase, vercel.
- **Current state:** local versions are 0.7.0 or 0.7.1. The index states no version for these.
- **Problem:** it is unknown whether any plugin is out of date.
- **Severity:** Medium.
- **Recommended migration:** compare each local manifest with its upstream source once readable. Bump versions with a CHANGELOG entry.
- **Breaking change:** Unknown until compared.

### PM-003 Claude validator in CI
- **Component:** `.github/workflows/validate.yml`.
- **Current state:** CI installs `@anthropic-ai/claude-code@2.1.310` and runs `claude plugin validate`.
- **Problem:** build-time dependency on a vendor tool. It does not affect plugin runtime.
- **Severity:** Low.
- **Recommended migration:** keep while Claude Code manifests are still published. Drop it if those manifests are retired.

### PM-004 Validation was failing on a clean checkout (fixed)
- **Component:** `syncfusion/component-skills/blazor`.
- **Problem:** the folder `syncfusion-blazor-3D-charts` did not match the lowercase skill name, and the generated manifest was stale.
- **Fix:** renamed the folder to `syncfusion-blazor-3d-charts` and ran `npm run build`. `npm run validate` now reports all 63 plugins valid.
- **Breaking change:** No for skill names. The folder path changed.

### PM-005 Requested connectors with different scope
- **Component:** Slack, Salesforce, HubSpot, ServiceNow.
- **Current state:** the index lists `slack`, `hubspot-sales`, `salesforce-development` and `servicenow-sdk`. No Microsoft 365 or Zendesk entry was found by name.
- **Problem:** several are developer or sales skill packs, not connectors. Their type is unknown until the source is read.
- **Severity:** Medium.

## Waves

1. **Wave 1, low risk:** fix validation (done). Import skill-only plugins and local `plugins/` entries once readable.
2. **Wave 2:** import MCP plugins that use no auth or a bearer token.
3. **Wave 3:** import OAuth MCP plugins. Auth fields follow the format the separate auth application expects.
4. **Wave 4:** drop or keep the Claude CI validator (PM-003).

## Not done

Nothing in the completion criteria is met for any upstream plugin. Security review, rollback documentation and backward-compatibility checks apply per imported plugin and have not started.

## Update: remote entries in the Claude Code marketplace

`.claude-plugin/marketplace.json` now lists 252 upstream plugins as remote sources, each pinned to a commit SHA. The list lives in `claude-remote-plugins.json` and `scripts/build.mjs` merges it in.

- Claude Code clones each source when a user installs it. This repository never reads the source, so the egress block in PM-001 does not apply.
- The 53 upstream plugins that live inside `claude-plugins-official` are not included. They have no standalone source to pin.
- 10 upstream names already exist in `third_party/` and keep the local version.
- These entries are not reviewed. The Cursor and BoldCreate indexes do not list them, because they need a full manifest.
- The pinned code runs on the user's machine and is not checked by this repository. Review each plugin before you list it in the BoldCreate marketplace.
- Not run: `claude plugin validate --strict .`, which CI runs.

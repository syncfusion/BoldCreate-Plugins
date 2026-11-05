# Handoff: BoldCreate Connectors migration

Paste or attach this file at the start of the new session. It says what was done, what is true now, and what to do next. Where a claim was not checked, it says so.

## 1. Who and what

- User GitHub account: `SF3922-Shreedhar`. Source repo: `syncfusion/BoldCreate-Plugins` ("BoldCreate Plugins"). New repo: `SF3922-Shreedhar/BoldCreate-Connectors` ("BoldCreate Connectors"), **private**, created and still holding only GitHub's auto-generated README. It stays under the user's profile until verified, then moves to the Syncfusion organization.
- Working branch for BoldCreate Plugins in the old session: `bc/1d0e49bb-perform-complete`. In a new session the branch name may differ. Use whatever branch the session gives you, and check `git log` for the commit `Add export-connectors script ...`.
- Auth fields are defined in a separate application. Leave them alone.

## 2. The task now

1. **Create the BoldCreate Connectors repo content** (the repo exists, it is empty): mirror the structure, configuration and setup of BoldCreate Plugins, with **connectors only**.
2. **Move the connectors** from BoldCreate Plugins to BoldCreate Connectors, preserving structure and function.
3. **Close PR #14** in BoldCreate Plugins (batches 4 to 7, 353 connectors). Its content moves to the new repo. Add a comment linking the new repo.
4. **Remove the connectors from BoldCreate Plugins** in a reviewable PR (see section 6).
5. **No migration docs in either repo.** The new repo must have none. The removal PR deletes the existing ones from BoldCreate Plugins.
6. Later batches (the remaining remote connectors) go into the **new repo**, not the old one.

## 3. Definition: what is a "connector"

A folder under `third_party/` that has an `mcp.json` (a remote MCP server over streamable HTTP). There are **628** in the working tree of the old branch.

- Skill plugins (108 folders under `third_party/`, no `mcp.json`) are **not** connectors. They stay in BoldCreate Plugins.
- Not connectors either, and they stay: `boldcreate-toolkit/` and everything under `syncfusion/`.
- Check the count rather than trusting this file: `ls third_party/*/mcp.json | wc -l`.

## 4. What exists, and what does not

- The old session built a local copy in its sandbox. **That sandbox is gone. Nothing was ever pushed to the new repo** (git returned 403: "not granted").
- The script **`scripts/export-connectors.mjs`** in BoldCreate Plugins rebuilds that copy. It is committed on the old branch (commit message `Add export-connectors script that builds the BoldCreate Connectors repository`). **It may not be on `main` of BoldCreate Plugins.** If it is missing in the new session, see section 5, step 0.
- In the old session, running it produced a folder that passed `npm ci`, `npm run build`, `npm run validate` ("All 628 plugins are valid") and `npm run build -- --check`. It matched the hand-made copy except for one intentional change: the CI loop only globs `third_party/*/.claude-plugin`.

## 5. Steps for the new session

0. **Get the script.** In the BoldCreate Plugins checkout, check `ls scripts/export-connectors.mjs`. If missing, check the old branch (`git fetch origin bc/1d0e49bb-perform-complete`) and `git checkout origin/bc/1d0e49bb-perform-complete -- scripts/export-connectors.mjs`. Also check how many connectors the checkout actually has (628 expected only on the old branch; `main` has fewer until PR #14 is merged).
1. **Confirm access** to the new repo: `git ls-remote https://github.com/SF3922-Shreedhar/BoldCreate-Connectors.git`. If it says 403 or "not granted", stop and tell the user. Do not work around it.
2. **Make sure the checkout has all 628 connectors.** They are in the old branch, not in `main`. Batches 4 to 7 (353) are only in PR #14's branch. If the session cannot see that branch, stop and ask.
3. **Export:**
   ```
   git clone https://github.com/SF3922-Shreedhar/BoldCreate-Connectors.git ../BoldCreate-Connectors
   node scripts/export-connectors.mjs ../BoldCreate-Connectors
   cd ../BoldCreate-Connectors && npm ci && npm run build && npm run validate && npm run build -- --check
   ```
   Expect `exported 628 connectors`, `All 628 plugins are valid`, `Generated files are up to date.`
4. **Check before committing:** no `docs/` folder, no `_import/`, no `fetch-upstream.mjs` or `migration-inventory.mjs` or `slim-copy.mjs`; README has 628 rows and a table header; no `node_modules` committed (it is in `.gitignore`).
5. **Commit and push to `main`** of the new repo (it has an auto-generated first commit, so pull first). Use clear messages. The user will do pushes by default through the platform's PR tool where it applies. If you can only push the work branch, push that and open a PR.
6. **Wait for CI** in the new repo. The CI runs `npm run build -- --check`, `npm run validate` and the Claude plugin validator (`claude plugin validate --strict`). The Claude validator has **never been run on these plugins** (not verified). Report its result honestly. Fix problems in the connector files if they appear (these are hand-written files, not vendor skill files).
7. **Only after the new repo has the files and CI is green:** close PR #14 with a comment pointing to the new repo, then open the removal PR (section 6).

## 6. Removal PR in BoldCreate Plugins

Open it from a clean branch. It must:

- Delete every connector folder (`third_party/*/` with an `mcp.json`) and **only those**. Skill plugins stay.
- Delete the matching rows from the README's "MCP plugins" table (the table may then be empty; remove its heading and intro line if so, and update the intro bullet that describes MCP plugins).
- Run `npm run build` to regenerate the 3 marketplace indexes. After building, run `git checkout -- syncfusion/component-skills/blazor/.boldcreate-plugin/plugin.json` (see section 8).
- Delete `docs/migration/` (FINDINGS.md, INVENTORY.md, REQUIRED-REPOS.md, anthropic-marketplace-index.json) and the migration scripts `scripts/migration-inventory.mjs`, `scripts/fetch-upstream.mjs`, `scripts/slim-copy.mjs`, and `scripts/export-connectors.mjs` (it has done its job once the export is verified).
- Keep `scripts/build.mjs`, `validate.mjs`, `check-kit.mjs`.
- **Before deleting the migration material, tell the user.** The index file and those scripts are the only tools for further imports and screening. Offer to park a copy (for example a branch of the new repo that is never merged). The user said migration docs must not be in the repo; do not add them to the new repo's `main`.
- Check `npm run validate` and `npm run build -- --check` afterwards.

## 7. Decisions the user has made (follow these)

- Follow the existing `third_party/` workflow and structure. Do not invent new layouts.
- **Never edit vendor files** (skills, agents, LICENSE, NOTICE) in skill plugins. Skip plugins that would need edits.
- Skip **Anthropic-hosted** connectors (`*.mcp.claude.com`) and connectors whose **name clashes** with an existing plugin.
- Migrate in **batches of 100** remote connectors, most popular first. 6 batches are done (the first 5 produced 20, 88, 93, 89, 90; batch 6 produced 86).
- Use **logos from the Claude directory** (`iconUrl`) when available. Fall back to Simple Icons (CC0), then a neutral initials tile. Vendor icons are trademarks and not MIT; each README says so.
- README has **one table**, sorted by name, in the existing format. No separate community section. No batch list files in PRs.
- Licence policy: MCP connectors are MIT. Community skill plugins may be MIT or Apache-2.0, checked by the validator.
- Do **not** revert the Blazor rename: `syncfusion/component-skills/blazor/skills/syncfusion-blazor-3D-charts` stays as is (in production). Two validate errors from `main` (that folder name, and a stale Blazor `plugin.json`) already make CI red. Do not fix them without the user's say-so. They do not exist in the new repo.
- The user merges PRs. Do not merge unless told, and ask for the merge method.
- Windows users run commands in **Command Prompt (cmd.exe)**. Never use `--force`.
- Be honest about what was not verified. Do not call work done unless build and validate passed in the session.

## 8. Facts and traps

- `npm run build` rewrites `syncfusion/component-skills/blazor/.boldcreate-plugin/plugin.json`. Revert that file after each build in BoldCreate Plugins.
- `create_pull_request` updates an **open** PR on the same branch instead of creating a new one, and may create a new PR if the old one is merged. Check with `get_pull_request` or `list_pull_requests` before and after.
- `update_pull_request` is `mcp__github__update_pull_request`.
- The sandbox can't clone vendor repos (403) but can read the GitHub API and call public MCP URLs.
- The tool for viewing images only reads files inside the workspace. Put previews in a temp folder in the repo, then delete it.
- The old session's helper files were in `/tmp` and are gone: candidate lists, probe results, logo downloads, generator scripts. To continue the batches, rebuild them from the Claude directory page (see section 9).

## 9. Remaining connector work (not started, after the move)

Source: https://claude.com/marketplace/connectors-plugins lists **1,064** connectors and 528 plugins. The page embeds the full directory only in the "Show all" data; the user attached a saved copy of the page earlier. Ask the user to attach it again if it is needed.

Status of the 1,064 at the time of this handoff (counts from the old session, from reconciling URLs, so approximate):

| Status | Count |
|---|---|
| Migrated (endpoint matches a plugin) | 591 |
| Held back after probing, batches 2 to 7 | 66 |
| Skipped: name clash | 23 |
| Skipped: Anthropic-hosted | 11 |
| Skipped: internal or URL placeholder | 2 (Spotify, Booking.com) |
| Not reached yet, remote with a URL | 197 |
| Remote, no URL in the directory | 54 |
| Local desktop extensions (stdio) | 132 |

Batch 7 is the last batch built (88 connectors, "mdn" to "craft-io" in popularity order, 12 held). Attentive was added without the directory's `?readOnly=false` query (recorded in its CHANGELOG). Batch 7 logos: 50 vendor icons, 2 Simple Icons marks, 36 initials tiles.

Held back, with reasons:

- **403 / bot check:** Adobe, Intuit QuickBooks, Intuit Mailchimp, Expedia, lastminute.com, Uber, Uber Eats, ZipRecruiter, SciSpace, Audible, Intuit TurboTax, Helix GenoSphere, DirectBooker, Yardi Virtuoso, Ticketmaster, StubHub, Function Health, eDreams, Intuit QuickBooks Labs, AppFolio Realm-X, Trellis, idealista, Rome2Rio, Glovo, BrowserStack, IHME GBD, GoVola, ICE Data Services, Norton, Carrefour, Wyndham Hotels and Resorts, McAfee.
- **Endpoint errors:** Lawve AI (404), TopCounsel (404), S&P Global Adaptive Retrieval (503), Vanguard Advisor Tools (redirects to "not found"), CarGurus (400), Aura (no connection).
- **Tools listed with no sign-in, but they act on a signed-in account (auth none looked wrong):** Deel, LetsBot, Have I Been Pwned, Campfire, Tineo, Autosheet, Constant Contact, GraphOS MCP Tools.
- **Token in URL:** Tripadvisor, AccuWeather.
- **Batch 7 holds (12):** GetYourGuide, Benevity, Turo, The Economist Graphs, Vital Care Finder (403); Revolut X (needs an `Mcp-Method` header, so it is not a standard client call); Cloze (API key, not OAuth); DataCamp, AthenaHQ, Jentic, Squarespace, ALL Accor (tools listed without sign-in, but they act on a signed-in account or store).
- **API key with unknown header:** Datasite, Learning Commons.
- **Odd endpoints:** Shop (needs protocol version 2026-07-28 and then rejects it), Sprouts Data Intelligence (personal Cloudflare Workers address), Gemini (a tool exposes server auth config), Three.js 3D Viewer (example server).
- **Name clashes (23):** Atlassian MCP, Box, Datadog, Sentry, Cloudflare Developer Platform, Postman, Lusha, Vibe Prospecting, Resend, PayPal, Mapbox, Yelp, Sanity, Expo, MongoDB Atlas, Grafana Cloud, Boltz API, Honeycomb, Intuit Credit Karma, BlackRock Advisor Center, Gainsight (Customer Communities), Catalyst by Zoho, Synthflow. Not checked: whether each directory endpoint matches the existing plugin.

How each batch was done (to repeat it): select the next 100 remote connectors by popularity, skipping the above; send one anonymous MCP `initialize` POST to each (401 with a Bearer challenge means OAuth; a 200 with a tool list on `tools/list` means `auth: none`; 403, 404, 5xx, empty or odd responses are held back); download `iconUrl`, screen SVGs for scripts, external links and embedded images, rasterise unsafe ones, and convert JPG, PNG, ICO and WebP to a 192x192 PNG on a white tile; generate the connector files from the `third_party/linear` layout; add README rows; build; validate; scan `mcp.json` URLs for tokens; commit; publish. Each connector's `boldcreate.json` `endpointCheck` records what was seen.

## 10. Plugin index (separate from connectors)

`docs/migration/anthropic-marketplace-index.json` lists 315 plugins; 152 are not in BoldCreate Plugins. These are **skill plugins**, not connectors, and stay in BoldCreate Plugins. Reasons they are not imported:

- 36 live inside `anthropics/claude-plugins-official` (no repo of their own), plus 12 LSP configs.
- 15 have no LICENSE file; about 20 have a non-MIT/Apache licence (Oracle UPL, BSD-style, proprietary, AGPL/GPL, CC BY-NC).
- 19 fail the skill rules (name not matching folder, description over 1,024 characters, `<` or `>` in a description) and would need vendor edits.
- 13 are local-server MCP plugins (`npx`, `uvx`, `jbang`, `toolbox`): alloydb, cds-mcp, cloud-sql-mysql, cloud-sql-postgresql, cloud-sql-sqlserver, dataproc, firestore-native, knowledge-catalog, looker, oracledb, quarkus-agent, sap-mdk-server, spanner (and gitkraken). These are stdio.
- Held for privacy or licence: shopify-ai-toolkit, carta-investors, mcp-apps, codspeed, oracle-ai-data-platform-workbench-engineer-agent.
- 18 pass the licence and skill rules but were never converted, and the screening note is stale: altimate-code, atlan, aws-agents-for-devsecops, aws-startup-advisor, coderabbit, crowdstrike-falcon-fusion, data-agent-kit, datahub-skills, hyperframes, intuit-quickbooks, linq-alpha, mongodb-atlas, nightvision, remember, ui5, zilliz, cockroachdb (monday-crm is just an alias of the existing `monday`). Several ship scripts or hooks (crowdstrike-falcon-fusion, aws-startup-advisor, data-agent-kit, cockroachdb, remember) and two mention telemetry (aws-startup-advisor, data-agent-kit). Screen before converting.
- 17 were never fetched (for example 42crunch-api-security-testing, clickhouse-best-practices, hostinger, huggingface-skills).

Skill plugins need `scripts/fetch-upstream.mjs`, which the user runs on their own machine in Command Prompt, then pushes `_import/`. That script is deleted in the removal PR (section 6), so decide with the user whether to keep it first.

## 11. Transport

All 628 connectors use streamable HTTP over `https` only: `boldcreate.json` `transport: "streamable-http"`, `mcp.json` `type: "http"`. The validator rejects non-https URLs. The schema lists stdio, sse and websocket, but its own description says BoldCreate Connect supports streamable-http only today. This was read from the schema and validator, **not tested in the product**. Stdio plugins (the 13 above and the 132 local desktop extensions) cannot be migrated as they are.

## 12. Not verified (be honest about these)

- The Claude plugin validator (`claude plugin validate --strict`) has never been run on any of these connectors.
- No connector has been installed or tested in BoldCreate Connect. No tool call was made to any vendor server; only anonymous `initialize` (and `tools/list` for open servers) were sent.
- OAuth is an assumption for connectors whose 401 had no OAuth metadata (recorded in their READMEs).
- Docs links in about 13 connectors per batch are vendor homepages that could not be loaded (bot blocks).

## 13. Batch 7 added after the first version of this file

- Commit `Add 88 remote MCP plugins ... (batch 7)` on the old branch adds 88 connectors (total 628 with `mcp.json`, 736 folders in `third_party/` including 108 skill plugins).
- Counts: 13 `auth: none` (open `tools/list`), 71 OAuth with metadata, 4 OAuth without metadata (blackthorn-forge, kpler, paytm-payment-gateway, atlar), 8 docs links are unverified vendor homepages.
- Renamed for length: `usafacts`, `blackthorn-forge`, `iubenda`, `clarivate-compumark`.
- Re-tested the export script on 628 connectors: `exported 628 connectors`, `All 628 plugins are valid`, `Generated files are up to date.`, 628 README rows plus the header.
- Expect `628`, not `540`, everywhere in section 5.

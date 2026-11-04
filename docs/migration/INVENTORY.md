# Upstream plugin inventory

The upstream index lists 315 plugins. 54 exist in `third_party/`, 40 of them imported from this index. 261 do not exist yet.

The index holds names and source pointers only. It has no MCP endpoints, auth modes, variables, licences or logos, which a BoldCreate `plugin.json` requires. A plugin can be imported only after its source is read. The workspace egress policy blocks cloning the vendor repositories, so remote MCP plugins were imported by reading each vendor's `.mcp.json` and licence through the GitHub API, and skill plugins through `scripts/fetch-upstream.mjs`. Plugins not yet imported have the status **Not imported**.

This file is generated. Regenerate it with `node scripts/migration-inventory.mjs`.

## Plugins already in third_party

| ID | Connector | Current version | Upstream version | Migration required | Status |
|---|---|---|---|---|---|
| PM-001 | amplitude | 0.7.1 | not stated | No | Imported |
| PM-002 | apollo | 0.7.1 | not stated | No | Imported |
| PM-003 | apollo-skills | 1.2.9 | not stated | No | Imported |
| PM-004 | atlassian | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-005 | azure | 1.2.50 | not stated | No | Imported |
| PM-006 | azure-cosmos-db-assistant | 1.0.0 | not stated | No | Imported |
| PM-007 | box | 1.0.0 | not stated | No | Imported |
| PM-008 | buildkite | 1.0.0 | not stated | No | Imported |
| PM-009 | ckeditor | 0.1.1 | not stated | No | Imported |
| PM-010 | context7 | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-011 | crowdsec | 0.3.0 | not stated | No | Imported |
| PM-012 | crowdstrike-falcon-foundry | 1.6.0 | not stated | No | Imported |
| PM-013 | duckdb-skills | 0.2.4 | not stated | No | Imported |
| PM-014 | duende-skills | 0.3.0 | not stated | No | Imported |
| PM-015 | exa | 0.7.1 | not stated | No | Imported |
| PM-016 | fastly-agent-toolkit | 0.1.0 | not stated | No | Imported |
| PM-017 | figma | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-018 | firecrawl | 0.7.1 | not stated | No | Imported |
| PM-019 | gc-ai | 0.1.0 | not stated | No | Imported |
| PM-020 | github | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-021 | gitlab | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-022 | google-cloud-storage | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-023 | govtribe | 0.7.1 | not stated | No | Imported |
| PM-024 | growthbook | 2.0.0 | not stated | No | Imported |
| PM-025 | hunter | 0.7.1 | not stated | No | Imported |
| PM-026 | incident-io | 0.7.1 | not stated | No | Imported |
| PM-027 | intercom | 0.7.1 | not stated | No | Imported |
| PM-028 | langfuse | 1.10.0 | not stated | No | Imported |
| PM-029 | leadfeeder | 0.7.1 | not stated | No | Imported |
| PM-030 | linear | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-031 | logfire | 0.1.4 | not stated | No | Imported |
| PM-032 | mapbox | 1.0.0 | not stated | No | Imported |
| PM-033 | mintlify | 0.7.1 | not stated | No | Imported |
| PM-034 | monday-crm | 0.7.1 | not stated | No | Imported |
| PM-035 | neon | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-036 | notion | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-037 | pagerduty | 0.7.1 | not stated | No | Imported |
| PM-038 | posthog | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-039 | render | 0.7.1 | not stated | No | Imported |
| PM-040 | resend | 1.0.5 | not stated | No | Imported |
| PM-041 | sanity | 1.0.0 | not stated | No | Imported |
| PM-042 | sentry | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-043 | slack | 0.7.1 | not stated | No | Imported |
| PM-044 | stripe | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-045 | supabase | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-046 | superdesign | 0.6.0 | not stated | No | Imported |
| PM-047 | superpowers | 7.0.0 | not stated | No | Imported |
| PM-048 | tavily | 0.7.1 | not stated | No | Imported |
| PM-049 | togetherai-skills | 1.0.0 | not stated | No | Imported |
| PM-050 | vanta | 0.7.1 | not stated | No | Imported |
| PM-051 | vercel | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-052 | youdotcom-agent-skills | 0.6.0 | not stated | No | Imported |
| PM-053 | zapier | 0.7.1 | not stated | No | Imported |
| PM-054 | zoominfo | 0.7.1 | not stated | No | Imported |

## Plugins not yet imported

| ID | Connector | Category | Source type | Source | Pinned ref | Status |
|---|---|---|---|---|---|---|
| PM-055 | 42crunch-api-security-testing | security | git-subdir | 42Crunch-AI/claude-plugins (plugins/api-security-testing) | faf5305385de | Not imported |
| PM-056 | activecampaign | productivity | url | ActiveCampaign/activecampaign-plugin | 0ff858728bc5 | Not imported |
| PM-057 | adobe-for-creativity | design | git-subdir | adobe/skills (plugins/creative-cloud/adobe-for-creativity) | 0f487c9b1b98 | Not imported |
| PM-058 | agent-sdk-dev | development | local | claude-plugins-official ./plugins/agent-sdk-dev | - | Not imported |
| PM-059 | agentforce-adlc | development | url | SalesforceAIResearch/agentforce-adlc | 09bf1539d41f | Not imported |
| PM-060 | ai-plugins |  | url | endorlabs/ai-plugins | 2de00883bd2b | Not imported |
| PM-061 | aikido |  | url | AikidoSec/aikido-claude-plugin | 8fdc995a4410 | Not imported |
| PM-062 | airtable | productivity | git-subdir | Airtable/skills (plugins/airtable) | 812ee67f1fd3 | Not imported |
| PM-063 | airwallex-agentos | productivity | git-subdir | airwallex/airwallex-marketplace (plugins/airwallex-agentos) | 877551077786 | Not imported |
| PM-064 | airwallex-dev | development | git-subdir | airwallex/airwallex-marketplace (plugins/airwallex-dev) | 877551077786 | Not imported |
| PM-065 | aiven | database | url | aiven/aiven-ai-plugins | 634f41d68529 | Not imported |
| PM-066 | alloydb | database | url | gemini-cli-extensions/alloydb | f9b3280bdcfe | Not imported |
| PM-067 | alloydb-omni | database | url | gemini-cli-extensions/alloydb-omni | 37101e3f9aaf | Not imported |
| PM-068 | altimate-code | database | git-subdir | AltimateAI/altimate-claude-plugin (plugins/altimate-code) | b7c8f68b3dfd | Not imported |
| PM-069 | amazon-location-service | location | git-subdir | awslabs/agent-plugins (plugins/amazon-location-service) | 097fe8ad56d8 | Not imported |
| PM-070 | amazon-selling-partner | productivity | url | amzn/selling-partner-agentic-toolkit | 10573bac239b | Not imported |
| PM-071 | amd-skills | development | git-subdir | amd/skills (skills) | 6916fb371d1c | Not imported |
| PM-072 | appwrite | development | url | appwrite/claude-plugin | ab3c90b37c95 | Not imported |
| PM-073 | asana | productivity | local | claude-plugins-official ./external_plugins/asana | - | Not imported |
| PM-074 | astronomer-data-agents | development | url | astronomer/agents | 35b9610bb271 | Not imported |
| PM-075 | atlan |  | url | atlanhq/agent-toolkit | 17b7ae3b4852 | Not imported |
| PM-076 | atlassian-twg-cli | productivity | url | atlassian-labs/twg-plugins | b3336ef63d45 | Not imported |
| PM-077 | atomic-agents | development | url | BrainBlend-AI/atomic-agents (claude-plugin/atomic-agents) | 33d2ec94f42d | Not imported |
| PM-078 | auth0 | security | git-subdir | auth0/agent-skills (plugins/auth0) | 7b3821d53343 | Not imported |
| PM-079 | aws-agents | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-agents) | 0d6167ad2e6d | Not imported |
| PM-080 | aws-agents-for-devsecops | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-agents-for-devsecops) | 7bde20faede4 | Not imported |
| PM-081 | aws-amplify | development | git-subdir | awslabs/agent-plugins (plugins/aws-amplify) | 097fe8ad56d8 | Not imported |
| PM-082 | aws-core | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-core) | 34b3eccfd8b6 | Not imported |
| PM-083 | aws-data-analytics | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-data-analytics) | 0d6167ad2e6d | Not imported |
| PM-084 | aws-serverless | development | git-subdir | awslabs/agent-plugins (plugins/aws-serverless) | 097fe8ad56d8 | Not imported |
| PM-085 | aws-startup-advisor | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-startup-advisor) | b310d1c46b4c | Not imported |
| PM-086 | aws-transform | migration | git-subdir | awslabs/agent-plugins (plugins/aws-transform) | 097fe8ad56d8 | Not imported |
| PM-087 | azure-sql-developer | database | url | microsoft/azure-sql-database-container | c1e8167e4c1d | Not imported |
| PM-088 | base44 | development | url | base44/skills | 8548a482f606 | Not imported |
| PM-089 | bigdata-com | database | git-subdir | Bigdata-com/bigdata-plugins-marketplace (plugins/bigdata-com) | 43777fbdb929 | Not imported |
| PM-090 | bigquery-data-analytics | database | url | gemini-cli-extensions/bigquery-data-analytics | 6f9b35627d20 | Not imported |
| PM-091 | blackrock-advisor-center-plugin | productivity | url | blackrock/advisor-center-agent-skills | 591c758960c1 | Not imported |
| PM-092 | boltz | development | git-subdir | boltz-bio/boltz-api-skills (plugins/boltz) | beafb3c16236 | Not imported |
| PM-093 | brightdata-plugin |  | url | brightdata/skills | 37503c1ba310 | Not imported |
| PM-094 | browser-use | automation | git-subdir | browser-use/plugins (browser-use) | 4749bcbfe456 | Not imported |
| PM-095 | build-with-wordpress |  | url | Automattic/claude-code-wordpress.com | 052ca970df2c | Not imported |
| PM-096 | canva | design | git-subdir | canva-sdks/canva-skills (plugins/canva) | bfcbc681560f | Not imported |
| PM-097 | carbone-skill | productivity | url | carboneio/carbone-skill | 25207b3f52b9 | Not imported |
| PM-098 | carta-cap-table | productivity | git-subdir | carta/plugins (plugins/carta-cap-table) | ea7fe1d4db0f | Not imported |
| PM-099 | carta-crm | productivity | git-subdir | carta/plugins (plugins/carta-crm) | ea7fe1d4db0f | Not imported |
| PM-100 | carta-investors | productivity | git-subdir | carta/plugins (plugins/carta-investors) | ea7fe1d4db0f | Not imported |
| PM-101 | catalyst-by-zoho | development | url | catalystbyzoho/claude-plugin | 9670b79d72fe | Not imported |
| PM-102 | cds-mcp | development | url | cap-js/mcp-server | 52ca3304342d | Not imported |
| PM-103 | chrome-devtools-mcp | development | url | ChromeDevTools/chrome-devtools-mcp | a878bcad3958 | Not imported |
| PM-104 | chronograph-gp | productivity | url | chronograph-pe/chronograph-gp-claude-plugin | 35cb3d12cf4e | Not imported |
| PM-105 | chronograph-lp | productivity | url | chronograph-pe/chronograph-lp-claude-plugin | 322b2d3fbd4d | Not imported |
| PM-106 | circle-skills | development | git-subdir | circlefin/skills (plugins/circle) | 58ab8648bb1a | Not imported |
| PM-107 | circleback | productivity | url | circlebackai/claude-code-plugin | a610634c95ab | Not imported |
| PM-108 | clangd-lsp | development | local | claude-plugins-official ./plugins/clangd-lsp | - | Not imported |
| PM-109 | claude-code-setup | productivity | local | claude-plugins-official ./plugins/claude-code-setup | - | Not imported |
| PM-110 | claude-md-management | productivity | local | claude-plugins-official ./plugins/claude-md-management | - | Not imported |
| PM-111 | claude-security | security | local | claude-plugins-official ./plugins/claude-security | - | Not imported |
| PM-112 | clay | productivity | git-subdir | clay-run/agent-plugins (clay) | 769514a3a236 | Not imported |
| PM-113 | clickhouse | database | url | ClickHouse/clickhouse-claude-code-plugin | 652664c8924c | Not imported |
| PM-114 | clickhouse-best-practices | database | url | ClickHouse/agent-skills | 356a8c1b9a73 | Not imported |
| PM-115 | cloud-sql-mysql | database | url | gemini-cli-extensions/cloud-sql-mysql | 51aa269094a8 | Not imported |
| PM-116 | cloud-sql-postgresql | database | url | gemini-cli-extensions/cloud-sql-postgresql | 1d758bb34795 | Not imported |
| PM-117 | cloud-sql-sqlserver | database | url | gemini-cli-extensions/cloud-sql-sqlserver | 7efeaaf026b3 | Not imported |
| PM-118 | cloudflare | deployment | url | cloudflare/skills | b052c32bab7d | Not imported |
| PM-119 | cloudinary |  | url | cloudinary-devs/cloudinary-plugin | 86be53409e3f | Not imported |
| PM-120 | cockroachdb | database | url | cockroachdb/claude-plugin | 6c96c6394a61 | Not imported |
| PM-121 | code-modernization | development | local | claude-plugins-official ./plugins/code-modernization | - | Not imported |
| PM-122 | code-review | productivity | local | claude-plugins-official ./plugins/code-review | - | Not imported |
| PM-123 | code-simplifier | productivity | local | claude-plugins-official ./plugins/code-simplifier | - | Not imported |
| PM-124 | coderabbit | productivity | url | coderabbitai/skills | 3e8763d24d54 | Not imported |
| PM-125 | codspeed | development | url | CodSpeedHQ/codspeed | 59cfc90540bb | Not imported |
| PM-126 | commit-commands | productivity | local | claude-plugins-official ./plugins/commit-commands | - | Not imported |
| PM-127 | confidence | development | url | spotify/confidence-ai-plugins | f416826fde81 | Not imported |
| PM-128 | convex | database | url | get-convex/convex-backend-skill | 6ca54f6e2e75 | Not imported |
| PM-129 | crowdstrike-falcon-fusion | security | url | CrowdStrike/fusion-skills | 38527dc5afa9 | Not imported |
| PM-130 | csharp-lsp | development | local | claude-plugins-official ./plugins/csharp-lsp | - | Not imported |
| PM-131 | cwc-makers | productivity | local | claude-plugins-official ./plugins/cwc-makers | - | Not imported |
| PM-132 | dash0 | monitoring | url | dash0hq/dash0-agent-plugin | 72a84179e6c6 | Not imported |
| PM-133 | data | development | url | astronomer/agents | 35b9610bb271 | Not imported |
| PM-134 | data-agent-kit | development | url | GoogleCloudPlatform/data-agent-kit-plugin | 83c53b5f129c | Not imported |
| PM-135 | data-engineering |  | url | astronomer/agents | 35b9610bb271 | Not imported |
| PM-136 | databases-on-aws | database | git-subdir | awslabs/agent-plugins (plugins/databases-on-aws) | fbefb3764e67 | Not imported |
| PM-137 | databricks | database | git-subdir | databricks/databricks-agent-skills (plugins/databricks/claude) | c1964266c7aa | Not imported |
| PM-138 | datadog | monitoring | url | datadog-labs/claude-code-plugin | 195f570c002b | Not imported |
| PM-139 | datahub-skills | database | url | datahub-project/datahub-skills | a27f8e7bb514 | Not imported |
| PM-140 | dataproc | database | url | gemini-cli-extensions/dataproc | 18534a9bfe0d | Not imported |
| PM-141 | datarobot-agent-skills | development | url | datarobot-oss/datarobot-agent-skills | 53a4dacc6b55 | Not imported |
| PM-142 | dataverse | database | git-subdir | microsoft/Dataverse-skills (.github/plugins/dataverse) | 669e71519886 | Not imported |
| PM-143 | deepeval | development | url | confident-ai/deepeval | da9b2c969f8a | Not imported |
| PM-144 | deploy-on-aws | deployment | git-subdir | awslabs/agent-plugins (plugins/deploy-on-aws) | fbefb3764e67 | Not imported |
| PM-145 | desktop-commander | productivity | git-subdir | wonderwhy-er/DesktopCommanderMCP (plugins/claude) | 75048278f486 | Not imported |
| PM-146 | discord | productivity | local | claude-plugins-official ./external_plugins/discord | - | Not imported |
| PM-147 | dominodatalab | development | url | dominodatalab/domino-claude-plugin | 7949e3ac470c | Not imported |
| PM-148 | dropbox | productivity | git-subdir | dropbox/dropbox-ai-plugins (claude) | 078f0ca36df4 | Not imported |
| PM-149 | dynatrace | monitoring | url | Dynatrace/dynatrace-for-ai | 4f9aa71f9802 | Not imported |
| PM-150 | explanatory-output-style | learning | local | claude-plugins-official ./plugins/explanatory-output-style | - | Not imported |
| PM-151 | expo | development | git-subdir | expo/skills (plugins/expo) | d4f484024fec | Not imported |
| PM-152 | fakechat | development | local | claude-plugins-official ./external_plugins/fakechat | - | Not imported |
| PM-153 | feature-dev | development | local | claude-plugins-official ./plugins/feature-dev | - | Not imported |
| PM-154 | fiftyone |  | url | voxel51/fiftyone-skills | 8b87befcce6c | Not imported |
| PM-155 | firebase | database | local | claude-plugins-official ./external_plugins/firebase | - | Not imported |
| PM-156 | firestore-native | database | url | gemini-cli-extensions/firestore-native | 6e6a841c2173 | Not imported |
| PM-157 | forge-skills | development | url | atlassian/forge-skills | 4f04ae028794 | Not imported |
| PM-158 | frontend-design | development | local | claude-plugins-official ./plugins/frontend-design | - | Not imported |
| PM-159 | fullstory | monitoring | url | fullstorydev/fullstory-skills | ca872d97f5c3 | Not imported |
| PM-160 | gitkraken | development | url | gitkraken/claude-plugin | f7a53b2cd138 | Not imported |
| PM-161 | gopls-lsp | development | local | claude-plugins-official ./plugins/gopls-lsp | - | Not imported |
| PM-162 | grafana-assistant | monitoring | git-subdir | grafana/ai-marketplace (plugins/grafana-assistant) | 12be5634a492 | Not imported |
| PM-163 | grafana-cloud-mcp | monitoring | git-subdir | grafana/ai-marketplace (plugins/grafana-cloud-mcp) | 6c28ba1961d5 | Not imported |
| PM-164 | grafana-mcp | monitoring | git-subdir | grafana/ai-marketplace (plugins/grafana-mcp) | 6c28ba1961d5 | Not imported |
| PM-165 | greptile | development | git-subdir | greptileai/claude-plugin (plugins/greptile) | f0b7379ca06e | Not imported |
| PM-166 | honeycomb | monitoring | git-subdir | honeycombio/agent-skill (honeycomb) | 6bb09279fc3f | Not imported |
| PM-167 | hookify | productivity | local | claude-plugins-official ./plugins/hookify | - | Not imported |
| PM-168 | hostinger | deployment | url | hostinger/claude-plugin | 569880c60681 | Not imported |
| PM-169 | hubspot-sales | productivity | git-subdir | HubSpot/hubspot-mcp-plugins (HubSpot-Sales) | a0c59600fc1d | Not imported |
| PM-170 | huggingface-skills | development | url | huggingface/skills | c3ff942be3e0 | Not imported |
| PM-171 | hyperframes | design | url | heygen-com/hyperframes | 8d2b6e7bdc1c | Not imported |
| PM-172 | idmp-plugin | development | git-subdir | taosdata/agent-skills (plugins/idmp-plugin) | bf5197716bac | Not imported |
| PM-173 | imessage | productivity | local | claude-plugins-official ./external_plugins/imessage | - | Not imported |
| PM-174 | informatica-for-claude-platform | database | git-subdir | forcedotcom/informatica-claude-plugins (informatica-for-claude-platform) | 554d02e0f7f2 | Not imported |
| PM-175 | intuit-quickbooks | productivity | url | intuit/quickbooks-claude-plugin | c8daa17a64d4 | Not imported |
| PM-176 | jdtls-lsp | development | local | claude-plugins-official ./plugins/jdtls-lsp | - | Not imported |
| PM-177 | jfrog | security | url | jfrog/claude-plugin | 9b1f8f6c8835 | Not imported |
| PM-178 | knowledge-catalog | database | url | gemini-cli-extensions/knowledge-catalog | 630397520359 | Not imported |
| PM-179 | kotlin-lsp | development | local | claude-plugins-official ./plugins/kotlin-lsp | - | Not imported |
| PM-180 | langfuse-observability | monitoring | url | langfuse/claude-observability-plugin | b5211009698f | Not imported |
| PM-181 | laravel-boost | development | local | claude-plugins-official ./external_plugins/laravel-boost | - | Not imported |
| PM-182 | learn-with-coursera | learning | git-subdir | coursera/skills (skills) | ac28fd6ebf85 | Not imported |
| PM-183 | learning-output-style | learning | local | claude-plugins-official ./plugins/learning-output-style | - | Not imported |
| PM-184 | legalzoom | productivity | git-subdir | legalzoom/claude-plugins (plugins/legalzoom) | f9fd8a0ca6e1 | Not imported |
| PM-185 | linq-alpha | productivity | git-subdir | linq-lab/linq-alpha-plugin (plugins/linq-alpha) | bfb594b7ccca | Not imported |
| PM-186 | liquid-lsp | development | git-subdir | Shopify/liquid-skills (plugins/liquid-lsp) | ae3e4cc3f454 | Not imported |
| PM-187 | liquid-skills | development | git-subdir | Shopify/liquid-skills (plugins/liquid-skills) | ae3e4cc3f454 | Not imported |
| PM-188 | logrocket | monitoring | git-subdir | LogRocket/logrocket-claude-plugin (plugins/logrocket) | 2e44dbb47faf | Not imported |
| PM-189 | looker | database | url | gemini-cli-extensions/looker | 13ed738a97a1 | Not imported |
| PM-190 | lovable | development | url | lovablelabs/mcp | 0336e6db8026 | Not imported |
| PM-191 | lua-lsp | development | local | claude-plugins-official ./plugins/lua-lsp | - | Not imported |
| PM-192 | lumen | development | url | ory/lumen | f60f9ecee417 | Not imported |
| PM-193 | lusha | productivity | url | lusha-oss/lusha-mcp-plugin | 4bcf5c743d57 | Not imported |
| PM-194 | math-olympiad | math | local | claude-plugins-official ./plugins/math-olympiad | - | Not imported |
| PM-195 | math-proof | math | local | claude-plugins-official ./plugins/math-proof | - | Not imported |
| PM-196 | mattpocock-skills | development | url | mattpocock/skills | 49dd158d1076 | Not imported |
| PM-197 | mcp-apps | development | git-subdir | modelcontextprotocol/ext-apps (plugins/mcp-apps) | 6d9bdc7babf2 | Not imported |
| PM-198 | mcp-server-dev | development | local | claude-plugins-official ./plugins/mcp-server-dev | - | Not imported |
| PM-199 | mcp-tunnels | development | local | claude-plugins-official ./plugins/mcp-tunnels | - | Not imported |
| PM-200 | mercadopago | development | git-subdir | mercadopago/mercadopago-claude-marketplace (plugins/mercadopago) | 755d33740af2 | Not imported |
| PM-201 | mergify | development | url | mergifyio/mergify-cli | 6307ed10e862 | Not imported |
| PM-202 | microsoft-docs | development | url | MicrosoftDocs/mcp | f0a9478a954c | Not imported |
| PM-203 | migration-to-aws | development | git-subdir | awslabs/startups (migrate/plugins/migration-to-aws) | ec681ba5d49b | Not imported |
| PM-204 | miro | design | git-subdir | miroapp/miro-ai (claude-plugins/miro) | b6408e1bdfe0 | Not imported |
| PM-205 | mlflow | monitoring | url | mlflow/skills | 51a42ea2b07f | Not imported |
| PM-206 | modern-web-guidance | development | url | GoogleChrome/modern-web-guidance | b31dc0a43ff5 | Not imported |
| PM-207 | mongodb | database | git-subdir | mongodb/agent-skills (plugins/mongodb) | c370a63b2707 | Not imported |
| PM-208 | mongodb-atlas | database | git-subdir | mongodb/agent-skills (plugins/mongodb-atlas) | c370a63b2707 | Not imported |
| PM-209 | netlify-skills | development | url | netlify/context-and-tools | dc9ebf1b9944 | Not imported |
| PM-210 | netsuite-ai-companion | productivity | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-ai-companion) | 23793a10a9bb | Not imported |
| PM-211 | netsuite-finance-analyst | productivity | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-finance-analyst) | 23793a10a9bb | Not imported |
| PM-212 | netsuite-suitecloud | development | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-suitecloud) | 23793a10a9bb | Not imported |
| PM-213 | newrelic | monitoring | url | newrelic/claude-code-plugin | f8e5f8b62139 | Not imported |
| PM-214 | nightvision |  | url | nvsecurity/nightvision-skills | 957db6bb9348 | Not imported |
| PM-215 | nimble |  | url | Nimbleway/agent-skills | fdb077c7220a | Not imported |
| PM-216 | noibu | monitoring | git-subdir | Noibu/ai-plugin (src) | 9fa2eddc3a86 | Not imported |
| PM-217 | nvidia-skills | development | git-subdir | NVIDIA/skills (plugins/nvidia-skills) | 029363a2023c | Not imported |
| PM-218 | oracle-ai-data-platform-workbench-databricks-migrator | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-databricks-migrator) | a7225cbdd935 | Not imported |
| PM-219 | oracle-ai-data-platform-workbench-engineer-agent | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-engineer-agent) | a7225cbdd935 | Not imported |
| PM-220 | oracle-ai-data-platform-workbench-spark-connectors | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-spark-connectors) | a7225cbdd935 | Not imported |
| PM-221 | oracledb | database | url | gemini-cli-extensions/oracledb | 8d24bdc3185c | Not imported |
| PM-222 | outputai | development | git-subdir | growthxai/output (coding_assistants/claude/plugins/outputai) | 2032ff617a62 | Not imported |
| PM-223 | paypal | development | url | paypal/AI-Toolkit | 5dce83d8243f | Not imported |
| PM-224 | pendo-analytics | productivity | git-subdir | pendo-io/claude-pendo-plugin (plugins/pendo-analytics) | a0f85260c61b | Not imported |
| PM-225 | pendo-guides | productivity | git-subdir | pendo-io/claude-pendo-plugin (plugins/pendo-guides) | 340d503c23ee | Not imported |
| PM-226 | pendo-orchestrate | productivity | git-subdir | pendo-io/claude-pendo-plugin (plugins/pendo-orchestrate) | a0f85260c61b | Not imported |
| PM-227 | php-lsp | development | local | claude-plugins-official ./plugins/php-lsp | - | Not imported |
| PM-228 | pigment | productivity | url | gopigment/ai-plugins | 8a2c2d734f94 | Not imported |
| PM-229 | pinecone | database | url | pinecone-io/pinecone-claude-code-plugin | c383d38b5cc3 | Not imported |
| PM-230 | pixeltable | development | url | pixeltable/pixeltable-skill | c471dbb262b6 | Not imported |
| PM-231 | planetscale | database | url | planetscale/claude-plugin | 95c80f9f391b | Not imported |
| PM-232 | playground | development | local | claude-plugins-official ./plugins/playground | - | Not imported |
| PM-233 | playwright | testing | local | claude-plugins-official ./external_plugins/playwright | - | Not imported |
| PM-234 | plugin-dev | development | local | claude-plugins-official ./plugins/plugin-dev | - | Not imported |
| PM-235 | postiz |  | url | gitroomhq/postiz-agent | 86e02524377c | Not imported |
| PM-236 | postman | development | url | postmanlabs/postman-plugin | c6352ef5605c | Not imported |
| PM-237 | pr-review-toolkit | productivity | local | claude-plugins-official ./plugins/pr-review-toolkit | - | Not imported |
| PM-238 | preset-cli-skills | development | git-subdir | preset-io/agent-skills (plugins/preset-cli-skills) | 838f0a408dc1 | Not imported |
| PM-239 | prisma |  | url | prisma/claude-plugin | 82edd74d8189 | Not imported |
| PM-240 | project-artifact | productivity | local | claude-plugins-official ./plugins/project-artifact | - | Not imported |
| PM-241 | pydantic-ai | development | git-subdir | pydantic/skills (plugins/ai) | 238d97102650 | Not imported |
| PM-242 | pyright-lsp | development | local | claude-plugins-official ./plugins/pyright-lsp | - | Not imported |
| PM-243 | qdrant-skills | database | url | qdrant/skills | d2127f6e1b9c | Not imported |
| PM-244 | qodo | development | git-subdir | qodo-ai/qodo-skills (packages/qodo) | b8c21854199c | Not imported |
| PM-245 | qodo-standards | development | git-subdir | qodo-ai/qodo-skills (packages/qodo-standards) | b8c21854199c | Not imported |
| PM-246 | qt-development-skills | development | url | TheQtCompanyRnD/agent-skills | a784c48445e3 | Not imported |
| PM-247 | quarkus-agent | development | url | quarkusio/quarkus-agent-mcp | 73cef3b2564d | Not imported |
| PM-248 | railway | deployment | git-subdir | railwayapp/railway-skills (plugins/railway) | a100f93e482c | Not imported |
| PM-249 | ralph-loop | development | local | claude-plugins-official ./plugins/ralph-loop | - | Not imported |
| PM-250 | rc | development | url | RevenueCat/rc-claude-code-plugin (revenuecat) | ccfc038185ec | Not imported |
| PM-251 | receipts | productivity | local | claude-plugins-official ./plugins/receipts | - | Not imported |
| PM-252 | redis-development | database | git-subdir | redis/agent-skills (plugins/redis-development) | a84871d065f3 | Not imported |
| PM-253 | remember |  | url | Digital-Process-Tools/claude-remember | ccd45061ee4b | Not imported |
| PM-254 | revenuecat | development | url | RevenueCat/rc-claude-code-plugin (revenuecat) | ccfc038185ec | Not imported |
| PM-255 | rill | development | url | rilldata/agent-skills | adfce5762be4 | Not imported |
| PM-256 | rootly | monitoring | url | Rootly-AI-Labs/rootly-claude-plugin | 65832aa6ff7a | Not imported |
| PM-257 | ruby-lsp | development | local | claude-plugins-official ./plugins/ruby-lsp | - | Not imported |
| PM-258 | runway-api | design | git-subdir | runwayml/skills (claude) | 6e98d3f35407 | Not imported |
| PM-259 | rust-analyzer-lsp | development | local | claude-plugins-official ./plugins/rust-analyzer-lsp | - | Not imported |
| PM-260 | sagemaker-ai | development | git-subdir | awslabs/agent-plugins (plugins/sagemaker-ai) | 097fe8ad56d8 | Not imported |
| PM-261 | salesforce-development | development | git-subdir | forcedotcom/sf-skills (plugins/builder/salesforce-development) | d3088edf8776 | Not imported |
| PM-262 | sap-cds-mcp | development | url | cap-js/mcp-server | 52ca3304342d | Not imported |
| PM-263 | sap-fiori-mcp-server | development | git-subdir | SAP/open-ux-tools (packages/fiori-mcp-server) | 69e2c50833f1 | Not imported |
| PM-264 | sap-hana-cli | database | url | SAP-samples/hana-cli-claude-plugin | abadd0aba327 | Not imported |
| PM-265 | sap-mdk-server | development | url | SAP/mdk-mcp-server | ce65cbf22089 | Not imported |
| PM-266 | save-to-spotify | productivity | git-subdir | spotify/save-to-spotify (plugin) | 9d05c8cd8c85 | Not imported |
| PM-267 | scandit-sdk | development | url | Scandit/skills | 2f0731a090eb | Not imported |
| PM-268 | security-guidance | security | local | claude-plugins-official ./plugins/security-guidance | - | Not imported |
| PM-269 | semgrep | security | git-subdir | semgrep/mcp-marketplace (plugin) | b58f407c6ac0 | Not imported |
| PM-270 | sentry-cli | monitoring | git-subdir | getsentry/cli (packages/cli/plugins/sentry-cli) | 3567c3c937b5 | Not imported |
| PM-271 | serena | development | local | claude-plugins-official ./external_plugins/serena | - | Not imported |
| PM-272 | servicenow-sdk | development | git-subdir | ServiceNow/sdk (providers/claude/plugin) | 6f01c0e26cbe | Not imported |
| PM-273 | session-report | productivity | local | claude-plugins-official ./plugins/session-report | - | Not imported |
| PM-274 | setup-agent-analytics | development | git-subdir | pendo-io/claude-pendo-plugin (plugins/setup-agent-analytics) | 340d503c23ee | Not imported |
| PM-275 | setup-mcp-agent-analytics | development | git-subdir | pendo-io/claude-pendo-plugin (plugins/setup-mcp-agent-analytics) | a0f85260c61b | Not imported |
| PM-276 | shippo | productivity | git-subdir | goshippo/ai (providers/claude/plugin) | cf8e96532f24 | Not imported |
| PM-277 | shopify-ai-toolkit | development | url | Shopify/Shopify-AI-Toolkit | 3c32168c6e4c | Not imported |
| PM-278 | skill-creator | development | local | claude-plugins-official ./plugins/skill-creator | - | Not imported |
| PM-279 | snowflake-cortex-code | development | git-subdir | Snowflake-Labs/snowflake-ai-kit (plugins/cortex-code) | e2a3cbb45a9a | Not imported |
| PM-280 | sonarqube | security | url | SonarSource/sonarqube-agent-plugins | 5a9356d957db | Not imported |
| PM-281 | sonatype-guide | security | url | sonatype/sonatype-guide-claude-plugin | 1dae73980f59 | Not imported |
| PM-282 | sourcegraph | development | url | sourcegraph-community/sourcegraph-claudecode-plugin | 674a05e2e286 | Not imported |
| PM-283 | spanner | database | url | gemini-cli-extensions/spanner | d4db42a27080 | Not imported |
| PM-284 | spotify-ads-api | productivity | url | spotify/ads-claude-plugin | 532b47af3d2e | Not imported |
| PM-285 | stackhawk-api | security | git-subdir | stackhawk/agent-skills (plugins/api) | d0eea864c42f | Not imported |
| PM-286 | stackhawk-hawkscan | security | git-subdir | stackhawk/agent-skills (plugins/hawkscan) | 66cac9baa588 | Not imported |
| PM-287 | streaming-skills-plugin | development | url | confluentinc/agent-skills | 204b36f10e9b | Not imported |
| PM-288 | sumup | development | url | sumup/sumup-skills | 6922c7052ae9 | Not imported |
| PM-289 | swift-lsp | development | local | claude-plugins-official ./plugins/swift-lsp | - | Not imported |
| PM-290 | synthflow | automation | git-subdir | SynthFlowAI/AnthropicPlugin (plugins/synthflow) | 205871ee8350 | Not imported |
| PM-291 | teamcity-cli | development | url | JetBrains/teamcity-cli | ac6c1fd83300 | Not imported |
| PM-292 | telegram | productivity | local | claude-plugins-official ./external_plugins/telegram | - | Not imported |
| PM-293 | terraform | development | local | claude-plugins-official ./external_plugins/terraform | - | Not imported |
| PM-294 | twilio-developer-kit | development | url | twilio/ai | 803790a281f0 | Not imported |
| PM-295 | typescript-lsp | development | local | claude-plugins-official ./plugins/typescript-lsp | - | Not imported |
| PM-296 | ui-theme-designer | design | git-subdir | SAP/ui-theme-designer-plugins-for-coding-agents (plugins/ui-theme-designer) | 3eff5832700d | Not imported |
| PM-297 | ui5 | development | git-subdir | UI5/plugins-coding-agents (plugins/ui5) | a99b882ce364 | Not imported |
| PM-298 | ui5-modernization | development | git-subdir | UI5/plugins-coding-agents (plugins/ui5-modernization) | 2b8c4a944e39 | Not imported |
| PM-299 | ui5-typescript-conversion | development | git-subdir | UI5/plugins-coding-agents (plugins/ui5-typescript-conversion) | 2b8c4a944e39 | Not imported |
| PM-300 | unity | development | url | Unity-Technologies/unity-agent-plugin | ba48956ae8be | Not imported |
| PM-301 | unreal-engine-skills-for-claude-code | development | url | EpicGames/unreal-engine-skills-for-claude-code-plugin | 0e27bde2b55c | Not imported |
| PM-302 | valtown | deployment | git-subdir | val-town/plugins (plugin) | 555ff7492c9c | Not imported |
| PM-303 | vanguard-advisor-tools | productivity | url | Vanguard-oss/vanguard-advisor-tools | 328fe9f61fe7 | Not imported |
| PM-304 | vanta-mcp-plugin | security | url | VantaInc/vanta-mcp-plugin | 345d86b55faa | Not imported |
| PM-305 | vibe-prospecting | productivity | url | explorium-ai/vibeprospecting-plugin | ca43f6d92395 | Not imported |
| PM-306 | vsql-extension-builder | database | url | villagesql/villagesql-skills | 18f7d68673e2 | Not imported |
| PM-307 | windsor-ai | productivity | url | windsor-ai/claude-windsor-ai-plugin | d7ba1cb036c7 | Not imported |
| PM-308 | wingspan | productivity | url | wingspanHQ/mcp-claude-plugin | 7f99cb3d1789 | Not imported |
| PM-309 | wix | development | url | wix/skills | 8fc544d319c4 | Not imported |
| PM-310 | workos | security | git-subdir | workos/skills (plugins/workos) | e25141bae047 | Not imported |
| PM-311 | zilliz | database | url | zilliztech/zilliz-plugin (plugins/zilliz) | 35c86c000c91 | Not imported |
| PM-312 | zocks-advisor | productivity | url | zocks-communications/zocks-agent-plugins | a3e445c13966 | Not imported |
| PM-313 | zoom-plugin | development | url | zoom/zoom-plugin | 86e2592334f5 | Not imported |
| PM-314 | zscaler | security | url | zscaler/zscaler-mcp-server | 6340cd24087a | Not imported |
| PM-315 | zyte-web-data | automation | url | zytedata/claude-skills | d03e241729eb | Not imported |

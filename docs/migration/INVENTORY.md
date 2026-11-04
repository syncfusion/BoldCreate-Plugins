# Upstream plugin inventory

The upstream index lists 315 plugins. 130 exist in `third_party/`, 116 of them imported from this index. 185 do not exist yet.

The index holds names and source pointers only. It has no MCP endpoints, auth modes, variables, licences or logos, which a BoldCreate `plugin.json` requires. A plugin can be imported only after its source is read. The workspace egress policy blocks cloning the vendor repositories, so remote MCP plugins were imported by reading each vendor's `.mcp.json` and licence through the GitHub API, and skill plugins through `scripts/fetch-upstream.mjs`. Plugins not yet imported have the status **Not imported**.

This file is generated. Regenerate it with `node scripts/migration-inventory.mjs`.

## Plugins already in third_party

| ID | Connector | Current version | Upstream version | Migration required | Status |
|---|---|---|---|---|---|
| PM-001 | activecampaign | 0.3.1 | not stated | No | Imported |
| PM-002 | adobe-for-creativity | 3.2.0 | not stated | No | Imported |
| PM-003 | ai-plugins | 0.1.0 | not stated | No | Imported |
| PM-004 | airwallex-agentos | 0.2.8 | not stated | No | Imported |
| PM-005 | airwallex-dev | 0.1.3 | not stated | No | Imported |
| PM-006 | alloydb-omni | 0.2.2 | not stated | No | Imported |
| PM-007 | amazon-location-service | 1.1.0 | not stated | No | Imported |
| PM-008 | amd-skills | 1.0.0 | not stated | No | Imported |
| PM-009 | amplitude | 0.7.1 | not stated | No | Imported |
| PM-010 | apollo | 0.7.1 | not stated | No | Imported |
| PM-011 | apollo-skills | 1.2.9 | not stated | No | Imported |
| PM-012 | astronomer-data-agents | 0.1.0 | not stated | No | Imported |
| PM-013 | atlassian | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-014 | atlassian-twg-cli | 1.0.12 | not stated | No | Imported |
| PM-015 | atomic-agents | 2.2.0 | not stated | No | Imported |
| PM-016 | auth0 | 2.6.0 | not stated | No | Imported |
| PM-017 | aws-agents | 1.0.0 | not stated | No | Imported |
| PM-018 | aws-amplify | 1.0.0 | not stated | No | Imported |
| PM-019 | aws-core | 1.1.0 | not stated | No | Imported |
| PM-020 | aws-data-analytics | 1.3.0 | not stated | No | Imported |
| PM-021 | aws-serverless | 1.3.0 | not stated | No | Imported |
| PM-022 | aws-transform | 1.9.0 | not stated | No | Imported |
| PM-023 | azure | 1.2.50 | not stated | No | Imported |
| PM-024 | azure-cosmos-db-assistant | 1.0.0 | not stated | No | Imported |
| PM-025 | azure-sql-developer | 1.1.0 | not stated | No | Imported |
| PM-026 | bigquery-data-analytics | 0.2.5 | not stated | No | Imported |
| PM-027 | blackrock-advisor-center-plugin | 0.1.0 | not stated | No | Imported |
| PM-028 | boltz | 0.1.1 | not stated | No | Imported |
| PM-029 | box | 1.0.0 | not stated | No | Imported |
| PM-030 | buildkite | 1.0.0 | not stated | No | Imported |
| PM-031 | carta-crm | 1.15.0 | not stated | No | Imported |
| PM-032 | catalyst-by-zoho | 0.0.2 | not stated | No | Imported |
| PM-033 | chrome-devtools-mcp | 1.11.0 | not stated | No | Imported |
| PM-034 | chronograph-gp | 0.2.4 | not stated | No | Imported |
| PM-035 | chronograph-lp | 0.2.4 | not stated | No | Imported |
| PM-036 | ckeditor | 0.1.1 | not stated | No | Imported |
| PM-037 | cloudflare | 1.0.0 | not stated | No | Imported |
| PM-038 | context7 | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-039 | crowdsec | 0.3.0 | not stated | No | Imported |
| PM-040 | crowdstrike-falcon-foundry | 1.6.0 | not stated | No | Imported |
| PM-041 | databases-on-aws | 1.10.0 | not stated | No | Imported |
| PM-042 | datadog | 0.7.17 | not stated | No | Imported |
| PM-043 | dataverse | 1.14.0 | not stated | No | Imported |
| PM-044 | deepeval | 1.0.0 | not stated | No | Imported |
| PM-045 | deploy-on-aws | 1.4.0 | not stated | No | Imported |
| PM-046 | desktop-commander | 0.2.0 | not stated | No | Imported |
| PM-047 | duckdb-skills | 0.2.4 | not stated | No | Imported |
| PM-048 | duende-skills | 0.3.0 | not stated | No | Imported |
| PM-049 | dynatrace | 8.0.1 | not stated | No | Imported |
| PM-050 | exa | 0.7.1 | not stated | No | Imported |
| PM-051 | expo | 1.13.9 | not stated | No | Imported |
| PM-052 | fastly-agent-toolkit | 0.1.0 | not stated | No | Imported |
| PM-053 | fiftyone | 1.0.3 | not stated | No | Imported |
| PM-054 | figma | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-055 | firecrawl | 0.7.1 | not stated | No | Imported |
| PM-056 | gc-ai | 0.1.0 | not stated | No | Imported |
| PM-057 | github | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-058 | gitlab | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-059 | google-cloud-storage | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-060 | govtribe | 0.7.1 | not stated | No | Imported |
| PM-061 | grafana-assistant | 0.2.0 | not stated | No | Imported |
| PM-062 | grafana-cloud-mcp | 0.2.0 | not stated | No | Imported |
| PM-063 | grafana-mcp | 0.2.0 | not stated | No | Imported |
| PM-064 | growthbook | 2.0.0 | not stated | No | Imported |
| PM-065 | honeycomb | 1.2.3 | not stated | No | Imported |
| PM-066 | hunter | 0.7.1 | not stated | No | Imported |
| PM-067 | idmp-plugin | 0.1.0 | not stated | No | Imported |
| PM-068 | incident-io | 0.7.1 | not stated | No | Imported |
| PM-069 | informatica-for-claude-platform | 1.0.0 | not stated | No | Imported |
| PM-070 | intercom | 0.7.1 | not stated | No | Imported |
| PM-071 | langfuse | 1.10.0 | not stated | No | Imported |
| PM-072 | leadfeeder | 0.7.1 | not stated | No | Imported |
| PM-073 | linear | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-074 | logfire | 0.1.4 | not stated | No | Imported |
| PM-075 | lumen | 0.0.42 | not stated | No | Imported |
| PM-076 | lusha | 0.1.3 | not stated | No | Imported |
| PM-077 | mapbox | 1.0.0 | not stated | No | Imported |
| PM-078 | mercadopago | 4.3.2 | not stated | No | Imported |
| PM-079 | mintlify | 0.7.1 | not stated | No | Imported |
| PM-080 | monday-crm | 0.7.1 | not stated | No | Imported |
| PM-081 | mongodb | 1.2.1 | not stated | No | Imported |
| PM-082 | neon | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-083 | netlify-skills | 1.7.0 | not stated | No | Imported |
| PM-084 | noibu | 1.0.0 | not stated | No | Imported |
| PM-085 | notion | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-086 | outputai | 0.3.0 | not stated | No | Imported |
| PM-087 | pagerduty | 0.7.1 | not stated | No | Imported |
| PM-088 | pendo-analytics | 1.4.0 | not stated | No | Imported |
| PM-089 | pendo-guides | 1.3.0 | not stated | No | Imported |
| PM-090 | pendo-orchestrate | 1.0.0 | not stated | No | Imported |
| PM-091 | posthog | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-092 | postman | 2.0.1 | not stated | No | Imported |
| PM-093 | preset-cli-skills | 0.5.0 | not stated | No | Imported |
| PM-094 | pydantic-ai | 0.1.0 | not stated | No | Imported |
| PM-095 | qodo | 2.1.2 | not stated | No | Imported |
| PM-096 | qodo-standards | 2.1.2 | not stated | No | Imported |
| PM-097 | redis-development | 1.4.0 | not stated | No | Imported |
| PM-098 | render | 0.7.1 | not stated | No | Imported |
| PM-099 | resend | 1.0.5 | not stated | No | Imported |
| PM-100 | revenuecat | 2.3.0 | not stated | No | Imported |
| PM-101 | runway-api | 4.0.1 | not stated | No | Imported |
| PM-102 | sagemaker-ai | 1.3.0 | not stated | No | Imported |
| PM-103 | sanity | 1.0.0 | not stated | No | Imported |
| PM-104 | save-to-spotify | 0.2.0 | not stated | No | Imported |
| PM-105 | sentry | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-106 | setup-agent-analytics | 1.1.0 | not stated | No | Imported |
| PM-107 | setup-mcp-agent-analytics | 1.1.0 | not stated | No | Imported |
| PM-108 | slack | 0.7.1 | not stated | No | Imported |
| PM-109 | snowflake-cortex-code | 3.4.0 | not stated | No | Imported |
| PM-110 | stackhawk-api | 2.7.0 | not stated | No | Imported |
| PM-111 | stackhawk-hawkscan | 2.6.0 | not stated | No | Imported |
| PM-112 | stripe | 0.7.1 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-113 | supabase | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-114 | superdesign | 0.6.0 | not stated | No | Imported |
| PM-115 | superpowers | 7.0.0 | not stated | No | Imported |
| PM-116 | synthflow | 1.3.0 | not stated | No | Imported |
| PM-117 | tavily | 0.7.1 | not stated | No | Imported |
| PM-118 | teamcity-cli | 1.3.0 | not stated | No | Imported |
| PM-119 | togetherai-skills | 1.0.0 | not stated | No | Imported |
| PM-120 | ui-theme-designer | 2.0.0 | not stated | No | Imported |
| PM-121 | ui5-modernization | 0.1.8 | not stated | No | Imported |
| PM-122 | ui5-typescript-conversion | 0.1.8 | not stated | No | Imported |
| PM-123 | valtown | 0.4.0 | not stated | No | Imported |
| PM-124 | vanta | 0.7.1 | not stated | No | Imported |
| PM-125 | vercel | 0.7.0 | not stated | Needs source comparison | Blocked: upstream source not readable |
| PM-126 | vibe-prospecting | 0.1.107 | not stated | No | Imported |
| PM-127 | wingspan | 0.1.0 | not stated | No | Imported |
| PM-128 | youdotcom-agent-skills | 0.6.0 | not stated | No | Imported |
| PM-129 | zapier | 0.7.1 | not stated | No | Imported |
| PM-130 | zoominfo | 0.7.1 | not stated | No | Imported |

## Plugins not yet imported

| ID | Connector | Category | Source type | Source | Pinned ref | Status |
|---|---|---|---|---|---|---|
| PM-131 | 42crunch-api-security-testing | security | git-subdir | 42Crunch-AI/claude-plugins (plugins/api-security-testing) | faf5305385de | Not imported |
| PM-132 | agent-sdk-dev | development | local | claude-plugins-official ./plugins/agent-sdk-dev | - | Not imported |
| PM-133 | agentforce-adlc | development | url | SalesforceAIResearch/agentforce-adlc | 09bf1539d41f | Not imported |
| PM-134 | aikido |  | url | AikidoSec/aikido-claude-plugin | 8fdc995a4410 | Not imported |
| PM-135 | airtable | productivity | git-subdir | Airtable/skills (plugins/airtable) | 812ee67f1fd3 | Not imported |
| PM-136 | aiven | database | url | aiven/aiven-ai-plugins | 634f41d68529 | Not imported |
| PM-137 | alloydb | database | url | gemini-cli-extensions/alloydb | f9b3280bdcfe | Not imported |
| PM-138 | altimate-code | database | git-subdir | AltimateAI/altimate-claude-plugin (plugins/altimate-code) | b7c8f68b3dfd | Not imported |
| PM-139 | amazon-selling-partner | productivity | url | amzn/selling-partner-agentic-toolkit | 10573bac239b | Not imported |
| PM-140 | appwrite | development | url | appwrite/claude-plugin | ab3c90b37c95 | Not imported |
| PM-141 | asana | productivity | local | claude-plugins-official ./external_plugins/asana | - | Not imported |
| PM-142 | atlan |  | url | atlanhq/agent-toolkit | 17b7ae3b4852 | Not imported |
| PM-143 | aws-agents-for-devsecops | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-agents-for-devsecops) | 7bde20faede4 | Not imported |
| PM-144 | aws-startup-advisor | development | git-subdir | aws/agent-toolkit-for-aws (plugins/aws-startup-advisor) | b310d1c46b4c | Not imported |
| PM-145 | base44 | development | url | base44/skills | 8548a482f606 | Not imported |
| PM-146 | bigdata-com | database | git-subdir | Bigdata-com/bigdata-plugins-marketplace (plugins/bigdata-com) | 43777fbdb929 | Not imported |
| PM-147 | brightdata-plugin |  | url | brightdata/skills | 37503c1ba310 | Not imported |
| PM-148 | browser-use | automation | git-subdir | browser-use/plugins (browser-use) | 4749bcbfe456 | Not imported |
| PM-149 | build-with-wordpress |  | url | Automattic/claude-code-wordpress.com | 052ca970df2c | Not imported |
| PM-150 | canva | design | git-subdir | canva-sdks/canva-skills (plugins/canva) | bfcbc681560f | Not imported |
| PM-151 | carbone-skill | productivity | url | carboneio/carbone-skill | 25207b3f52b9 | Not imported |
| PM-152 | carta-cap-table | productivity | git-subdir | carta/plugins (plugins/carta-cap-table) | ea7fe1d4db0f | Not imported |
| PM-153 | carta-investors | productivity | git-subdir | carta/plugins (plugins/carta-investors) | ea7fe1d4db0f | Not imported |
| PM-154 | cds-mcp | development | url | cap-js/mcp-server | 52ca3304342d | Not imported |
| PM-155 | circle-skills | development | git-subdir | circlefin/skills (plugins/circle) | 58ab8648bb1a | Not imported |
| PM-156 | circleback | productivity | url | circlebackai/claude-code-plugin | a610634c95ab | Not imported |
| PM-157 | clangd-lsp | development | local | claude-plugins-official ./plugins/clangd-lsp | - | Not imported |
| PM-158 | claude-code-setup | productivity | local | claude-plugins-official ./plugins/claude-code-setup | - | Not imported |
| PM-159 | claude-md-management | productivity | local | claude-plugins-official ./plugins/claude-md-management | - | Not imported |
| PM-160 | claude-security | security | local | claude-plugins-official ./plugins/claude-security | - | Not imported |
| PM-161 | clay | productivity | git-subdir | clay-run/agent-plugins (clay) | 769514a3a236 | Not imported |
| PM-162 | clickhouse | database | url | ClickHouse/clickhouse-claude-code-plugin | 652664c8924c | Not imported |
| PM-163 | clickhouse-best-practices | database | url | ClickHouse/agent-skills | 356a8c1b9a73 | Not imported |
| PM-164 | cloud-sql-mysql | database | url | gemini-cli-extensions/cloud-sql-mysql | 51aa269094a8 | Not imported |
| PM-165 | cloud-sql-postgresql | database | url | gemini-cli-extensions/cloud-sql-postgresql | 1d758bb34795 | Not imported |
| PM-166 | cloud-sql-sqlserver | database | url | gemini-cli-extensions/cloud-sql-sqlserver | 7efeaaf026b3 | Not imported |
| PM-167 | cloudinary |  | url | cloudinary-devs/cloudinary-plugin | 86be53409e3f | Not imported |
| PM-168 | cockroachdb | database | url | cockroachdb/claude-plugin | 6c96c6394a61 | Not imported |
| PM-169 | code-modernization | development | local | claude-plugins-official ./plugins/code-modernization | - | Not imported |
| PM-170 | code-review | productivity | local | claude-plugins-official ./plugins/code-review | - | Not imported |
| PM-171 | code-simplifier | productivity | local | claude-plugins-official ./plugins/code-simplifier | - | Not imported |
| PM-172 | coderabbit | productivity | url | coderabbitai/skills | 3e8763d24d54 | Not imported |
| PM-173 | codspeed | development | url | CodSpeedHQ/codspeed | 59cfc90540bb | Not imported |
| PM-174 | commit-commands | productivity | local | claude-plugins-official ./plugins/commit-commands | - | Not imported |
| PM-175 | confidence | development | url | spotify/confidence-ai-plugins | f416826fde81 | Not imported |
| PM-176 | convex | database | url | get-convex/convex-backend-skill | 6ca54f6e2e75 | Not imported |
| PM-177 | crowdstrike-falcon-fusion | security | url | CrowdStrike/fusion-skills | 38527dc5afa9 | Not imported |
| PM-178 | csharp-lsp | development | local | claude-plugins-official ./plugins/csharp-lsp | - | Not imported |
| PM-179 | cwc-makers | productivity | local | claude-plugins-official ./plugins/cwc-makers | - | Not imported |
| PM-180 | dash0 | monitoring | url | dash0hq/dash0-agent-plugin | 72a84179e6c6 | Not imported |
| PM-181 | data | development | url | astronomer/agents | 35b9610bb271 | Not imported |
| PM-182 | data-agent-kit | development | url | GoogleCloudPlatform/data-agent-kit-plugin | 83c53b5f129c | Not imported |
| PM-183 | data-engineering |  | url | astronomer/agents | 35b9610bb271 | Not imported |
| PM-184 | databricks | database | git-subdir | databricks/databricks-agent-skills (plugins/databricks/claude) | c1964266c7aa | Not imported |
| PM-185 | datahub-skills | database | url | datahub-project/datahub-skills | a27f8e7bb514 | Not imported |
| PM-186 | dataproc | database | url | gemini-cli-extensions/dataproc | 18534a9bfe0d | Not imported |
| PM-187 | datarobot-agent-skills | development | url | datarobot-oss/datarobot-agent-skills | 53a4dacc6b55 | Not imported |
| PM-188 | discord | productivity | local | claude-plugins-official ./external_plugins/discord | - | Not imported |
| PM-189 | dominodatalab | development | url | dominodatalab/domino-claude-plugin | 7949e3ac470c | Not imported |
| PM-190 | dropbox | productivity | git-subdir | dropbox/dropbox-ai-plugins (claude) | 078f0ca36df4 | Not imported |
| PM-191 | explanatory-output-style | learning | local | claude-plugins-official ./plugins/explanatory-output-style | - | Not imported |
| PM-192 | fakechat | development | local | claude-plugins-official ./external_plugins/fakechat | - | Not imported |
| PM-193 | feature-dev | development | local | claude-plugins-official ./plugins/feature-dev | - | Not imported |
| PM-194 | firebase | database | local | claude-plugins-official ./external_plugins/firebase | - | Not imported |
| PM-195 | firestore-native | database | url | gemini-cli-extensions/firestore-native | 6e6a841c2173 | Not imported |
| PM-196 | forge-skills | development | url | atlassian/forge-skills | 4f04ae028794 | Not imported |
| PM-197 | frontend-design | development | local | claude-plugins-official ./plugins/frontend-design | - | Not imported |
| PM-198 | fullstory | monitoring | url | fullstorydev/fullstory-skills | ca872d97f5c3 | Not imported |
| PM-199 | gitkraken | development | url | gitkraken/claude-plugin | f7a53b2cd138 | Not imported |
| PM-200 | gopls-lsp | development | local | claude-plugins-official ./plugins/gopls-lsp | - | Not imported |
| PM-201 | greptile | development | git-subdir | greptileai/claude-plugin (plugins/greptile) | f0b7379ca06e | Not imported |
| PM-202 | hookify | productivity | local | claude-plugins-official ./plugins/hookify | - | Not imported |
| PM-203 | hostinger | deployment | url | hostinger/claude-plugin | 569880c60681 | Not imported |
| PM-204 | hubspot-sales | productivity | git-subdir | HubSpot/hubspot-mcp-plugins (HubSpot-Sales) | a0c59600fc1d | Not imported |
| PM-205 | huggingface-skills | development | url | huggingface/skills | c3ff942be3e0 | Not imported |
| PM-206 | hyperframes | design | url | heygen-com/hyperframes | 8d2b6e7bdc1c | Not imported |
| PM-207 | imessage | productivity | local | claude-plugins-official ./external_plugins/imessage | - | Not imported |
| PM-208 | intuit-quickbooks | productivity | url | intuit/quickbooks-claude-plugin | c8daa17a64d4 | Not imported |
| PM-209 | jdtls-lsp | development | local | claude-plugins-official ./plugins/jdtls-lsp | - | Not imported |
| PM-210 | jfrog | security | url | jfrog/claude-plugin | 9b1f8f6c8835 | Not imported |
| PM-211 | knowledge-catalog | database | url | gemini-cli-extensions/knowledge-catalog | 630397520359 | Not imported |
| PM-212 | kotlin-lsp | development | local | claude-plugins-official ./plugins/kotlin-lsp | - | Not imported |
| PM-213 | langfuse-observability | monitoring | url | langfuse/claude-observability-plugin | b5211009698f | Not imported |
| PM-214 | laravel-boost | development | local | claude-plugins-official ./external_plugins/laravel-boost | - | Not imported |
| PM-215 | learn-with-coursera | learning | git-subdir | coursera/skills (skills) | ac28fd6ebf85 | Not imported |
| PM-216 | learning-output-style | learning | local | claude-plugins-official ./plugins/learning-output-style | - | Not imported |
| PM-217 | legalzoom | productivity | git-subdir | legalzoom/claude-plugins (plugins/legalzoom) | f9fd8a0ca6e1 | Not imported |
| PM-218 | linq-alpha | productivity | git-subdir | linq-lab/linq-alpha-plugin (plugins/linq-alpha) | bfb594b7ccca | Not imported |
| PM-219 | liquid-lsp | development | git-subdir | Shopify/liquid-skills (plugins/liquid-lsp) | ae3e4cc3f454 | Not imported |
| PM-220 | liquid-skills | development | git-subdir | Shopify/liquid-skills (plugins/liquid-skills) | ae3e4cc3f454 | Not imported |
| PM-221 | logrocket | monitoring | git-subdir | LogRocket/logrocket-claude-plugin (plugins/logrocket) | 2e44dbb47faf | Not imported |
| PM-222 | looker | database | url | gemini-cli-extensions/looker | 13ed738a97a1 | Not imported |
| PM-223 | lovable | development | url | lovablelabs/mcp | 0336e6db8026 | Not imported |
| PM-224 | lua-lsp | development | local | claude-plugins-official ./plugins/lua-lsp | - | Not imported |
| PM-225 | math-olympiad | math | local | claude-plugins-official ./plugins/math-olympiad | - | Not imported |
| PM-226 | math-proof | math | local | claude-plugins-official ./plugins/math-proof | - | Not imported |
| PM-227 | mattpocock-skills | development | url | mattpocock/skills | 49dd158d1076 | Not imported |
| PM-228 | mcp-apps | development | git-subdir | modelcontextprotocol/ext-apps (plugins/mcp-apps) | 6d9bdc7babf2 | Not imported |
| PM-229 | mcp-server-dev | development | local | claude-plugins-official ./plugins/mcp-server-dev | - | Not imported |
| PM-230 | mcp-tunnels | development | local | claude-plugins-official ./plugins/mcp-tunnels | - | Not imported |
| PM-231 | mergify | development | url | mergifyio/mergify-cli | 6307ed10e862 | Not imported |
| PM-232 | microsoft-docs | development | url | MicrosoftDocs/mcp | f0a9478a954c | Not imported |
| PM-233 | migration-to-aws | development | git-subdir | awslabs/startups (migrate/plugins/migration-to-aws) | ec681ba5d49b | Not imported |
| PM-234 | miro | design | git-subdir | miroapp/miro-ai (claude-plugins/miro) | b6408e1bdfe0 | Not imported |
| PM-235 | mlflow | monitoring | url | mlflow/skills | 51a42ea2b07f | Not imported |
| PM-236 | modern-web-guidance | development | url | GoogleChrome/modern-web-guidance | b31dc0a43ff5 | Not imported |
| PM-237 | mongodb-atlas | database | git-subdir | mongodb/agent-skills (plugins/mongodb-atlas) | c370a63b2707 | Not imported |
| PM-238 | netsuite-ai-companion | productivity | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-ai-companion) | 23793a10a9bb | Not imported |
| PM-239 | netsuite-finance-analyst | productivity | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-finance-analyst) | 23793a10a9bb | Not imported |
| PM-240 | netsuite-suitecloud | development | git-subdir | oracle/netsuite-suitecloud-sdk (anthropic/netsuite-suitecloud) | 23793a10a9bb | Not imported |
| PM-241 | newrelic | monitoring | url | newrelic/claude-code-plugin | f8e5f8b62139 | Not imported |
| PM-242 | nightvision |  | url | nvsecurity/nightvision-skills | 957db6bb9348 | Not imported |
| PM-243 | nimble |  | url | Nimbleway/agent-skills | fdb077c7220a | Not imported |
| PM-244 | nvidia-skills | development | git-subdir | NVIDIA/skills (plugins/nvidia-skills) | 029363a2023c | Not imported |
| PM-245 | oracle-ai-data-platform-workbench-databricks-migrator | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-databricks-migrator) | a7225cbdd935 | Not imported |
| PM-246 | oracle-ai-data-platform-workbench-engineer-agent | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-engineer-agent) | a7225cbdd935 | Not imported |
| PM-247 | oracle-ai-data-platform-workbench-spark-connectors | development | git-subdir | oracle-samples/oracle-aidp-samples (ai/claude-code-plugins/oracle-ai-data-platform-workbench-spark-connectors) | a7225cbdd935 | Not imported |
| PM-248 | oracledb | database | url | gemini-cli-extensions/oracledb | 8d24bdc3185c | Not imported |
| PM-249 | paypal | development | url | paypal/AI-Toolkit | 5dce83d8243f | Not imported |
| PM-250 | php-lsp | development | local | claude-plugins-official ./plugins/php-lsp | - | Not imported |
| PM-251 | pigment | productivity | url | gopigment/ai-plugins | 8a2c2d734f94 | Not imported |
| PM-252 | pinecone | database | url | pinecone-io/pinecone-claude-code-plugin | c383d38b5cc3 | Not imported |
| PM-253 | pixeltable | development | url | pixeltable/pixeltable-skill | c471dbb262b6 | Not imported |
| PM-254 | planetscale | database | url | planetscale/claude-plugin | 95c80f9f391b | Not imported |
| PM-255 | playground | development | local | claude-plugins-official ./plugins/playground | - | Not imported |
| PM-256 | playwright | testing | local | claude-plugins-official ./external_plugins/playwright | - | Not imported |
| PM-257 | plugin-dev | development | local | claude-plugins-official ./plugins/plugin-dev | - | Not imported |
| PM-258 | postiz |  | url | gitroomhq/postiz-agent | 86e02524377c | Not imported |
| PM-259 | pr-review-toolkit | productivity | local | claude-plugins-official ./plugins/pr-review-toolkit | - | Not imported |
| PM-260 | prisma |  | url | prisma/claude-plugin | 82edd74d8189 | Not imported |
| PM-261 | project-artifact | productivity | local | claude-plugins-official ./plugins/project-artifact | - | Not imported |
| PM-262 | pyright-lsp | development | local | claude-plugins-official ./plugins/pyright-lsp | - | Not imported |
| PM-263 | qdrant-skills | database | url | qdrant/skills | d2127f6e1b9c | Not imported |
| PM-264 | qt-development-skills | development | url | TheQtCompanyRnD/agent-skills | a784c48445e3 | Not imported |
| PM-265 | quarkus-agent | development | url | quarkusio/quarkus-agent-mcp | 73cef3b2564d | Not imported |
| PM-266 | railway | deployment | git-subdir | railwayapp/railway-skills (plugins/railway) | a100f93e482c | Not imported |
| PM-267 | ralph-loop | development | local | claude-plugins-official ./plugins/ralph-loop | - | Not imported |
| PM-268 | rc | development | url | RevenueCat/rc-claude-code-plugin (revenuecat) | ccfc038185ec | Not imported |
| PM-269 | receipts | productivity | local | claude-plugins-official ./plugins/receipts | - | Not imported |
| PM-270 | remember |  | url | Digital-Process-Tools/claude-remember | ccd45061ee4b | Not imported |
| PM-271 | rill | development | url | rilldata/agent-skills | adfce5762be4 | Not imported |
| PM-272 | rootly | monitoring | url | Rootly-AI-Labs/rootly-claude-plugin | 65832aa6ff7a | Not imported |
| PM-273 | ruby-lsp | development | local | claude-plugins-official ./plugins/ruby-lsp | - | Not imported |
| PM-274 | rust-analyzer-lsp | development | local | claude-plugins-official ./plugins/rust-analyzer-lsp | - | Not imported |
| PM-275 | salesforce-development | development | git-subdir | forcedotcom/sf-skills (plugins/builder/salesforce-development) | d3088edf8776 | Not imported |
| PM-276 | sap-cds-mcp | development | url | cap-js/mcp-server | 52ca3304342d | Not imported |
| PM-277 | sap-fiori-mcp-server | development | git-subdir | SAP/open-ux-tools (packages/fiori-mcp-server) | 69e2c50833f1 | Not imported |
| PM-278 | sap-hana-cli | database | url | SAP-samples/hana-cli-claude-plugin | abadd0aba327 | Not imported |
| PM-279 | sap-mdk-server | development | url | SAP/mdk-mcp-server | ce65cbf22089 | Not imported |
| PM-280 | scandit-sdk | development | url | Scandit/skills | 2f0731a090eb | Not imported |
| PM-281 | security-guidance | security | local | claude-plugins-official ./plugins/security-guidance | - | Not imported |
| PM-282 | semgrep | security | git-subdir | semgrep/mcp-marketplace (plugin) | b58f407c6ac0 | Not imported |
| PM-283 | sentry-cli | monitoring | git-subdir | getsentry/cli (packages/cli/plugins/sentry-cli) | 3567c3c937b5 | Not imported |
| PM-284 | serena | development | local | claude-plugins-official ./external_plugins/serena | - | Not imported |
| PM-285 | servicenow-sdk | development | git-subdir | ServiceNow/sdk (providers/claude/plugin) | 6f01c0e26cbe | Not imported |
| PM-286 | session-report | productivity | local | claude-plugins-official ./plugins/session-report | - | Not imported |
| PM-287 | shippo | productivity | git-subdir | goshippo/ai (providers/claude/plugin) | cf8e96532f24 | Not imported |
| PM-288 | shopify-ai-toolkit | development | url | Shopify/Shopify-AI-Toolkit | 3c32168c6e4c | Not imported |
| PM-289 | skill-creator | development | local | claude-plugins-official ./plugins/skill-creator | - | Not imported |
| PM-290 | sonarqube | security | url | SonarSource/sonarqube-agent-plugins | 5a9356d957db | Not imported |
| PM-291 | sonatype-guide | security | url | sonatype/sonatype-guide-claude-plugin | 1dae73980f59 | Not imported |
| PM-292 | sourcegraph | development | url | sourcegraph-community/sourcegraph-claudecode-plugin | 674a05e2e286 | Not imported |
| PM-293 | spanner | database | url | gemini-cli-extensions/spanner | d4db42a27080 | Not imported |
| PM-294 | spotify-ads-api | productivity | url | spotify/ads-claude-plugin | 532b47af3d2e | Not imported |
| PM-295 | streaming-skills-plugin | development | url | confluentinc/agent-skills | 204b36f10e9b | Not imported |
| PM-296 | sumup | development | url | sumup/sumup-skills | 6922c7052ae9 | Not imported |
| PM-297 | swift-lsp | development | local | claude-plugins-official ./plugins/swift-lsp | - | Not imported |
| PM-298 | telegram | productivity | local | claude-plugins-official ./external_plugins/telegram | - | Not imported |
| PM-299 | terraform | development | local | claude-plugins-official ./external_plugins/terraform | - | Not imported |
| PM-300 | twilio-developer-kit | development | url | twilio/ai | 803790a281f0 | Not imported |
| PM-301 | typescript-lsp | development | local | claude-plugins-official ./plugins/typescript-lsp | - | Not imported |
| PM-302 | ui5 | development | git-subdir | UI5/plugins-coding-agents (plugins/ui5) | a99b882ce364 | Not imported |
| PM-303 | unity | development | url | Unity-Technologies/unity-agent-plugin | ba48956ae8be | Not imported |
| PM-304 | unreal-engine-skills-for-claude-code | development | url | EpicGames/unreal-engine-skills-for-claude-code-plugin | 0e27bde2b55c | Not imported |
| PM-305 | vanguard-advisor-tools | productivity | url | Vanguard-oss/vanguard-advisor-tools | 328fe9f61fe7 | Not imported |
| PM-306 | vanta-mcp-plugin | security | url | VantaInc/vanta-mcp-plugin | 345d86b55faa | Not imported |
| PM-307 | vsql-extension-builder | database | url | villagesql/villagesql-skills | 18f7d68673e2 | Not imported |
| PM-308 | windsor-ai | productivity | url | windsor-ai/claude-windsor-ai-plugin | d7ba1cb036c7 | Not imported |
| PM-309 | wix | development | url | wix/skills | 8fc544d319c4 | Not imported |
| PM-310 | workos | security | git-subdir | workos/skills (plugins/workos) | e25141bae047 | Not imported |
| PM-311 | zilliz | database | url | zilliztech/zilliz-plugin (plugins/zilliz) | 35c86c000c91 | Not imported |
| PM-312 | zocks-advisor | productivity | url | zocks-communications/zocks-agent-plugins | a3e445c13966 | Not imported |
| PM-313 | zoom-plugin | development | url | zoom/zoom-plugin | 86e2592334f5 | Not imported |
| PM-314 | zscaler | security | url | zscaler/zscaler-mcp-server | 6340cd24087a | Not imported |
| PM-315 | zyte-web-data | automation | url | zytedata/claude-skills | d03e241729eb | Not imported |

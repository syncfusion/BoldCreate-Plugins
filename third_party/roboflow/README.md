# Roboflow

BoldCreate plugin that connects agents to Roboflow through its hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Roboflow computer vision skills and MCP tools for datasets, annotation, training, workflows, inference, and deployment.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Roboflow**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Roboflow**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install roboflow@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "roboflow": {
      "type": "http",
      "url": "https://mcp.roboflow.com/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to their own Roboflow account in the browser (OAuth). Roboflow's page says a free account is available at https://app.roboflow.com and that no API key is needed. A consent page shows the account email, and a member with no workspace sets one up before approving.

## Authentication

A live check on 2026-11-13 found:

- An unauthenticated request to `/mcp` returned HTTP 401 with `WWW-Authenticate: Bearer`, a link to the protected-resource metadata, and a list of requested scopes.
- The metadata names `https://app.roboflow.com` as the authorization server. It lists 77 scopes, for example `workspace:read`, `project:create`, `model:infer`, `api-key:create` and `api-key:revoke`.
- The authorization server metadata lists a registration endpoint (`/oauth/register`, dynamic client registration), client ID metadata documents, and PKCE with S256.
- Token endpoint methods are `none`, `private_key_jwt`, `client_secret_post` and `client_secret_basic`.

So members connect without a client ID or client secret from your team. No registration request was sent to the server during the check.

Roboflow's docs also describe two other ways to connect. This plugin uses neither.

- An API key from https://app.roboflow.com/settings/api, sent in an `x-api-key` header, for clients that cannot run OAuth. Do not put a key in a file or a URL.
- A pre-registered OAuth app (client ID and secret) made under **Workspace Settings > Developer**, for gateways such as Azure AI Foundry. Roboflow lists these platforms as needing it. It says Cursor, Claude Desktop, VS Code and Claude Code register automatically.

**Not checked.** Roboflow's docs do not list redirect addresses that are allowed or refused, and no registration request was sent, so whether BoldCreate Connect's redirect address is accepted was not checked. The tool list behind sign-in was not read with `tools/list`.

## Tools

Roboflow publishes its tool list at https://mcp.roboflow.com/llms.txt. It was read on 2026-11-13 and groups the tools like this: Agent, Skills, Projects, Project Deployment, Images, Media Understanding, Annotations, Auto-label, Annotation Administration, Versions, Models, Model Evaluations, Workflows, Workflow Deploy Gates, Workflow Evals, Workflow Eval Runs, Batch Processing, Devices, API Keys, Folders, Workspace Announcements, Vision Events, Universe, Datasources, Credentials, Trash, Async tasks, and Meta. It also lists interactive apps, such as an annotation editor and previews of a model or Workflow on your own media.

Roboflow says each tool declares the scopes it needs, and the client only gets the scopes you approve at sign-in. The list was not read through the MCP protocol, so what a signed-in account sees was not checked.

**Tools that change or delete things.** The list includes tools that create, change or delete data in the workspace and its devices. Examples are deleting a project, version, workflow or training run (these go to the workspace Trash), deleting annotations, creating and revoking API keys, scheduling a banner announcement that every member sees, publishing a Workflow version, changing a device's configuration or deleting a device, and starting a cloud bucket mirror that can overwrite imported images. Some tools run models and spend Roboflow credits. Review what the agent plans before approving, and approve only the scopes you need.

## Skills

The `skills/` folder holds the 13 agent skills published in [roboflow/computer-vision-skills](https://github.com/roboflow/computer-vision-skills/tree/c4263a7e5a5d79d7e2473b22e802f94de6c0bd4c/skills) at commit `c4263a7e5a5d79d7e2473b22e802f94de6c0bd4c`, copied unchanged. The source is licensed under Apache-2.0. The original licence text is in `skills/LICENSE`. The folder hashes and the licence file were compared with the values GitHub returns for that commit, and all matched.

| Skill | What Roboflow says it is for |
| --- | --- |
| `draw-vision` | Draw annotations, labels and predictions over images and videos. |
| `roboflow-api-reference` | URL patterns, auth, parameters and error codes for the REST and inference APIs. |
| `roboflow-batch-processing` | Run a Workflow over many images or videos. |
| `roboflow-cloud-storage` | Mirror images from S3 or Google Cloud Storage into a workspace. |
| `roboflow-custom-weights-upload` | Upload locally trained model weights. |
| `roboflow-data-management` | Upload, label and organise datasets. |
| `roboflow-inference` | Run inference and Workflows, compare deployment options. |
| `roboflow-model-journey` | Choose a model, try it, and put it on a project's live endpoint. |
| `roboflow-plans-and-pricing` | Answer questions about plans and credits. |
| `roboflow-product-navigation` | Say where features live in the Roboflow web app. |
| `roboflow-training-and-evaluation` | Train models, diagnose weak results, improve accuracy. |
| `roboflow-universe` | Search and use public datasets and models on Roboflow Universe. |
| `workflow-from-eval` | Build or improve a Workflow with eval-driven search. |

Roboflow serves these same skills as resources on the MCP server, so an agent connected to the server can read them there too.

**Commands and scripts in the skills.**

- Several skills tell the agent to install Python packages, such as `pip install roboflow`, `inference-sdk`, `inference-cli` and `inference`. `roboflow-inference/local-tooling.md` also shows `curl -LsSf https://astral.sh/uv/install.sh | sh` for installing `uv`, and it tells the agent to ask which Python environment to use and to get the user's confirmation before installing anything.
- `roboflow-inference/bin/poll_batch_job.py` polls a batch job. It imports `inference_cli`, reads `ROBOFLOW_API_KEY` from the environment, and has no raw network code of its own.
- `roboflow-plans-and-pricing/scripts/render_pricing.py` fills a text template from a JSON file. It uses only the Python standard library and no network.
- `roboflow-plans-and-pricing` tells the agent to open `https://roboflow.com/pricing` and `https://roboflow.com/credits` at answer time and not to guess prices.
- `roboflow-custom-weights-upload` and `roboflow-batch-processing` expect an API key in the environment for the Python tools. Do not paste a key into the chat.

Relative links inside the skills were checked, and none are broken. The files were copied unchanged and were not run.

**Not included.** Roboflow's repository also holds a Claude Code manifest, a Codex manifest, a ChatGPT package, a Microsoft Copilot Cowork package, release scripts and agent install scripts. They are not used here. The repository's `skills` folder also has no `roboflow-apps` skills, which the server lists as resources for its interactive apps.

## Docs

- Roboflow MCP server: https://docs.roboflow.com/agents/mcp-server
- Agent setup: https://docs.roboflow.com/agents/setup
- MCP tool list: https://mcp.roboflow.com/llms.txt
- API keys: https://app.roboflow.com/settings/api

## Logo

Roboflow's icon from the `chatgpt/plugin/assets` folder of its plugin repository, centred on a white tile. It is Roboflow's own mark and a trademark of its owner. It is not covered by the licence of the skills. I did not view the logo.

## License

MIT for the files written for this plugin. The skills are Apache-2.0, as above.

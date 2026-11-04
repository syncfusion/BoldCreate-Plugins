# Astronomer Data Agents

Skills that teach agents to work with Astronomer Data Agents. They are copied from the vendor's repository, [astronomer/agents](https://github.com/astronomer/agents), at commit `35b9610`.

Data engineering plugin - warehouse exploration, pipeline authoring, Airflow integration

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Astronomer Data Agents**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Astronomer Data Agents**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install astronomer-data-agents@boldcreate-plugins`.

## Skills

34 skills: `airflow`, `airflow-hitl`, `airflow-plugins`, `airflow-state-store`, `analyzing-data`, `annotating-task-lineage`, `authoring-dags`, `authoring-go-sdk-tasks`, `authoring-java-sdk-tasks`, `authoring-language-sdk-tasks`, `blueprint`, `checking-freshness`, `configuring-airflow-language-sdks`, `cosmos-dbt-core`, `cosmos-dbt-fusion`, `creating-openlineage-extractors`, `dag-factory`, `debugging-dags`, `delegating-to-otto`, `deploying-airflow`, `deploying-go-sdk-bundles`, `deploying-java-sdk-bundles`, `managing-astro-deployments`, `managing-astro-local-env`, `migrating-ai-sdk-to-common-ai`, `migrating-airflow-2-to-3`, `migrating-dagster-to-airflow`, `profiling-tables`, `setting-up-astro-project`, `testing-dags`, `tracing-downstream-lineage`, `tracing-upstream-lineage`, `troubleshooting-astro-deployments`, `warehouse-init`.

## Setup

No install-time settings.

## Before you install

30 script files ship inside the skills. The agent can run them on your machine. Read them first. 2 of them make network calls.

3 documents show install commands that pipe a download into a shell (`curl ... | sh`). The agent may suggest them. Read the script before you run it.

The skills mention these environment variables for credentials: `API_TOKEN`, `AIRFLOW_PASSWORD`, `AIRFLOW_TOKEN`, `TEST_PASSWORD`, `ASTRO_TOKEN`, `POSTGRES_PASSWORD`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/astronomer/agents

## Logo

Logo copied from the vendor repository. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

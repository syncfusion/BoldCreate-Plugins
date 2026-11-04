# Azure SQL Developer

Skills that teach agents to work with Azure SQL Developer. They are copied from the vendor's repository, [microsoft/azure-sql-database-container](https://github.com/microsoft/azure-sql-database-container), at commit `c1e8167`.

Agent skills for the Azure SQL Database container, the Azure SQL Database engine running locally.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Azure SQL Developer**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Azure SQL Developer**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install azure-sql-developer@boldcreate-plugins`.

## Skills

17 skills: `azuresql-db-auth`, `azuresql-db-ci`, `azuresql-db-connections`, `azuresql-db-container`, `azuresql-db-dab`, `azuresql-db-faq`, `azuresql-db-feedback`, `azuresql-db-from-sql-server`, `azuresql-db-functions`, `azuresql-db-import`, `azuresql-db-local-to-cloud`, `azuresql-db-rag`, `azuresql-db-scaffold`, `azuresql-db-schema-migration`, `azuresql-db-seed`, `azuresql-db-sidecar`, `azuresql-db-testing`.

## Setup

No install-time settings.

## Before you install

1 script file ship inside the skills. The agent can run it on your machine. Read it first.

`azuresql-db-container/scripts/verify.sh` runs `docker run` for the Azure SQL container image and creates a test database. It needs Docker.

The skills mention these environment variables for credentials: `ACR_PASSWORD`, `SA_PASSWORD`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/microsoft/azure-sql-database-container

## Logo

Neutral tile with the product's initials.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

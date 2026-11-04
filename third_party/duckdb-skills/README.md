# DuckDB Skills

Skills that teach agents to work with DuckDB. They are copied from the vendor's repository, [duckdb/duckdb-skills](https://github.com/duckdb/duckdb-skills), at commit `7feda8e`.

Read data files, query DuckDB databases, and search DuckDB documentation.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **DuckDB Skills**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **DuckDB Skills**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install duckdb-skills@boldcreate-plugins`.

## Skills

- `attach-db`, `query`, `read-file`, `convert-file`, `spatial`, `s3-explore`: open and query data files and DuckDB databases.
- `duckdb-docs`: search DuckDB and DuckLake documentation.
- `install-duckdb`: install or update DuckDB and its extensions.
- `read-memories`: search your past Claude Code session logs.

## Setup

No install-time settings.

## Before you install

The skills run the `duckdb` command-line tool on your machine, and `install-duckdb` installs DuckDB extensions.

`read-memories` reads your past Claude Code session logs from `$HOME/.claude/projects` with DuckDB. It reads local files only, but those logs can hold anything you typed in earlier sessions. The skill is Claude Code specific, and it finds nothing in other clients.

`install-duckdb/eval.sh` is the vendor's own test script. It needs the `claude` command-line tool and is not meant for end users.

## Docs

- Vendor repository: https://github.com/duckdb/duckdb-skills

## Logo

DuckDB mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #FFF000, on a padded white tile. The mark is a trademark of its owner.

## License

MIT. The vendor's licence and copyright notice are in `LICENSE`.

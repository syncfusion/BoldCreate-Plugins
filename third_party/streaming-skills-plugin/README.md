# Confluent Streaming Skills

Skills that teach agents to work with Confluent Streaming Skills. They are copied from the vendor's repository, [confluentinc/agent-skills](https://github.com/confluentinc/agent-skills), at commit `204b36f`.

Skills for streaming application developers, covering Kafka and Flink client libraries and Schema Registry

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Confluent Streaming Skills**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Confluent Streaming Skills**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install streaming-skills-plugin@boldcreate-plugins`.

## Skills

11 skills: `confluent-cloud-cdc-tableflow`, `confluent-cloud-flink-sql`, `confluent-skill-creator`, `confluent-skill-reviewer`, `confluent-tuning-advisor`, `developing-kafka-java-client`, `developing-kafka-python-client`, `flink-udf`, `kafka-schema-registry`, `kafka-streams-programming`, `msk-migration`.

## Setup

No install-time settings.

## Before you install

33 script files ship inside the skills. The agent can run them on your machine. Read them first. 3 of them make network calls.

The skills mention these environment variables for credentials: `KAFKA_API_KEY`, `DB_PASSWORD`, `CC_API_KEY`, `CLUSTER_API_KEY`, `FLINK_API_KEY`, `TABLEFLOW_API_KEY`, `CONNECTOR_API_KEY`, `ANTHROPIC_API_KEY`. This plugin does not store them.

Some skill folders include evaluation fixtures with example credentials, such as `AKIAIOSFODNN7EXAMPLE`, to test the reviewer skill. They are placeholders, not real keys.

## Docs

- Vendor repository: https://github.com/confluentinc/agent-skills

## Logo

Neutral tile with the product's initials.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

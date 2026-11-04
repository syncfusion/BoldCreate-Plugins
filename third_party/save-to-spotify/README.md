# Save to Spotify

Skills that teach agents to work with Save to Spotify. They are copied from the vendor's repository, [spotify/save-to-spotify](https://github.com/spotify/save-to-spotify), at commit `9d05c8c`.

Create polished audio episodes with TTS narration, rich timelines, cover images, and save them to Spotify via the save-to-spotify CLI.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **Save to Spotify**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **Save to Spotify**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install save-to-spotify@boldcreate-plugins`.

## Skills

2 skills: `configure-chapter-skip`, `save-to-spotify`.

## Setup

No install-time settings.

## Before you install

It ships no scripts. The skills are guidance for the agent.

3 documents show install commands that pipe a download into a shell (`curl ... | sh`). The agent may suggest them. Read the script before you run it.

The skills mention these environment variables for credentials: `OPENAI_API_KEY`, `ELEVENLABS_API_KEY`, `GEMINI_API_KEY`. This plugin does not store them.

## Docs

- Vendor repository: https://github.com/spotify/save-to-spotify

## Logo

Spotify mark from [Simple Icons](https://simpleicons.org) (CC0) in brand colour #1ED760, on a padded white tile. The mark is a trademark of its owner.

## License

Apache License 2.0. This is the vendor's licence, not this repository's MIT licence. The vendor's licence text is in `LICENSE`. The skill files are unchanged from the vendor's.

# tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes

BoldCreate plugin that connects agents to tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes through the vendor's hosted [Model Context Protocol](https://modelcontextprotocol.io/) server over streamable HTTP.

Meeting transcripts, notes & action items in Claude.

## Install

- **BoldCreate Connect:** open **Marketplace**, find **tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes**, and click **Install**.
- **Cursor:** add this repository as a team marketplace, then install **tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes**.
- **Claude Code:** `/plugin marketplace add syncfusion/BoldCreate-Plugins`, then `/plugin install tldv@boldcreate-plugins`.

## MCP

```json
{
  "mcpServers": {
    "tldv": {
      "type": "http",
      "url": "https://mcp.tldv.io/mcp"
    }
  }
}
```

## Setup

No settings.

The first time the agent calls a tool, each member signs in to tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes in the browser (OAuth). Tool calls run with that member's permissions.

The endpoint comes from the Claude connector directory. An anonymous request returned a 401 with OAuth metadata, so the server is reachable and asks for sign-in. No tool call has been made.

## Docs

- tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes: https://tldv.io/

## Logo

Icon downloaded from the Claude connector directory listing for tl;dv - AI Note Taker & Meeting Recorder: Transcripts, Summaries & Meeting Minutes. It is the vendor's own icon and a trademark of its owner. It is not covered by the MIT licence.}

## License

MIT

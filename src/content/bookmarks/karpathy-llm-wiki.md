---
type: YouTube
title: "Karpathy's LLM Wiki Goes Further Than Everyone Realised"
source: "Adam Goodyer"
href: "https://www.youtube.com/watch?v=ijBJVzxSBRA"
date: 2026-04-27
---

## Summary

Adam Goodyer takes Karpathy's LLM Wiki — a structure for organising
Claude plugins that blew up on GitHub — and shows how to apply the same
three-layer pattern in a real business. Not as a personal knowledge base,
but as the operating system of an AI-first agency.

The pattern: raw inputs (meeting transcripts, emails, calls) get ingested
into a `raw` layer; an LLM compiles them into a structured Wiki layer
(JSON / YAML); a top-level schema tells the agent where to find what.
The point is controlled context — when the knowledge base scales to
hundreds of clients, the agent isn't grepping the whole repo. It knows
exactly which folder to read for which task.

He walks through two production examples from APG Software: a client
audit that used to take 200 hours now ships in 20–40 (an 80% drop), and
a video-editor pipeline that handles ingestion, transcription, storyboard
generation, and Remotion rendering automatically. The argument against
RAG: for structured business data, semantic search is overkill. A
deterministic markdown/JSON tree with a clear schema is lighter, more
predictable, and easier to maintain.

For GTM teams: this is one of the cleanest concrete templates for what
"AI-native operations" actually looks like below the marketing layer.

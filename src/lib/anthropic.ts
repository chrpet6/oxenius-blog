import fs from 'node:fs';
import path from 'node:path';

const API_URL = 'https://api.anthropic.com/v1/messages';
const CACHE_PATH = path.resolve('./src/data/supadata-cache.json');

function getApiKey(): string | null {
  return import.meta.env.ANTHROPIC_API_KEY ?? null;
}

interface Cache {
  metadata: Record<string, unknown>;
  transcripts: Record<string, string>;
  summaries?: Record<string, string>;
}

let cache: Cache | null = null;

function getCache(): Cache {
  if (cache) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8')) as Cache;
  } catch {
    cache = { metadata: {}, transcripts: {} };
  }
  if (!cache.summaries) cache.summaries = {};
  return cache;
}

function saveCache() {
  if (!cache) return;
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

export interface SummarizeInput {
  href: string;
  title: string;
  source: string;
  type: string;
  transcript: string;
}

const SYSTEM_PROMPT = `You are formatting bookmark pages for an editorial blog about B2B go-to-market in an AI-first world. The audience is founders, GTM leaders, marketers, sales leaders, and investors.

Output a single Markdown document with two top-level sections:

## Episode Summary

- 3–5 short paragraphs of clear, declarative prose.
- The first paragraph names the speakers/host using **bold** for proper nouns (people, companies, products) and states what the piece is.
- Following paragraphs explain the main themes, key arguments, and what's worth taking away. Use **bold** to highlight the central claim or one or two sharp phrases.
- End the section with a bullet list titled "Key ideas from the episode:" with 6–10 concise bullets capturing the strongest insights.

---

## Speaker-Labeled Transcript

- Break the transcript into thematic sections with \`### Section title\` headers (e.g. "### Introduction", "### How AI Changes the PM Role", "### Lightning Round").
- Each turn in dialogue starts on its own paragraph with the speaker's name in bold followed by a colon and a newline, then their text. Example:

  **Cat Wu:**
  Their statement here.

- If a speaker says something long, split it into multiple short paragraphs for readability.
- Use \`---\` between major sections.
- Preserve actual quotes from the transcript. Do not invent content. Do not paraphrase if you can quote directly.
- If the transcript is from a single speaker (e.g. a YouTube video without dialogue), label them as the author/host and skip the speaker labels for individual paragraphs — just use section headers and clean prose.

Style notes:
- Editorial tone — confident, specific, no marketing fluff.
- Don't add a top-level # heading (the page already has the title).
- Don't write meta commentary like "this transcript covers".
- Don't add closing remarks or "in conclusion".

Output: just the markdown document. No preamble.`;

export async function summarizeTranscript(
  input: SummarizeInput,
): Promise<string | null> {
  const c = getCache();
  if (c.summaries![input.href]) return c.summaries![input.href];

  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn('ANTHROPIC_API_KEY not set — skipping summary generation.');
    return null;
  }

  const userPrompt = `Format this ${input.type.toLowerCase()} into a bookmark page.

Title: "${input.title}"
Source: ${input.source}

Transcript:
${input.transcript.slice(0, 80000)}`;

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 16000,
        system: [
          {
            type: 'text',
            text: SYSTEM_PROMPT,
            cache_control: { type: 'ephemeral' },
          },
        ],
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => '');
      console.warn(`Anthropic summary failed for ${input.href}: ${res.status} ${errorText}`);
      return null;
    }

    const data = (await res.json()) as {
      content?: Array<{ type: string; text?: string }>;
    };
    const text = data.content?.find((c) => c.type === 'text')?.text;
    if (!text) return null;

    c.summaries![input.href] = text.trim();
    saveCache();
    return text.trim();
  } catch (e) {
    console.warn(`Anthropic summary error for ${input.href}:`, e);
    return null;
  }
}

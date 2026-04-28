import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://api.supadata.ai/v1';
const CACHE_PATH = path.resolve('./src/data/supadata-cache.json');

function getApiKey(): string | null {
  return import.meta.env.SUPADATA_API_KEY ?? null;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  attempts = 3,
): Promise<Response> {
  let res = await fetch(url, options);
  let attempt = 1;
  while (res.status === 429 && attempt < attempts) {
    const backoff = 2000 * attempt;
    await sleep(backoff);
    res = await fetch(url, options);
    attempt += 1;
  }
  return res;
}

export interface SupadataMetadata {
  platform?: string;
  type?: string;
  id?: string;
  url?: string;
  title?: string | null;
  description?: string | null;
  author?: {
    username?: string;
    displayName?: string;
    avatarUrl?: string;
    verified?: boolean;
  };
  stats?: {
    views?: number | null;
    likes?: number | null;
    comments?: number | null;
    shares?: number | null;
  };
  media?: {
    type?: string;
    duration?: number;
    thumbnailUrl?: string;
    url?: string;
  };
  tags?: string[];
  createdAt?: string;
}

interface Cache {
  metadata: Record<string, SupadataMetadata>;
  transcripts: Record<string, string>;
}

let cache: Cache | null = null;

function getCache(): Cache {
  if (cache) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8')) as Cache;
  } catch {
    cache = { metadata: {}, transcripts: {} };
  }
  return cache;
}

function saveCache() {
  if (!cache) return;
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

export async function fetchTranscript(href: string): Promise<string | null> {
  const c = getCache();
  if (href in c.transcripts) return c.transcripts[href];

  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn('SUPADATA_API_KEY not set — skipping transcript fetch.');
    return null;
  }
  try {
    const endpoint = `${BASE_URL}/transcript?url=${encodeURIComponent(href)}&text=true`;
    const res = await fetchWithRetry(endpoint, { headers: { 'x-api-key': apiKey } });
    if (!res.ok) {
      console.warn(`Supadata transcript fetch failed for ${href}: ${res.status}`);
      return null;
    }
    const data = await res.json();
    let result: string | null = null;
    if (typeof data.content === 'string') {
      result = data.content;
    } else if (Array.isArray(data.content)) {
      result = data.content.map((c: { text?: string }) => c.text ?? '').join(' ');
    }
    if (result) {
      c.transcripts[href] = result;
      saveCache();
    }
    return result;
  } catch (e) {
    console.warn(`Supadata transcript error for ${href}:`, e);
    return null;
  }
}

export async function fetchMetadata(href: string): Promise<SupadataMetadata | null> {
  const c = getCache();
  if (href in c.metadata) return c.metadata[href];

  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn('SUPADATA_API_KEY not set — skipping metadata fetch.');
    return null;
  }
  try {
    const endpoint = `${BASE_URL}/metadata?url=${encodeURIComponent(href)}`;
    const res = await fetchWithRetry(endpoint, { headers: { 'x-api-key': apiKey } });
    if (!res.ok) {
      console.warn(`Supadata metadata fetch failed for ${href}: ${res.status}`);
      return null;
    }
    const data = (await res.json()) as SupadataMetadata;
    c.metadata[href] = data;
    saveCache();
    return data;
  } catch (e) {
    console.warn(`Supadata metadata error for ${href}:`, e);
    return null;
  }
}

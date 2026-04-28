import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';

export async function getStaticPaths() {
  const bookmarks = await getCollection('bookmarks', ({ data }) => !data.draft);
  return bookmarks.map((bookmark) => ({
    params: { slug: bookmark.id },
    props: { bookmark },
  }));
}

export async function GET({ props }: { props: { bookmark: { id: string } } }) {
  const { bookmark } = props;
  const filePath = path.resolve(`./src/content/bookmarks/${bookmark.id}.md`);

  let raw: string;
  try {
    raw = fs.readFileSync(filePath, 'utf-8');
  } catch {
    return new Response('Not found', { status: 404 });
  }

  return new Response(raw, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

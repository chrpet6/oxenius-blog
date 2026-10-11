import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bookmarks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bookmarks' }),
  schema: z.object({
    type: z.enum(['Podcast', 'YouTube', 'Book', 'Newsletter', 'Essay', 'Research']),
    title: z.string(),
    creator: z.string(),
    description: z.string(),
    href: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { bookmarks };

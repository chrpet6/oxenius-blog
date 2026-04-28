import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    readTime: z.string().optional(),
    category: z.string().optional().default('Essay'),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const bookmarks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bookmarks' }),
  schema: z.object({
    type: z.enum(['Podcast', 'YouTube', 'LinkedIn', 'X']),
    title: z.string(),
    source: z.string(),
    href: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { essays, bookmarks };

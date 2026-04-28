import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oxenius.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://alassa50.github.io',
  base: '/Problem-solving-',
  integrations: [mdx()],
});

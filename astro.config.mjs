import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://www.jenovasvitner.no',
  integrations: [sitemap(), react(), tailwind({
    applyBaseStyles: false,
  })],
  image: {
    domains: ["i.scdn.co"],
  }
});
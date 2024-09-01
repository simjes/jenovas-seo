import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://www.jenovasvitner.no',
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  })],
  image: {
    domains: ["i.scdn.co"],
  }
});
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://www.jenovasvitner.no",
  integrations: [sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["i.scdn.co"],
  },
});

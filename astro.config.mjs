import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://blog.itsjo.dev",
  integrations: [sitemap(), icon()],
  markdown: {
    shikiConfig: {
      theme: "tokyo-night",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

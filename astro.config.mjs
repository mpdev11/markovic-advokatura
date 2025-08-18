// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: "https://mpdev11.github.io", // optional, good for sitemaps, RSS, etc.
  base: "/markovic-advokatura/",
  trailingSlash: "always",
});

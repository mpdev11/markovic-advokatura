import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://mpdev11.github.io",
  base: "/markovic-advokatura/",
});

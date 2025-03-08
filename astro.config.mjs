import "./src/polyfills.js";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import config from "./src/config/config.json";
//import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";

import partytown from "@astrojs/partytown";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url
    ? config.site.base_url
    : "https://www.codetidehub.com",
  base: config.site.base_path ? config.site.base_path : "/",
  output: "server",

  adapter: cloudflare(),

  server: { host: true },
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    partytown(),
    icon(),
  ],
  markdown: {
    remarkPlugins: [],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});

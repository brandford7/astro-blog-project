import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import config from "./src/config/config.json";

// Vite plugin to inject MessageChannel polyfill
function injectMessageChannelPolyfill() {
  return {
    name: "inject-messagechannel-polyfill",
    enforce: "pre",
    transform(code, id) {
      // Adjust the condition based on your bundle’s naming.
      // Often, the SSR worker bundle will include "worker" or "entry"
      if (id.includes("entry") || id.includes("worker")) {
        const polyfill = `
          // Polyfill for MessageChannel
          globalThis.MessageChannel = class {
            constructor() {
              this.port1 = {};
              this.port2 = {};
            }
          };
        `;
        return { code: polyfill + "\n" + code, map: null };
      }
      return null;
    },
  };
}

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
    tailwind({ config: { applyBaseStyles: false } }),
    mdx(),
    partytown(),
    icon(),
  ],
  markdown: {
    remarkPlugins: [],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [injectMessageChannelPolyfill()],
  },
});

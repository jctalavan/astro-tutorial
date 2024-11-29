import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tourmaline-truffle-8a44ed.netlify.app/",
  integrations: [preact()]
});
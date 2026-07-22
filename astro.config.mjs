// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: actualizar cuando exista la URL definitiva de Vercel o el dominio propio.
  site: 'https://giovanardi-barili-astro.vercel.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
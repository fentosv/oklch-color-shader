import { SITE } from './src/config.ts'
import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [svelte()],
  server: {
    open: true,
  },
})

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://trautweilerFranco.github.io',
  base: '/cvtecnico',
  integrations: [tailwind()],
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Reemplaza 'usuario' por tu nombre en GitHub y 'cvtecnico' por el nombre de tu repo
  site: 'https://trautweilerFranco.github.io',
  base: '/cvtecnico', 
  integrations: [tailwind()],
});
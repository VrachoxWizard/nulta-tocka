// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresa s Vercela. Kad kupite domenu, promijenite `site` u npr. https://nultatocka.hr
export default defineConfig({
  site: 'https://nulta-tocka.vercel.app',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';
import auth from "auth-astro";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [tailwind(), react(), icon({}), auth()],
  output: 'server',
  adapter: vercel()
});
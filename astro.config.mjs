import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [tailwind(), react(), icon()],
  output: 'hybrid',
  adapter: vercel(),
});

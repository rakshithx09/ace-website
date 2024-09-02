import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [tailwind(), react(), icon()],
  output: "server",
<<<<<<< HEAD
=======

>>>>>>> 96ddfe78f110e149fe1a91323ccf80de00d862cb
});

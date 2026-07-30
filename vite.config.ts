import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import ui from "@nuxt/ui/vite";

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ui({
      router: false,
      colorMode: false,
      prose: true,
      autoImport: {
        imports: ["vue", "@vueuse/core"],
      },
      ui: {
        colors: {
          primary: "primary",
          neutral: "zinc",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

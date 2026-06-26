import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/tm-flores-v2/[name]-[hash].js",
          chunkFileNames: "assets/tm-flores-v2/[name]-[hash].js",
          assetFileNames: "assets/tm-flores-v2/[name]-[hash][extname]",
        },
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    modulePreload: false,
    outDir: "dist",
    rollupOptions: {
      input: {
        "assets/main": resolve(__dirname, "index.html"),
        background: resolve(__dirname, "src/background.ts"),
        "scripts/popup/popup": resolve(__dirname, "src/scripts/popup/popup.ts"),
      },
      output: [
        {
          entryFileNames: "[name].js",
          format: "esm",
        },
      ],
    },
    target: "esnext",
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          dest: ".",
          src: "src/manifest.json",
        },
        {
          dest: ".",
          src: "src/static",
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "./src") },
      {
        find: "@presentation",
        replacement: resolve(__dirname, "./src/presentation"),
      },
      {
        find: "@pages",
        replacement: resolve(__dirname, "./src/presentation/pages"),
      },
      {
        find: "@shared",
        replacement: resolve(__dirname, "./src/presentation/shared"),
      },
      {
        find: "@redux",
        replacement: resolve(__dirname, "./src/application/redux"),
      },
    ],
  },
});

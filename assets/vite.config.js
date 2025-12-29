import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "assets/ballpit",
    emptyOutDir: true,
    lib: {
      entry: "src/ballpit-entry.jsx",
      name: "BallpitBG",
      formats: ["iife"],
      fileName: () => "ballpit-bg.js"
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  publicDir: "/public",
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));

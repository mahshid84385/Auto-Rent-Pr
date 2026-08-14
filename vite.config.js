import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

export default defineConfig({
  plugins: [tailwindcss()],

  base: "/Auto-Rent-Pr/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        page1: resolve(__dirname, "page1.html"),
        page2: resolve(__dirname, "page2.html"),
      },
    },
  },
});

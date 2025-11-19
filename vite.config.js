import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/aryikajain.github.io/", // 👈 YOUR GITHUB REPO NAME
});

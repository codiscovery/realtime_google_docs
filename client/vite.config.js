import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  proxy: "http://localhost:3001",
  plugins: [react()],
});

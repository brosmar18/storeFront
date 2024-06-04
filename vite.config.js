import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["chunk-SIW72FAG", "chunk-HQTDEA7G"],
  },
});

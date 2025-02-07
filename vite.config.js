import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 5173, // Change if needed
    strictPort: true,
    hmr: {
      clientPort: 5173, // Ensure WebSocket runs properly
    },
  },
  plugins: [tailwindcss(), react()],
});

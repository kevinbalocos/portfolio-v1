import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const base = process.env.VITE_BASE || "/";

export default defineConfig({
  base,
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      // proxy /api/* to your local backend
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

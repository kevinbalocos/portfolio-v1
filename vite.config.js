import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio-v1/',
  plugins: [tailwindcss(), react()],
    server: {
    proxy: {
      // proxy /api/* to your local backend
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: './postcss.config.mjs', // Ensure PostCSS works with ES Module
  },
  optimizeDeps: {
    include: ["@splinetool/react-spline"],
  },
  plugins: [react()],
})

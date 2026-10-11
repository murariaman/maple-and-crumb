import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// base './' keeps asset paths relative, so the built site works on
// GitHub Pages (https://<user>.github.io/<repo>/) without extra settings.
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
})

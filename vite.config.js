import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the built site works on
// GitHub Pages (https://<user>.github.io/<repo>/) without extra settings.
export default defineConfig({
  plugins: [react()],
  base: './',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fixed dev port so this can run alongside the other legacy apps (3101-3108).
export default defineConfig({
  plugins: [react()],
  server: { port: 3109, strictPort: true },
  preview: { port: 3109, strictPort: true },
})

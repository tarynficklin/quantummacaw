import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // PORT from .env (or the shell) moves the dev server and the preview. The default is a fixed
  // port so this can run alongside the other legacy apps.
  const port = Number(loadEnv(mode, import.meta.dirname, 'PORT').PORT) || 3109

  return {
    plugins: [react()],
    server: { port, strictPort: true },
    preview: { port, strictPort: true },
  }
})

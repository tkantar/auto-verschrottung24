import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.names?.includes('auto-verschrottung-hero.jpg')
            ? 'auto-verschrottung-hero.jpg'
            : 'assets/[name]-[hash][extname]',
      },
    },
  },
})

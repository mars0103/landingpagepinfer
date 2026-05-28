import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three')) return 'vendor-three'
          if (id.includes('lenis')) return 'vendor-lenis'
          if (id.includes('react-dom') || id.includes('react/')) return 'vendor-react'
        },
      },
    },
  },
})

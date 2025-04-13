import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react-icons/io5']
  },
  
  plugins: [react()],
  server: {
    proxy: {
      '/events': 'https://campusline-up-backend.onrender.com',
      '/api': 'https://campusline-up-backend.onrender.com',
    }
    // proxy: {
    //   '/events': 'http://localhost:4000',
    //   '/api': 'http://localhost:4000',
    // }
  }
  
})


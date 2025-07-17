import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Enables local network access (0.0.0.0)
    port: 5173, // You can change the port if needed
    open: false, // Set to true if you want it to auto-open in the browser
  },
})

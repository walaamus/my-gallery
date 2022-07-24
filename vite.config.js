import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://walaamus.github.io/my-gallery',
  plugins: [react()]
})

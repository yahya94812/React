import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your GitHub repo name for GitHub Pages deployment
  // Replace 'react-real-routing' with your actual repo name
  base: '/react-real-routing/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the main config file for Vite.
// It just tells Vite "we are using React" so it knows how to handle .jsx files.
export default defineConfig({
  plugins: [react()]
  
})

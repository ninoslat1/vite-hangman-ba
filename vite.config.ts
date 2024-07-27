import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//Using dotenv package for easy setup env files
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    watch: {
      usePolling: true,
    }
   },
  /**Create alternative import for assets file */ 
  /**Defining base URL for GitHub Pages Production */
  base: "./",
  /**Defining the env process for dotenv */
})

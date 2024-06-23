import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

//Using dotenv package for easy setup env files
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  /**Create alternative import for assets file */ 
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    }
  },
  /**Defining base URL for GitHub Pages Production */
  base: "/vite-hangman-ba/",
  /**Defining the env process for dotenv */
  define: {
    'process.env': process.env
  }
})

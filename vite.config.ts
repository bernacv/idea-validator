import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // Update this to match your GitHub repository name
  // Example: if your repo is "username.github.io", use "/"
  // Example: if your repo is "my-app", use "/my-app/"
  base: '/idea-validator/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
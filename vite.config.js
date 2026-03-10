import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/landing-page/', // MUST match your GitHub repo path
  plugins: [vue()],
})
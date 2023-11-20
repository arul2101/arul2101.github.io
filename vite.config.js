import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
  build: {
    outDir: path.resolve(__dirname, 'dist')
  }
})
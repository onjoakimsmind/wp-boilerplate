
import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload'
const { resolve } = require('path')
const fs = require('fs')


// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    liveReload(__dirname+'/**/*.php')
  ],
  root: '',
  base: process.env.NODE_ENV === 'development'
    ? '/'
    : '/dist/',
  build: {
    outDir: resolve(__dirname, './dist'),
    emptyOutDir: true,
    manifest: true,
    target: 'es2018',
    rollupOptions: {
      input: {
        main: resolve( __dirname + '/main.js')
      },
    },
    minify: true,
    write: true
  },

  server: {
    cors: true,
    strictPort: true,
    port: 3000,
    https: false,
    hmr: {
      host: 'localhost',
    },
  },
  resolve: {
    alias: {}
  }
})


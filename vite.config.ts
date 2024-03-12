import { defineConfig } from 'vite'
import simpleHtmlPlugin from 'vite-plugin-simple-html'
import solid from 'vite-plugin-solid'
import { webfontDownload } from 'vite-plugin-webfont-dl'

export default defineConfig({
  base: '/homepage-for-the-odin-project/',
  plugins: [solid(), simpleHtmlPlugin({ minify: true }), webfontDownload()]
})

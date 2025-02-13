import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://geek-startup.vercel.app',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 1024
    }
  },
  image: {
    experimentalLayout: 'responsive'
  },
  experimental: {
    responsiveImages: true
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport' // 改为视口触发预加载
  }
})

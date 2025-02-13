import { readFileSync } from 'fs'
import { join } from 'path'
import type { Config } from 'tailwindcss'

// 读取 theme.json 文件
const themeData = JSON.parse(readFileSync(join(__dirname, 'src/data/theme/index.json'), 'utf-8'))

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: ['fixed', 'top-0', 'left-0', 'z-50', 'bg-white', 'dark:bg-gray-900', 'animate-slideDown'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px' // 设置最大宽度为 1440px
      }
    },
    extend: {
      fontFamily: {
        sans: themeData.fonts.sans,
        serif: themeData.fonts.serif
      },
      spacing: {
        '6xl': themeData.spacing['6xl']
      },
      letterSpacing: {
        tight: themeData.letterSpacing.tight || '-0.04em'
      },
      colors: {
        primary: themeData.colors.primary || '#333',
        secondary: themeData.colors.secondary || '#999',
        backdround: themeData.colors.background || '#f7f7f7',
        text: themeData.colors.text || '#171717'
      }
    }
  },
  plugins: []
} satisfies Config

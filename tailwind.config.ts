import type { Config } from 'tailwindcss'

// 读取 theme.json 文件
const themeData = require('./src/data/theme/index.json')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
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

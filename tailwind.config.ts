import { readFileSync } from 'fs'
import { join } from 'path'

// 读取 theme.json 文件
const themeData = JSON.parse(readFileSync(join(__dirname, 'src/data/theme/theme.json'), 'utf-8'))

export default {
  theme: {
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
}

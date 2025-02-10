import theme from '../data/theme/theme.json';

export function generateCSSVariables() {
  const cssVars = [];
  
  // 处理颜色
  for (const [key, value] of Object.entries(theme.colors)) {
    cssVars.push(`--color-${key}: ${value};`);
  }
  
  // 处理间距
  for (const [key, value] of Object.entries(theme.spacing)) {
    cssVars.push(`--spacing-${key}: ${value};`);
  }
  
  // 处理排版
  cssVars.push(`--font-family: ${theme.typography.fontFamily};`);
  cssVars.push(`--font-size-base: ${theme.typography.fontSize};`);
  cssVars.push(`--line-height: ${theme.typography.lineHeight};`);
  
  return `:root {\n  ${cssVars.join('\n  ')}\n}`;
}

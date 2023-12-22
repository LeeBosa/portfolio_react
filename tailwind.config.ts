import type { Config } from 'tailwindcss'

const nexume = require('./nexume.config')

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        h: {
          transparent: 'transparent',
          main: nexume.themeColor,
        },
        l: {
          100: '#FFFFFF',
          200: '#FAFAFA',
          300: '#E0E0E0',
          400: '#ABABAB',
          500: '#848484',
          600: '#5C5C5C',
          700: '#222222'
        },
        d: {
          100: '#FFFFFF',
          200: '#DADADA',
          300: '#B3B3B3',
          400: '#666666',
          500: '#363636',
          600: '#242424'
        }
      },
    },
  },
  plugins: [],
  safelist: [
      { pattern: /(px|py|pt|pb|mt|mb|ml|mr)-(0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|)/ },
      { pattern: /(text)-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/ },
      { pattern: /(font)-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/ },
      { pattern: /(rounded)-(none|sm|md|lg|full)/ },
  ]
}
export default config

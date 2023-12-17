import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        m: {
          transparent: 'transparent',
          green: '#00DC82',
        },
        l: {
          100: '#FFFFFF',
          200: '#EFE5E5',
          300: '#DED4D4',
          400: '#B9B0B0',
          500: '#999090',
          600: '#716868',
          700: '#5D5555',
          800: '#3E3636',
          900: '#1D1717',
        }
      },
    },
  },
  plugins: [],
}
export default config

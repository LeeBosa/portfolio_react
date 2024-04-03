import nexumeConfig from "./nexume.config"

const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        h: {
          main: nexumeConfig.themeColor,
        },
        l: {
          'e': '#E0E0E0',
          'c': '#CCCCCC',
          'a': '#ABABAB',
          '8': '#848484',
          '5': '#5C5C5C',
          '2': '#222222'
        }
      }
    }
  },
  plugins: []
}

export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#2D284C',
        'pale-yellow': '#FFCC67',
        'turquoise': '#3FB3CF',
        'light-blue': '#B3F0FF',
      },
      backgroundImage: {
        'mountain-stars': "url('/assets/mountain-stars.svg')",
        'tiles': "url('/assets/tiles.svg')",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '24': '24px',
        '32': '32px',
      }
    },
  },
  plugins: [],
}

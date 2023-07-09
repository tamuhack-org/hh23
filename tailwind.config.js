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
        'paler-yellow': '#FAD17F',
        'turquoise': '#3FB3CF',
        'lighter-blue': '#B3F0FF',
        'light-blue': '#61E0FF',
        'schedule-blue': '#29C6FF',
        'pale-pink': '#FF4F80',
      },
      backgroundImage: {
        'mountain-stars-small': "url('/assets/mountain-stars-small.svg')",
        'mountain-stars': "url('/assets/mountain-stars.svg')",
        'tiles': "url('/assets/tiles.svg')",
        'waves': "url('/assets/waves.svg')",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
      }
    },
  },
  plugins: [],
}

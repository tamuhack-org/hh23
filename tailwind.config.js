/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        'dark-purple': '#2D284C',
        'pale-yellow': '#FFCC67',
        'turquoise': '#3FB3CF',
        'light-blue': '#B3F0FF',
      },
      backgroundImage: {
        'mountain-stars': "url('/assets/mountain-stars.svg')",
        'tiles': "url('/assets/tiles.svg')",
        'menu': "url('/assets/menu.svg')",
=======
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
>>>>>>> parent of 7f2fc4c (navbar, mountain + stars background)
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

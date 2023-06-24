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
        'dark-purple': "#2D284C",
        'pale-yellow': "#FFCC67",
      },
      backgroundImage: {
        'mountain-stars': "url('/assets/mountain-stars.svg')" 
      },
    },
  },
  plugins: [],
}

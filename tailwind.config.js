/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

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
        'resources-pink': '#FF5081',
        'prizes-gray': '#302C27',
        'prizes-light-gray': '#797067',
        'mint-green': '#92CEAB',
      },
      backgroundImage: {
        'mountain-stars-small': "url('/assets/mountain-stars-small.svg')",
        'mountain-stars': "url('/assets/mountain-stars.svg')",
        'tiles': "url('/assets/tiles.svg')",
        'waves': "url('/assets/waves.svg')",
        'receipt': "url('/assets/receipt.png')",
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
      },
      boxShadow: {
        'pale-yellow-glow': '0 0 1em rgba(255,204,103,0.5);',
      },
      dropShadow: {
        'pale-yellow-glow': '0 0 1em rgba(255,204,103,0.5);',
      },
      textShadow: {
        'pale-yellow-glow': '0 0 1em rgb(255,204,103,0.5);',
        'sm-pale-yellow-glow': '0 0 0.5em rgb(255,204,103,0.5);',
      },
      transitionProperty: {
        'text-shadow': 'text-shadow',
      },
      animation: {
        'blink': 'blink 12s infinite',
      },
      keyframes: {
        blink: {
          '20%, 24%, 55%': { color: 'transparent', 'text-shadow': 'none' },
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { color: '#FFCC67', 'text-shadow': '0 0 0.5em rgb(255,204,103,0.75);' },
        }
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

// 20%,
//   24%,
//   55% {
//     color: #111;
//     text-shadow: none;
//   }

//   0%,
//   19%,
//   21%,
//   23%,
//   25%,
//   54%,
//   56%,
//   100% {
// /*     color: #fccaff;
//     text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
//       0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
//   text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
//     color: #fff6a9;
//   }

/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export const darkMode = "class";
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      "dark-purple": "#2D284C",
      "pale-yellow": "#FFCC67",
      "paler-yellow": "#FAD17F",
      "light-theme-yellow": "#FEEBA6",
      turquoise: "#3FB3CF",
      "lighter-blue": "#B3F0FF",
      "light-blue": "#61E0FF",
      "schedule-blue": "#29C6FF",
      "pale-pink": "#FF4F80",
      "resources-pink": "#FF5081",
      "light-theme-pink": "#FF3977",
      "prizes-gray": "#302C27",
      "prizes-light-gray": "#797067",
      "mint-green": "#92CEAB",
    },
    backgroundImage: {
      "mountain-stars-small": "url('/assets/mountain-stars-small.svg')",
      "mountain-stars": "url('/assets/mountain-stars.svg')",
      "light-mountain-stars": "url('/assets/light-mountain-stars.svg')",
      tiles: "url('/assets/tiles.svg')",
      waves: "url('/assets/waves.svg')",
      receipt: "url('/assets/receipt.png')",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      16: "16px",
      24: "24px",
      32: "32px",
    },
    boxShadow: {
      "pale-yellow-glow": "0 0 1em rgba(255,204,103,0.5);",
      "light-theme-pink-glow": "0 0 1em rgba(255,57,119,0.5);",
      "resources-pink-glow": "0 0 1em rgba(255,80,129,0.5);",
      "mint-green-glow": "0 0 1.5em rgba(146,206,171,0.5);",
      "prizes-pink-glow": "0 0 1.5em rgb(246,73,116,0.5);",
    },
    dropShadow: {
      "pale-yellow-glow": "0 0 10em rgba(255,204,103,1);",
    },
    textShadow: {
      "pale-yellow-glow": "0 0 1em rgb(255,204,103,0.5);",
      "light-theme-pink-glow": "0 0 1em rgb(255,57,119,0.5);",
      "white-glow": "0 0 1em rgb(255,255,255,0.5);",
      "prizes-light-gray-glow": "0 0 1em rgb(121,112,103,0.5);",
      "sm-pale-yellow-glow": "0 0 0.5em rgb(255,204,103,0.5);",
    },
    transitionProperty: {
      "text-shadow": "text-shadow",
      display: "display",
    },
    animation: {
      "blink-yellow": "blink-yellow 12s infinite",
      "blink-pink": "blink-pink 12s infinite",
    },
    keyframes: {
      "blink-yellow": {
        "20%, 24%, 55%": { color: "transparent", "text-shadow": "none" },
        "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
          color: "#FFCC67",
          "text-shadow": "0 0 0.5em rgb(255,204,103,0.75);",
        },
      },
      "blink-pink": {
        "20%, 24%, 55%": { color: "transparent", "text-shadow": "none" },
        "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": {
          color: "#FF3977",
          "text-shadow": "0 0 0.5em rgb(255,57,119,0.75);",
        },
      },
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "text-shadow": (value) => ({
          textShadow: value,
        }),
      },
      { values: theme("textShadow") },
    );
  }),
];

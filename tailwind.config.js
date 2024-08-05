// const { transform } = require('next/dist/build/swc');
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#00f'
      },
      keyframes:{
        moveRight:{
          "0%":{transform: "translateX(0)"},
          "50%":{ transform: "translateX(15px)"},
          "100%":{ transform: "translateX(0px)"},
        }
      },
      animation:{
        moveRight: "moveRight 1s ease-in-out infinite"
      },
    },
  },
  plugins: [],
});

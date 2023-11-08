/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "data/**/*.yml",
    "./node_modules/flowbite/**/*.js",
    "node_modules/wow.js/dist/wow.js",
    "node_modules/wow.js/dist/css/libs/animate.css",
    ,
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,js}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green-900": "#365314",
        "primary-green-800": "#3f6212",
        "primary-green-700": "#4d7c0f",
        "primary-green-600": "#65a30d",
        "primary-green-500": "#84cc16",
        "primary-green-400": "#a3e635",
        "primary-green-300": "#bef264",
        "primary-green-200": "#d9f99d",
        "primary-green-100": "#ecfccb",
        "primary-green-50": "#f7fee7",
        "secondary-gold-600": "#db9f06",
        "secondary-gold-500": "#f4b006",
        "secondary-gold-400": "#fac234",
        "secondary-gold-300": "#fbd167",
        "secondary-gold-200": "#fce09a",
        "secondary-gold-100": "#fef0cc",
        "secondary-gold-50": "#fffaf0",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};

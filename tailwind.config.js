/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green-900": "#006400",
        "secondary-goldenrod-900": "#DAA520",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};

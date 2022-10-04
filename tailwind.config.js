// https://stackoverflow.com/questions/68020712/tailwind-css-classes-not-showing-in-storybook-build/71877841#71877841

/** @type {import('tailwindcss').Config} */
// const { base } = require('@benjaminsinger/sds-tailwind-config');

module.exports = {
  // safelist: [ // includes /all/ out-of-the-box tailwind styles
  //   {
  //     pattern: /^(.*?)/,
  //   },
  // ],
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // presets: [base] // if you'd like to use one of our presets - add it here N.B. preset will replace tailwind's default styling wholesale
}

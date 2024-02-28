/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {},
    backgroundImage: {
      banner: `url("./assets/3.jpg")`,
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },

  fontFamily: {
    primary: "DM Serif Display",
  },
};

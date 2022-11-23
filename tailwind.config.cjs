/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, css, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
      colors: {
        "custom-black": "#242424",
        "custom-black-2": "#2F2F2F",
        "custom-purple": "#646CFF",
        "custom-gray": "#EBEBEB99",
        "custom-white": "#FFFFFFDE",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      purple: "#883AE1",
      pink: "#E6D6FC",
      white: {
        DEFAULT: "#FFFFFF",
        egg: "#FAFAF9",
      },
      gray: {
        light: "#E5EAF0",
        medium: "#6C727F",
        dark: "#20293A",
      },
    },
    extend: {
      fontFamily: {
        sora: ['"Sora"', "cursive"],
      },
      divideWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};

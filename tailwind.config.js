/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#D49C55",
        secondary: "#3E392C",
      },
    },
  },
  plugins: [],
};

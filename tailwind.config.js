/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "23rem": "23rem",
        "20rem": "20rem",
      },
    },
    fontFamily: {
      gugi: ["Gugi, cursive"],
      itim: ["Itim, cursive"],
    },
  },
  plugins: [],
};

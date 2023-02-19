/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "23rem": "23rem",
        "20rem": "20rem",
      },
      inset: {
        blobL: "42.48%",
        blobR: "-0.46%",
        blobT: "36.54%",
        blobB: "15.77%",
      },
    },
    fontFamily: {
      gugi: ["Gugi, cursive"],
      itim: ["Itim, cursive"],
    },
    colors: {
      black: "#000000",
      "dark-navy-blue": "#06283d",
      "light-navy-blue": "#256d85",
      blue: "#47b5ff",
      "light-blue": "#dff6ff",
    },
  },
  plugins: [],
};

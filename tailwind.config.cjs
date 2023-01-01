/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlack: "#1A1A1A",
        myWhite: "#EFEFEF",
        myBrow: "#725742",
      },
    },
    plugins: [],
  },
};

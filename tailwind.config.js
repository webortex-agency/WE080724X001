/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        colorShadow:
          "rgba(143, 22, 207, 0.5) 0px 0px 30px 5px, rgba(96, 107, 255, 0.5) 0px 0px 15px 5px, rgba(96, 107, 255, 0.5) 0px 0px 15px 15px !important",
      },
    },
  },
  plugins: [],
};

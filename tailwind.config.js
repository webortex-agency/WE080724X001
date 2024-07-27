/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#171717",
        headColor: "#ffffff",
        textColor: "#c4c4c4",
        buttonBgColor: "#ffffff",
        buttonTextColor: "#171717",
        navlinkColor: "#ffffff",
        navlinkActiveColor: "#5A56E8",
        iconColor: "#c4c2ff",
        iconBgColor: "#5956e8",
        footerBgColor: "#292930",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};

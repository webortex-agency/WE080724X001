/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    screens: {
      xs: { max: "639px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
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
      boxShadow: {
        serviceCardShadow:
          "rgba(240, 135, 255, 0.5) 0px 0px 30px 5px, rgba(89, 86, 232, 0.5) 0px 0px 15px 5px, rgba(96, 107, 255, 0.5) 0px 0px 15px 15px !important",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "regular"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#02032a",
        customSecondary: "#DC784A",
        customLightBlue: "#10C0FE",
        customDarkBlue: "#3D58F2",
        customLightOrange: "#OFCOFE",
        customDarkOrange: "#OFCOFE",
        primaryBackground: "#02032a",
        customWhiteText: "#F3F6FA",
        customBlackText: "#0B1320",
        customSubtext: "#AFC1D0",
      },
    },
  },
};

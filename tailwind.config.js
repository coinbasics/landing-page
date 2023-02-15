const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      boxShadow: {
        faq: "0px 4px 18px rgba(0, 0, 0, 0.07)",
      },
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: "#1c64f2",
        secondary: "#f9fafb",
        black: {
          100: "#111928",
          200: "#6b7280",
        },
      },
    },
  },
  plugins: [],
};

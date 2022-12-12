/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        greenButton: "#1A8917", // Green buttons
        lightBlack: "#292D33", // Main black color
        grayBorder: "#E6E6E6", //Border Color for dropdown item's container
        blackText: "#1B2127", //Black text for dropdown
        lightDropBlack: "#6F7680", //Light black text for dropdown on hover
      },
    },
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1224px",
      // => @media (min-width: 1224px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

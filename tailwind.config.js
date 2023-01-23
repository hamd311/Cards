/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

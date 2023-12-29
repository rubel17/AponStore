/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    listStyleType: {
      disc: "disc",
    },
  },
  plugins: [require("daisyui")],
};

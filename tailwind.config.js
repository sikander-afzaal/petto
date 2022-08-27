/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mustard: "rgba(255, 186, 12, 1)",
        darkOrange: "#E94E24",
        lightWhite: "rgba(255, 255, 255, 0.15)",
      },
      boxShadow: {
        "shadow-btn": "0px 10px 18px rgba(234, 180, 84, 0.4)",
        "shadow-orange": "0px 10px 18px rgba(233, 78, 36, 0.3)",
      },
    },
  },
  plugins: [],
};

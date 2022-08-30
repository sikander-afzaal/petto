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
      backgroundImage: {
        "service-confetti": "url('/src/Assets/confetti.png')",
        "testimonial-confetti": "url('/src/Assets/confetti2.png')",
        "about-confetti": "url('/src/Assets/confetti3.png')",
        "app-confetti": "url('/src/Assets/confetti4.png')",
        "contact-confetti": "url('/src/Assets/confetti5.png')",
        "profile-confetti": "url('/src/Assets/confetti6.png')",
        "sitter-confetti": "url('/src/Assets/confetti7.png')",
      },
      boxShadow: {
        "shadow-btn": "0px 10px 18px rgba(234, 180, 84, 0.4)",
        "shadow-orange": "0px 10px 18px rgba(233, 78, 36, 0.3)",
      },
    },
  },
  plugins: [],
};

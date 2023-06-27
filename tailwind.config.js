/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-opaque": "rgba(0, 0, 0, 0.3)",
        "room-gray": "rgba(150, 150, 150, 1)"
      },
      aspectRatio: {
        "picture": "16/10"
      }
    },
    screens: {
      sm: "768px",
      md: "1230px",
      lg: "1355px"
    }
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        red: "#FF5059",
        redHover: "#e03132",
        purple: "#BA2D8B",
        lightBlue: "#3dd1e7",
        blue: "#4c8dda",
        blueHover: "#156dd8",
      },
    },
  },
  plugins: [],
};

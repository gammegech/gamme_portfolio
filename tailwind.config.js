/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        lighHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f",
      },

      fontFamily: {
        outfit: ["var(--font-outfit)"],
        ovo: ["var(--font-ovo)"],
      },

      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },

      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};

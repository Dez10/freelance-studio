/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          cream: "#f5f1e8",
          latte: "#e8dcc4",
          mocha: "#8b7355",
          espresso: "#4a3728",
          dark: "#2d1f16",
        },
        accent: {
          warm: "#d4a574",
          gold: "#c9a961",
        },
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "serif"],
        sans: ["Lato", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

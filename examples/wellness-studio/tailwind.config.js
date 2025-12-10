/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f7faf7",
          100: "#e8f1e8",
          200: "#d1e3d1",
          300: "#a8cba8",
          400: "#7db07d",
          500: "#5a8f5a",
          600: "#4a734a",
          700: "#3d5c3d",
          800: "#2f482f",
          900: "#1f301f",
        },
        lavender: {
          50: "#f9f7fb",
          100: "#f0ebf5",
          200: "#e1d7eb",
          300: "#c9b8dc",
          400: "#b199cd",
          500: "#9a7abe",
          600: "#7f5fa0",
        },
        earth: {
          cream: "#fdfcf9",
          sand: "#f5f1eb",
        },
      },
      fontFamily: {
        serif: ["Crimson Text", "Georgia", "serif"],
        sans: ["Nunito", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

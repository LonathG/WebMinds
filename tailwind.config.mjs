import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        k2d: ["K2D", "sans-serif"],
      },
      screens:{
        'min-xs': { max: '430px' }, 
        'max-xs': { max: '480px' },  // Below 480px
        'max-sm': { max: '640px' },  // Below 640px
        'max-md': { max: '768px' },  // Below 768px
        'max-lg': { max: '1024px' }, // Below 1024px
        'max-xl': { max: '1280px' }, // Below 1280px
        'max-2xl': { max: '1536px' }, // Below 1536px
        'min-2xl': { min: '2200px' }, // Below 1536px
      }
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue1: "#DFF2EB",
        blue2: "#B9E5E8",
        blue3: "#7AB2D3",
        blue4: "#4A628A",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

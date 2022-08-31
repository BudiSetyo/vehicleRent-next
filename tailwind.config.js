/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "dark-gunmetal": "#202336",
      "onyx-black": "#393939",
      "independence-black": "#4F5665",
      "old-silver": "#848484",
      "quick-silver": "#9F9F9F",
      "storm-grey": "#767680",
      "ghost-white": "#F9F9FB",
      "pastel-blue": "#B8BECD",
      "ao-green": "#087E0D",
      "sangria-red": "#9B0A0A",
      "crayola-orange": "#FFCD61",
    },
  },
  plugins: [],
};

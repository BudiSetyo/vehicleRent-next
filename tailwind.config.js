/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        first: "url('/background/first.png')",
        second: "url('/background/second.png')",
        third: "url('/background/third.png')",
        fourth: "url('/background/fourth.png')",
      },
    },
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1600px",
      },
    },
    colors: {
      white: "#FFF",
      black: "#000",
      "dark-gunmetal": "#202336",
      "onyx-black": "#393939",
      "independence-black": "#4F5665",
      "old-silver": "#848484",
      "quick-silver": "#9F9F9F",
      "sand-silver": "#C4C4C4",
      "storm-grey": "#767680",
      "ghost-white": "#F9F9FB",
      "pastel-blue": "#B8BECD",
      "ao-green": "#087E0D",
      "sangria-red": "#9B0A0A",
      "crayola-orange": "#FFCD61",
      "wrap-opacity": "rgba(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
};

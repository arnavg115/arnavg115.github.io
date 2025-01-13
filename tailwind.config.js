/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dot: ["DotGothic16"],
      mono: ["Space Mono"],
    },
    listStyleType: {
      square: "square",
      disc: "disc",
      inside: "inside",
    },
    extend: {},
  },
  plugins: [],
};

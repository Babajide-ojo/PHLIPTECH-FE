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
        ptLighterBlue: "#E3F3FE",
        ptLightBlue: "#019BFF",
        ptBlue: "#17478B",
        ptDarkBlue: "#05199A",
        ptDarkBlue: "#05199A",
        ptBlack: "#1B1B1B",
        ptGray: "#ACACAC",
        ptDark: "#191B28",
        ptDarkBg600: "#6D6D6D",
        ptDarkBg700: "#575968",
        ptDarkBg800: "#383A49",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #05199A, #60B9FF, #5CB2FB, #001F47)',
      },
    },
  },
  plugins: [],
};

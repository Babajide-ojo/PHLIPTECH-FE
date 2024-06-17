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
        ptWhite: "#FFFFFF",
        ptLighterBlue: "#E3F3FE",
        ptLightBlue: "#019BFF",
        ptLightBlue400: "#39AAFF",
        ptBlue: "#17478B",
        ptDarkBlue: "#05199A",
        ptDarkBlue50: "#ECE6F7",
        ptDarkBlue900: "#05199A",
        ptSkyBlue: "#E3F3FE",
        ptLightGreen50: "#E0F2EC",
        ptGreen900: "#0A4B2D",
        ptNeutral50: "#F9F9F9",
        ptNeutral700: "#5A5A5A",
        ptNeutral800: "#3B3B3B",
        ptRed600: "#FF3419",
        ptBlack: "#1B1B1B",
        ptGray: "#ACACAC",
        ptDark: "#191B28",
        ptNeutral600: "#6D6D6D",
        ptDarkBg700: "#575968",
        ptDarkBg800: "#383A49",
        ptDarkBg900: "#181A27",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #05199A, #60B9FF, #5CB2FB, #001F47)',
      },
    },
  },
  plugins: [],
};

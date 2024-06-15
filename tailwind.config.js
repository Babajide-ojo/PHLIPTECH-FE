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
        ptLightBlue: "#019BFF",
        ptDarkBlue: "#05199A",
        ptDarkBlue: "#05199A",
        ptBlack: "#1B1B1B",
        ptDark: "#191B28",
      },
    },
  },
  plugins: [],
};

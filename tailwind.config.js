/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          darkBlack: '#313131',
          darkPurple: '#22006B',
          darkBlue: '#011140',
          neonGreen: '#44F2D2',
          neonYellow: '#F2E852',
          white: '#FFFFFF',
        },
        secondary: {
          darkGrey: '#B9B9B9',
          glassGrey: '#9E9E9E',
          gradientBlack: 'linear-gradient(180deg, #313131 0%, rgba(49, 49, 49, 0) 100%)',
        },
      },
    },
  },
  plugins: [],
}
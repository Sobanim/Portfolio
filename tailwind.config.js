module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlack: '#474948',
        customWhite: '#fcfcfc',
        customGreen: '#3b846e',
      },
      fontFamily: {
        pt: ['PT Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
  plugins: [],
};

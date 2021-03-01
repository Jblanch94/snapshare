module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#fff',
      secondary: '#FFB74D',
      white: '#fff',
      formLabel: '#898989',
    },
    borderColor: {
      primary: '#fff',
      secondary: '#FFB74D',
      inputUnfocused: '#a6a6a6',
      inputFocused: '#128fdc',
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/src/assets/home-hero.jpg')",
        signUp: "url('/src/assets/sign-up.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
    },
  },
  plugins: [],
};

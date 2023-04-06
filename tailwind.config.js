module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: 'class', // Enables dark mode
  theme: {
    extend: {
      colors: {
        'cyan-400': '#26C6DA',
        'cyan-200': '#80DEEA',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};

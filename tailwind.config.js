module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      gridTemplateRows: {
        pancake: 'auto 1fr auto',
      },
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

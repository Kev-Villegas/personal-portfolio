/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.gray,
      neutral: colors.slate,
      stone: colors.stone,
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        primary: ['Lato', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
        tertiary: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '0px', // Extra extra small
      xs: '320px', // Extra small
      sm: '576px', // Small
      md: '768px', // Medium
      lg: '1024px', // Large
      xl: '1280px', // Extra large
      '2xl': '1536px', // Extra extra large
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
  },
  plugins: [],
};

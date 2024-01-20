/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      'rajdhani': ['"Rajdhani"'],
      'allison' : ['"Allison"']
    },
    textShadow: {
      sm: '0px 0px 1px gray',
      DEFAULT: '0px 0px 2px gray',
      md: '0px 0px 4px gray',
      lg: '0px 0px 8px gray'
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'for-blobs': '26% 74% 61% 39% / 54% 67% 33% 46%'
    },
    keyframes: {
      blobs: {
        '0%': {borderRadius: '26% 74% 61% 39% / 54% 67% 33% 46%'},
        '10%': {borderRadius: '74% 26% 47% 53% / 68% 46% 54% 32%'},
        '20%': {borderRadius: '48% 52% 30% 70% / 27% 37% 63% 73%'},
        '30%': {borderRadius: '73% 27% 57% 43% / 28% 67% 33% 72%'},
        '40%': {borderRadius: '63% 37% 56% 44% / 25% 28% 72% 75%'},
        '50%': {borderRadius: '39% 61% 70% 30% / 61% 29% 71% 39%'},
        '60%': {borderRadius: '27% 73% 29% 71% / 73% 51% 49% 27%'},
        '70%': {borderRadius: '39% 61% 65% 35% / 74% 65% 35% 26%'},
        '80%': {borderRadius: '55% 45% 37% 63% / 38% 30% 70% 62%'},
        '90%': {borderRadius: '25% 75% 70% 30% / 39% 50% 50% 61%'},
        '100%': {borderRadius: '66% 34% 33% 67% / 65% 73% 27% 35%'}
      }
    },
    animation: {
      blobs: 'blobs 15s ease-in-out infinite alternate'
    },
    animationDelay: {
      '1000': '1000ms',
      '2000': '2000ms',
      '3000': '3000ms',
      '4000': '4000ms'
    },
    backface: {
      'visible': 'visible',
      'hidden': 'hidden'
    },
    y: {
      '0.5': '.5turn'
    },
    tStyle: {
      'flat': 'flat',
      'preserve-3d': 'preserve-3d'
    }
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities({
      'text-shadow': (value) => ({
        textShadow: value,
      }),
    },
    { values: theme('textShadow') }
    ),
    matchUtilities({
      'animation-delay': (value) => ({
        animationDelay: value,
      }),
    },
    { values: theme('animationDelay') }
    ),
    matchUtilities({
      'backface-visibility': (value) => ({
        backface: value,
      }),
    },
    { values: theme('backface') }
    ),
    matchUtilities({
      'rotateY': (value) => ({
        y: value,
      }),
    },
    { values: theme('y') }
    ),
    matchUtilities({
      'transform-style': (value) => ({
        tStyle: value,
      }),
    },
    { values: theme('tStyle') }
    )
  }),
]
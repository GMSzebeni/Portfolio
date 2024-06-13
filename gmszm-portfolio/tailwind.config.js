/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    screens: {
      'turned': { 'raw': '(max-height: 450px)' },
      'xs': { 'max': '639px' },
      'sm': '640px',
      'md': [
        { 'min': '768px', 'max': '811px' },
        { 'min': '1025px' }
      ],
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1536px'
    },
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
      'for-blobs-1': '26% 74% 61% 39% / 54% 67% 33% 46%',
      'for-blobs-2': '74% 26% 47% 53% / 68% 46% 54% 32%',
      'for-blobs-3': '48% 52% 30% 70% / 27% 37% 63% 73%',
      'for-blobs-4': '73% 27% 57% 43% / 28% 67% 33% 72%'
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
      },
      slide: {
        '0%': {transform: 'translateX(-20%)'},
        '100%': {transform: 'translateX(20%)'}
      }
    },
    animation: {
      blobs: 'blobs 15s ease-in-out infinite alternate',
      slide: 'slide ease-in-out infinite'
    },
    animationDirection: {
      'alternate': 'alternate',
      'reverse': 'reverse',
      'normal': 'normal',
      'alt-rev': 'alternate-reverse'
    },
    animationDelay: {
      '1000': '1000ms',
      '2000': '2000ms',
      '3000': '3000ms',
      '4000': '4000ms'
    },
    animationDuration: {
      '1': '1s',
      '2': '2s',
      '3': '3s',
      '4': '4s',
      '5': '5s'
    },
    backgroundImage: {
      'ch-pattern-portion': 'linear-gradient(-60deg, rgb(206, 163, 157) 50%, rgb(255, 60, 0) 50%)',
      'ch-pattern-target': 'linear-gradient(-60deg, rgb(154, 205, 50) 50%, rgb(0, 100, 0) 50%)'
    },
    backfaceVisibility: {
      visible: 'visible',
      hidden: 'hidden'
    },
    y: {
      '0.5': '180deg',
      '0': '0deg'
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
      'animation-direction': (value) => ({
        animationDirection: value,
      })
    },
    { values: theme('animationDirection') }
    ),
    matchUtilities({
      'animation-delay': (value) => ({
        animationDelay: value,
      }),
    },
    { values: theme('animationDelay') }
    ),
    matchUtilities({
      'animation-duration': (value) => ({
        animationDuration: value,
      }),
    },
    { values: theme('animationDuration') }
    ),
    matchUtilities({
      'backface-visibility': (value) => ({
        'backface-visibility': value,
      }),
      '-moz-backface-visibility': (value) => ({
        '-moz-backface-visibility': value,
      })
    },
    { values: { ...theme('backfaceVisibility'), 'visible': 'visible' } }
    ),
    matchUtilities({
      'rotateY': (value) => ({
        transform: 'rotateY('+(value)+')',
      }),
    },
    { values: theme('y') }
    ),
    matchUtilities({
      'transform-style': (value) => ({
        'transform-style': value,
      }),
    },
    { values: theme('tStyle') }
    )
  }),
  require('tailwind-scrollbar')
]
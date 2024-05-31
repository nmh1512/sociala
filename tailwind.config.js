/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#d2e3ff',
        'color-theme-red': '#ff3b30',
        'color-theme-green': '#4cd964',
        'color-theme-blue': '#0055ff',
        'color-theme-pink-red': '#ff2d55',
        'color-theme-yellow': '#ffcc00',
        'color-theme-orange': '#ff9500',
        'color-theme-gray': '#8e8e93',
        'color-theme-brown': '#D2691E',
        'color-theme-dark-green': '#228B22',
        'color-theme-cade-tblue': '#5f9ea0',
        'color-theme-purple': '#9932cc',
        'success': '#10d876',
        'light-theme-body': '#FBFCFE',
        'warning': '#fe9431'
      },
      fontFamily: {
        logoFont: ['"Fredoka"', "cursive"],
        sans: ['"Montserrat"', "sans-serif"]
      },
      boxShadow: {
        'custom-xs': '0 .5rem 1rem rgba(0,0,0,.03)',
        'custom-xss': '0 8px 30px rgba(0,0,0,.05)',
        'custom-3': '0 1rem 3rem rgba(0,0,0,.18)'
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      width: {
        '7/10': '70%',
        '3/10': '30%'
      },
      backgroundImage: theme => ({
        'story-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.01) 60%, rgba(0, 0, 0, 0.9) 100%)',
      }),
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
}


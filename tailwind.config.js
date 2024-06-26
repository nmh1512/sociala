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
        'custom-primary': '#1e74fd',
        'rba-06': 'rgba(0,0,0,.6)',
        'warning': '#fe9431',
        'facebook': '#0d66ff',
        'linkedin': '#0A66C2',
        'pinterest': '#E60023'
      },
      fontFamily: {
        logoFont: ['"Fredoka"', "cursive"],
        sans: ['"Montserrat"', "sans-serif"]
      },
      boxShadow: {
        'custom-xs': '0 .5rem 1rem rgba(0,0,0,.03)',
        'custom-xss': '0 8px 30px rgba(0,0,0,.05)',
        'custom-3': '0 1rem 3rem rgba(0,0,0,.18)',
        'custom-lg': '0 1rem 3rem rgba(0,0,0,.175)'
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
        'primary-gradient': 'linear-gradient(135deg, #05f, #09f)',
        'red-gradient': 'linear-gradient(to right, #e44d26, #f16529)',
        'instagram': 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);'
      }),
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
}


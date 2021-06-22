module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ABeeZee: ['"ABeeZee"', 'cursive']
      },
      colors: {
        yellow: {
          250: '#FFC838'
        },
        orange: {
          450: '#e05529'
        },
        gray: {
          150: '#BDC7CD',
          250: '#BDC7CD',
          350: '#8F969E',
          450: '#505258',
          850: '#0E1C1C'
        },
        violet: {
          550: '#3C2649'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

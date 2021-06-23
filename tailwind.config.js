module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ABeeZee: ['"ABeeZee"', 'cursive']
      },
      colors: {
        gray: {
          150: '#BDC7CD',
          250: '#BDC7CD',
          350: '#505258',
          850: '#0E1C1C'
        },
        yellow: {
          'FFC838': '#FFC838'
        },
        orange: {
          'E05529': '#E05529'
        },
        violet: {
          550: '#3C2649'
        },
        black: {
          '0E1C1C': '#0E1C1C'
        }
      },
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        sxl: '120px',
        250: '250px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

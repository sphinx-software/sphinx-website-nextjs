module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ABeeZee: ['"ABeeZee"', 'cursive']
      },
      height: {
        sm: '320px',
        md: '400px'
      },
      width: {
        sm: '320px',
        md: '400px'
      },
      lineHeight: {
        11: '3.2rem'
      },
      colors: {
        yellow: {
          250: '#FFC838',
          850: '#583023'
        },
        orange: {
          450: '#e05529'
        },
        gray: {
          150: '#E5E5E5',
          250: '#BDC7CD',
          350: '#8F969E',
          450: '#505258',
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

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
        md: '400px',
        22: '5.5rem'
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
          50: '#BDC7CD',
          150: '#E5E5E5',
          250: '#BDC7CD',
          350: '#8F969E',
          450: '#505258',
          850: '#0E1C1C'
        },
        violet: {
          550: '#3C2649'
        }
      },
      padding: {
        '8px': '8px',
        '14px': '14px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

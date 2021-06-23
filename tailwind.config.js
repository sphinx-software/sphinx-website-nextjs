module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      16: '16px',
      36: '36px',
      18: '18px',
      24: '24px'
    },
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
        11: '3.2rem',
        32: '32px',
        36: '36px',
        48: '48px',
        56: '56px'
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
        violet: {
          550: '#3C2649'
        },
        black: {
          50: '#393C41',
          300: '#323439'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

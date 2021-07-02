module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
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
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      24: '24px',
      32: '32px',
      36: '36px',
      40: '40px',
      64: '64px'
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    maxHeight: (theme) => ({
      ...theme('spacing'),
      350: '350px',
      450: '450px',
      full: '100%',
      screen: '100vh'
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      536: '536px',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens'))
    }),
    minHeight: {
      0: '0px',
      full: '100%',
      180: '180px',
      screen: '100vh'
    },
    minWidth: {
      0: '0px',
      95: '95%',
      160: '160px',
      full: '100%',
      min: 'min-content',
      max: 'max-content'
    },
    extend: {
      fontFamily: {
        ABeeZee: ['"ABeeZee"', 'cursive']
      },
      height: {
        25: '25px',
        320: '320px',
        350: '350px',
        360: '360px',
        370: '370px',
        380: '380px',
        390: '390px',
        400: '400px',
        410: '410px',
        420: '420px',
        430: '430px',
        450: '450px',
        480: '480px',
        490: '490px',
        800: '800px',
        '5.25rem': '5.25rem'
      },
      width: {
        240: '240px',
        25: '25px',
        320: '320px',
        350: '350px',
        380: '380px',
        390: '390px',
        400: '400px',
        410: '410px',
        420: '420px',
        450: '450px',
        470: '470px',
        480: '480px',
        490: '490px',
        500: '500px',
        520: '520px',
        530: '530px',
        540: '540px',
        560: '560px',
        sm: '320px',
        md: '400px',
        22: '5.5rem'
      },
      maxWidth: {
        26.5: '26.5rem'
      },
      lineHeight: {
        11: '3.2rem',
        19: '19px',
        24: '24px',
        32: '32px',
        36: '36px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px'
      },
      colors: {
        yellow: {
          250: '#FFC838',
          850: '#583023',
          FFC838: '#FFC838',
          450: '#F89721'
        },
        orange: {
          450: '#e05529',
          E05529: '#E05529'
        },
        gray: {
          50: '#BDC7CD',
          150: '#E5E5E5',
          250: '#BDC7CD',
          350: '#8F969E',
          380: '#71757b',
          450: '#505258',
          550: '#494d52',
          850: '#0E1C1C'
        },
        violet: {
          550: '#3C2649'
        },
        black: {
          '0E1C1C': '#0E1C1C',
          50: '#393C41',
          300: '#323439'
        }
      },
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        sxl: '120px',
        250: '250px',
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '8px': '8px',
        '14px': '14px',
        112: '28rem',
        120: '30rem'
      },
      margin: {
        '25rem': '25rem',
        '28rem': '28rem',
        '30rem': '30rem',
        '17rem': '17rem'
      },
      screens: {
        ssm: '384px',
        '3xl': '1792px',
        fullHd: '1921px',
        '4xl': '2048px',
        '4k': '2560px'
      },
      backgroundSize: {
        'WAutoH55%': 'auto 55%',
        'WAutoH52%': 'auto 52%',
        'WAutoH50%': 'auto 50%',
        'WAutoH45%': 'auto 45%',
        'WAutoH40%': 'auto 40%',
        'WAutoH35%': 'auto 35%',
        'WAutoH30%': 'auto 30%',
        'WAutoH26%': 'auto 26%',
        'WAutoH25%': 'auto 25%',
        'WAutoH20%': 'auto 20%',
        'W100%H40%': '100% 40%'
      }
    }
  },
  variants: {
    extend: {},
    scrollbar: ['rounded']
  },
  plugins: [require('tailwind-scrollbar')]
}

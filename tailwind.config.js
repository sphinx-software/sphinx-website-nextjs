module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          150: '#BDC7CD',
          250: '#BDC7CD',
          350: '#505258',
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

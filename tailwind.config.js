module.exports = {
  purge: ['./src/**/*.svelte', './public/*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      fontFamily: {
        display: ['Lato', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        sans: ['Lato', 'sans-serif']
      },
      colors: {
        cyan: '#9cdbff',
      },
      animation: {
        spin: 'spin 10s linear infinite',
        rspin: 'rspin 1s linear infinite'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      keyframes: {
        rspin: {
          '0%, 50%': { transform: 'rotate(-180deg)'},
        }
      }
    }
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: []
};

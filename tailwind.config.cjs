module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  media: false, // or 'class'
  theme: {
    extend: {
      colors: {
        'line-green': '#4caf4f',
        'line-black': '#272727',
      },
      backgroundImage: {
        'revup-top': 'linear-gradient(247.38deg, #00b900, #00aeb9)',
        'line-hover': 'url(/h__login--hover.png)',
        'line-press': 'url(/h__login--press.png)',
      },
      fontFamily: {
        'biryani-heading': "'Biryani', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

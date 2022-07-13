module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  media: false, // or 'class'
  theme: {
    extend: {
      colors: {
        'revup-deep-brand': '#668c4a',
        'revup-brand': '#4caf4f',
        'line-primary-black': '#111111',
        'line-secondary-black': '#1e1e1e',
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

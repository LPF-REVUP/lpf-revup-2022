module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  media: false, // or 'class'
  theme: {
    extend: {
      colors: {
        'revup-deep-brand': '#025930',
        'revup-medium-brand': '#4AA37B',
        'revup-brand': '#03A678',
        'revup-light-brand': '#D2F4C5',
        'primary-blue': '#0B2237',
        'line-primary-black': '#111111',
        'line-secondary-black': '#1e1e1e',
        'line-black': '#272727',
      },
      backgroundImage: {
        'revup-top': "url('/image-opaque.png'), url('/image-overlay.png')",
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

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        aBase: '#001F3F',
        aDark: '#083358',
        aLight: '#0D63A5',
        aTosca: '#00FFD7',
        aYellow: '#FFD717',
        aRed: '#EC2A21',
       
      },
      fontFamily: {
        'mont': ['mont', 'sans-serif'],
        'planar': ['planar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

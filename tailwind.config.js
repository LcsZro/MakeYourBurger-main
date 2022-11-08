module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'burger': "url('/img/burger.jpg')"
      },
      colors: {
        'cinza': '#222222',
        'cinzainput': '#DEDEDE',
      },
    },
  },
  plugins: [],
}

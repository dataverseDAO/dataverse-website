module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Objectivity", "sans-serif"],
        "logo": ["Chillax", "sans-serif"]
      },
      boxShadow: {
        'custom': '0 0px 50px 4px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.1);'
      },
      dropShadow: {
        'text': '2px 2px 2px rgb(0 0 0 / 0.5)',
        'custom': '0 5px 7px rgb(0 0 0 / 0.15)',
        'fuchsia': '2px 2px 3px rgb(217 70 239 / 1)'
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite'
      },
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],


}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
      },

      colors: {
          primary: {
            900: '#f7752d',
            800: '#D87D4A',
            700: '#191919',
            600: '#101010',
            
          },
          secondary: {
            900: '#FAFAFA',
            800: '#F1F1F1',
            700: '#848484',
            600: '#9C9C9C'
          }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
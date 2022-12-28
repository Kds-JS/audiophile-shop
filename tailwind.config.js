module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
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

      backgroundImage: {
				herodesktop: "url('/assets/images/home/desktop/image-hero.jpg')",
				herotablet: "url('/assets/images/home/tablet/image-hero.jpg')",
        heromobile: "url('/assets/images/home/mobile/image-hero.jpg')",

        circlesbg: "url('/assets/images/home/desktop/pattern-circles.svg')",

        speakerbgdesktop: "url('/assets/images/home/desktop/image-speaker-zx7.jpg')",
				speakerbgtablet: "url('/assets/images/home/tablet/image-speaker-zx7.jpg')",
        speakerbgmobile: "url('/assets/images/home/mobile/image-speaker-zx7.jpg')",

        earphonebgdesktop: "url('/assets/images/home/desktop/image-earphones-yx1.jpg')",
				earphonebgtablet: "url('/assets/images/home/tablet/image-earphones-yx1.jpg')",
        earphonebgmobile: "url('/assets/images/home/mobile/image-earphones-yx1.jpg')",

        bestgeardesktop: "url('/assets/images/shared/desktop/image-best-gear.jpg')",
				bestgeartablet: "url('/assets/images/shared/tablet/image-best-gear.jpg')",
        bestgearmobile: "url('/assets/images/shared/mobile/image-best-gear.jpg')",
			},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
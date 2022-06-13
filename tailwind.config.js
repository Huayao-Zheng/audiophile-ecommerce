module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        h1: ['56px', { lineHeight: '58px', letterSpacing: '2px' }],
        h2: ['40px', { lineHeight: '44px', letterSpacing: '1.5px' }],
        h3: ['32px', { lineHeight: '36px', letterSpacing: '1.15px' }],
        h4: ['28px', { lineHeight: '38px', letterSpacing: '2px' }],
        h5: ['24px', { lineHeight: '33px', letterSpacing: '1.7px' }],
        h6: ['18px', { lineHeight: '24px', letterSpacing: '1.3px' }],
        body: ['15px', { lineHeight: '25px' }],
        overline: ['14px', { lineHeight: '19px', letterSpacing: '10px' }],
        subTitle: ['13px', { lineHeight: '25px', letterSpacing: '1px' }],
      },
    },
  },
  plugins: [],
};

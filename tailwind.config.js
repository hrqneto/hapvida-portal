module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        //primarias
        primary: '#1D4ED8',
        'primary-hover': '#2563EB',

        //btn e input
        disabled: '#0000001f',
        'disabled-text': '#00000042',
        error: '#EF4444',

        //textos
        'text-primary': '#1D4ED8',
        'text-secondary': '#0054B8',
        'text-terciary': '#e9f1fa',
        'text-dark': '#374151',
        'text-light': '#6B7280',
        'footer-text': '#9CA3AF',
        white: '#FFFFFF',

        // bordad e fundos
        'border-gray': '#D1D5DB',
        'gray-hover': '#E5E7EB',
        light: '#6B7280',
        'hover-blue': '#2563EB',
        terciary: '#e9f1fa',
        "bg-terciary-hover": '#e9f1fa',

        // elementos específicos
        'banner-bg': '#ded6c9',
        black: '#000000',
      },
    },
  },
  plugins: [],
};

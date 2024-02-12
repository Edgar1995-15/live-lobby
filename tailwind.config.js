/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    keyframes: {
      OpacityAnimatedButton05: {
        '0%': { opacity: '1', 'pointer-events': 'none' },
        '80%': { opacity: '1', 'pointer-events': 'none' },
        '100%': { opacity: '0.5', 'pointer-events': 'none' },
      },
      OpacityActionButton: {
        '0%': { opacity: '0.7', 'pointer-events': 'none' },
        '30%': { opacity: '0.7', 'pointer-events': 'none' },
        '100%': { opacity: '0', 'pointer-events': 'none' },
      },
    },
      colors: {
        "main": "#171C2C",
        "yellow-sun": "#F9C700",
        "dark-red": "#4B1413",
        "green": "#2DAC00",
        'white-20': 'rgba(250, 250, 250, 0.2)',
        'gray-70': 'rgba(240,240,240,0.7)',
      },
      dropShadow: {
        "yellow-shadow": "0px 0px 6px #FFDE0B",
        "white-shadow": "0px 0px 1.81818rem rgba(255, 255, 255, 0.6)",
      },
      boxShadow: {
        'custom-white': '0px 0px 0.68rem rgba(255, 255, 255, 1)',
        'custom-yellow': 'rgb(255, 222, 11) 0px 0px 0.68rem'
      }
    },
    fontSize: {
      "xxs": '8px',
      "xs": '12px'
    },
    screens: {
      //@media max-width
      'mobile-max-w': {'max' : '468px'},
      'tablet-max-w': {'max': '767px'},
      'tablet-lg-max-w': {'max' : '1024px'},
      'desktop-max-w': {'max': '1200px'},
      'desktop-lg-max-w': {'max': '1400px'}
    },
    backgroundImage: {
      'mobile-image': "url('/images/background.jpg')",
    }
  },
  plugins: [],
}


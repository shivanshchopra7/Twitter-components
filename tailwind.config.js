/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        '65': '65px',
        '30': '30px',
        '4': "4px",
      },
      colors: {
        "neutral-50": "#f9f9f9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000",
        "twitter-blue": "#1D9BF0",
        "twitter-blue-hover": "#1871CA",
        "twitter-blue-disabled": "#1E5D87",
        "twitter-white": "#FFF",
        "blue-wash": "#75BEEF",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        "success": "#00BE74",
        "error": "#8B141A",
        "Body": "#40596A",

      },
      
      spacing: {},
      fontFamily: {
        "px-regular": "Inter",
      },
      backdropBlur: {
        23: '23.668209075927734px',
      },
      boxShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
        
      },
  
      width: {
        '334': '20rem',
        '455': '28rem',
        '199': '12rem',
        '390': '24.375rem',
        '155': '9.719rem',
        '442': '27.625rem',

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'chirp': ['Chirp', 'sans'],
      },

    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      "4xl": "20px",
      inherit: "inherit",
    },
   
    borderColor: {
      'color': 'var(--stroke, rgba(29, 155, 240, 0.24))',
'n-700': "#404040",
'n-500': "#737373",
'twitter': "#1D9BF0",
    },

  },
  plugins: [],
};
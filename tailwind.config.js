module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: require('daisyui/colors'),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],

daisyui: {
    themes: [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",

{autumn: {
    "primary": "#8C0327",
    "primary-focus": "#70021F",
    "primary-content": "#FF4493",
    "secondary": "#D85251",
    "secondary-content": "D85251",
    "secondary-focus": "#C22D2C",
    "accent": "#D59B6A",
    "accent-focus": "#C77A38",
    "accent-content": "D59B6A",
    "neutral": "#826A5C",
    "neutral-focus": "#68554A",
    "neutral-content": "826A5C",
    "base-100": "#f1f1f1",
    "base-200": "#C1C1C1",
    "base-300": "#9A9A9A",
    "base-content": "#303030",
    "info": "#42ADBB",
    "success": "#499380",
    "warning": "#E97F14",
    "error": "#DF1A2F",
  },
  },
  { "business": {
    "primary": "#1C4E80",
    "primary-focus": "#163E66",
    "primary-content": "#6EDCFF",
    "secondary": "#7C909A",
    "secondary-content": "#00273D",
    "secondary-focus": "#61747E",
    "accent": "#EA6947",
    "accent-focus": "#DB4119",
    "accent-content": "#D20000",
    "neutral": "#23282E",
    "neutral-focus": "#1C2025",
    "neutral-content": "#C8D3E0",
    "base-100": "#202020",
    "base-200": "#1A1A1A",
    "base-300": "#151515",
    "base-content": "#D2D2D2",
    "info": "#0091D5",
    "success": "#6BB187",
    "warning": "#DBAE59",
    "error": "#AC3E31",
    "--rounded-box": "0.25rem",
    "--rounded-btn": ".125rem",
    "--rounded-badge": ".125rem",
  },
  },
  { acid: {
    "primary": "#FF00F4",
    "primary-focus": "#CC00C3",
    "primary-content": "FF00F4",
    "secondary": "#FF7400",
    "secondary-content": "FF7400",
    "secondary-focus": "#CC5D00",
    "accent": "#CBFD03",
    "accent-focus": "#A3CB02",
    "accent-content": "#BFFF00",
    "neutral": "#191A3F",
    "neutral-focus": "#141532",
    "neutral-content": "#ABADFF",
    "base-100": "#fafafa",
    "base-200": "#C8C8C8",
    "base-300": "#A0A0A0",
    "base-content": "#323232",
    "info": "#3194F6",
    "success": "#5FC992",
    "warning": "#F7DE2D",
    "error": "#E60300",
    "--rounded-box": "1.25rem",
    "--rounded-btn": "1rem",
    "--rounded-badge": "1rem",
  },
  },
  {lemonade: {
    "primary": "#519903",
    "primary-focus": "#417A02",
    "primary-content": "#E2FF37",
    "secondary": "#E9E92E",
    "secondary-content": "#BBFB00",
    "secondary-focus": "#CACA15",
    "accent": "#F7F9CA",
    "accent-focus": "#EBF079",
    "accent-content": "#5C6100",
    "neutral": "#191A3F",
    "neutral-focus": "#141532",
    "neutral-content": "#ABADFF",
    "base-100": "#ffffff",
    "base-200": "#CCCCCC",
    "base-300": "#A3A3A3",
    "base-content": "#333333",
    "info": "#C8E1E7",
    "success": "#DEF29F",
    "warning": "#F7E589",
    "error": "#F2B6B5",
  },
  },
  {night: {
    "primary": "#38bdf8",
    "primary-focus": "#08A5EB",
    "primary-content": "38bdf8",
    "secondary": "#818CF8",
    "secondary-content": "#0000A9",
    "secondary-focus": "#3A4BF4",
    "accent": "#F471B5",
    "accent-focus": "#EF2F92",
    "accent-content": "#B40029",
    "neutral": "#1E293B",
    "neutral-focus": "#273449",
    "neutral-content": "#B5CDF5",
    "base-100": "#0F172A",
    "base-200": "#0C1222",
    "base-300": "#0A0E1B",
    "base-content": "#B4C6EF",
    "info": "#0CA5E9",
    "success": "#2DD4BF",
    "warning": "#F4BF50",
    "error": "#FB7085",
  },
  },
  {coffee: {
    "primary": "#DB924B",
    "primary-focus": "#DB924B",
    "primary-content": "#BC1B00",
    "secondary": "#263E3F",
    "secondary-content": "#BBEFF2",
    "secondary-focus": "#1E3232",
    "accent": "#10576D",
    "accent-focus": "#0D4657",
    "accent-content": "#72FFFF",
    "neutral": "#120C12",
    "neutral-focus": "#0E0A0E",
    "neutral-content": "#D6C8D6",
    "base-100": "#20161F",
    "base-200": "#1A1219",
    "base-300": "#150E14",
    "base-content": "#756E63",
    "info": "#8DCAC1",
    "success": "#9DB787",
    "warning": "#FFD25F",
    "error": "#FC9581",
  },
  },
  {winter: {
    "primary": "#047AFF",
    "primary-focus": "#0061CF",
    "primary-content": "#00D5FF",
    "secondary": "#463AA2",
    "secondary-content": "#8A70FF",
    "secondary-focus": "#382E82",
    "accent": "#C148AC",
    "accent-focus": "#9E368C",
    "accent-content": "#FF61FF",
    "neutral": "#021431",
    "neutral-focus": "#021027",
    "neutral-content": "#9DC5FF",
    "base-100": "#ffffff",
    "base-200": "#F2F7FF",
    "base-300": "#E3E9F4",
    "base-content": "#394E6A",
    "info": "#93E7FB",
    "success": "#81CFD1",
    "warning": "#EFD7BB",
    "error": "#E58B8B",
  },
  },

    ],
  },

}

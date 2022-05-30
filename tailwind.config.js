module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        "colors": {
         "red-800": "#991b1b",
         "Festival-info": "#f9fafb"
        },
        "fontSize": {
         "sm": "0.9375rem",
         "base": "2rem"
        },
        "fontFamily": {
         "algerian": "Algerian",
         "inter": "Inter"
        },
        "borderRadius": {
         "none": "0",
         "xs": "0.18370576202869415rem",
         "sm": "0.25rem",
         "default": "0.2724449634552002rem",
         "lg": "0.3125rem",
         "xl": "0.3508129417896271rem",
         "2xl": "0.36270490288734436rem",
         "3xl": "0.375rem",
         "4xl": "0.5080958604812622rem",
         "5xl": "0.9375rem",
         "6xl": "1rem",
         "7xl": "1.5625rem",
         "8xl": "2.1875rem",
         "9xl": "2.8271484375rem",
         "10xl": "5.0888671875rem",
         "full": "9999px"
        }
    },
  },
  plugins: [],
}

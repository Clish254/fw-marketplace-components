module.exports = {
  purge: [],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-background": "url('/assets/background.svg')",
      }),
    },
    colors: {
      black: {
        default: "#1A191C",
        light: "#302F36",
        dark: "#000000",
      },
      grey: {
        default: "#636365",
        light: "#CDCDCD",
      },
      blue: {
        default: "#009EE2",
      },
      white: {
        default: "#FFFFFF",
      },
    },
    fontFamily: {
      sans: ["Open sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

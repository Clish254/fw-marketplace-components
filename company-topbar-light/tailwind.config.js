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
      blue: {
        default: "#0046FD",
      },
      white: {
        default: "#FFFFFF",
      },
      black: {
        default: "#363636",
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

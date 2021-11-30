module.exports = {
  purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: (theme) => ({
        "main-height": `calc(100% - ${theme("spacing.20")})`,
      }),
    },
  },
  variants: {
    extend: {
      outline: ["focus"],
      borderColor: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

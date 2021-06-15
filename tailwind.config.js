module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Oswald"],
      body: ["Open Sans"],
    },
    keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-10px) translateX(-50%)",
        },
        "10%": {
          opacity: "1",
          transform: "translateY(0) translateX(-50%)",
        },
        "90%": {
          opacity: "1",
          transform: "translateY(0) translateX(-50%)",
        },
        "100%": {
          opacity: "0",
          transform: "translateY(-10px) translateX(-50%)",
        },
      },
    },
    animation: {
      "fade-in-down": "fade-in-down 5s ease-out",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "var(--color-bg-light)",
          text: "var(--color-text-light)",
          primary: "var(--color-primary-light)",
          secondary: "var(--color-secondary-light)",
        },
        dark: {
          background: "var(--color-bg-dark)",
          text: "var(--color-text-dark)",
          primary: "var(--color-primary-dark)",
          secondary: "var(--color-secondary-dark)",
        },
        // Add more theme variations as needed
      },
    },
  },
  plugins: [],
};

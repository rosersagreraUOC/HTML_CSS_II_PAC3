module.exports = {
  content: [
    "./src/**/*.html", 
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3",
        secondary: "#6c757d",
        accent: "#ffc107",
        background: "#f8f9fa",
        text: "#212529",
      },
      fontFamily: {
        base: ["Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cardHover: "0 6px 8px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

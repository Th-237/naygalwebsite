/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        naygal: {
          // Identité principale
          blue: "#032965",
          darkblue: "#021F50",
          dark: "#021D47",

          // Vert signature
          green: "#52A234",
          lightgreen: "#77BB43",

          // Couleurs complémentaires
          cyan: "#22D3EE",
          violet: "#6366F1",

          // Neutres
          gray: "#64748B",
          light: "#F8FAFC",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        "naygal-glow": "0 0 60px rgba(82, 162, 52, 0.15)",
        "naygal-card": "0 20px 60px rgba(2, 29, 71, 0.08)",
      },

      backgroundImage: {
        "naygal-gradient":
          "linear-gradient(135deg, #032965 0%, #021D47 55%, #03152F 100%)",

        "naygal-green-gradient":
          "linear-gradient(135deg, #52A234 0%, #77BB43 100%)",
      },
    },
  },

  plugins: [],
}

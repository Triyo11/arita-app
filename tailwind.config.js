/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
    //   color: {
    //     primary: "#F8F9EE",
    //     secondary: "#072026",
    //     accent1: "#1F343A",
    //     accent2: "#EDFC6C",
    //   },
    // },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#F8F9EE",
          "primary-content": "#5314FA",
          secondary: "#FFFFF8",
        },
      },
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          primary: "#1F343A",
          "primary-content": "#EDFC6C",
          secondary: "#111C1F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

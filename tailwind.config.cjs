/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6ddbc5",

          secondary: "#5ceda4",

          accent: "#bcfcae",

          neutral: "#1C2231",

          "base-100": "#FCFCFD",

          info: "#98CFF0",

          success: "#4EE4CE",

          warning: "#F3A949",

          error: "#F86D76",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

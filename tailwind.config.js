import hexToRgba from 'hex-to-rgba'
import skillsJSON from './src/data/skills.json' assert { type: 'json' }
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0791B1'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      dropShadow: Object.fromEntries(
        skillsJSON.map((skill) => [
          skill.id,
          `0 0 2em ${hexToRgba(skill.color, 0.5)}`
        ])
      )
    }
  },
  safelist: skillsJSON.map((skill) => `hover:drop-shadow-${skill.id}`),
  plugins: [require('daisyui')]
}

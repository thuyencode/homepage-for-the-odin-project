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
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono]
      },
      dropShadow: Object.fromEntries(
        skillsJSON
          .map((skill) => [
            `${skill.id}-light`,
            `0 0 2em ${hexToRgba(skill.color.light, 0.8)}`
          ])
          .concat(
            skillsJSON.map((skill) => [
              `${skill.id}-dark`,
              `0 0 2em ${hexToRgba(skill.color.dark, 0.5)}`
            ])
          )
      ),
      screens: {
        xs: '475px'
      }
    }
  },
  safelist: skillsJSON
    .map((skill) => `hover:drop-shadow-${skill.id}-light`)
    .concat(skillsJSON.map((skill) => `hover:drop-shadow-${skill.id}-dark`)),
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
}

import { useMediaQuery, useStorage } from 'solidjs-use'
import { type Theme } from '../types'

const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')
export const [state, setState] = useStorage<Theme>('theme', getChosenTheme())

export function getChosenTheme(): Theme {
  if (
    'theme' in localStorage &&
    (localStorage.getItem('theme') === 'light' ||
      localStorage.getItem('theme') === 'dark')
  ) {
    return localStorage.getItem('theme') as Theme
  }

  return getSystemTheme()
}
export function getSystemTheme(): Theme {
  return isPreferredDark() ? 'dark' : 'light'
}

export function themeToggle(theme: Theme): void {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }

  setState(theme)
}

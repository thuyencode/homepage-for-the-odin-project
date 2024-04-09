import { type Theme } from '../types'

export function currentTheme(): Theme {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark'
  }

  return 'light'
}

export function darkThemeToggle(theme: Theme): void {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }

  if ('theme' in localStorage) {
    localStorage.setItem('theme', theme)
  }
}

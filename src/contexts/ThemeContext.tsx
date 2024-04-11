import {
  createContext,
  createEffect,
  createSignal,
  useContext,
  type Accessor,
  type Component,
  type JSX
} from 'solid-js'
import { useColorMode, usePreferredDark } from 'solidjs-use'
import { type ComputedSetter } from 'solidjs-use/solid-to-vue'
import { type Theme } from '../types'

interface IThemeContext {
  theme: Accessor<'dark' | 'light'>
  mode: Accessor<'dark' | 'light' | 'auto'>
  setTheme: ComputedSetter<'dark' | 'light' | 'auto'>
}

const ThemeContext = createContext<IThemeContext>()

const ThemeProvider: Component<{ children?: JSX.Element }> = (props) => {
  const isPreferredDark = usePreferredDark()
  const { mode, setMode } = useColorMode()
  const [theme, setTheme] = createSignal<'dark' | 'light'>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    mode() === 'auto' ? getSystemTheme() : mode()
  )

  createEffect(() => {
    if (mode() === 'auto') {
      setTheme(getSystemTheme())
      document.documentElement.setAttribute('data-theme', getSystemTheme())
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTheme(mode())
      document.documentElement.setAttribute('data-theme', mode())
    }
  })

  function getSystemTheme(): Theme {
    return isPreferredDark() ? 'dark' : 'light'
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme,
        setTheme: setMode
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

function useThemeContext(): IThemeContext {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return context
}

export { ThemeProvider, useThemeContext }

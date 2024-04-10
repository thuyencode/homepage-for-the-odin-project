import { type Component } from 'solid-js'
import Home from './components/Home'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import Menu from './components/Menu'
import { themeToggle, getSystemTheme } from './utils'

const App: Component = () => {
  themeToggle(getSystemTheme())

  return (
    <>
      <Menu />
      <Home />
      <MySkills />
      <MyProjects />
      <Contact />
    </>
  )
}

export default App

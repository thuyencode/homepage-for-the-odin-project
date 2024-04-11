import { type Component } from 'solid-js'
import Contact from './components/Contact'
import Home from './components/Home'
import Menu from './components/Menu'
import MyProjects from './components/MyProjects'
import MySkills from './components/MySkills'
import { ThemeProvider } from './contexts/ThemeContext'

const App: Component = () => {
  return (
    <ThemeProvider>
      <Menu />
      <Home />
      <MySkills />
      <MyProjects />
      <Contact />
    </ThemeProvider>
  )
}

export default App

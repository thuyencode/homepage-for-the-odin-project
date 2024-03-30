import { type Component } from 'solid-js'
import Header from './components/Header'
import MySkills from './components/MySkills'
import Projects from './components/Projects'

const App: Component = () => {
  return (
    <>
      <Header />
      <MySkills />
      <Projects />
    </>
  )
}

export default App

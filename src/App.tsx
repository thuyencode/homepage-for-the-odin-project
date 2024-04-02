import { type Component } from 'solid-js'
import Header from './components/Header'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'

const App: Component = () => {
  return (
    <>
      <Header />
      <MySkills />
      <MyProjects />
      <Contact />
    </>
  )
}

export default App

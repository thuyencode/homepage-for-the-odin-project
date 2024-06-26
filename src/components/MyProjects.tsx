import { Icon } from '@iconify-icon/solid'
import { For, type Component } from 'solid-js'
import { useThemeContext } from '../contexts/ThemeContext'
import projectsJSON from '../data/projects.json'
import { type Theme } from '../types'

interface IProject {
  name: string
  id: string
  'tech-stacks': {
    [K in Theme]: string[]
  }
}

interface ITechBadge {
  tech: string
}

const MyProjects: Component = () => {
  return (
    <div
      class='flex min-h-dvh flex-col items-center justify-center gap-20 px-7 text-center'
      id='projects'
    >
      <h1 class='inline-flex items-center font-bold'>
        <Icon class='mr-2 text-3xl lg:text-4xl' icon={'noto:briefcase'} />
        My Projects
      </h1>
      <div class='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
        <For each={projectsJSON}>{(project) => <Project {...project} />}</For>
      </div>
    </div>
  )
}

const Project: Component<IProject> = (props) => {
  const { theme } = useThemeContext()

  return (
    <a
      href={`/${props.id}`}
      class='card card-compact max-w-96 rounded-none text-base-content no-underline shadow-xl duration-300 hover:scale-105'
    >
      <div class='card-body !px-0'>
        <div class='card-title !m-0 inline-flex items-center justify-between max-xs:flex-col'>
          <h3 class='font-mono'>{props.name}</h3>
          <div class='inline-flex items-center gap-1'>
            <For each={props['tech-stacks'][theme()]}>
              {(tech) => <TechBadge tech={tech} />}
            </For>
          </div>
        </div>
      </div>
      <figure>
        <img
          src={`img/${props.id}.png`}
          alt={`An image of the project ${props.name}`}
          class='rounded-md'
        />
      </figure>
    </a>
  )
}

const TechBadge: Component<ITechBadge> = (props) => {
  return <Icon icon={`skill-icons:${props.tech}`} class='text-2xl' />
}

export default MyProjects

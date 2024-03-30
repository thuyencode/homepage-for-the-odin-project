import { Icon } from '@iconify-icon/solid'
import { For, type Component } from 'solid-js'
import projectsJSON from '../data/projects.json'

interface IProject {
  name: string
  id: string
  'tech-stacks': string[]
}

interface ITechBadge {
  tech: string
}

const Projects: Component = () => {
  return (
    <div class='flex min-h-dvh flex-col items-center justify-center gap-20 p-7 text-center'>
      <h1 class='inline-flex items-center font-bold'>
        <Icon class='mr-2 text-4xl' icon={'noto:briefcase'} />
        My Projects
      </h1>
      <div class='grid grid-cols-3 gap-10'>
        <For each={projectsJSON}>{(project) => <Project {...project} />}</For>
      </div>
    </div>
  )
}

const Project: Component<IProject> = (props) => {
  return (
    <a
      href={`/${props.id}`}
      class='group card card-compact max-w-96 bg-base-100 no-underline shadow-xl duration-300 hover:bg-base-content'
    >
      <figure>
        <img
          src={`img/${props.id}.png`}
          alt={`An image of the project ${props.name}`}
        />
      </figure>
      <div class='card-body flex flex-row items-center justify-between !p-3'>
        <h2 class='card-title !m-0 text-base-content duration-300 group-hover:text-base-100'>
          {props.name}
        </h2>
        <div class='inline-flex items-center gap-1'>
          <For each={props['tech-stacks']}>
            {(tech) => <TechBadge tech={tech} />}
          </For>
        </div>
      </div>
    </a>
  )
}

const TechBadge: Component<ITechBadge> = (props) => {
  return <Icon icon={`skill-icons:${props.tech}`} class='text-2xl' />
}

export default Projects

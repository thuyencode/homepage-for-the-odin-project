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

const MyProjects: Component = () => {
  return (
    <div class='flex min-h-dvh flex-col items-center justify-center gap-20 px-7 text-center'>
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
  return (
    <a
      href={`/${props.id}`}
      class='card card-compact max-w-96 rounded-none text-base-content no-underline shadow-xl duration-300 hover:scale-105'
    >
      <div class='card-body !px-0'>
        <div class='max-xs:flex-col card-title !m-0 inline-flex items-center justify-between'>
          <h3 class='font-mono'>{props.name}</h3>
          <div class='inline-flex items-center gap-1'>
            <For each={props['tech-stacks']}>
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

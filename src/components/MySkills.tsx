import { Icon } from '@iconify-icon/solid'
import { For, type Component } from 'solid-js'
import skillsJSON from '../data/skills.json'

interface Skill {
  name: string
  icon: string
  color: string
  id: string
}

const MySkills: Component = () => {
  return (
    <div class='flex min-h-dvh flex-col items-center justify-center gap-20 p-7 text-center'>
      <h1 class='inline-flex items-center font-bold'>
        <Icon class='mr-2 text-4xl' icon={'noto:man-mechanic'} />
        My Skills
      </h1>
      <div class='grid grid-cols-4 gap-x-20 gap-y-10'>
        <For each={skillsJSON}>{(skill) => <SkillSet {...skill} />}</For>
      </div>
    </div>
  )
}

const SkillSet: Component<Skill> = (props) => {
  return (
    <div
      class={`hover:drop-shadow-${props.id} min-w-32 duration-150 hover:scale-110`}
    >
      <Icon class='text-5xl' icon={props.icon} />
      <h3 class='font-medium'>{props.name}</h3>
    </div>
  )
}

export default MySkills

import { Icon } from '@iconify-icon/solid'
import { For, type Component } from 'solid-js'
import skillsJSON from '../data/skills.json'

interface ISkill {
  name: string
  icon: string
  color: string
  id: string
}

const MySkills: Component = () => {
  return (
    <div
      class='flex min-h-dvh flex-col items-center justify-center gap-20 px-7 text-center'
      id='skills'
    >
      <h1 class='inline-flex items-center font-bold'>
        <Icon class='mr-2 text-4xl' icon={'noto:man-mechanic'} />
        My Skills
      </h1>
      <div class='grid grid-cols-2 gap-10 max-sm:gap-x-5 xs:grid-cols-3 md:grid-cols-4 lg:gap-x-20'>
        <For each={skillsJSON}>{(skill) => <SkillSet {...skill} />}</For>
      </div>
    </div>
  )
}

const SkillSet: Component<ISkill> = (props) => {
  return (
    <div
      class={`hover:drop-shadow-${props.id} duration-150 hover:scale-110 max-sm:max-w-28`}
    >
      <Icon class='text-5xl' icon={props.icon} />
      <h3 class='font-mono font-medium'>{props.name}</h3>
    </div>
  )
}

export default MySkills

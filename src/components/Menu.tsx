import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'
import { Portal } from 'solid-js/web'

const Menu: Component = () => {
  return (
    <Portal mount={document.getElementById('menu') as HTMLDivElement}>
      <ul class='menu menu-horizontal rounded-box bg-base-200 shadow-md'>
        <li>
          <a href='#home' class='tooltip tooltip-bottom' data-tip='Home'>
            <Icon icon={'noto:man-technologist'} class='text-2xl' />
          </a>
        </li>
        <li>
          <a href='#skills' class='tooltip tooltip-bottom' data-tip='Skills'>
            <Icon icon={'noto:man-mechanic'} class='text-2xl' />
          </a>
        </li>
        <li>
          <a
            href='#projects'
            class='tooltip tooltip-bottom'
            data-tip='Projects'
          >
            <Icon icon={'noto:briefcase'} class='text-2xl' />
          </a>
        </li>
        <li>
          <a
            href='#contact-me'
            class='tooltip tooltip-bottom'
            data-tip='Contact Me'
          >
            <Icon
              icon={'noto:open-mailbox-with-raised-flag'}
              class='text-2xl'
            />
          </a>
        </li>
      </ul>
    </Portal>
  )
}

export default Menu

import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'
import { Portal } from 'solid-js/web'
import { getSystemTheme, setState, state, themeToggle } from '../utils'

const Menu: Component = () => {
  return (
    <Portal mount={document.getElementById('menu') as HTMLDivElement}>
      <ul class='menu menu-horizontal rounded-box bg-base-200 shadow-md'>
        <li>
          <a
            href='#home'
            class='tooltip tooltip-bottom inline-flex items-center'
            data-tip='Home'
          >
            <Icon icon={'noto:man-technologist'} class='text-2xl' />
          </a>
        </li>
        <li>
          <a
            href='#skills'
            class='tooltip tooltip-bottom inline-flex items-center'
            data-tip='Skills'
          >
            <Icon icon={'noto:man-mechanic'} class='text-2xl' />
          </a>
        </li>
        <li>
          <a
            href='#projects'
            class='tooltip tooltip-bottom inline-flex items-center'
            data-tip='Projects'
          >
            <Icon icon={'noto:briefcase'} class='text-2xl' />
          </a>
        </li>
        <li>
          <a
            href='#contact-me'
            class='tooltip tooltip-bottom inline-flex items-center'
            data-tip='Contact Me'
          >
            <Icon
              icon={'noto:open-mailbox-with-raised-flag'}
              class='text-2xl'
            />
          </a>
        </li>
        <li class='dropdown'>
          <ThemeController />
        </li>
      </ul>
    </Portal>
  )
}

const ThemeController: Component = () => {
  function getIcon(): string {
    switch (state()) {
      case 'dark':
        return 'noto:new-moon-face'

      case 'light':
        return 'noto:sun-with-face'

      default:
        return getSystemTheme() === 'dark'
          ? 'noto:new-moon-face'
          : 'noto:sun-with-face'
    }
  }

  return (
    <>
      <div
        tabindex='0'
        role='button'
        class='tooltip tooltip-bottom inline-flex items-center'
        data-tip='Set Themes'
      >
        <Icon icon={getIcon()} class='text-2xl' />
      </div>
      <ul
        tabindex='0'
        class='dropdown-content z-[1] -ml-4 mt-4 rounded-box bg-base-300 p-2 shadow-md'
      >
        <li
          onClick={() => {
            setState('')
            themeToggle(getSystemTheme())
          }}
        >
          <input
            type='radio'
            name='theme-dropdown'
            class='theme-controller btn btn-ghost btn-sm btn-block justify-start'
            aria-label='System'
            value='default'
          />
        </li>
        <li
          onClick={() => {
            themeToggle('light')
          }}
        >
          <input
            type='radio'
            name='theme-dropdown'
            class='theme-controller btn btn-ghost btn-sm btn-block justify-start'
            aria-label='Light'
            value='light'
          />
        </li>
        <li
          onClick={() => {
            themeToggle('dark')
          }}
        >
          <input
            type='radio'
            name='theme-dropdown'
            class='theme-controller btn btn-ghost btn-sm btn-block justify-start'
            aria-label='Dark'
            value='dark'
          />
        </li>
      </ul>
    </>
  )
}

export default Menu

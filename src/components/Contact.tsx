import { Icon } from '@iconify-icon/solid'
import { type Component } from 'solid-js'

const Contact: Component = () => {
  return (
    <div
      class='flex min-h-dvh flex-col items-center justify-center gap-20 px-7 text-center'
      id='contact-me'
    >
      <h1 class='inline-flex items-center font-bold'>
        <Icon
          class='mr-2 text-3xl lg:text-4xl'
          icon={'noto:open-mailbox-with-raised-flag'}
        />
        Contact Me
      </h1>
      <div class='flex gap-10 max-xs:flex-col sm:gap-20'>
        <a
          href='https://github.com/ThuyenCode'
          class='group card card-compact bg-base-100 text-base-content no-underline shadow-none duration-300 hover:scale-105'
        >
          <Icon class='mx-auto text-7xl sm:text-9xl' icon={'mdi:github'} />
          <div class='card-body'>
            <h1 class='card-title mx-auto font-mono'>GitHub</h1>
          </div>
        </a>
        <a
          href='mailto:thuyencode@proton.me'
          class='group card card-compact bg-base-100 text-base-content no-underline shadow-none duration-300 hover:scale-105'
        >
          <Icon class='mx-auto text-7xl sm:text-9xl' icon={'mdi:email'} />
          <div class='card-body'>
            <h1 class='card-title mx-auto font-mono'>Email</h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contact

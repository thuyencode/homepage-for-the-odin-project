import { Icon } from '@iconify-icon/solid'
import { For, type Component } from 'solid-js'

const Header: Component = () => {
  return (
    <div class='flex h-96 items-center justify-center max-md:flex-col'>
      <ProfilePicture />
      <Description />
    </div>
  )
}

const ProfilePicture: Component = () => {
  return (
    <figure class="relative max-w-[250px] scale-125 rounded-sm bg-white bg-[url('https://picsum.photos/400')] bg-cover bg-center shadow-lg">
      <figcaption class='absolute inset-0 mb-2 mt-auto h-min text-center text-white'>
        <h1>Thuyen Code</h1>
      </figcaption>
      <img
        class='rounded-sm backdrop-blur-sm'
        src='man-technologist_1f468-200d-1f4bb.png'
        alt='My profile picture:Man technologist emoji'
      />
    </figure>
  )
}

const Description: Component = () => {
  return (
    <div class='max-w-[700px] space-y-2 rounded-sm bg-white p-5 pl-12 shadow-lg'>
      <h2 class='text-gray-900'>About me</h2>
      <p class='text-gray-500'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ContactIcons />
    </div>
  )
}

const ContactIcons: Component = () => {
  const icons = ['mdi:github', 'mdi:linkedin', 'mdi:twitter']

  return (
    <div class='ml-auto w-fit space-x-2 text-gray-800'>
      <For each={icons}>
        {(icon) => (
          <Icon
            class='duration-300 hover:text-blue-500'
            icon={icon}
            width={30}
            height={30}
          />
        )}
      </For>
    </div>
  )
}

export default Header

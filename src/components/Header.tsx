import { type Component } from 'solid-js'
import { Icon } from '@iconify-icon/solid'

const Header: Component = () => {
  return (
    <div class='flex h-dvh items-center justify-center text-center'>
      <ProfilePicture />
    </div>
  )
}

const ProfilePicture: Component = () => {
  return (
    <figure class='space-y-5'>
      <img
        class='mx-auto max-w-64'
        src='man-technologist_1f468-200d-1f4bb.png'
        alt='My profile picture:Man technologist emoji'
      />
      <figcaption class='space-y-5'>
        <h1 class='inline-flex items-center gap-2'>
          <Icon class='text-4xl' icon={'noto:waving-hand'} />
          Hi, I'm <span class='font-bold'>Thuyen Code</span>!
        </h1>
        <h2>A job-less developer</h2>
      </figcaption>
    </figure>
  )
}

export default Header

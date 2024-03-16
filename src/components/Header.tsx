import { type Component } from 'solid-js'

const Header: Component = () => {
  return (
    <div class='flex h-dvh items-center justify-center'>
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
      <figcaption class='space-y-5 text-center'>
        <h1>
          Hi, I'm <span class='font-semibold'>Thuyen Code</span>!
        </h1>
        <h2 class='capitalize'>A no-job developer</h2>
      </figcaption>
    </figure>
  )
}

export default Header

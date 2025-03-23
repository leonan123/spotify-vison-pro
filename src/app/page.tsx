import { ActionMenu } from '@/_components/action-menu'
import { MusicPlayerControl } from '@/_components/music-player-control'
import { ALBUM_LIST, FOR_YOU_LIST, RECENTS_LIST } from '@/_constants'
import Image from 'next/image'
import { BiLibrary } from 'react-icons/bi'
import { BsPlusLg, BsThreeDots } from 'react-icons/bs'
import { FaHouse, FaUser, FaUsers } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import { HiMiniArrowRight } from 'react-icons/hi2'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { TiArrowSortedDown } from 'react-icons/ti'

export default function Home() {
  return (
    <main className="relative inset-shadow-app mx-5 flex max-h-[938px] w-full max-w-[1488px] flex-col gap-4 overflow-y-auto rounded-4xl px-11 py-6 backdrop-blur-[98px] lg:mx-auto lg:h-full lg:min-h-[500px] lg:overflow-visible ">
      <ActionMenu />

      <div className="flex items-center justify-between">
        <Image
          src="./spotify-logo.svg"
          alt="spotify"
          width={96.82}
          height={28.98}
        />

        <button
          type="button"
          className="-mr-1.5 flex size-9 cursor-pointer items-center justify-center"
        >
          <BsThreeDots size={24} />
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div className="flex w-full gap-2.5 lg:h-full lg:flex-1">
        <div className="hidden w-full max-w-[524px] flex-col lg:flex">
          <nav className="flex flex-col gap-8 rounded-xl bg-card px-8 py-6">
            <a
              href="/"
              data-active={true}
              className="flex items-center gap-6 font-bold opacity-85 transition-opacity hover:opacity-100 data-[active=true]:opacity-100"
            >
              <FaHouse size={28} />
              <span className="mt-1.5 leading-0">Home</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-6 opacity-85 transition-opacity hover:opacity-100 data-[active=true]:opacity-100"
            >
              <FiSearch size={28} />
              <span className="mt-1.5 leading-0">Search</span>
            </a>
          </nav>

          <div className="mt-2.5 flex-1 rounded-xl bg-card px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 font-bold text-xl">
                <BiLibrary size={28} />
                <span className="mt-1">Your Library</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="h-7 cursor-pointer text-white/50 transition-colors hover:text-white"
                >
                  <BsPlusLg size={24} />
                  <span className="sr-only">create playlist</span>
                </button>
                <button
                  type="button"
                  className="h-7 cursor-pointer text-white/50 transition-colors hover:text-white"
                >
                  <HiMiniArrowRight size={24} />
                  <span className="sr-only">Go to your library</span>
                </button>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-1.5">
              <button
                type="button"
                className="flex h-11 items-center justify-center rounded-full bg-black/40 px-4 font-medium text-sm"
              >
                Playlists
              </button>
              <button
                type="button"
                className="flex h-11 items-center justify-center rounded-full bg-black/40 px-4 font-medium text-sm"
              >
                Artists
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <button type="button" className="h-7">
                <FiSearch size={24} />
                <span className="sr-only">Search</span>
              </button>

              <button
                type="button"
                className="-mr-4 flex h-11 items-center gap-2.5 px-4 text-white/50 transition-colors hover:text-white"
              >
                <span>Recents</span>
                <TiArrowSortedDown size={16} />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              {ALBUM_LIST.map(album => (
                <div
                  key={album.id}
                  className="flex w-full items-center gap-3.5"
                >
                  <Image
                    src={album.image}
                    alt={album.title}
                    width={64}
                    height={64}
                  />

                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg">{album.title}</h3>
                    <p className="text-white/50">{album.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="size-full flex-1 rounded-xl bg-card px-8 py-6">
          <div className="flex items-center">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-black/30 text-white/50 transition-colors hover:text-white"
              >
                <MdKeyboardArrowLeft size={28} />
                <span className="sr-only">back</span>
              </button>

              <button
                type="button"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-black/30 text-white/50 transition-colors hover:text-white"
              >
                <MdKeyboardArrowRight size={28} />
                <span className="sr-only">back</span>
              </button>
            </div>

            <form className="mx-9 flex h-12 max-w-[425px] flex-1 items-center gap-4 rounded-2xl bg-black/20 px-5">
              <button
                type="submit"
                className="cursor-pointer text-white/50 transition-colors hover:text-white"
              >
                <FiSearch size={20} />
                <span className="sr-only">Search</span>
              </button>

              <input
                type="text"
                placeholder="Search in Albums"
                className="mt-1 font-secondary outline-0"
              />
            </form>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                className="h-10 cursor-pointer rounded-full bg-white px-5 font-medium text-black transition-colors hover:bg-white/75"
              >
                Upgrade
              </button>

              <button
                type="button"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-black/30 text-white/50 transition-colors hover:text-white"
              >
                <FaUsers size={24} />
                <span className="sr-only">group</span>
              </button>

              <button
                type="button"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-black/30 text-white/50 transition-colors hover:text-white"
              >
                <FaUser size={20} />
                <span className="sr-only">profile</span>
              </button>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            <div>
              <h1 className="font-bold text-4xl">Good morning</h1>

              <ul className="mt-6 grid gap-x-7 gap-y-4 lg:grid-cols-2">
                {RECENTS_LIST.map(recent => (
                  <li
                    key={recent.id}
                    className="flex items-center gap-4 rounded-sm bg-white/10"
                  >
                    <Image
                      src={recent.image}
                      alt={recent.title}
                      width={80}
                      height={80}
                    />

                    <span className="font-bold">{recent.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-3xl">Made For You</h2>
                <button
                  type="button"
                  className="cursor-pointer text-white/50 transition-colors hover:text-white"
                >
                  Show all
                </button>
              </div>

              <ul className="mt-6 grid grid-cols-3 gap-6">
                {FOR_YOU_LIST.map(forYou => (
                  <li key={forYou.id} className="rounded-sm bg-white/10 p-5">
                    <Image
                      src={forYou.image}
                      alt={forYou.title}
                      width={215}
                      height={215}
                      quality={100}
                      className="object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/border-app.svg"
        width={44.98}
        height={56.5}
        alt=""
        className="-bottom-7 -right-7 absolute hidden lg:block"
      />

      <MusicPlayerControl />
    </main>
  )
}

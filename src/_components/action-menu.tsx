import { BsMusicPlayer } from 'react-icons/bs'
import { FaRegCirclePlay } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineLibraryMusic, MdOutlinePodcasts } from 'react-icons/md'
import { TbLayoutGrid } from 'react-icons/tb'

export function ActionMenu() {
  return (
    <div className="-translate-y-1/2 -left-32 absolute top-1/2 z-10 hidden overflow-hidden rounded-full shadow-app lg:block">
      <div className="flex flex-col gap-2.5 bg-white/10 p-2.5 backdrop-blur-[98px]">
        <button
          type="button"
          data-active={true}
          className="flex size-12 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/20 data-[active=true]:bg-white/30"
        >
          <FaRegCirclePlay size={24} />
          <span className="sr-only">play</span>
        </button>

        <button
          type="button"
          className="flex size-12 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10 data-[active=true]:bg-white/30"
        >
          <TbLayoutGrid size={24} />
          <span className="sr-only">layout</span>
        </button>

        <button
          type="button"
          className="flex size-12 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10 data-[active=true]:bg-white/30"
        >
          <MdOutlineLibraryMusic size={24} />
          <span className="sr-only">video</span>
        </button>

        <button
          type="button"
          className="flex size-12 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10 data-[active=true]:bg-white/30"
        >
          <BsMusicPlayer size={24} />
          <span className="sr-only">player</span>
        </button>

        <button
          type="button"
          className="flex size-12 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10 data-[active=true]:bg-white/30"
        >
          <MdOutlinePodcasts size={24} />
          <span className="sr-only">podcasts</span>
        </button>

        <button
          type="button"
          className="flex size-12 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10 data-[active=true]:bg-white/30"
        >
          <FiSearch size={24} />
          <span className="sr-only">layout</span>
        </button>
      </div>
    </div>
  )
}

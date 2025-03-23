import Image from 'next/image'
import { BsPlayCircleFill } from 'react-icons/bs'
import { FaVolumeUp } from 'react-icons/fa'
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5'
import { LuRepeat } from 'react-icons/lu'
import { PiShuffle } from 'react-icons/pi'

export function MusicPlayerControl() {
  return (
    <div className="-translate-x-1/2 -bottom-[405px] lg:-bottom-40 absolute left-1/2 z-10 flex w-full max-w-[799px] flex-col items-center">
      <div className="space-y-2 rounded-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 px-12 py-7 shadow-player backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-7">
          <div className="flex items-center gap-3">
            <Image
              src="/album-8.png"
              alt="album"
              width={50}
              height={50}
              className="object-contain"
            />

            <div className="flex flex-col justify-center gap-0.5">
              <span className="font-medium text-sm">Believer</span>
              <span className="text-gray-400 text-xs">Imagine Dragons</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button type="button">
              <PiShuffle size={28} fill="#1DB954" />
              <span className="sr-only">shuffle</span>
            </button>

            <button
              type="button"
              className="cursor-pointer text-gray-400 transition-colors hover:text-white"
            >
              <IoPlaySkipBackSharp size={28} />
              <span className="sr-only">backword</span>
            </button>

            <button
              type="button"
              className="flex size-14 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-85"
            >
              <BsPlayCircleFill size={50} />
              <span className="sr-only">play</span>
            </button>

            <button
              type="button"
              className="cursor-pointer text-gray-400 transition-colors hover:text-white"
            >
              <IoPlaySkipForwardSharp size={28} />
              <span className="sr-only">forward</span>
            </button>

            <button
              type="button"
              className="cursor-pointer text-gray-400 transition-colors hover:text-white"
            >
              <LuRepeat size={24} />
              <span className="sr-only">repeat all</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <FaVolumeUp size={24} className="fill-gray-400" />

            <div className="h-[5px] w-[100px] overflow-hidden rounded-full bg-gray-400">
              <div style={{ width: '75%' }} className="h-full bg-white" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <span>1:06</span>

          <div className="mb-0.5 h-[5px] flex-1 overflow-hidden rounded-full bg-gray-400">
            <div style={{ width: '35%' }} className="h-full bg-white" />
          </div>

          <span>6:42</span>
        </div>
      </div>

      <div className="mt-6 flex gap-5">
        <div className="size-2.5 rounded-full bg-white/60" />
        <div className="h-2.5 w-[150px] rounded-full bg-white/60" />
      </div>
    </div>
  )
}

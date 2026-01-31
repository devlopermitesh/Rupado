'use client'
import { useModel } from '@/hooks/useModal'
import Image from 'next/image'
import { useState } from 'react'

const ExampleCard = ({
  id,
  image,
  title,
  describe,
  isTrending,
  copyCount,
  tags,
}: {
  id: number
  image: string[]
  title: string
  describe: string
  copyCount: number
  isTrending: boolean
  tags: string
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { onOpen } = useModel()

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop
    const height = e.currentTarget.offsetHeight
    const index = Math.round(scrollTop / height)
    setActiveIndex(index)
  }

  return (
    <div className="relative rounded-lg aspect-[4/5] overflow-hidden">
      {/* Scrollable images - VERTICAL */}
      <div
        className="flex flex-col h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
        onScroll={handleScroll}
      >
        {image.map((src, index) => (
          <div key={index} className="min-h-full snap-center relative flex-shrink-0">
            <Image
              src={src}
              alt={`${title} image ${index + 1}`}
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Image indicators (vertical) */}
      {image.length > 1 && (
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {image.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === activeIndex ? 'bg-white h-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay on bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-24  
                bg-gradient-to-b from-[#504949]/59 via-[#000000]/67 to-[#000000]
                px-3 py-2 flex flex-col justify-end pointer-events-none"
      >
        <h3 className="font-ui font-medium capitalize text-white">{title}</h3>
        <p className="text-xs sm:text-md font-ui font-thin text-[#FFF9F9] opacity-80 line-clamp-2">
          {describe}
        </p>
        <button
          onClick={() => onOpen('PromptView', { prompt: undefined })}
          className="bg-white text-black capitalize font-ui text-sm cursor-pointer border border-white z-50 rounded-full mt-1 py-1 pointer-events-auto"
        >
          view prompt
        </button>
      </div>
    </div>
  )
}
export default ExampleCard

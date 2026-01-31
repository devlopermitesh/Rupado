'use client'
import ExampleCard from '../molecular/ExampleCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import LeftIcon from '@/assets/left-arrow.png'
import RightIcon from '@/assets/right-arrow.png'

const ExamplesLibrary = () => {
  const Examples = [
    {
      id: 1,
      image: [
        'https://i.ibb.co/wN738sX0/Screenshot-2026-01-18-142442.png',
        'https://i.ibb.co/jv7CD15P/Screenshot-2026-01-18-111202.png',
      ],
      title: 'Vintage Bollywood',
      describe:
        'Turn any selfie into a classic Bollywood diva in red saree – vintage glamour, flawless skin, cinematic vibes.',
      copyCount: 0,
      isTrending: true,
      tags: 'Studio',
    },
    {
      id: 2,
      image: [
        'https://i.ibb.co/wN738sX0/Screenshot-2026-01-18-142442.png',
        'https://i.ibb.co/jv7CD15P/Screenshot-2026-01-18-111202.png',
      ],
      title: 'Vintage Bollywood',
      describe:
        'Turn any selfie into a classic Bollywood diva in red saree – vintage glamour, flawless skin, cinematic vibes.',
      copyCount: 0,
      isTrending: true,
      tags: 'Studio',
    },
    {
      id: 3,
      image: [
        'https://i.ibb.co/wN738sX0/Screenshot-2026-01-18-142442.png',
        'https://i.ibb.co/jv7CD15P/Screenshot-2026-01-18-111202.png',
      ],
      title: 'Vintage Bollywood',
      describe:
        'Turn any selfie into a classic Bollywood diva in red saree – vintage glamour, flawless skin, cinematic vibes.',
      copyCount: 0,
      isTrending: true,
      tags: 'Studio',
    },
    {
      id: 4,
      image: [
        'https://i.ibb.co/wN738sX0/Screenshot-2026-01-18-142442.png',
        'https://i.ibb.co/jv7CD15P/Screenshot-2026-01-18-111202.png',
      ],
      title: 'Vintage Bollywood',
      describe:
        'Turn any selfie into a classic Bollywood diva in red saree – vintage glamour, flawless skin, cinematic vibes.',
      copyCount: 0,
      isTrending: true,
      tags: 'Studio',
    },
  ]
  return (
    <div className="w-full min-h-[60vh] px-2 sm:px-4 py-8 bg-black">
      <h2 className="text-2xl font-ui font-semibold">Example Library</h2>

      <div className="relative mt-10">
        {/* Navigation buttons */}
        <button className="flex items-center prev-btn absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow">
          <Image src={LeftIcon} alt="left" width={20} height={20} />
        </button>
        <button className="flex items-center next-btn absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow">
          <Image src={RightIcon} alt="right" width={20} height={20} />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
        >
          {Examples.map((example) => (
            <SwiperSlide key={example.id}>
              <ExampleCard {...example} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
export default ExamplesLibrary

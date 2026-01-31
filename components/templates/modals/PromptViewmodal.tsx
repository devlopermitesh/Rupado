'use client'
import CategoryTag from '@/components/atoms/Categorytag'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useModel } from '@/hooks/useModal'
import { useEffect, useState } from 'react'
import FireIcon from '@/assets/trending.png'
import TeaTag from '@/components/atoms/Teatag'
import Image from 'next/image'
import handsomeBoy from '@/assets/handsomeboy.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination, Autoplay } from 'swiper/modules'
import Promptbox from '@/components/atoms/Promptbox'
import { Button } from '@/components/ui/button'
import { Copy, Link, StepBack } from 'lucide-react'

const PromptViewModal = () => {
  const [IsMounted, setIsMounted] = useState(false)

  const { onClose, isOpen, modelType, data } = useModel()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!IsMounted) return null
  return (
    <Dialog open={isOpen && modelType === 'PromptView'} onOpenChange={(open) => onClose()}>
      <DialogContent
        className="
    bg-[#151414] text-white
    overflow-y-auto 
    max-h-[90vh] 
    sm:max-h-[85vh] 
    rounded-xl 
    p-6 
    sm:p-8
    border-none
    no-scrollbar
  "
      >
        <DialogTitle></DialogTitle>
        <div className="flex flex-col gap-2">
          <span className="flex flex-row items-center  justify-between">
            <h2 className="text-xl font-ui font-semibold truncate max-w-[200px]">
              Vintage Bollywood
            </h2>
            <CategoryTag iconsrc={FireIcon.src} label="Trending" className="text-sm px-2" />
          </span>
          <p className="text-sm sm:text-md font-ui font-thin text-[#FFF9F9] opacity-80 line-clamp-3">
            Turn any selfie into a classic Bollywood diva in red saree – vintage glamour, flawless
            skin, cinematic vibes.
          </p>
          <span className="flex flex-row gap-2">
            <TeaTag tag="cinematic" className="px-2 py-0" />
            <TeaTag tag="Studio" className="px-2 py-0 " />
          </span>
          <div className=" relative w-70 mx-auto">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={12}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop
              className="w-full swiper-custom"
            >
              <SwiperSlide>
                <Image
                  src={handsomeBoy}
                  alt="Image"
                  className="w-full aspect-square object-cover border border-gray-700 rounded-md"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={handsomeBoy}
                  alt="Image"
                  className="w-full aspect-square object-cover border border-gray-700 rounded-md"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Prompt Box */}
          <Promptbox
            prompt={
              'Create a retro vintage grainy but bright image of the reference picture but draped in a perfect black plain chiffon saree, 90s movie aesthetic, romanticising windy environment, warm golden tones'
            }
            className=""
          />
          {/* Button COpy */}
          <div className="flex flex-row items-center">
            <Button className="flex bg-[#CE8D35] text-black text-md font-ui font-normal focus:bg-[#ce8e35d9] ">
              <Copy />
              Copy Prompt
            </Button>
            <Button className="flex bg-neutral-950 text-white text-md font-ui font-normal  ">
              <Link />
              View Step
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default PromptViewModal

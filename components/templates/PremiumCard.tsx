import Image from "next/image"
import PremiumBg from "@/assets/premiumCard.png"
import { twMerge } from "tailwind-merge"

const PremiumCard = () => {
    return (
        <div className="
            w-full min-h-[40vh]
            flex flex-col items-center 
            px-1 sm:px-2 lg:px-4 py-8
            bg-background
        ">
            <div className="relative w-full sm:w-[60vw] aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8]">
                <Image
                    src={PremiumBg}
                    alt="Premium background"
                    fill
                    className="object-cover rounded-lg"
                />

                {/* Text overlay area */}
                <div className="absolute flex flex-col items-center gap-3 bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8 md:p-10">
                    <h2 className={twMerge("shine-text", "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2  ")}>
                        Unlock Rupado Premium Styles
                    </h2>
                    <p className="text-sm sm:text-base text-white/90">
                        Get exclusion access to 100+ high-defition styles including Trending Prompt
                    </p>
                    <button className="text-white cursor-pointer glassyButton px-2 md:px-4 sm:max-w-max py-1">Unlock Premium (coming soon..)</button>
                </div>
            </div>

        </div >
    )
}
export default PremiumCard
import Image from "next/image"
import AfterBoy from "@/assets/afterboy.jpg"
import Arrow from "@/assets/arrow.png"
import BeforeBoy from "@/assets/beforeboy.png"
const PromptfixView = () => {
    return (
        <div className="flex flex-col sm:flex-row w-[95vw]h-auto min-h-90 bg-background gap-5">
            {/* Content */}
            <div className="flex flex-col flex-1 px-3 gap-4">
                <h2 className="text-3xl sm:text-5xl text-white font-semibold font-ui">Just Better Prompt</h2>
                <p className="text-md sm:text-xl font-ui font-medium sm:font-normal text-[#FFF9F9] opacity-80">
                    No magic, no editing skills needed. We tested these exact prompts on real user photos using popular AI tools (Midjourney, Flux, Leonardo, etc.).
                </p>
            </div>
            {/* Proof */}
            <div className="flex flex-1 relative w-full min-h-[400px] md:min-h-[400px] lg:min-h-[500px]">

                {/* Before Image - Bottom Left */}
                <div className="absolute bottom-4 left-4 w-[40%] max-w-[200px] md:max-w-[250px] lg:max-w-[300px] aspect-[3/4] z-10">
                    <Image
                        src={BeforeBoy}
                        alt="Before transformation"
                        fill
                        className="object-cover rounded-lg shadow-2xl"
                    />
                </div>

                {/* Arrow - Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-26 h-26 md:w-30 md:h-30 lg:w-34 lg:h-34 z-20">
                    <Image
                        src={Arrow}
                        alt="Transformation arrow"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* After Image - Top Right */}
                <div className="absolute top-4 right-4 w-[45%] max-w-[220px] md:max-w-[280px] lg:max-w-[350px] aspect-[3/4] z-10">
                    <Image
                        src={AfterBoy}
                        alt="After transformation"
                        fill
                        className="object-cover rounded-lg shadow-2xl"
                    />
                </div>

            </div>
        </div>
    )
}
export default PromptfixView
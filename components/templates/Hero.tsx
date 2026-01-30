import Image from "next/image"
import Header from "../organs/Header"
import CompareImage from "../molecular/CompareCard"
import HeroOg from "@/assets/HerooriExpl.jpeg"
import HeroAi from "@/assets/HeroAiExpl.jpeg"
const Hero = () => {
    return (
        <div className="
      w-full min-h-[60vh]
      flex flex-col items-center 
      px-2 sm:px-4 lg:px-8 py-16
     hero-linear-gradient 
    ">
            <div className="flex flex-col">
                <h1 className="font-playfair text-3xl lg:text-6xl text-white text-center  shadow shine-text">Turn bording photos into
                    <br />
                    Stylish Ai-edited Dps
                </h1>
                <p className="text-sm sm:text-lg font-medium text-white mx-auto text-center">No filters. No skills .Just Proven Ai Prompts</p>
            </div>
            <br />
            {/* Edit before and After Component */}
            <div className="flex  w-[80vw] sm:w-[70vw]  sm:flex-row  items-center justify-center">
                <CompareImage
                    className="w-80"
                    label="Before"
                    src={HeroOg.src}
                    priority
                />

                <CompareImage
                    className="w-80"

                    label="After"
                    src={HeroAi.src}

                />
            </div>

        </div>

    )
}

export default Hero

import Image from "next/image"
import SplashIcon from "@/assets/icons_splash.png"

const TryoutBtn = () => {
    return (
        <button
            className="
        flex items-center gap-2
        rounded-lg border border-foreground bg-vampire text-white
        transition-all duration-200 hover:scale-[1.03]

        px-3 py-1.5 sm:px-4 sm:py-2
        text-xs sm:text-sm md:text-md
        font-playfair font-semibold
      "
        >
            <span className="w-4 h-4 sm:w-5 sm:h-5">
                <Image
                    src={SplashIcon}
                    alt="Try Rupado"
                    className="w-full h-auto object-contain"
                />
            </span>

            {/* hide long text on tiny screens */}
            <span className="hidden sm:inline">
                Try Rupado free
            </span>

            {/* short label for mobile */}
            <span className="sm:hidden">
                Try_Free
            </span>
        </button>
    )
}

export default TryoutBtn

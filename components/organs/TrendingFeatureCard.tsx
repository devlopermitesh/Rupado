import HandsomeBoy from "@/assets/handsomeboy.png"
import mingcuteIcon from "@/assets/mingcute.png"
import PreetyGirl from "@/assets/cutegirl.png"
import geminiIcon from "@/assets/gemini.png"
import FireIcon from "@/assets/trending.png"
import ImageShowcase from "../molecular/ImageShowcase";
import FeatureCardContent from "./FeatureCardContent";

const TrendingFeatureCard = () => {
    return (
        <div className="flex flex-col sm:flex-row w-[95vw] h-auto min-h-90 grid-background border border-[#3b3737e5] gap-10 rounded-md px-10">

            {/* Proof Images */}
            <ImageShowcase
                leftImage={{
                    image: PreetyGirl,
                    icon: mingcuteIcon,
                    label: "soft Portiant",
                    iconAnimation: "animate-[pulse_4s_linear_infinite]"
                }}
                rightImage={{
                    image: HandsomeBoy,
                    icon: geminiIcon,
                    label: "Cinematic",
                    iconAnimation: "animate-[spin_4s_linear_infinite]"
                }}
                className="order-first sm:order-last sm:flex-1 mt-3 "
            />

            {/* Content */}
            <FeatureCardContent

                categoryIcon={FireIcon}
                categoryLabel="Trending"
                title="Trending Prompt Library"
                description="Hand-picked prompts tested for consistency, quality, and real-world results."
                featurestags={[
                    "✓ Updated weekly",
                    "✓ Tested on real photos",
                    "✓ Multi-tool compatible"
                ]}
            />
        </div>
    );
};

export default TrendingFeatureCard;

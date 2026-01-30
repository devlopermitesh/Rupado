import Image from "next/image";
import ReadyIcon from "@/assets/readyicon.png"
import SuitMan from "@/assets/profile.png"
import FeatureCardContent from "./FeatureCardContent";
const ProfileFeatureCard = () => {
    return (
        <div className="flex flex-col sm:flex-row w-[95vw] sm:[80vh] h-auto min-h-90 grid-background border border-[#3b3737e5] gap-10 rounded-md px-10">
            {/* Proof Image */}
            <div className="flex  items-center flex-1 justify-start relative">
                <div className="w-60 h-60 rounded-full overflow-hidden border border-gray-800">
                    <Image src={SuitMan} alt="Profile Image" priority className="object-contain" />
                </div>
            </div>
            {/* content */}
            <FeatureCardContent categoryIcon={ReadyIcon} categoryLabel="ReadyMade" title="Prompts for Profile Photos" description="Pre-written prompts designed for profile pictures, DPs, and personal branding images." featureslist={["✓ No need to think what to write",
                "✓ Copy & paste into any AI tool",
                "✓ Works for personal and professional profiles"]} className="flex-1" />

        </div>
    )
}
export default ProfileFeatureCard;
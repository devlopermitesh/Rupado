import Image, { StaticImageData } from 'next/image';
import CategoryTag from '../atoms/Categorytag';
import FeatureTags from '../molecular/FeatureTags';
import FeatureList from '../molecular/FeatureList';
import GiftIcon from "@/assets/gift.png"
import GiftLabel from '../atoms/giftlabel';
interface FeatureCardContentProps {
    categoryIcon: StaticImageData | string;
    categoryLabel: "Trending" | "ReadyMade";
    title: string;
    description: string;
    featurestags?: string[];
    featureslist?: string[];
    className?: string;
}

const FeatureCardContent = ({
    categoryIcon,
    categoryLabel,
    title,
    description,
    featurestags,
    featureslist,
    className
}: FeatureCardContentProps) => {
    console.log("CategoryLabel", categoryLabel)
    return (
        <div className={`flex flex-col flex-1 px-3 justify-center  gap-4 sm:gap-16   ${className || ''}`}>
            {/* Relative Top tag */}
            {
                (categoryLabel == "ReadyMade") && (
                    <GiftLabel />
                )
            }
            <CategoryTag
                iconsrc={typeof categoryIcon === 'string' ? categoryIcon : categoryIcon.src}
                label={categoryLabel}
                className="max-w-30"
            />

            <div>
                <h2 className="text-2xl sm:text-3xl font-ui font-semibold">{title}</h2>
                <p className="text-md sm:text-xl font-ui font-thin text-[#FFF9F9] opacity-80">
                    {description}
                </p>
                {(featurestags && featurestags.length > 0) && (
                    <FeatureTags items={featurestags} className="flex-wrap" />
                )}

                {(featureslist && featureslist.length > 0) && (
                    <FeatureList items={featureslist} className="flex-wrap" />
                )}
            </div>

        </div >
    );
};

export default FeatureCardContent;
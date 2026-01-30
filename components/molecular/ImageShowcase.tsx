import { StaticImageData } from 'next/image';
import RotatedImageWithLabel from '../atoms/RotatedImageWithLabel';

interface ImageShowcaseItem {
    image: StaticImageData | string;
    icon: StaticImageData | string;
    label: string;
    iconAnimation?: string;
}

interface ImageShowcaseProps {
    leftImage: ImageShowcaseItem;
    rightImage: ImageShowcaseItem;
    className?: string;
}

const ImageShowcase = ({ leftImage, rightImage, className }: ImageShowcaseProps) => {
    return (
        <div className={`flex flex-row items-center justify-center w-full ${className || ''}`}>
            <RotatedImageWithLabel
                image={leftImage.image}
                icon={leftImage.icon}
                label={leftImage.label}
                rotation="left"
                iconAnimation={leftImage.iconAnimation}
            />
            <RotatedImageWithLabel
                image={rightImage.image}
                icon={rightImage.icon}
                label={rightImage.label}
                rotation="right"
                iconAnimation={rightImage.iconAnimation}
            />
        </div>
    );
};

export default ImageShowcase;